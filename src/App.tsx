import { store } from '@/store/store.ts'
import { ClerkProvider } from '@clerk/clerk-react'
import { Provider } from 'react-redux'
import { useNavigate, Outlet } from 'react-router-dom'
import './App.css'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

function App() {
  const navigate = useNavigate()
  return (
    <ClerkProvider navigate={navigate} publishableKey={PUBLISHABLE_KEY}>
      <Provider store={store}>
        <div>
          <Outlet />
        </div>
      </Provider>
    </ClerkProvider>
  )
}

export default App
