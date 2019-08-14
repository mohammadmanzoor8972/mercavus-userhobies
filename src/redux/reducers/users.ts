import { ActionWithPayload } from '../../models/common'
import { TYPES } from '../actions/users'
import { User } from '../../models/user'
import { usersService } from '../../services/users.service'

export interface IUsersState {
  users: User[]
  isLoading: boolean
  selectedUserId: string
}

const initialState: IUsersState = {
  users: [],
  isLoading: false,
  selectedUserId: '',
}

export const usersReducer = (
  state = initialState,
  action: ActionWithPayload<any>
): IUsersState => {
  switch (action.type) {
    case TYPES.FETCH_USERS:
      return {
        ...initialState,
        isLoading: true,
      }

    case TYPES.USERS_FETCHED:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      }

    case TYPES.ADD_USER:
      return {
        ...state,
        users: [
          ...state.users,
          usersService.createUser(action.payload),
        ],
      }

    case TYPES.SELECT_USER:
      return {
        ...state,
        selectedUserId: action.payload
      }

    case TYPES.ADD_HOBBY:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id !== state.selectedUserId) {
            return u
          }

          u.hobbies = [...u.hobbies, action.payload.hobby]
          return u
        })
      }

    case TYPES.REMOVE_HOBBY:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id !== state.selectedUserId) {
            return u
          }

          u.hobbies = [...u.hobbies.filter(h => h.name !== action.payload.hobby.name)]
          return u
        })
      }

    default:
      return state
  }
}

const findUserById = (users: User[]) => (userId: string) => users.find(u => u.id === userId)

export const getUsers = (state: IUsersState) => state.users
export const getIsLoading = (state: IUsersState) => state.isLoading
export const getSelectedUserId = (state: IUsersState) => state.selectedUserId
export const getSelectedUser = (state: IUsersState) => findUserById(getUsers(state))(getSelectedUserId(state))
export const getSelectedUserHobbies = (state: IUsersState) => getSelectedUserId(state) ? getSelectedUser(state).hobbies : []
