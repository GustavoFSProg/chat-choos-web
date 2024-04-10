import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
  background: yellow;
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
  background: blue;
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
    color: yellow;
  }

  @media screen and (max-width: 800px) {
    width: 90%;
  }
`

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <div
        style={{
          display: 'flex',
          marginTop: '50px',
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2>CADATRO DE USUARIO</h2>
        <Link to="/">HOME</Link>
        <Form>
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

          <Button>CADASTRAR</Button>
        </Form>
      </div>
    </>
  )
}

export default Register
