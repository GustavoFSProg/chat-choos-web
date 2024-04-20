// import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AuthContext } from '../Context/AuthContext'
import Sidebar from './Sidebar'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import NearMeOutlinedIcon from '@material-ui/icons/NearMeOutlined'
import api from '../api'

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
  background: #000000;
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
  const [messages, setMessages] = useState([])

  const message = localStorage.getItem('message')

  async function getMessages() {
    const ID = localStorage.getItem('messageId')

    const { data } = await api.get(`/get-messages/${ID}`)

    setMessages(data)

    console.log(data[1].text)

    localStorage.setItem('message', data[0].text)

    // alert(data[1].text)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return
  }

  // async function getAllChats() {
  //   const { data } = await api.get(`/get-all-chats`)

  //   setChats(data)
  // }

  useEffect(() => {
    getMessages()
  }, [messages])

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
      <div
        style={{
          display: 'flex',
          // width: '100%',
          // height: '70vh',
          // alignItems: 'center',
          // marginLeft: '120px',
          // justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        {/* <MessageContainer> */}
        <div
          style={{
            display: 'flex',
            width: '53rem',
            height: '91vh',
            alignItems: 'center',
            marginTop: '11px',
            // marginLeft: '120px',
            // justifyContent: 'center',
            background: '#000000',
            flexDirection: 'column',
          }}
        >
          <h3
            style={{
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: '#333333',
              width: '100%',
              height: '3rem',
              marginTop: '-1px',
              fontSize: '15px',
            }}
          >
            {/* {user.login.name} */}
          </h3>
          <p
            style={{
              display: 'flex',
              color: 'white',
              width: '18rem',
              borderRadius: '15px',
              height: '8rem',
              background: 'green',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
            }}
          >
            {messages.map((messages: any) => {
              return (
                <>
                  <p style={{ color: 'white' }}>{messages.text}</p>
                </>
              )
            })}
          </p>
          {/* <h2>
            <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
              MESSAGE BOX
            </Link>
          </h2>
          <div>mensagems</div> */}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <form
            style={{
              display: 'flex',
              marginTop: '-77px',
              width: '100%',
              height: '4.5rem',
              // background: '#0d0d0d',
              background: '#333333',
              alignItems: 'center',
            }}
          >
            <input
              placeholder="Escreva uma mensagem"
              type="text"
              style={{
                display: 'flex',
                width: '82%',
                height: '2.1rem',
                borderRadius: '15px',
                background: 'white',
                marginLeft: '18px',
                alignItems: 'center',
                paddingLeft: '20px',
                fontSize: '14px',
                color: 'gray',
                border: '1px solid gray',
              }}
            />
            <div style={{ marginLeft: '14px', color: 'white' }}>
              <InsertEmoticonIcon style={{ fontSize: '28px' }} />
            </div>
            <button
              style={{
                background: 'none',
                marginLeft: '5px',
                border: 'none',
                width: '32px',
                borderRadius: '100%',
                cursor: 'pointer',
              }}
            >
              <NearMeOutlinedIcon
                style={{
                  background: '#9999ff',
                  fontSize: '20px',
                  paddingTop: '8px',
                  paddingLeft: '8px',
                  paddingRight: '8px',
                  paddingBottom: '8px',
                  borderRadius: '100%',
                  color: 'white',
                }}
              />
            </button>
          </form>
        </div>
      </div>
      {/* </MessageContainer> */}
    </div>
  )
}

export default MessageBox
