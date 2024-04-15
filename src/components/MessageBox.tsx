// import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AuthContext } from '../Context/AuthContext'
import App from '../App'
import Login from '../pages/Login'
import MainChat from '../pages/MainChat'
import Sidebar from './Sidebar'

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
  width: 50%;
  height: 89vh;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  background: #000000;ewq7wq7qwqe7qqq
  padding: 0px;
  font-family: 'Nunito';
  /* margin-left: 222px; */
  margin-top: 11px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    padding-bottom: 35px;
  }
`
function MessageBox() {
  const { user, logoutUser } = useContext(AuthContext)
  return (
    // <div style={{ display: 'flex', width: '100vw' }}>
    <div
      style={{
        display: 'flex',
        // width: '100%',
        // height: '70vh',
        // alignItems: 'center',
        // marginLeft: '120px',
        // justifyContent: 'center',
        // flexDirection: 'column',
      }}
    >
      <Sidebar />
      {/* <MessageContainer> */}
      <div
        style={{
          display: 'flex',
          width: '53rem',
          height: '91vh',
          alignItems: 'center',
          marginTop: '11px',
          // marginLeft: '120px',
          justifyContent: 'center',
          background: '#000000',
        }}
      >
        <h3 style={{ color: 'white' }}>{user.login.name}</h3>
        <h2>
          <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
            MESSAGE BOX
          </Link>
        </h2>
      </div>
      {/* </MessageContainer> */}
    </div>
  )
}

export default MessageBox
