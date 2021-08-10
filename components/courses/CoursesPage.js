import React from "react"
import {connect} from "react-redux"
import * as courseActions from "../../src/redux/actions/courseActions"
import * as authorActions from "../../src/redux/actions/authorActions"
import PropTypes from "prop-types"
import {bindActionCreators} from "redux"
import CourseList from "./CourseList"


class CoursesPage extends React.Component {
  componentDidMount() {
    if(this.props.courses.length === 0) {
    this.props.actions.loadCourses().catch(error => {
      alert("Loading courses failed" + error)
    })
  } 

  if(this.props.authors.length === 0) {
  this.props.actions.loadAuthors().catch(error => {
    alert("Loading authors failed" + error)
  })
    }
  }

  render() {
    return (
      <div>
        <h2>Courses</h2>
        <CourseList courses={this.props.courses} />
        
      </div>
    )
  }
}
// {this.props.courses.map(course => 
//   <div key={course.title}>{course.title}</div> //keys help React keep track of the element inside of an array */

  // handleChange = event => {
  //   const course = {...this.state.course, title: event.target.value} 
  //   this.setState({course})
  // }
//the above code is used object spread to copy the state, overwrote the title by setting it to target.value passed in on the event - any value on the right hand side overwrites the value on the left hand side


CoursesPage.propTypes = {
  authors: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    courses: 
    state.authors.length === 0 ? []
    : state.courses.map(course => {
      return {
        ...course,
        authorName: state.authors.find(a => a.id === course.authorId).name
      }
    }),
    authors: state.authors
  }
}

//line 47 - 59 passes courses on props, line 50 says if there is not any author data yet, return an empty array. line 51 says if we do have author data, map over the array of courses to enhance the data in that array with a property called author name which is set by finding the corresponding author with their corresponding id, which is then set to the authors name (54).



function mapDispatchToProps (dispatch) {
  return {
    actions: {
    loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
    loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch)
    }
  }
}

//bindActionCreators returns an object mimicking the original object but with each function wrapped in a call to dispatch

//line 60 - if dispatch is not called in the parameter and after =>, nothing will happen. action creates MUST be called by dispatch - dispatch notifies redux about an action
//line 47 determines what actions we want to pass to our component on props

export default connect(mapStateToProps, mapDispatchToProps) (CoursesPage)
//connect returns a function, that function then calls our component

//line 40 is the same as line 44-45 written with efficiency in mind
//const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps)
//export default connectedStateAndProps(CoursesPage)
