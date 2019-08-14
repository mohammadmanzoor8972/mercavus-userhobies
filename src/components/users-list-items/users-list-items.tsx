import * as React from 'react';
import { User } from '../../models/user';
import * as styles from './users-list-items.scss';
import classnames from 'classnames';

interface userListItemProps {
  user:User,
  isSelected:boolean,
  selectUser(id:string):void
}

export const UserListItem = ({user, isSelected, selectUser}: userListItemProps) => (
  <div
    className={classnames({
      [styles.container]: true,
      [styles.selected]: isSelected
    })}
    onClick={() => selectUser(user.id)}
  >
    {user.name}
  </div>
)
