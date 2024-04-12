import { useContext, useState } from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import { AuthContext } from '../Context/AuthContext'
import api from '../api'
import { Container, ContainerMiddle } from '../styled-app'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  /* background: green; */
  padding-bottom: 10px;
`

const Input = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
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
  width: 52%;
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

function Login() {
  const [email, setEmail] = useState('bruna@gmail.com')
  const [password, setPassword] = useState('1234')

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

  async function createUser(event) {
    event.preventDefault()
    try {
      const data = { email, password }

      // if (name === '' || email === '' || password === '') {
      //   return alert('Os campos devem todos estarem preenchidos!')
      // }

      // const { data } = await api.get(`/get-by-email/${email}`)

      // if (data) {
      //   return alert('Email já cadastrado!!')
      // }

      console.log('Data', data)

      // if (data.email === email) {
      //   return alert('ERROR, Email já cadastrado!!')
      // }

      // setIsRegisterLoading(true)

      const response = await api.post('/login', data)

      // setIsRegisterLoading(false)

      if (response) {
        // updateRegisterInfo(data)

        localStorage.setItem('User', email)

        // registerUser(data)

        setUser(data)
        console.log('User', user)

        // return alert(response.error)
      }

      sessionStorage.setItem('token', response.data.token)
      sessionStorage.setItem('user', response.data.login.id)
      sessionStorage.setItem('email', response.data.login.email)

      console.log('response', response)

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
          <Form onSubmit={createUser}>
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
