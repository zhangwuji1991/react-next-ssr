import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const exampleInitialState = {
  todos:["redux"]
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const todos = state.todos.slice(0)
      todos.push(action.payload)
      return Object.assign({},state,{
        todos
      })
    default:
      return state
  }
}

export function initializeStore (initialState = exampleInitialState) {
  return createStore(reducer,initialState)
}
