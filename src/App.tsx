// import { Link } from 'react-router-dom'
import ChatWindow from './CahtWindow'
import { AuthContext } from './Context/AuthContext'
import { ChatContextProvider } from './Context/ChatContext'
import NavBar from './components/NavBar'
import { Container, ContainerMiddle } from './styled-app'
import { useContext } from 'react'

function App() {
  const { user } = useContext(AuthContext)

  const userEmail = localStorage.getItem('user')

  // const { user } = Context

  // console.log(user.name)

  return (
    <div style={{ overflow: 'hidden', color: 'white' }}>
      <NavBar />

      <Container>
        {/* <Sidebar /> */}
        <ContainerMiddle>
          {/* <MessageBox /> */}
          <h1>Chat App</h1>
        </ContainerMiddle>
      </Container>
    </div>
  )
}

export default App
