import { store } from '@/store/store.ts'
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut
} from '@clerk/clerk-react'
import { Provider } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import './App.css'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

function App() {
  const navigate = useNavigate()
  return (
    <ClerkProvider navigate={navigate} publishableKey={PUBLISHABLE_KEY}>
      <Provider store={store}>
        <div>
          <SignedOut>
            <div className="flex items-center justify-center h-screen">
              <RedirectToSignIn />
            </div>
          </SignedOut>
          <SignedIn>
            <Outlet />
          </SignedIn>
        </div>
      </Provider>
    </ClerkProvider>
  )
}

export default App
