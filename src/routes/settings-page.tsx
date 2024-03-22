import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useCreatePcIndexMutation, useLazyGetPcStatusQuery } from '@/store/api'
import { CreateOrganization, useUser } from '@clerk/clerk-react'
import { path } from 'ramda'
import { useEffect } from 'react'

const SettingsView = () => {
  const { user } = useUser()
  const memberships = user?.organizationMemberships
  const orgSlug = path(
    ['organizationMemberships', 0, 'organization', 'slug'],
    user
  ) as string
  const [triggerPc, pcResult] = useLazyGetPcStatusQuery()
  const [submitPcIndex, { data: pcReq, isLoading: isPcLoading }] =
    useCreatePcIndexMutation()
  useEffect(() => {
    if (pcResult.data?.state == 'Nope') {
      submitPcIndex({ pcName: orgSlug })
    }
  }, [pcResult.data?.state])
  useEffect(() => {
    if (pcReq?.done == 'done') {
      triggerPc({ pc: orgSlug })
    }
  }, [pcReq?.done])
  useEffect(() => {
    if (orgSlug) triggerPc({ pc: orgSlug })
  }, [orgSlug])
  return (
    <div className="text-left *:my-3 w-1/2 p-8">
      {!memberships || memberships.length < 1 ? (
        <CreateOrganization afterCreateOrganizationUrl="/settings" />
      ) : !isPcLoading && pcResult.data?.state == 'Ready' ? (
        <div>
          <Label>Organization:</Label>
          <Input disabled={true} value={orgSlug} onKeyDown={() => {}} />
        </div>
      ) : (
        <LoaderContent />
      )}
    </div>
  )
}

const LoaderContent = () => {
  return (
    <div className="grid gap-2" key={123}>
      <div className="shadow rounded-md p-4 w-full">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-300 rounded"></div>
            <div className="space-y-2">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsView
