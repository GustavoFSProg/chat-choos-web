import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { Container, ContainerMiddle } from '../styled-app'

function Chat() {
  return (
    <>
      <NavBar />

      <Container>
        <ContainerMiddle>
          <h2>CHAT</h2>
        </ContainerMiddle>
      </Container>
    </>
  )
}

export default Chat
