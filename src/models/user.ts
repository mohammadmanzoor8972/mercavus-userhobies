import { Hobby } from './hobby'

export interface User {
  id: string
  name: string
  hobbies: Hobby[]
}
