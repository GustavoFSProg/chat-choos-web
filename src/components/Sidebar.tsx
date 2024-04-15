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
const SidebarContainer = styled.div`
  display: flex;
  width: 35%;
  height: 89vh;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  background: green;
  padding: 0px;
  font-family: 'Nunito';
  margin-top: -79px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    padding-bottom: 35px;
  }
`
function Sidebar() {
  // const { user, logoutUser } = useContext(AuthContext)
  return (
    <>
      <SidebarContainer>
        <h2>
          <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
            Sidebar
          </Link>
        </h2>
        <div
          style={{
            display: 'flex',

            fontFamily: 'Nunito',
          }}
        ></div>
      </SidebarContainer>
    </>
  )
}

export default Sidebar
