import DirList from '@/components/file-list/dir-list'
import FileList from '@/components/file-list/file-list'
import NewDir from '@/components/file-list/new-dir'
import { Button } from '@/components/ui/button'
import { useGetDocsQuery, useUploadDocsMutation } from '@/store/api'
import { useAppDispatch } from '@/store/hooks'
import { useUser } from '@clerk/clerk-react'
import { Redo, Undo } from 'lucide-react'
import * as R from 'ramda'
import { SVGProps, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import nodocs from '/src/assets/nodocstr.webp'
import { setLocalDirs } from '@/store/docsReducer'

const FileListPage = ({ isDir }: { isDir?: boolean }) => {
  const { user } = useUser()
  const dispatch = useAppDispatch()
  const params = useParams() as { '*': string }
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
    { container: orgSlug, dir: params['*'] },
    {
      skip: !!!orgSlug
      // refetchOnFocus: true,
      // refetchOnReconnect: true,
      // refetchOnMountOrArgChange: true
    }
  )
  useEffect(() => {
    if (R.is(Object, docs) && docs.dirs) {
      dispatch(setLocalDirs(docs.dirs))
    }
  }, [R.isEmpty(docs)])
  const [, { isLoading: submitLoading, isSuccess: isSubmitSuccess }] =
    useUploadDocsMutation({ fixedCacheKey: 'uploaddocs' })
  useEffect(() => {
    if (isSubmitSuccess) {
      refetch()
    }
  }, [isSubmitSuccess])
  return (
    <div className="file-list-wrap flex flex-col absolute w-full h-full p-8 overflow-auto">
      {orgSlug && !R.isEmpty(docs) && (
        <div className="flex mb-5 justify-between">
          <div className="flex items-end">
            <NewDir />
          </div>
          {/* <div className="flex">
            <Button variant="ghost" size="sm" title="Undo" disabled>
              <Undo size={20} strokeWidth={1.2} />
              <span className="inline-block ml-1">Undo</span>
            </Button>
            <Button variant="ghost" size="sm" title="Redo" disabled>
              <span className="inline-block mr-1">Redo</span>
              <Redo size={20} strokeWidth={1.2} />
            </Button>
          </div> */}
        </div>
      )}
      {!isFetching && !isLoading && <DirList />}
      {(submitLoading || isFetching || isLoading) && <LoadingItem />}
      {!R.isEmpty(docs) && !isLoading && !isFetching ? (
        <FileList docs={docs} />
      ) : !isLoading && !isFetching && !submitLoading && !isDir ? (
        <div className="flex items-center justify-center flex-col">
          <EmptyDocuments />
          <p>No documents yet.</p>
          <ul>
            <li className="*:inline flex items-center">
              <span>1. Create an organization in</span>{' '}
              <span className="inline-block mx-1">
                <SettingsIcon className="size-4" />
              </span>
              <span>Settings</span>
            </li>
            <li className="*:inline">2. Upload docs</li>
            <li className="*:inline">OR</li>
            <li className="*:inline flex items-center text-center justify-center">
              <span className="inline-block mx-1">
                <WriteNewDocIcon className="size-4" />
              </span>
              <span>Write own docs</span>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  )
}

function WriteNewDocIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
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
    <div className="grid gap-2 mb-4" key={123}>
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
  )
}

export default FileListPage
