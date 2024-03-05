import { useGetDocsQuery, useUploadDocsMutation } from '@/store/api'
import * as R from 'ramda'
import { useEffect } from 'react'

const FileList = () => {
  const {
    data: docs = {},
    // isLoading: isDocsLoading,
    refetch
  } = useGetDocsQuery(
    { container: 'compx' },
    {
      refetchOnFocus: true,
      refetchOnReconnect: true,
      refetchOnMountOrArgChange: true
    }
  )
  const [
    ,
    {
      isLoading: submitLoading,
      // reset: resetSubmitUpload,
      isSuccess: isSubmitSuccess
    }
  ] = useUploadDocsMutation({ fixedCacheKey: 'uploaddocs' })
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
      ) : (
        <LoadingItem />
      )}
    </div>
  )
}

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
