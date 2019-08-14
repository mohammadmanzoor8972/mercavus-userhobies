import { takeLatest, put, all } from 'redux-saga/effects'
import { usersService } from '../../services/users.service'
import { TYPES as UsersTypes, ACTIONS as UsersActions } from '../actions/users'

export function* fetchItems() {
  const res = yield usersService.getUsers()
  yield put(UsersActions.itemsFetched(res))
}

export function* usersSaga() {
  yield all([
    takeLatest(UsersTypes.FETCH_USERS, fetchItems),
  ])
}
