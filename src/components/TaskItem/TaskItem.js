import React from 'react'
import "../TaskItem/TaskItem.css"
const TaskItem = (props) => {
    return <div className="item-class" onClick={props.update}>
        <p>{props.stt} . {props.title}</p>
        <button className="btn btn-danger"  onClick={props.delete}><i class="fas fa-trash"></i></button>
    </div>
}

export default TaskItem;
