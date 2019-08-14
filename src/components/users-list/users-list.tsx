import * as React from 'react'
import * as classnames from 'classnames'
import * as styles from './users-list.scss'
import { User } from '../../models/user'
import { UserListItem } from '../users-list-items'

export const UsersList = ({
  users,
  selectedUserId,
  selectUser,
}: any) => {
  if (users.length==0) {
    return (
      <div className={classnames(styles.container, styles.containerLoading)}>
        <span>loading users...</span>
      </div>
    )
  }
  return (
    <div className={styles.container}>
      {
        users.map((user: User) => 
          <UserListItem
            key={`${user.id}-${user.name}`}
            user={user}
            isSelected={user.id === selectedUserId}
            selectUser={selectUser}
          />
        )
      }
    </div>
  )
}
