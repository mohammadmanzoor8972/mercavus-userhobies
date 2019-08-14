import { User } from '../models/user'
import { Hobby } from '../models/hobby';
import { guid } from '../utilities/guid';
import { users } from './users.data';

export interface IUsersService {
  getUsers(): Promise<User[]>
  createUser(name: string, hobbies?: Hobby[]): User
}

export const usersService: IUsersService = {
  getUsers(): Promise<User[]> {
    return new Promise((resolve) => setTimeout(() => resolve(users), 500))
  },

  createUser(name: string, hobbies: Hobby[] = []): User {
    return {
      id: guid(),
      name,
      hobbies,
    }
  }
}
