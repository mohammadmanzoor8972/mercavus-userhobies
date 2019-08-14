import { combineReducers } from 'redux'
import { usersReducer, IUsersState } from './users'

export interface AppState {
  users: IUsersState
}

export const rootReducer = combineReducers({
  users: usersReducer,
})