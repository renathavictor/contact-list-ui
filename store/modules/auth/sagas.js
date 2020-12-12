import { takeLatest, all, put, select, call } from 'redux-saga/effects'

import {
  apiSignIn,
  apiSignInSuccessful,
  apiSignInFailure,
  fetchUserSuccessful,
  reloadUser,
  modalMessage,
  refreshToken
} from './index'

import * as services from './services'
import { getEditions } from './../editions/services'

function * fetchUserRequest ({ payload }) {
  try {
    const { apiAuth } = yield select()
    const userId = payload || apiAuth.user.id
    const response = yield call(services.fetchUser, userId)
    yield put(fetchUserSuccessful(response.data))
  } catch (e) {
    console.error(e)
  }
}

export function * apiSignInRequest ({ payload }) {
  try {
    const { auth } = yield select()
    const response = yield call(services.signIn, payload || auth.user.token)
    yield call(fetchUserRequest, { payload: response.data.data.id })
    yield put(apiSignInSuccessful())
  } catch (e) {
    console.error(e)
    yield put(apiSignInFailure())
  }
}

export function * verifyDataFromUser (payload) {
  try {
    const { editions } = yield select()
    const { phone, birthday, gender } = payload
    const listEditions = yield call(getEditions, editions.list.pagination)
    const userHasInscription = listEditions.data.find(inscription => inscription.inscriptions[0])
    if (userHasInscription && process.env.REACT_APP_PROJECT_ID === '50' && (!phone || !payload.taxpayer_number || !birthday || !gender)) {
      yield put(modalMessage())
    }
  } catch (e) {
    console.error(e)
  }
}

function * watchApiSignIn () {
  yield takeLatest(apiSignIn, apiSignInRequest)
}

function * watchReloadUser () {
  yield takeLatest(reloadUser, fetchUserRequest)
}

function * watchRefreshToken () {
  yield takeLatest(refreshToken, fetchUserRequest)
}

export default function * () {
  yield all([
    watchApiSignIn(),
    watchReloadUser(),
    watchRefreshToken()
  ])
}
