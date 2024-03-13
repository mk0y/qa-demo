import { Folder } from 'lucide-react'
import { Link } from 'react-router-dom'

const DirListItem = ({
  dirName,
  dirSlug
}: {
  dirName: string
  dirSlug: string
}) => {
  return (
    <div className="shadow-md border rounded-md p-4 mb-4">
      <Link to={`/docs/${dirSlug}`}>
        <div className="flex justify-between">
          <h2 className="font-semibold text-left flex cursor-pointer hover:underline">
            <Folder />
            <span className="inline-block ml-2">{dirName}</span>
          </h2>
          <span>{new Date().toDateString()}</span>
        </div>
      </Link>
    </div>
  )
}

export default DirListItem
