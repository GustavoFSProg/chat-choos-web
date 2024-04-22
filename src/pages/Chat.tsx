import NavBar from '../components/NavBar'
import { Container, ContainerMiddle } from '../styled-app'
import { useContext } from 'react'
import { ChatContext } from '../Context/ChatContext'
import UserChat from './UserChat'

function Chat() {
  const { userChats, user, isLoading, userChatsError } = useContext(ChatContext)

  console.log('userChats', userChats)
  return (
    <>
      <NavBar />

      <div style={{ display: 'flex', width: '50vw' }}>
        <Container>
          {userChats?.map((chat, index) => {
            return (
              <div key={index}>
                <UserChat chat={chat} user={user} />
              </div>
            )
          })}
          <ContainerMiddle>
            <UserChat />
            <h2>ChatBox</h2>
          </ContainerMiddle>

          <h2>MainChat</h2>
        </Container>
      </div>
    </>
  )
}

export default Chat
