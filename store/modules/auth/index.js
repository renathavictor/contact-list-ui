import { createReducer, createAction } from 'redux-starter-kit'
import { createStructuredSelector, createSelector } from 'reselect'
import moduleSagas from './sagas'

export const authSignUp = createAction('auth/SIGN_UP')
export const authSignUpSuccessful = createAction('auth/SIGN_UP_SUCCESSFUL')
export const authSignUpFailure = createAction('auth/SIGN_UP')
export const authSignIn = createAction('auth/SIGN_IN_FAILURE')
export const authSignInSuccessful = createAction('auth/SIGN_IN_SUCCESSFUL')
export const authSignInFailure = createAction('auth/SIGN_IN_FAILURE')
export const rehydrateCredentials = createAction('auth/REHYDRATE_CREDENTIALS')

const initialState = {
  user: null,
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  error: null
}

const auth = createReducer(initialState, {
  //  load user

  // register user

  // login user

  // logout

  // clear errors

})

export const reducers = auth
export const sagas = moduleSagas
