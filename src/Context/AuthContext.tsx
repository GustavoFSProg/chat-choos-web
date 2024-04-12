import { createContext, useCallback, useState } from 'react'
import api from '../api'

export const AuthContext = createContext('')

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isRegisterLoading, setIsRegisterLoading] = useState(false)
  const [registerError, setRegisterError] = useState(null)
  const [registerInfo, setRegisterInfo] = useState({
    name: '',
    email: '',
    password: '',
  })

  const updateRegisterInfo = useCallback((data) => {
    // setRegisterInfo({ name: data.name, email: data.email, password: data.password })
  }, [])

  const registerUser = useCallback(async (data) => {
    // const dados = { name: data.name, email: data.email, password: data.password }
    setRegisterInfo({ name: data.name, email: data.email, password: data.password })
    console.log('registerinfo', registerInfo)

    setIsRegisterLoading(true)
    setRegisterError(null)

    // const response = await api.post('/create-user', dados)

    setIsRegisterLoading(false)

    if (response.error) {
      return setRegisterError(response)
    }

    localStorage.setItem('User', response)

    setUser(response)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        registerUser,
        registerError,
        registerInfo,
        isRegisterLoading,
        updateRegisterInfo,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
