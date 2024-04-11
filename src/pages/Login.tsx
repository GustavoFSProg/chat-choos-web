import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

function Login() {
  return (
    <>
      <NavBar />

      <div>
        <h2>Login</h2>
        <Link to="/">HOME</Link>
      </div>
    </>
  )
}

export default Login
