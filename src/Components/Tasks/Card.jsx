import React from 'react';
import Access from '../../Utils/Access';

const TaskCard = ({ task }) => {

    return (
        <div className="taskCard">
            <div className="actionBar">
               <Access role="Employee">  <button className="addSubTaskBtn"> + </button> </Access>
                <span> {task.status} </span>
            </div>
            <div className="taskDescription">
            {task.description}
            </div>
        </div>
    )
}

export default TaskCard