import { useUploadDocsMutation } from '@/store/api'
import { useAppSelector } from '@/store/hooks'
import { RootState } from '@/store/store'
import { useUser } from '@clerk/clerk-react'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import * as R from 'ramda'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import FileListItem from './file-list-item'

const FileList = ({ docs }: { docs: {} }) => {
  const [dragOver, setDragOver] = useState(false)
  const { user } = useUser()
  const params = useParams()
  const localDirs = useAppSelector(
    (state: RootState) => state.docsReducer.localDirs
  ) as Record<string, string>
  const [submitUpload] = useUploadDocsMutation({ fixedCacheKey: 'uploaddocs' })
  const orgSlug = R.path(
    ['organizationMemberships', 0, 'organization', 'slug'],
    user
  ) as string
  return (
    <div
      className={`dnd ${dragOver ? 'drop' : ''}`}
      onDrop={(e) => {
        e.preventDefault()
        setDragOver(false)
        const files = e.dataTransfer.files
        const formData = new FormData()
        formData.append('container', orgSlug)
        const { '*': splats } = params
        formData.append('dirmeta', JSON.stringify(localDirs))
        if (!R.isNil(splats)) {
          formData.append('dirpath', splats)
        }
        for (let file of files) {
          formData.append('docs', file)
        }
        submitUpload(formData)
      }}
      onDragEnter={(e) => {
        e.preventDefault()
        setDragOver(true)
      }}
      onDragOver={(e) => {
        e.preventDefault()
        setDragOver(true)
      }}
      onDragLeave={(e) => {
        e.preventDefault()
        setDragOver(false)
      }}
    >
      <ScrollArea className="h-[720px]">
        {R.keys(docs)
          .filter((k) => k !== 'dirs')
          .map((docKey, i) => {
            return (
              <FileListItem
                key={i}
                title={R.path([docKey, 'blobname'], docs)}
                datetime={new Date(
                  R.path([docKey, 'lastModified'], docs)
                ).toDateString()}
                excerpt={`${R.take(200, R.path([docKey, 'pages', 0, 'content'], docs))}...`}
                place={R.path([docKey, 'pages', 0, 'place'], docs)}
              />
            )
          })}
      </ScrollArea>
    </div>
  )
}

export default FileList
