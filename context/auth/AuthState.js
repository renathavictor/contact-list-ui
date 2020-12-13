import React, { useReducer } from 'react'

import api from '../../utils/api'
import AuthContext from './authContext'
import authReducer from './authReducer'
import setAuthToken from '../../utils/setAuthToken'
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../types'

const AuthState = props => {
  const initialState = {
    user: null,
    token: typeof window === 'undefined' ? null : localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    error: null
  }

  const [state, dispatch] = useReducer(authReducer, initialState)
  //  load user
  const loadUser = async () => {
    setAuthToken(localStorage.token)

    try {
      // testar com o login para ver se funciona
      const res = await api.get('/auth')
      console.log('RESPONSE ', res)
      // const res = await api.post('/auth/login', { email: state.user.email, password: state.user.password })
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    } catch (error) {
      dispatch({ type: AUTH_ERROR })
    }
  }

  // register user
  const register = async formData => {
    const config = {
      headers: { 'Content-Type': 'application/json' }
    }
    try {
      const res = await api.post('/users/signup', formData, config)
      console.log('res => ', res)
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })

      loadUser()
    } catch (error) {
      console.log('ERROR ', error)
      dispatch({
        type: REGISTER_FAIL,
        payload: error.response.data
      })
    }
  }
  

  // login user
  const login = async formData => {
    console.log('testar')
    const config = {
      headers: { 'Content-Type': 'application/json' }
    }
    try {
      const res = await api.post('/auth/login', formData, config)
      console.log('res => ', res)
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })

      loadUser()
    } catch (error) {
      console.log('ERROR ', error)
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data
      })
    }
  }

  // logout
  const logout = () => dispatch({ type: LOGOUT })

  // clear errors,
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS })

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        login,
        logout,
        clearErrors
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState
