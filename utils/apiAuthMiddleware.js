import once from 'lodash/once'
import isEmpty from 'lodash/isEmpty'
import { createAction } from '@reduxjs/toolkit'

const parseHeader = headers => ({
  'Content-type': 'application/json',
  token: headers['token']
})

export const signIn = createAction('auth/SIGN_IN')
export const signInFailure = createAction('auth/SIGN_IN_FAILURE')
export const rehydrateCredentials = createAction('auth/REHYDRATE_CREDENTIALS')

export const apiAuthMiddlewaresFactory = instance => {
  const credentialsOnResponseInterceptor = once((store, next) =>
    instance.interceptors.response.use(response => {
      if (!isEmpty(response.headers['token'])) {
        const credentials = parseHeader(response.headers)
        store.dispatch(rehydrateCredentials(credentials))
      }
      return response
    }, error => {
      if (error.response && error.response.status === 401) {
        next(logout())
      }
      if (error.respose && !isEmpty(error.response.headers['token'])) {
        const credentials = parseHeader(error.response.headers)
        store.dispatch(rehydrateCredentials(credentials))
      }
      return Promise.reject(error)
    })
  )
  const credentialsOnRequestInterceptor = once(store =>
    instance.interceptors.request.use(config => {
      const state = store.getState()
      const credentials = state.apiAuth.credentials
      if (credentials) {
        config.headers['client'] = credentials.client
        config.headers['uid'] = credentials.uid
        config.headers['token'] = credentials.token
      }
      return config
    }, error => Promise.reject(error))
  )

  const getCredentialsOnResponse = store => next => action => {
    credentialsOnResponseInterceptor(store)
    next(action)
  }

  const setCredentialsOnRequest = store => next => action => {
    credentialsOnRequestInterceptor(store)
    next(action)
  }

  return {
    getCredentialsOnResponse,
    credentialsOnRequestInterceptor
  }
}
