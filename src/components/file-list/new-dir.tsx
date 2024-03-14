import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { slugify } from '@/lib/utils'
import { addLocalDir } from '@/store/docsReducer'
import { useAppDispatch } from '@/store/hooks'
import { Folder } from 'lucide-react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const NewDir = () => {
  const dispatch = useAppDispatch()
  const [popupOpen, popupenSet] = useState(false)
  const { '*': splats } = useParams()
  const dirPath = splats ? `${splats}/` : ''
  return (
    <>
      <Popover open={popupOpen}>
        <PopoverTrigger asChild>
          <Button onClick={() => popupenSet(!popupOpen)}>
            <Folder className="mr-2 h-4 w-4" /> Create new folder
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start">
          <Input
            placeholder="Type folder name and press enter"
            onKeyDown={(e) => {
              if (e.key == 'Enter') {
                const { value } = e.currentTarget
                dispatch(
                  addLocalDir({ [`${dirPath}${slugify(value)}`]: value })
                )
                popupenSet(false)
              }
            }}
          />
        </PopoverContent>
      </Popover>
    </>
  )
}

export default NewDir
