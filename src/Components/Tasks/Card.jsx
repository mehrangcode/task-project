import React from 'react';

const TaskCard = ({ task }) => {

    return (
        <div className="taskCard">
            <div className="actionBar">
                <span> + </span>
                <span> {task.status} </span>
            </div>
            <div className="taskDescription">
            {task.description}
            </div>
        </div>
    )
}

export default TaskCard