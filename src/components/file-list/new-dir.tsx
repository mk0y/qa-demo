import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { slugify } from '@/lib/utils'
import { addDirLF } from '@/store/docsReducer'
import { useAppDispatch } from '@/store/hooks'
import { Folder } from 'lucide-react'
import { useState } from 'react'

const NewDir = () => {
  const dispatch = useAppDispatch()
  const [popupOpen, popupenSet] = useState(false)
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
                console.log({ value })
                console.log('onKeyDown', { [slugify(value)]: value })
                dispatch(addDirLF({ [slugify(value)]: value }))
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
