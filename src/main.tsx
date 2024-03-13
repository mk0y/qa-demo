import ErrorPage from '@/error-page.tsx'
import QueryPage from '@/routes/query-page.tsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import MainView from './components/main-view'
import './index.css'
import DocsList from './routes/file-list.tsx'
import Integrations from './routes/integrations-view.tsx'
import SettingsPage from './routes/settings-page.tsx'
import SignInPage from './routes/sign-in.tsx'
import Suggestions from './routes/suggestions-router-page.tsx'
import Users from './routes/users-route-page.tsx'
import Widgets from './routes/widgets-route-page.tsx'
import WriteNewDoc from './routes/write-new.tsx'

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
            element: <DocsList />
          },
          {
            path: '/docs/:dir',
            element: <DocsList isDir />
          },
          {
            path: '/query',
            element: <QueryPage />
          },
          {
            path: '/new',
            element: <WriteNewDoc />
          },
          {
            path: '/settings',
            element: <SettingsPage />
          },
          {
            path: '/integrations',
            element: <Integrations />
          },
          {
            path: '/widgets',
            element: <Widgets />
          },
          {
            path: '/users',
            element: <Users />
          },
          {
            path: '/suggestions',
            element: <Suggestions />
          },
          { path: '/sign-in', element: <SignInPage /> }
        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
