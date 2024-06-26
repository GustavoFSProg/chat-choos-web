// import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AuthContext } from '../Context/AuthContext'

const Buttons = styled.button`
  width: 4.8rem;
  height: 2rem;
  background: blue;
  color: white;
  margin-right: 7px;
  font-size: 0%.7;
  border-radius: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 4px;
  padding-right: 4px;
  transition: ease all 0.9s;
  font-family: 'Nunito';
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: darkblue;
    color: yellow;
  }
`
const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  background: black;
  padding: 0px;
  font-family: 'Nunito';

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    padding-bottom: 35px;
  }
`
function NavBar() {
  const { user, logoutUser } = useContext(AuthContext)

  // console.log('UserNav', user)

  return (
    <>
      <NavbarContainer>
        {/* <h2 style={{ color: 'yellow' }}>NAVBAR</h2> */}
        <h2>
          <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
            ChatApp
          </Link>
        </h2>
        {user ? (
          <h4 style={{ color: 'orange' }}>logged as {user ? user.login.name : null}</h4>
        ) : (
          <>
            <h4 style={{ color: 'orange' }}>No User Logged! {user ? user.login.name : null}</h4>
          </>
        )}

        {user && (
          <div
            style={{
              display: 'flex',

              fontFamily: 'Nunito',
            }}
          >
            <Link to="/chat-box">
              <Buttons type="submit">Chat Box</Buttons>
            </Link>
            <Buttons type="button" onClick={logoutUser}>
              Logout
            </Buttons>

            <Link to="/register">
              <Buttons>Cadastro</Buttons>
            </Link>
          </div>
        )}
        {!user && (
          <div
            style={{
              display: 'flex',

              fontFamily: 'Nunito',
            }}
          >
            <Link to="/login">
              <Buttons type="submit">Login</Buttons>
            </Link>
            <Link to="/register">
              <Buttons>Cadastro</Buttons>
            </Link>
          </div>
        )}
      </NavbarContainer>
    </>
  )
}

export default NavBar
