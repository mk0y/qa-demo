import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger
} from '@radix-ui/react-context-menu'
import { Edit3, EllipsisVertical, Folder, FolderUp, Trash2 } from 'lucide-react'
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
  // const localDirs = useAppSelector(
  //   (state: RootState) => state.docsReducer.localDirs
  // ) as Record<string, string>
  const paramSegments = !R.isNil(dirSlug) ? dirSlug.split('/') : []
  const href = R.init(paramSegments) as string[]
  // const prevDirName =
  //   typeof href[href.length - 1] === 'string'
  //     ? localDirs[href[href.length - 1]]
  //     : '/'
  // console.log({ paramSegments, href, prevDirName })
  return (
    <ContextMenu>
      <ContextMenuTrigger className="dnd-item first:mt-0 mt-4 block cursor-default">
        <div
          className={`${isParent ? 'shadow-sm' : 'border shadow-md'} relative dnd-item-2 cursor-default hover:bg-neutral-100 rounded-md p-4 mb-4`}
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
                  {/* {!isParent ? dirName : R.isEmpty(href) ? '/' : prevDirName} */}
                  {dirName}
                </span>
              </h2>
              <span>{new Date().toDateString()}</span>
            </div>
          </Link>
          <EllipsisVertical
            onClick={() => {
              console.log('click')
            }}
            className="dnd-ico absolute bg-white shadow-lg border border-neutral-300 rounded-2xl text-neutral-400 -top-3 -right-3 cursor-pointer"
            size={28}
            strokeWidth={2}
          />
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="border bg-slate-50 p-2 text-left *:outline-none text-neutral-900 *:cursor-pointer *:my-1 *:pr-16 *:pl-2 *:py-1 shadow-md rounded-md z-10">
        <ContextMenuItem className="flex items-center hover:bg-primary rounded hover:text-white">
          <Edit3 size={20} />
          <span className="block ml-2">Rename</span>
        </ContextMenuItem>
        <ContextMenuItem
          onClick={() => {
            console.log('del')
          }}
          className="flex items-center hover:bg-primary rounded hover:text-white"
        >
          <Trash2 size={20} />
          <span className="block ml-2">Delete</span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export default DirListItem
