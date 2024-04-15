import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { Container, ContainerMiddle } from '../styled-app'

function MainChat() {
  return (
    <>
      <div style={{ display: 'flex', width: '50vw' }}>
        <Container>
          <ContainerMiddle>
            <h2>MainChat</h2>
          </ContainerMiddle>
        </Container>
      </div>
    </>
  )
}

export default MainChat
