import * as types from "../actions/actionTypes"

export default function authorReducer(state = [], action) {
  switch(action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors
  default: 
    return state
  }
}
//all reducers must take state and action as their arguments. this one, state is initializing an empty array
//line 5/6-default acts as an "else" statement
