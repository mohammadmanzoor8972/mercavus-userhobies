import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import { usersSaga } from './users'

export const rootSaga = function*() {
  try {
    yield all([
      usersSaga(),
    ])
  } catch (e) {
    console.error(e)
  }
}


export const sagaMiddleware = createSagaMiddleware()