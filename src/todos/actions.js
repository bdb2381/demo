// ACTION TYPES used as switch case in reducers 
export const CREATE_TODO = "CREATE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";  
export const ISCOMPLETED_TODO_STARTED = "ISCOMPLETED_TODO_STARTED"
export const ISCOMPLETED_TODO = "ISCOMPLETED_TODO"
export const ISCOMPLETED_TODO_FAILED = "ISCOMPLETED_TODO_FAILED"  
export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS'
export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS'
export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE'


// ACTION CREATORS used in connected components 
export const createToDo = (toDo) => ({
  type: CREATE_TODO,
  payload: { toDo },
});

export const removeToDo = (id) => ({    
  type: REMOVE_TODO,
  payload: {id}
}); 

export const markToDoAsCompleteStarted = () => ({
  type: ISCOMPLETED_TODO_STARTED
})


export const markToDoAsComplete = (completedToDo) => ({      
  type: ISCOMPLETED_TODO,   
  payload: {completedToDo}
})

export const loadToDosInProgress = () => ({
  type: LOAD_TODOS_IN_PROGRESS,
})

export const loadToDosSuccess = (toDos) => ({
  type: LOAD_TODOS_SUCCESS,
  payload: {toDos}
})

export const loadToDosFailure = () => ({
  type: LOAD_TODOS_FAILURE,
})
