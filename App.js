import React, { Component } from 'react'
import './App.css';
import CourseForm from './component/courseForm';
import CourseList from './component/courseList';

export class App extends Component {

  // Main State as structure for main app

  state = {
    courses : [
      {name : "Built up app"},
      {name : "Study Turkish"},
      {name : "Pay Vodafone Bill"},
    ], 
    current: ""
  }

  // to Update Course

  updateCourse = (e) => {
    this.setState({
      current: e.target.value
    })
  }

  // to add Course
  
  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let courses = this.state.courses;
    courses.push({name: current});
    this.setState({
      courses,
      current: ""
    })
  }

  // to Delete course

deleteCourse = (index) => {
  let courses = this.state.courses;
  courses.splice(index, 1);
  this.setState({
    courses
  })
}


  // to edit course 

  editCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course['name'] = value;
    this.setState({courses})
  } 

  render() {

    const {courses} = this.state;
    const courseList = courses.map( (course, index) => {
      return <CourseList details={course} key={index} deleteCourse={this.deleteCourse} index={index} editCourse={this.editCourse}/>
    } )

    return (
    <section className="App">
       <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.4/css/all.css"></link>
      <h2>Todo List  <i class="fas fa-list-alt"></i></h2>
    
      <CourseForm current={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse}/>
      <ul>{courseList}</ul>

    </section>
    )
  }
}

export default App
