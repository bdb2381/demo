import { expect } from 'chai'
import { toDos } from '../todos/reducers'

describe("The toDos Reducer", () => {
  it('Adds a new toDo when CREATE_TODO action is received', () => {
    const fakeToDo = {
      text: "hello",
      isCompleted: false
    }
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

// describe("The ISCOMPLETED_TODO reducer:", () => {
//   it("Marks a toDo as completed", () => {
//     const toDo = {
//       text: "Learn about React Ecosystems",
//       isCompleted: false,
//     }
//     const completedToDo = {
//       text: "Learn about React Ecosystems",
//       isCompleted: true,
//     }
//     const fakeAction = {
//       type: "ISCOMPLETED_TODO",
//       payload: toDo
      
//     }
//     const originalState = {
//       data: [toDo]
//     }
//     const expected = {
//       data: [completedToDo],
//     }
//     const actual = toDos(
//       originalState,
//       fakeAction
//     )
    
//     expect(actual).to.equal(expected)
//     actual.should.have.property('toDo')
//   }) 
// })
