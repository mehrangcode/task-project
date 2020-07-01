import React from 'react';
import Access from '../../Utils/Access';
import SubTaskCard from '../SubTask/Card';
import { useDispatch } from 'react-redux';
import { addSubTaskModal } from '../../Actions/SubTasks/Actions'
const TaskCard = ({ task }) => {

    const dispatch = useDispatch()
    return (
        <div className="taskCard">
            <div className="actionBar">
               <Access role="Employee">  <button 
               onClick={() => dispatch(addSubTaskModal(true, task))}
               className="addSubTaskBtn"> + </button> </Access>
                <span> {task.status} </span>
            </div>
            <div className="taskDescription">
            {task.description}
            
            </div>
            <div className="subtaskList">
            {task.subtasks ? task.subtasks.map(item => {
                return (
                    <SubTaskCard subtask={item} />
                )
            }): (
                <div className="nosubTask">
                    <p>  زیر شاخه‌ای برای تسک ثبت نشده است</p>
                </div>
            )}
            </div>
        </div>
    )
}

export default TaskCard