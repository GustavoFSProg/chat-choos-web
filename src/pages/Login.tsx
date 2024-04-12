import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { useContext } from 'react'
import { Container, ContainerMiddle } from '../styled-app'

import { AuthContext } from '../Context/AuthContext'
import { Container, ContainerMiddle } from '../styled-app'

function Login() {
  const { user } = useContext(AuthContext)

  return (
    <>
      <NavBar />

      <Container>
        <ContainerMiddle>
          <h2>Login</h2>
          {/* {user.email} */}
          <Link to="/">HOME</Link>
        </ContainerMiddle>
      </Container>
    </>
  )
}

export default Login
