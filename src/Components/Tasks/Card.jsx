import React from 'react';
import Access from '../../Utils/Access';
import SubTaskCard from '../SubTask/Card';
import { useDispatch } from 'react-redux';
import { addSubTaskModal } from '../../Actions/SubTasks/Actions'
import { changeTaskStatus } from '../../Actions/Tasks/Actions'
import StatusBox from '../../Utils/StatusBox';
const TaskCard = ({ task }) => {

    const dispatch = useDispatch()

    const statusChangeHandler = (status) => {
        const updatedTask = JSON.parse(JSON.stringify(task))
        updatedTask.status = status;
        dispatch(changeTaskStatus(updatedTask))
    }
    
    return (
        <div className="taskCard">
            <div className="actionBar">
               <Access role="employee">  <button 
               onClick={() => dispatch(addSubTaskModal(true, task))}
               className="addSubTaskBtn"> + </button> </Access>
                <StatusBox 
                statusChange={(value) => statusChangeHandler(value)}
                currentStatus={task.status} 
                accessRole="admin" />
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