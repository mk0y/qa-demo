import { FolderUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const DirNameBack = () => {
  return (
    <Link to="/" className="inline-block">
      <div className="flex">
        <FolderUp strokeWidth={1} />
        <span className="inline-block ml-1 hover:underline">Back</span>
      </div>
    </Link>
  )
}

export default DirNameBack
