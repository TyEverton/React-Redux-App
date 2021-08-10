import * as types from "./actionTypes"
import * as courseApi from "../../api/courseApi"

export function createCourse(course) {
  return {type: types.CREATE_COURSE, course}
} //line 1-3 is an action creator. all actions must have a type property (in this one its CREATE_COURSE)

export function loadCourseSuccess(courses) {
  return {type: types.LOAD_COURSES_SUCCESS, courses}
}

export function loadCourses() {
  return function(dispatch) {
    return courseApi.getCourses().then(courses => {
      dispatch(loadCourseSuccess(courses))
    }).catch(error => {
      throw error
    })
  }
}

