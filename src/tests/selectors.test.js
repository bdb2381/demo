import {expect} from 'chai'
import {getCompletedToDos} from '../todos/selectors'

describe("The getCompletedToDos selector:", () => {
  it("Returns only completed toDos", () => {
    const fakeToDos = [ {
      text: "hi",
      isCompleted: true
    },
      {
        text: "Hello and Goodbye",
        isCompleted: false
      },
      {
        test: "More Text",
        isCompleted: false,
        
      },
    ]
    
    const expected = [ {
      text: "hi",
      isCompleted: true
    } ]
    
    //resultFunc comes from Reselect and grabs the last function in the selector, in this case, the filter
    const actual = getCompletedToDos.resultFunc(fakeToDos)  
    
    expect(actual).to.deep.equal(expected)
    
  })

})
