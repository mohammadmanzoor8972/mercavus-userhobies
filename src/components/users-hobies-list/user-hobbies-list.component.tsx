import * as React from 'react'
import * as classnames from 'classnames'
import { User } from '../../models/user'
import { Hobby } from '../../models/hobby'
import * as styles from './user-hobbies-list.scss'

export interface UserHobbiesListProps {
  user: User
  hobbies: Hobby[]
  removeHobby({user, hobby}: {user: User, hobby: Hobby}): void
}

interface NoHobbiesPlaceholderProps {
  user: User
}

const NoHobbiesPlaceholder = ({user}: NoHobbiesPlaceholderProps) =>
  <span>{`Press add button to add hobby!`}</span>



export const UserHobbiesList = ({user, hobbies, removeHobby}: UserHobbiesListProps) => {
  
  
  if (!hobbies.length) {
    return (
      <div className={classnames(styles.container, styles.containerEmpty)}>
        <NoHobbiesPlaceholder user={user}/>
      </div>
    )
  }

  return (<div className={styles.container}>
    {
      hobbies.map(hobby => (
        <div key={`${hobby.name}-${hobby.level}`} className={styles.item}>
          <span className={styles.level}>{hobby.level}</span>
          <span className={styles.name}>{hobby.name}</span>
          <span className={styles.date}>{hobby.date}</span>
          <button className={styles.deleteBtn} onClick={() => {
            if (confirm(`Are you sure you want to delete ${user.name}'s hobby ${hobby.name}`)) {
              removeHobby({user, hobby})
            }
          
          }}>x</button>
        </div>
      ))
    }
  </div>)
}