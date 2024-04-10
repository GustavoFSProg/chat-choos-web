import { Link } from 'react-router-dom'
import { Container, ContainerMiddle } from './styled-app'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import './index.css'

function App() {
  return (
    <Container>
      <ContainerMiddle>
        <h2>APP HOME CHAT</h2>
        <Link to="/chat">CHAT</Link>
      </ContainerMiddle>
    </Container>
  )
}

export default App
