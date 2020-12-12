import { all, call, put, takeLatest } from 'redux-saga/effects'

import {
  findCategories,
  findCategoriesSuccessful,
  findCategoriesFailure
} from './index'
import * as services from './services'

export function * getCategoriesRequest(payload) {
  try {
    yield console.log('payload ==== ', payload)
    const response = yield call(services.getCategories, payload)
    yield put(findCategoriesSuccessful(response.data))
    yield console.log('RESPONSE == ', response)
  } catch (error) {
    yield console.error(error)
    yield put(findCategoriesFailure(error))
  }
}

function * watchGetCategoriesRequest() {
  yield takeLatest(findCategories, getCategoriesRequest)
}

export default function * () {
  yield all([
    watchGetCategoriesRequest()
  ])
}
