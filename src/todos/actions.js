// ACTION TYPES used as switch case in reducers 
export const CREATE_TODO = "CREATE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";  
export const ISCOMPLETED_TODO = "ISCOMPLETED_TODO"  



// ACTION CREATORS used in connected components 
export const createToDo = (text) => ({
  type: CREATE_TODO,
  payload: { text },
});

export const removeToDo = (text) => ({    
  type: REMOVE_TODO,
  payload: {text}
}); 

export const markToDoAsComplete = (text) => ({      
  type: ISCOMPLETED_TODO,   
  payload: {text}
})
