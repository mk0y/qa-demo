import ErrorPage from '@/error-page.tsx'
import QueryPage from '@/routes/query-page.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import MainView from './components/main-view'
import './index.css'
import FileList from './routes/file-list.tsx'
import SignInPage from './routes/sign-in.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <MainView />,
        children: [
          {
            path: '/',
            element: <FileList />
          },
          {
            path: '/query',
            element: <QueryPage />
          }
        ]
      },
      { path: '/sign-in', element: <SignInPage /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
