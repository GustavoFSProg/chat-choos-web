// import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AuthContext } from '../Context/AuthContext'
import avatar from '../assets/avatar.jpg'
import api from '../api'

const Buttons = styled.button`
  width: 4.8rem;
  height: 1.5rems;
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
const SidebarContainer = styled.div`
  display: flex;
  width: 26rem;
  height: 91vh;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  background: #1a1a1a;
  /* background: pink; */
  padding: 0px;
  font-family: 'Nunito';
  margin-top: 9px;
  /* margin-right: 500px; */
  margin-left: -125px;
  overflow-y: scroll;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    padding-bottom: 35px;
  }
`

const BoxContainer = styled.div`
  display: flex;
  width: 100%;
  height: 7rem;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background: darkgray;
  padding: 0px;
  font-family: 'Nunito';
  background: #404040;
  padding-bottom: 7px;
  color: #bfbfbf;
  margin-left: -7px;

  margin-top: 2px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    padding-bottom: 35px;
  }
`

const AvatarNameContainer = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  justify-content: center;
  flex-direction: row;
  /* align-items: flex-start;  */
  padding: 0px;
  font-family: 'Nunito';
  margin-left: -70px;
`

// main::-webkit-scrollbar {
//   width: 0.25rem;
// }

// main::-webkit-scrollbar-track {
//   background: #1e1e24;
// }

// main::-webkit-scrollbar-thumb {
//   background: #6649b8;
// }

// poikmnhgt
function Sidebar() {
  const [chats, setChats] = useState([])
  const [messages, setMessages] = useState([])

  async function getMessages(id) {
    const { data } = await api.get(`/get-messages/${id}`)

    setMessages(data)

    console.log(data[1].text)
    alert(data[1].text)
  }

  async function getAllChats() {
    const { data } = await api.get(`/get-all-chats`)

    setChats(data)
  }

  useEffect(() => {
    getAllChats()
  }, [])
  return (
    <>
      <SidebarContainer>
        {chats.map((items) => {
          return (
            <BoxContainer>
              <AvatarNameContainer>
                <img src={avatar} width="57" height="57" />
                <p style={{ marginLeft: '18px', marginTop: '-8px' }}>Gustavo Sohne</p>
              </AvatarNameContainer>

              <div
                style={{
                  display: 'flex',
                  width: '25%',
                  height: '9rem',
                  // background: 'pink',
                  flexDirection: 'column',
                  marginLeft: '-10px',
                  marginTop: '80px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    color: 'white',
                    width: '20%',
                    height: '1.15rem',
                    background: 'green',
                    borderRadius: '100%',
                    justifyContent: 'center',
                    fontSize: '12px',

                    alignItems: 'center',
                    marginLeft: '35px',
                    // marginTop: '60px',
                    paddingTop: '3px',
                    paddingBottom: '3px',
                    paddingLeft: '3px',
                    paddingRight: '3px',
                  }}
                >
                  1
                </div>
                <div
                  style={{
                    width: '70%',
                    // marginLeft: '90px',
                    marginTop: '35px',
                    fontSize: '12px',
                  }}
                >
                  10/05/2024
                </div>
                <button onClick={() => getMessages(items.id)}>{items.id}</button>
              </div>
            </BoxContainer>
          )
        })}

        {/* <BoxContainer style={{ marginTop: '5px' }}>
          <AvatarNameContainer>
            <img src={avatar} width="57" height="57" />
            <p style={{ marginLeft: '18px', marginTop: '-8px' }}>Sieley M. Coelho</p>
          </AvatarNameContainer>

          <div
            style={{
              display: 'flex',
              width: '25%',
              height: '9rem',
              // background: 'pink',
              flexDirection: 'column',
              marginLeft: '-10px',
              marginTop: '80px',
            }}
          >
            <div
              style={{
                display: 'flex',
                color: 'white',
                width: '20%',
                height: '1.15rem',
                background: 'green',
                borderRadius: '100%',
                justifyContent: 'center',
                fontSize: '12px',

                alignItems: 'center',
                marginLeft: '35px',
                // marginTop: '60px',
                paddingTop: '3px',
                paddingBottom: '3px',
                paddingLeft: '3px',
                paddingRight: '3px',
              }}
            >
              3
            </div>
            <div
              style={{
                width: '70%',
                // marginLeft: '90px',
                marginTop: '35px',
                fontSize: '12px',
              }}
            >
              10/05/2024
            </div>
          </div>
        </BoxContainer> */}

        {/* <h2>
          <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
            Sidebar
          </Link>
        </h2> */}
      </SidebarContainer>
    </>
  )
}

export default Sidebar
