import React from 'react';

const TaskCard = ({ task }) => {

    return (
        <div className="taskCard">
            <div className="actionBar">
                <button className="addSubTaskBtn"> + </button>
                <span> {task.status} </span>
            </div>
            <div className="taskDescription">
            {task.description}
            </div>
        </div>
    )
}

export default TaskCard