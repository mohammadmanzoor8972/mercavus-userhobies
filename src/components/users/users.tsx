import * as React from 'react'
import { User } from '../../models/user'
import * as styles from './users.scss'
import { UsersList } from '../users-list';

export interface UsersProps {
  users: User[]
  selectedUserId: string
  loadUsers(): void
  addUser(name: string): void
  selectUser(id: string): void
}

export const Users = ({
  users,
  loadUsers,
  addUser,
  selectUser,
  selectedUserId,
}: UsersProps) => {

  const [newUserName, setNewUserName] = React.useState('')

  const onAddUser = () => {
    if(newUserName!="")
    addUser(newUserName)
    setNewUserName('')
  }

  React.useEffect(() => {
    loadUsers()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          type='text'
          placeholder='Enter user name'
          value={newUserName}
          onChange={({target: {value}}: React.ChangeEvent<HTMLInputElement>) => setNewUserName(value)}
          onKeyDown={(e)=> {
            
            if(e.keyCode==13){
              onAddUser()
            }
          }}
          className={styles.inputContainerField}
        />
        <button onClick={onAddUser}>Add</button>
      </div>
      <UsersList
        users={users}
        selectedUserId={selectedUserId}
        selectUser={selectUser}
      />
    </div>
  )
}