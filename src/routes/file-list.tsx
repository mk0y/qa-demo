import { useGetDocsQuery, useUploadDocsMutation } from '@/store/api'
import { useUser } from '@clerk/clerk-react'
import * as R from 'ramda'
import { SVGProps, useEffect } from 'react'
import nodocs from '/src/assets/nodocstr.webp'

const FileList = () => {
  const { user } = useUser()
  const orgSlug = R.path(
    ['organizationMemberships', 0, 'organization', 'slug'],
    user
  ) as string
  const {
    data: docs = {},
    refetch,
    isLoading,
    isFetching
  } = useGetDocsQuery(
    { container: orgSlug },
    {
      skip: !!!orgSlug,
      refetchOnFocus: true,
      refetchOnReconnect: true,
      refetchOnMountOrArgChange: true
    }
  )
  const [, { isLoading: submitLoading, isSuccess: isSubmitSuccess }] =
    useUploadDocsMutation({ fixedCacheKey: 'uploaddocs' })
  useEffect(() => {
    if (isSubmitSuccess) {
      refetch()
    }
  }, [isSubmitSuccess])
  return (
    <div className="grid items-start gap-4">
      {submitLoading && <LoadingItem />}
      {!R.isEmpty(docs) ? (
        R.keys(docs).map((docKey, i) => {
          return (
            <div className="grid gap-2" key={i}>
              <div className="rounded-lg border p-4">
                <div className="flex justify-between">
                  <h2 className="font-semibold text-left">
                    {R.path([docKey, 'blobname'], docs)}
                  </h2>
                  <div>
                    {new Date(
                      R.path([docKey, 'lastModified'], docs)
                    ).toDateString()}
                  </div>
                </div>
                <p className="my-2 text-sm leading-none text-left text-slate-500">
                  {`${R.take(200, R.path([docKey, 'pages', 0, 'content'], docs))}...`}
                </p>
                <p className="mt-1 text-sm leading-none text-left text-slate-500">
                  {R.path([docKey, 'pages', 0, 'place'], docs)}
                </p>
              </div>
            </div>
          )
        })
      ) : !isLoading && !isFetching && !submitLoading ? (
        <div className="flex items-center justify-center flex-col">
          <EmptyDocuments />
          <p>No documents yet.</p>
          <ul>
            <li className="*:inline *:text-slate-600 flex items-center">
              <span>1. Create an organization in</span>{' '}
              <span className="inline-block mx-1">
                <SettingsIcon className="size-4" />
              </span>
              <span>Settings</span>
            </li>
            <li className="*:inline *:text-slate-600">2. Upload docs</li>
          </ul>
        </div>
      ) : null}
    </div>
  )
}

function SettingsIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.37-.3-.58-.22l-2.49 1c-.52-.4-1.08-.72-1.69-.94l-.38-2.65c-.05-.27-.28-.46-.56-.46h-4c-.28 0-.51.19-.56.46l-.38 2.65c-.61.22-1.17.54-1.69.94l-2.49-1c-.21-.08-.46 0-.58.22l-2 3.46c-.12.22-.07.49.12.64l2.11 1.65c-.04.32-.07.64-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.37.3.58.22l2.49-1c.52.4 1.08.72 1.69.94l.38 2.65c.05.27.28.46.56.46h4c.28 0 .51-.19.56-.46l.38-2.65c.61-.22 1.17-.54 1.69-.94l2.49 1c.21.08.46 0 .58-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
        fill="currentColor"
      />
    </svg>
  )
}

const EmptyDocuments = () => <img src={nodocs} alt="no docs" className="w-64" />

const LoadingItem = () => {
  return (
    <>
      <div className="grid gap-2" key={123}>
        <div className="shadow rounded-md p-4 w-full">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="space-y-2">
                <div className="grid grid-cols-5 gap-4">
                  <div className="h-2 bg-slate-300 rounded col-span-2"></div>
                  <div className="h-2 bg-transparent rounded col-span-2"></div>
                  <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                </div>
              </div>
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
      <div className="grid gap-2" key={124}>
        <div className="shadow rounded-md p-4 w-full">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="space-y-2">
                <div className="grid grid-cols-5 gap-4">
                  <div className="h-2 bg-slate-300 rounded col-span-2"></div>
                  <div className="h-2 bg-transparent rounded col-span-2"></div>
                  <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                </div>
              </div>
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
    </>
  )
}

export default FileList
