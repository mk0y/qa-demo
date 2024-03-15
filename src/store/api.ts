import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Docs =
  | {
      [key: string]: {
        pages: [{ pageNumber: number; content: string }]
        lastModified: Date
        blobname: string
      }
    }
  | { dirs: Record<string, string> }

export const docsApi = createApi({
  reducerPath: 'docsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}` }),
  endpoints: (builder) => ({
    getDocs: builder.query<Docs, { container: string; dir: string }>({
      query: ({ container, dir }) => {
        const params = new URLSearchParams()
        params.append('container', container)
        if (dir) params.append('dir', dir)
        const ret = `get-docs?${params.toString()}`
        return ret
      }
    }),
    uploadDocs: builder.mutation<void, FormData>({
      query: (body: FormData) => {
        return {
          url: '/',
          method: 'POST',
          body
        }
      }
    }),
    submitDirMeta: builder.mutation<
      void,
      { container: string; dirmeta: string }
    >({
      query: ({ container, dirmeta }) => {
        return {
          url: '/set-dirs',
          method: 'POST',
          body: { container, dirmeta }
        }
      }
    }),
    askQ: builder.mutation<
      { done: string },
      { question: string; container: string }
    >({
      query: (body: { question: string; container: string }) => {
        return {
          url: '/ask',
          method: 'POST',
          body,
          headers: { 'Content-Type': 'application/json' }
        }
      }
    }),
    createPcIndex: builder.mutation<{ done: string }, { pcName: string }>({
      query: (body: { pcName: string }) => {
        return {
          url: '/pine',
          method: 'POST',
          body,
          headers: { 'Content-Type': 'application/json' }
        }
      }
    }),
    getPcStatus: builder.query<{ state: string }, { pc: string }>({
      query: ({ pc }) => `pine?pc=${pc}`
    })
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetDocsQuery,
  useUploadDocsMutation,
  useAskQMutation,
  useCreatePcIndexMutation,
  useLazyGetPcStatusQuery,
  useSubmitDirMetaMutation
} = docsApi
