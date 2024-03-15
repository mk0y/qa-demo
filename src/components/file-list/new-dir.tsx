import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { slugify } from '@/lib/utils'
import { useSubmitDirMetaMutation } from '@/store/api'
import { addLocalDir } from '@/store/docsReducer'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { RootState } from '@/store/store'
import { useUser } from '@clerk/clerk-react'
import { Folder } from 'lucide-react'
import * as R from 'ramda'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const NewDir = () => {
  const { user } = useUser()
  const orgSlug = R.path(
    ['organizationMemberships', 0, 'organization', 'slug'],
    user
  ) as string
  const dispatch = useAppDispatch()
  const [popupOpen, popupenSet] = useState(false)
  const { '*': splats } = useParams()
  const dirPath = splats ? `${splats}/` : ''
  const [submitDirMeta] = useSubmitDirMetaMutation()
  const localDirs = useAppSelector(
    (state: RootState) => state.docsReducer.localDirs
  ) as Record<string, string>
  useEffect(() => {
    if (!R.isEmpty(localDirs)) {
      console.log('setting dirs')
      submitDirMeta({
        container: orgSlug,
        dirmeta: JSON.stringify(localDirs)
      })
    }
  }, [R.isEmpty(localDirs), R.keys(localDirs).length])
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
