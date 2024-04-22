import { useContext, useState } from 'react'
import { Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import { AuthContext } from '../Context/AuthContext'
import api from '../api'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 77%;
  height: 50%;
  padding-bottom: 10px;
  margin-top: 15px;
  margin-left: -35px;
  /* background: orange; */
`

const Input = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 57%;
  height: 2.3rem;
  background: #f5f4d5;
  margin-top: 22px;
  padding-left: 14px;
  font-family: 'Nunito';
  border-radius: 10px;

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`

const Button = styled.button`
  width: 60%;
  height: auto;
  background: #6666ff;
  color: white;
  /* margin-right: 7px; */
  font-size: 0%.7;
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  /* padding-left: 4px;
  padding-right: 4px; */
  transition: ease all 0.9s;
  font-family: 'Nunito';
  font-weight: bold;
  cursor: pointer;
  margin-top: 22px;

  &:hover {
    background: darkblue;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background: rgb(40, 40, 40);
  /* flex-direction: column; */
  font-family: 'Nunito';
  align-items: center;
  justify-content: center;
  /* background: green; */
  /* margin-top: 220px; */
`
export const ContainerMiddle = styled.div`
  display: flex;
  width: 80%;
  height: 100vh;
  font-family: 'Nunito';
  flex-direction: row;
  /* margin-top: 100px; */
  /* background: pink; */
`

function Login() {
  const [email, setEmail] = useState('bruna@gmail.com')
  const [password, setPassword] = useState('1234')

  const navigate = useNavigate()

  const {
    updateRegisterInfo,
    setRegisterInfo,
    registerInfo,
    registerError,
    isRegisterLoading,
    registerUser,
    setUser,
    user,
    setIsRegisterLoading,
  } = useContext(AuthContext)

  async function LoginUser(event) {
    event.preventDefault()
    try {
      const data = { email, password }

      const response = await api.post('/login', data)

      if (response.data.errors) {
        alert('Email ou senha inválidos!!')
        return null
      }

      console.log('response', response)

      if (response) {
        setUser(response.data)
        console.log('User', response)

        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', response.data.login.id)
        localStorage.setItem('email', response.data.login.email)

        navigate('/chat-box')

        console.log('response', response)
        return alert('Login efetuado com sucesso!!!')
      }
      return alert('Login efetuado com sucesso!!!')
    } catch (error) {
      return alert(error)
    }
  }

  return (
    <>
      <NavBar />
      <Container>
        <ContainerMiddle>
          <h2>LOGIN</h2>
          <Form onSubmit={LoginUser}>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit">{isRegisterLoading ? 'Loading' : 'LOGAR'}</Button>
            {registerError?.error && alert(registerError?.message)}
          </Form>
        </ContainerMiddle>
      </Container>
    </>
  )
}

export default Login
