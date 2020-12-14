import axios from 'axios'

// require('dotenv').config()

// const {
//   REACT_APP_PROJECT_ENDPOINT,
//   REACT_APP_API_ENV
// } = process.env

const urls = {
  'development': 'http://localhost:3000',
  'production': 'http://localhost:3000'
}

// const currentHost = backendHosts[REACT_APP_API_ENV] || 'http://localhost:3000'

const api = axios.create({
  baseURL: urls[process.env.NODE_ENV] || urls['development'],
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export default api
