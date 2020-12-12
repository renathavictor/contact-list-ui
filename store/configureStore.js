import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import { sagas as categorySaga } from '../store/modules/categories'
import { sagas as authSaga } from '../store/modules/auth'

const sagaMiddleware = createSagaMiddleware()

// adicionar o apiAuthMiddleware



const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(categorySaga)

export default store