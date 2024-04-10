import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Chat from './pages/Chat'
import Register from './pages/Register'
import Login from './pages/Login'

function Routers() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<App />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routers
