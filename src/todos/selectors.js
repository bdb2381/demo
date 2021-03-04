import {createSelector} from 'reselect'

export const getToDos = (state) => state.toDos.data
export const getToDosLoading = (state) => state.toDos.isLoading
export const getIncompleteToDos = (state) => createSelector(
  getToDos,
  (toDos) => toDos.filter(toDo => !toDo.isCompleted),
)
