import { createSlice } from '@reduxjs/toolkit'

export interface DocsState {
  files: object[]
}

const initialState: DocsState = {
  files: []
}

export const docsSlice = createSlice({
  name: 'docs',
  initialState,
  reducers: {
    addFile: (state, action) => {
      state.files.push(action.payload)
    }
  }
})

export const { addFile } = docsSlice.actions
export default docsSlice.reducer
