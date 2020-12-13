import React, { useContext, useEffect } from 'react'

import AuthContext from '../context/auth/authContext'

const Home = () => {
  const authContext = useContext(AuthContext)

  useEffect(() => {
    authContext.loadUser()
  }, [])

  return (
    <div>
      home
    </div>
  )
}

export default Home
