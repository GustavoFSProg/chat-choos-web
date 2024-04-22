import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { Container, ContainerMiddle } from '../styled-app'
import { useContext } from 'react'
import { ChatContext } from '../Context/ChatContext'

function Chats() {
  const { userChats, user, isLoading, userChatsError } = useContext(ChatContext)

  console.log('userChats', userChats)
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

export default Chats
