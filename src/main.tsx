import ErrorPage from '@/error-page.tsx'
import QueryPage from '@/routes/query-page.tsx'
import FileList from '@/routes/file-list.tsx'
import { store } from '@/store/store.ts'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'query',
        element: <QueryPage />
      },
      {
        path: '',
        element: <FileList />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
