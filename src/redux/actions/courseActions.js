import * as types from "./actionTypes"

export function createCourse(course) {
  return {type: types.CREATE_COURSE, course}
} //line 1-3 is an action creator. all actions must have a type property (in this one its CREATE_COURSE)

