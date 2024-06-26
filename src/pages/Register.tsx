import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import NavBar from '../components/NavBar'
import { AuthContext } from '../Context/AuthContext'
import api from '../api'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding-bottom: 10px;
  margin-top: 145px;
  /* margin-left: 125px; */
  /* margin-top: -395px; */
  /* margin-left: -105px; */
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
  font-size: 0%.7;
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
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
  font-family: 'Nunito';
  align-items: center;
  justify-content: center;
`
export const ContainerMiddle = styled.div`
  display: flex;
  width: 80%;
  height: 100vh;
  font-family: 'Nunito';
  flex-direction: row;
`

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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

  async function createUser(event) {
    event.preventDefault()
    try {
      const dados = { name, email, password }

      if (name === '' || email === '' || password === '') {
        return alert('Os campos devem todos estarem preenchidos!')
      }

      const { data } = await api.get(`/get-by-email/${email}`)

      if (data) {
        return alert('Email já cadastrado!!')
      }

      console.log('Data', data)

      setIsRegisterLoading(true)

      const response = await api.post('/create-user', dados)

      setIsRegisterLoading(false)

      if (response) {
        sessionStorage.setItem('User', email)

        setUser(dados)
        console.log('User', user)
      }

      setName('')
      setEmail('')
      setPassword('')

      navigate('/')

      return alert('Usuário cadastrado com sucesso!!!')
    } catch (error) {
      return alert(error)
    }
  }

  return (
    <>
      <NavBar />
      <Container>
        <ContainerMiddle>
          <h2>CADATRO DE USUARIO</h2>
          <Form onSubmit={createUser}>
            <Input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

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

            <Button type="submit">{isRegisterLoading ? 'Loading' : 'CADASTRAR'}</Button>
            {registerError?.error && alert(registerError?.message)}
          </Form>
        </ContainerMiddle>
      </Container>
    </>
  )
}

export default Register
