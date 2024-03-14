import { useAppSelector } from '@/store/hooks'
import { RootState } from '@/store/store'
import { Folder, FolderUp } from 'lucide-react'
import * as R from 'ramda'
import { Link } from 'react-router-dom'

const DirListItem = ({
  dirName,
  dirSlug,
  isParent
}: {
  dirName: string
  dirSlug: string
  isParent?: boolean
}) => {
  const localDirs = useAppSelector(
    (state: RootState) => state.docsReducer.localDirs
  ) as Record<string, string>
  const paramSegments = !R.isNil(dirSlug) ? dirSlug.split('/') : []
  const href = R.init(paramSegments) as string[]
  const prevDirName =
    typeof href[href.length - 1] === 'string'
      ? localDirs[href[href.length - 1]]
      : '/'
  return (
    <div
      className={`${isParent ? 'shadow-sm' : 'border shadow-md'} rounded-md p-4 mb-4`}
    >
      <Link
        to={
          !isParent
            ? `/docs/${dirSlug}`
            : R.isEmpty(href)
              ? '/'
              : R.join('/', href)
        }
      >
        <div className="flex justify-between">
          <h2 className="font-semibold text-left flex cursor-pointer hover:underline">
            {isParent ? <FolderUp /> : <Folder />}
            <span className="inline-block ml-2">
              {!isParent ? dirName : R.isEmpty(href) ? '/' : prevDirName}
            </span>
          </h2>
          <span>{new Date().toDateString()}</span>
        </div>
      </Link>
    </div>
  )
}

export default DirListItem
