import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { Container, ContainerMiddle } from '../styled-app'

function Chat() {
  return (
    <>
      <NavBar />

      <Container>
        <ContainerMiddle>
          <h2>Login</h2>
          <h2>CHAT</h2>
          <Link to="/">HOME</Link>
        </ContainerMiddle>
      </Container>
    </>
  )
}

export default Chat
