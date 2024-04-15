// import { Link } from 'react-router-dom'
import ChatWindow from './CahtWindow'
import { AuthContext } from './Context/AuthContext'
import MessageBox from './components/MessageBox'
import NavBar from './components/NavBar'
import Sidebar from './components/Sidebar'
import { Container, ContainerMiddle } from './styled-app'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import './index.css'
import { useContext } from 'react'

function App() {
  const Context = useContext(AuthContext)

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
