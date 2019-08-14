import { createAction } from 'redux-actions'

export const TYPES = {
  FETCH_USERS: 'users/FETCH_USERS',
  USERS_FETCHED: 'users/USERS_FETCHED',
  ADD_USER: 'users/ADD_USER',
  SELECT_USER: 'user/SELECT_USER',
  ADD_HOBBY: 'user/ADD_HOBBY',
  REMOVE_HOBBY: 'user/REMOVE_HOBBY',
}

export const ACTIONS = {
  fetchItems: createAction(TYPES.FETCH_USERS),
  itemsFetched: createAction(TYPES.USERS_FETCHED),
  addItem: createAction(TYPES.ADD_USER),
  selectUser: createAction(TYPES.SELECT_USER),
  addHobby: createAction(TYPES.ADD_HOBBY),
  removeHobby: createAction(TYPES.REMOVE_HOBBY),
}
