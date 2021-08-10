import * as types from "../actions/actionTypes"

export default function courseReducer(state = [], action) {
  switch(action.type) {
    case types.CREATE_COURSE:
      return [...state, {...action.course}]
    case types.LOAD_COURSES_SUCCESS:
      return action.courses
  default: 
    return state
  }
}
//all reducers must take state and action as their arguments. this one, state is initializing an empty array
//line 3-uses CREATE_COURSE which is a course action in the courseActions file
//line 4-uses spread operator to clone original state, and also clone the new state that was passed in with action.course. it will then return both of those states as one new state / array
//line 5/6-default acts as an "else" statement
