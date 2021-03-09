import 'node-fetch'
import fetchMock from 'fetch-mock'
import { expect } from 'chai'
import {loadToDos} from '../todos/thunks'
import sinon from 'sinon'


//make sure tests dispatch actions at the right time
//make sure the correct external requests are done


describe("The loadToDos thunk:", () => {
  it("Dispatches the correct actions in the sucess scenario", async () => {
    const fakeDispatch = sinon.spy()
    
    const fakeToDos = [{text: "1"}, {text: "2"}]
    fetchMock.get('http://localhost:8080/todos', fakeToDos)
    
    const expectedFirstAction = { type: 'LOAD_TODOS_IN_PROGRESS' }
    const expectedSecondAction = {
      type: "LOAD_TODOS_SUCCESS",
      payload: {
        toDos: fakeToDos,
      },
    }
    
    await loadToDos()(fakeDispatch)
    
    expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFirstAction)
    expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondAction)
    
    fetchMock.reset()
    
  })
} )

