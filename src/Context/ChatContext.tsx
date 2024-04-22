import { createContext, useContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import api from '../api'

export const ChatContext = createContext('')

export const ChatContextProvider = ({ children, user }) => {
  const [userChats, setUseChats] = useState(null)
  const [userChatsError, setUserChatsError] = useState(null)
  const [isLoading, setisLoading] = useState(false)
  const [chats, setChats] = useState([])
  // const { user, setUser } = useContext(AuthContext)

  async function getAllChats() {
    const { data } = await api.get(`/get-all-chats`)

    setUseChats(data)
    // setUser(data)
  }

  useEffect(() => {
    getAllChats()
  }, [])

  return (
    <ChatContext.Provider value={{ userChats, user, isLoading, userChatsError }}>
      {children}
    </ChatContext.Provider>
  )
}
