import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://localhost:5000',

  baseURL: 'https://chat-choos-api.vercel.app/',
})

export default api
