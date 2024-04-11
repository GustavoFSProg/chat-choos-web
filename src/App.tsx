// import { Link } from 'react-router-dom'
import { AuthContext } from './Context/AuthContext'
import NavBar from './components/NavBar'
import { Container, ContainerMiddle } from './styled-app'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import './index.css'
import { useContext } from 'react'

function App() {
  const Context = useContext(AuthContext)

  // const { user } = Context

  // console.log(user.name)

  return (
    <>
      <NavBar />
      <Container>
        <ContainerMiddle>
          <h2>APP HOME CHAT</h2>
          {/* <div>{user.name}</div> */}
        </ContainerMiddle>
      </Container>
      {/* <NavBar /> */}

      {/* <Link to="/chat">CHAT</Link> */}
    </>
  )
}

export default App
