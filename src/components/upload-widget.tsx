import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { useUploadDocsMutation } from '@/store/api'
import { useAppSelector } from '@/store/hooks'
import { RootState } from '@/store/store'
import { useUser } from '@clerk/clerk-react'
import * as R from 'ramda'
import { useRef } from 'react'
import { useParams } from 'react-router-dom'
const UploadWidget = () => {
  const { user } = useUser()
  const uploadRef = useRef<HTMLInputElement>(null)
  const orgSlug = R.path(
    ['organizationMemberships', 0, 'organization', 'slug'],
    user
  ) as string
  const [submitUpload] = useUploadDocsMutation({ fixedCacheKey: 'uploaddocs' })
  const localDirs = useAppSelector(
    (state: RootState) => state.docsReducer.localDirs
  ) as Record<string, string>
  const params = useParams()
  return (
    <Card>
      <CardHeader className="pb-4">
        <CardTitle>Upload</CardTitle>
        <CardDescription>Upload docs of any type.</CardDescription>
      </CardHeader>
      <CardContent>
        <Popover>
          <PopoverTrigger asChild>
            <Button className="w-full" size="sm" onClick={() => {}}>
              Upload
            </Button>
          </PopoverTrigger>
          <PopoverContent align="start" className="w-80">
            <div className="m-2">
              <Button
                variant="ghost"
                onClick={() => {
                  if (uploadRef.current) {
                    uploadRef.current.click()
                  }
                }}
              >
                Agreement / Contract
              </Button>
            </div>
            <div className="m-2">
              <Button variant="ghost">ID Document</Button>
            </div>
            <div className="m-2">
              <Button variant="ghost">Utility / Bill</Button>
            </div>
            <div className="m-2">
              <Button variant="ghost">Payslip</Button>
            </div>
            <div className="m-2">
              <Button variant="ghost">CV / Resume</Button>
            </div>
            <div className="m-2">
              <Button variant="ghost">Other / Free Form</Button>
            </div>
          </PopoverContent>
        </Popover>
        <input
          type="file"
          name="uploaddoc"
          ref={uploadRef}
          className="hidden"
          multiple={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const files: FileList | never[] = e.currentTarget.files || []
            const formData = new FormData()
            formData.append('container', orgSlug)
            const { '*': splats } = params
            if (!R.isNil(splats)) {
              formData.append('dirpath', splats)
              formData.append('dirmeta', JSON.stringify(localDirs))
            }
            for (let file of files) {
              formData.append('docs', file)
            }
            submitUpload(formData)
          }}
        />
      </CardContent>
    </Card>
  )
}

export default UploadWidget
