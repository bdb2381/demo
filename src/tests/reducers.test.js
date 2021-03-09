import { expect } from 'chai'
import { toDos } from '../todos/reducers'

describe("The toDos Reducer", () => {
  it('Adds a new toDo when CREATE_TODO action is received', () => {
    const fakeToDo = { text: "hello", isCompleted: false }
    const fakeAction = {
      type: 'CREATE_TODO',
      payload: {
        toDo: fakeToDo
      }
    }
    const originalState = {
      isLoading: false,
      data: []
    }
    const expected = {
      isLoading: false,
      data: [ fakeToDo ]
    }
    const actual = toDos(
      originalState, 
      fakeAction
    )
    
    expect(actual).to.deep.equal(expected)
    
    
    
  })
})
