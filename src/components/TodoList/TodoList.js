import React, { Component } from 'react'
import "../TodoList/TodoCss.css"
import TaskInput from '../TaskInput/TaskInput';
import TaskView from '../TaskView/TaskView';
import TaskItem from '../TaskItem/TaskItem';
import TaskIMG from '../TaskIMG/TaskIMG';

export default class TodoList extends Component {
    state = {
        todo:[]
    }
    addItemHandler = inputTitle =>{
        const newTask = {id:Date.now(),title:inputTitle,done:false};
        const newTodo = [...this.state.todo,newTask];
        this.setState({todo:newTodo});
    };
    deleteHandler = id => {
        const newState = this.state.todo.filter(todo=>{
            return todo.id !== id;
        })
        this.setState({todo:newState});
    };
    updateHandler = id => {
        const newTodo = this.state.todo;
        const IndexOfTask = newTodo.indexOf((todo)=>{
            return todo.id === id;
        })

    }
    render() {
        return (
            <div className="container">
                <h1>TO DO LIST</h1>
                <TaskInput add={this.addItemHandler}></TaskInput>
                <TaskView>
                    {this.state.todo.length > 0 ? this.state.todo.map((item,index)=>{
                        return <TaskItem id={item.id} 
                        stt={index+1} done={item.done} 
                        title={item.title} 
                        delete={() => this.deleteHandler(item.id)}
                        update={() => this.updateHandler(item.id)}>
                        </TaskItem>
                    }) : <TaskIMG></TaskIMG>}
                </TaskView>
            </div>
        )
    }
}
