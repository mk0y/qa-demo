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
  return !R.isEmpty(localDirs) ? (
    <div>
      {splats && (
        <DirListItem isParent key={1234} dirName={localDirs[splats]} dirSlug={splats} />
      )}
      {R.keys(localDirs)
        .filter((ldkey) => {
          if (R.isEmpty(params)) {
            return R.split('/', ldkey).length == 1
          } else {
            const { '*': splats } = params
            return R.startsWith(`${splats}/`, ldkey)
          }
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
