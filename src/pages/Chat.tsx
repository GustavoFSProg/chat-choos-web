import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'

function Chat() {
  return (
    <>
      <NavBar />

      <div>
        <h2>CHAT</h2>
        <Link to="/">HOME</Link>
      </div>
    </>
  )
}

export default Chat
