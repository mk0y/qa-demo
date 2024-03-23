import { fetchLocalDirs } from '@/store/docsReducer'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { RootState } from '@/store/store'
import * as R from 'ramda'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DirListItem from './dir-list-item'

const DirList = () => {
  const params = useParams()
  const { '*': splats } = params
  const dispatch = useAppDispatch()
  // useEffect(() => {
  //   dispatch(clearLocalDirs())
  // }, [])
  useEffect(() => {
    dispatch(fetchLocalDirs(params.dir))
  }, [params.dir])
  const localDirs = useAppSelector(
    (state: RootState) => state.docsReducer.localDirs
  ) as Record<string, string>
  console.log(localDirs)
  const upDirPath = splats
    ? R.pipe(R.split('/'), R.init, R.join('/'))(splats)
    : ''
  console.log({ upDirPath })
  return !R.isEmpty(localDirs) ? (
    <div>
      {splats && (
        <DirListItem
          isParent
          key={1234}
          dirName={`${localDirs[upDirPath] || '/'}`}
          dirSlug={splats}
        />
      )}
      {R.keys(localDirs)
        .filter((ldkey) => {
          if (R.isEmpty(params)) {
            return R.split('/', ldkey).length == 1
          } else {
            const { '*': splats } = params
            return (
              R.startsWith(`${splats}/`, ldkey) &&
              splats &&
              splats.split('/').length == ldkey.split('/').length - 1
            )
          }
        })
        .sort((a, b) => {
          if (a < b) return -1
          if (a > b) return 1
          return 0
        })
        .map((dirSlug, i) => {
          return (
            <DirListItem
              key={i}
              dirName={localDirs[dirSlug]}
              dirSlug={dirSlug}
            />
          )
        })}
    </div>
  ) : null
}

export default DirList
