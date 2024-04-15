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
const MessageContainer = styled.div`
  display: flex;
  width: 97%;
  height: 89vh;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  background: #000000;
  padding: 0px;
  font-family: 'Nunito';
  margin-left: 2px;
  margin-top: 11px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    padding-bottom: 35px;
  }
`
function MessageBox() {
  // const { user, logoutUser } = useContext(AuthContext)
  return (
    <>
      <MessageContainer>
        <h2>
          <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
            MESSAGE BOX
          </Link>
        </h2>
        <div
          style={{
            display: 'flex',
            fontFamily: 'Nunito',
          }}
        ></div>
      </MessageContainer>
    </>
  )
}

export default MessageBox
