import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { Container, ContainerMiddle } from '../styled-app'
import { useContext } from 'react'
import { ChatContext } from '../Context/ChatContext'

function UserChat(chat, users) {
  const { userChats, user, isLoading, userChatsError } = useContext(ChatContext)

  console.log('userChats', userChats)
  return (
    <>
      <div style={{ display: 'flex', width: '50vw' }}>
        <Container>
          <h2 style={{ color: 'green' }}>User Chat</h2>
        </Container>
      </div>
    </>
  )
}

export default UserChat
