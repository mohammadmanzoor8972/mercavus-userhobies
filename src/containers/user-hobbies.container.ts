import { connect } from 'react-redux'
import { AppState } from '../redux/reducers'
import { ACTIONS } from '../redux/actions/users'
import { getSelectedUser, getSelectedUserHobbies } from '../redux/reducers/users'
import { UserHobbies } from '../components/users-hobies'

const mapStateToProps = ({users}: AppState) => ({
  user: getSelectedUser(users),
  hobbies: getSelectedUserHobbies(users),
})

const mapDispatchToProps = {
  addHobby: ACTIONS.addHobby,
  removeHobby: ACTIONS.removeHobby,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserHobbies as any)
