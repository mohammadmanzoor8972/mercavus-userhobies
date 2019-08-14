import * as React from 'react'
import { mount } from 'enzyme'
import { UserHobbiesList } from './user-hobbies-list.component'
import { User } from '../../models/user'
import { PassionLevel } from '../../models/passion'

describe('UserHobbiesList component', () => {
  const mockUser: User = {
    id: '123',
    name: 'mock',
    hobbies: [],
  }

  it('should render no hobbies placeholder when no hobbies defined', () => {
    expect(
      mount(<UserHobbiesList user={mockUser} hobbies={mockUser.hobbies} removeHobby={jest.fn()} />)
    ).toMatchSnapshot()
  })

  it('should render hobbies', () => {
    expect(
      mount(<UserHobbiesList user={mockUser} hobbies={[{
        name: 'hobby 1',
        date: 'since now',
        level: PassionLevel.High,
      }, {
        name: 'hobby 2',
        date: 'since big bang',
        level: PassionLevel.VeryHigh,
      }]} removeHobby={jest.fn()} />)
    ).toMatchSnapshot()
  })

  it('should show remove confirmation message', () => {
    window.confirm = jest.fn()
    const removeMock = jest.fn()
    const sut = mount(<UserHobbiesList user={mockUser} hobbies={[{
      name: 'hobby 1',
      date: 'since now',
      level: PassionLevel.High,
    }]} removeHobby={removeMock} />)

    sut.findWhere(x => x.text() === 'x').at(0).simulate('click')
    expect(removeMock).not.toHaveBeenCalled()
  })

  it('should remove hobby on remove button click if user confirms the action ', () => {
    window.confirm = jest.fn(() => true)
    const removeMock = jest.fn()
    const mockHobby = {
      name: 'hobby 1',
      date: 'since now',
      level: PassionLevel.High,
    }
    const sut = mount(<UserHobbiesList user={mockUser} hobbies={[mockHobby]} removeHobby={removeMock} />)

    sut.findWhere(x => x.text() === 'x').at(0).simulate('click')
    expect(removeMock).toHaveBeenCalledWith({user: mockUser, hobby: mockHobby})
  })
})