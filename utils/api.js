import axios from 'axios'

// require('dotenv').config()

// const {
//   REACT_APP_PROJECT_ENDPOINT,
//   REACT_APP_API_ENV
// } = process.env

const backendHosts = {
  'development': 'http://localhost:3000',
  // 'production': REACT_APP_PROJECT_ENDPOINT
}

// const currentHost = backendHosts[REACT_APP_API_ENV] || 'http://localhost:3000'

const api = axios.create({
  baseURL: 'http://localhost:3000'
})

export default api
