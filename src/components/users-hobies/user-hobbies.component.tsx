import * as React from 'react'
import { User } from '../../models/user'
import { Hobby } from '../../models/hobby'
import * as classnames from 'classnames'
import * as styles from './user-hobbies.scss'
import { UserHobbiesList } from '../users-hobies-list'
import { PassionLevel } from '../../models/passion';

export interface UserHobbiesProps {
  user: User
  hobbies: Hobby[]
  addHobby({user, hobby}: {user: User, hobby: Hobby}): void
  removeHobby({user, hobby}: {user: User, hobby: Hobby}): void
}




export class UserHobbies extends React.Component<UserHobbiesProps> {

public state:any = {
  level:PassionLevel.Low,
  hobby:"",
  year:""
}

private tryAddHobby(user:User) {

  if (this.props.hobbies.find(hobby => hobby.name.toLowerCase() === this.state.hobby.trim().toLowerCase())) {
    alert(`This hobby "${this.state.hobby}" already exists in the hobbies list`)
    return
  }
  if(this.state.hobby)
  this.props.addHobby({user, hobby: {name: this.state.hobby, level:this.state.level, date: this.state.year}})
}  

public render(){
  const {level, hobby, year} = this.state;
  const {user, hobbies, removeHobby} = this.props;


  if (!user) {
    return (
      <div className={classnames(styles.container, styles.containerEmpty)}>
          <span>Select a user from the users list...</span>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <select value={level} onChange={({target: {value}}) => this.setState({level:value})}  className={styles.inputContainerField}>
          {Object.values(PassionLevel).map(lvl =>
            <option key={lvl} value={lvl}>{lvl}</option>
          )}
        </select>
        <input
          type='text'
          value={hobby}
          onChange={({target: {value}}: React.ChangeEvent<HTMLInputElement>) => this.setState({hobby:value})}
          placeholder='Enter user hobby'
          className={styles.inputContainerField}
        />
        <input
          type='text'
          value={year}
          onChange={({target: {value}}: React.ChangeEvent<HTMLInputElement>) => this.setState({year:value})}
          placeholder='Enter year'
          className={styles.inputContainerField}
        />
        <button onClick={()=>{this.tryAddHobby(user)}}>Add</button>
      </div>
      <UserHobbiesList
        user={user}
        hobbies={hobbies}
        removeHobby={removeHobby}
      />
    </div>
  );
}
} 
