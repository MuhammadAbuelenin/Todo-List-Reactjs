import React, { Component } from 'react'

export class CourseList extends Component {
    
    state = {
        isEdit: false
    }

    renderCourse = () => {
        return (
            
            <li>
               <span> {this.props.details.name} </span>
               <button onClick={() => {this.toggleState()}}>Edit</button>
               <button onClick={() => {this.props.deleteCourse(this.props.index)}}>Delete</button>
            </li>
        )
    }

    // toggleState
    
    toggleState = () => {
        let isEdit = this.state.isEdit;
        this.setState({
            isEdit: !isEdit
        })
    }


    updateCourseItem = (e) => {
        e.preventDefault;
        this.props.editCourse(this.props.index ,  this.input.value)
        this.toggleState();
    }

    // to update course
    renderUpdate = () => {
        return (
            <form onSubmit={this.updateCourseItem}>
                <input type="text" ref={ (v) => {this.input = v}} defaultValue={this.props.details.name}></input>
                <button>Update</button>
            </form>
        )
    }


    render() {

        let isEdit = this.state.isEdit;

        return (
            <>
                {isEdit ? this.renderUpdate() :  this.renderCourse()}
            </>
        )
    }
}

export default CourseList
