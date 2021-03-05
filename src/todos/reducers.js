import {
  CREATE_TODO,
  REMOVE_TODO,
  ISCOMPLETED_TODO,
  ISCOMPLETED_TODO_STARTED,
  ISCOMPLETED_TODO_FAILED,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,  
} from "./actions";


// export const isLoading = (state = false, action) => {
//   const {
//     type,
//     payload,
//   } = action

//   switch (type) {
//     case LOAD_TODOS_IN_PROGRESS: {
//       return true
//     }

//     case LOAD_TODOS_SUCCESS: {
//       return false
//     }
//     case LOAD_TODOS_FAILURE: {
//       return false 
//     }
//     default: {
//       return state
//     }
//   }
// }

const initialState = { isLoading: false, data: [] }


export const toDos = (state = initialState, action) => {
  const { 
    type, 
    payload, 
  } = action;

  switch (type) {
    case CREATE_TODO: {
      const {toDo} = payload
      return {
        ...state,
        data: state.data.concat(toDo),
      }
    }
    
    case REMOVE_TODO: {
      const {id} = payload
      return {
        ...state,
        data: state.data.filter(toDo => toDo.id !== id)
      }
    }
      
    case ISCOMPLETED_TODO: {
      const { completedToDo } = payload
      return {
        ...state,
        data: state.data.map(toDo => {
          if (toDo.id === completedToDo.id) {
            return {...toDo, isCompleted: true}
          }
          return toDo
      })}
    }
    
    case LOAD_TODOS_SUCCESS: {
      const { toDos } = payload
      return {
        ...state,
        isLoading: false, 
        data: toDos,
      }
    }

    case LOAD_TODOS_IN_PROGRESS:
      return {
        ...state,
        isLoading: true
      }
      case LOAD_TODOS_FAILURE:            
      return {
        ...state,
        isLoading: false
      }
      case ISCOMPLETED_TODO_STARTED:
      case ISCOMPLETED_TODO_FAILED:
      default:
        return state;
      }
};
