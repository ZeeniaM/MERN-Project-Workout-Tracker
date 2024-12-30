import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Login from './pages/Login'
import Signup from './pages/Signup'
import Landing from './pages/Landing'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {
  const { user } = useAuthContext()
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={<Landing />}
            />

            // normal pages
            <Route 
              path="/home"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route 
              path="/about"
              element={<About />}
            />

            // authentication pages
            <Route 
              path="/login"
              element={!user ? <Login /> : <Navigate to="/home" />}
            />
            <Route 
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/home" />}
            />

            // incase of undefined path Routes
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
