import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import localforage from 'localforage'
import * as R from 'ramda'

export interface DocsState {
  files: object[]
  dirs: object
}

const initialState: DocsState = {
  files: [],
  dirs: {}
}

export const fetchDirs = createAsyncThunk(
  'dirs/fetchLocal',
  async (dir: string) => {
    const dirs = await localforage.getItem('local_dirs')
    if (!dirs) return {}
    if (!dir) return { ...dirs }
    return R.path([dir], dirs)
  }
)

export const addDirLF = createAsyncThunk(
  'dirs/addLocal',
  async (dirObj: object) => {
    let dirs = (await localforage.getItem('local_dirs')) as object
    await localforage.setItem('local_dirs', R.mergeAll([dirObj, dirs]))
    dirs = (await localforage.getItem('local_dirs')) as object
    console.log('dirs/getLocal', { dirs })
    return { ...dirs }
  }
)

export const docsSlice = createSlice({
  name: 'docs',
  initialState,
  reducers: {
    addFile: (state, action) => {
      state.files.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDirs.fulfilled, (state, action) => {
      state.dirs = action.payload || {}
    }),
      builder.addCase(addDirLF.fulfilled, (state, action) => {
        console.log({ action })
        state.dirs = action.payload
      })
  }
})

export const { addFile } = docsSlice.actions
export default docsSlice.reducer
