import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import localforage from 'localforage'
import * as R from 'ramda'

export interface DocsState {
  files: object[]
  dirs: Record<string, {}>
  localDirs: Record<string, string>
}

const initialState: DocsState = {
  files: [],
  dirs: {},
  localDirs: {}
}

export const setLocalDirs = createAsyncThunk(
  'dirs/setLocal',
  async (dirmap: object) => {
    await localforage.setItem('local_dirs', { ...dirmap })
    return { ...dirmap }
  }
)

export const fetchLocalDirs = createAsyncThunk(
  'dirs/fetchLocal',
  async (dir?: string) => {
    const dirs = await localforage.getItem('local_dirs')
    if (!dirs) return {}
    if (!dir) return { ...dirs }
    return R.path([dir], dirs)
  }
)

export const addLocalDir = createAsyncThunk(
  'dirs/addLocal',
  async (dirObj: object) => {
    let dirs = (await localforage.getItem('local_dirs')) as object
    await localforage.setItem('local_dirs', R.mergeAll([dirObj, dirs]))
    dirs = (await localforage.getItem('local_dirs')) as object
    return { ...dirs }
  }
)

export const clearLocalDirs = createAsyncThunk('dirs/clearLocal', async () => {
  await localforage.removeItem('local_dirs')
})

export const docsSlice = createSlice({
  name: 'docs',
  initialState,
  reducers: {
    addFile: (state, action) => {
      state.files.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLocalDirs.fulfilled, (state, action) => {
      state.localDirs = action.payload || {}
    }),
      builder.addCase(addLocalDir.fulfilled, (state, action) => {
        state.localDirs = R.mergeAll([{ ...state.localDirs }, action.payload])
      }),
      builder.addCase(clearLocalDirs.fulfilled, (state) => {
        state.localDirs = {}
      }),
      builder.addCase(setLocalDirs.fulfilled, (state, action) => {
        state.localDirs = action.payload
      })
  }
})

export const { addFile } = docsSlice.actions
export default docsSlice.reducer
