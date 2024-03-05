import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Docs = {
  docs: {
    [key: string]: {
      pages: [{ pageNumber: number; content: string }]
      lastModified: Date
      blobname: string
    }
  }
}

// Define a service using a base URL and expected endpoints
export const docsApi = createApi({
  reducerPath: 'docsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_API_URL}` }),
  endpoints: (builder) => ({
    getDocs: builder.query<Docs, { container: string }>({
      query: ({ container }) => `get-docs?container=${container}`
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
    askQ: builder.mutation<{ done: string }, { question: string }>({
      query: (body: { question: string }) => {
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
  useLazyGetPcStatusQuery
} = docsApi
