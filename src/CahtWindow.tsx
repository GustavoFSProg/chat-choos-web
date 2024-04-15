// import { Link } from 'react-router-dom'
import { AuthContext } from './Context/AuthContext'
import MessageBox from './components/MessageBox'
import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'
import { Container, ContainerMiddle } from './styled-app'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import './index.css'
import { useContext } from 'react'

function ChatWindow() {
  const Context = useContext(AuthContext)

  // const { user } = Context

  // console.log(user.name)

  return (
    <div style={{ overflow: 'hidden' }}>
      <NavBar />
      <Container>
        <Sidebar />
        <ContainerMiddle>
          <MessageBox />
        </ContainerMiddle>
      </Container>
    </div>
  )
}

export default ChatWindow
