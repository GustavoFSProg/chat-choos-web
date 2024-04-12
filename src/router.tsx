import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Chat from './pages/Chat'
import Register from './pages/Register'
import Login from './pages/Login'
// import { Container } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { Container } from 'react-bootstrap'
import { Container, ContainerMiddle } from './styled-app'
import NavBar from './components/NavBar'
import { AuthContext, AuthContextProvider } from './Context/AuthContext'
import { useContext } from 'react'

function Routers() {
  const { user } = useContext(AuthContext)
  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<App />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/navbar" element={<NavBar />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  )
}

export default Routers
