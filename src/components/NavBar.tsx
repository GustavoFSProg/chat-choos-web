// import { Link } from 'react-router-dom'
import styled from 'styled-components'

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

function NavBar() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-around',
          flexDirection: 'row',
          alignItems: 'center',
          background: 'black',
          padding: '0px',
          fontFamily: 'Nunito',
        }}
      >
        {/* <h2 style={{ color: 'yellow' }}>NAVBAR</h2> */}

        <h2 style={{ color: 'white' }}>ChatApp</h2>
        <h4 style={{ color: 'orange' }}>logged in as Charles</h4>
        <div
          style={{
            display: 'flex',

            fontFamily: 'Nunito',
          }}
        >
          <Buttons type="submit">Login</Buttons>
          <Buttons>Register</Buttons>
        </div>
      </div>
    </>
  )
}

export default NavBar
