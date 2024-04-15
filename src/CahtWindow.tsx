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
  const { user } = useContext(AuthContext)

  // const { user } = Context

  // console.log(user.name)

  return (
    <div style={{ overflow: 'hidden' }}>
      <NavBar />
      <Container>
        {/* <Sidebar /> */}
        <ContainerMiddle>
          {user ? (
            <MessageBox />
          ) : (
            <div
              style={{
                display: 'flex',
                width: '100vw',
                height: '90vh',
                color: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <h1>FAÇA O LOGIN!</h1>
            </div>
          )}
        </ContainerMiddle>
      </Container>
    </div>
  )
}

export default ChatWindow
