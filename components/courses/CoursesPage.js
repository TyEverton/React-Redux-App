import React from "react"
import {connect} from "react-redux"
import * as courseActions from "../../src/redux/actions/courseActions"
import PropTypes from "prop-types"
import {bindActionCreators} from "redux"

class CoursesPage extends React.Component {
  constructor(props) {
    super(props) 

    this.state = {
      course: {
        title: ""
      }
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = event => {
    const course = {...this.state.course, title: event.target.value} 
    this.setState({course})
  }
//line 18-21 used object spread to copy the state, overwrote the title by setting it to target.value passed in on the event - any value on the right hand side overwrites the value on the left hand side
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.actions.createCourse(this.state.course)
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <h2>Courses</h2>
      <h3>Add Course</h3>
      <input type="text" 
        onChange={this.handleChange}
       value={this.state.course.title}/>
      <input type="submit" value="Save"/>
      {this.props.courses.map(course => (
        <div key={course.title}>{course.title}</div> //keys help React keep track of the element inside of an array
      ))}
    </form>
    )
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    courses: state.courses
  }
}
//line 40 determines what state we want to expose to our component 
//ownProps = a reference to the components OWN props

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
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
