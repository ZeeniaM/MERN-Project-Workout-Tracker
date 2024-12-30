import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { WorkoutContextProvider } from './context/WorkoutContext'
import { AuthContextProvider } from './context/AuthContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <WorkoutContextProvider>
          <App />
      </WorkoutContextProvider>
    </AuthContextProvider>
  </StrictMode>
)
