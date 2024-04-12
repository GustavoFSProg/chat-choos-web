import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

function Login() {
  const { user } = useContext(AuthContext)

  return (
    <>
      <NavBar />

      <div>
        <h2>Login</h2>
        {user.email}
        <Link to="/">HOME</Link>
      </div>
    </>
  )
}

export default Login
