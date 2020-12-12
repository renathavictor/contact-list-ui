import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

import { reducers as auth } from '../modules/auth'
import { reducers as categories } from '../modules/categories'

export function * rootSaga () {
  yield all([
    authSagas(),
    apiAuthSagas(),
    coordinatorsSagas(),
    editionsSagas(),
    schoolRequestsSagas(),
    userTestsSagas(),
    questionSagas(),
    questionsSagas(),
    appSagas(),
    rankingSagas(),
    participationsSagas(),
    generateResultsSagas(),
    teamsSagas(),
    notificationsSagas()
  ])
}

export default combineReducers({
  auth,
  categories,
})