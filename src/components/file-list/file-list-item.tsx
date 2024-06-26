import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger
} from '@radix-ui/react-context-menu'
import { Edit3, EllipsisVertical, Trash2 } from 'lucide-react'

const FileListItem = ({
  title,
  datetime,
  excerpt,
  place
}: {
  title: string
  datetime: string
  excerpt: string
  place: string
}) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="dnd-item first:mt-0 mt-4 block cursor-default">
        <div className="dnd-item-2 relative bg-white rounded-md shadow-md border p-4 hover:bg-neutral-100 transition">
          <div className="flex justify-between">
            <h2 className="font-semibold text-left">{title}</h2>
            <div>{datetime}</div>
          </div>
          <p className="my-2 text-sm leading-none text-left text-slate-500">
            {excerpt}
          </p>
          <p className="mt-1 text-sm leading-none text-left text-slate-500">
            {place}
          </p>
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
        <ContextMenuItem className="flex items-center hover:bg-primary rounded hover:text-white">
          <Trash2 size={20} />
          <span className="block ml-2">Delete</span>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}

export default FileListItem
