import { ScrollArea } from '@radix-ui/react-scroll-area'
import * as R from 'ramda'
import FileListItem from './file-list-item'

const FileList = ({ docs }: { docs: {} }) => {
  console.log({ docs22: docs })
  return (
    <div>
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
