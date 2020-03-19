import React, { Component } from 'react'
import "../TaskInput/TaskInput.css"
export default class TaskInput extends Component {
    state={
        title:[]
    }
    changeHandler = event =>{
        this.setState({title:event.target.value});
    }
    submitHandler = event =>{
        event.preventDefault();
        this.props.add(this.state.title);
        this.state.title = "";
    }
    render() {
        return (
        <form onSubmit ={this.submitHandler}  className="input-group mb-3">
            <input 
             onChange = {this.changeHandler}
             value={this.state.title}
             type="text" 
             className="form-control" 
             placeholder="Add here..."/>
            <div className="btn btn-primary">Add</div>
        </form>
        )
    }
}
