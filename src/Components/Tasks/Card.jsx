import React, { useState } from 'react';
import Access from '../../Utils/Access';
import SubTaskCard from '../SubTask/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addSubTaskModal } from '../../Actions/SubTasks/Actions'
import { changeTaskStatus } from '../../Actions/Tasks/Actions'
import { changeSubTaskStatus } from '../../Actions/SubTasks/Actions'
import StatusBox from '../../Utils/StatusBox';
const TaskCard = ({ task }) => {

    const [targetSubTask, setTargetSubTask] = useState()
    const subtaskLoading = useSelector(state => state.subtask.loading)
    const dispatch = useDispatch()
    const taskstatusChangeHandler = (status) => {
        const updatedTask = JSON.parse(JSON.stringify(task))
        updatedTask.status = status;
        dispatch(changeTaskStatus(updatedTask))
    }
    
    const subTaskstatusChangeHandler = (status, index) => {
        const updatedTask = JSON.parse(JSON.stringify(task));
        updatedTask.subtasks[index].status = status;
        setTargetSubTask(index)
        dispatch(changeSubTaskStatus(updatedTask))
    }
    
    return (
        <div className="taskCard">
            <div className="actionBar">
               <Access role="employee">  <button 
               onClick={() => dispatch(addSubTaskModal(true, task))}
               className="addSubTaskBtn"> + </button> </Access>
                <StatusBox 
                statusChange={(value) => taskstatusChangeHandler(value)}
                currentStatus={task.status} 
                accessRole="admin" />
            </div>
            <div className="taskDescription">
            {task.description}
            
            </div>
            <div className="subtaskList">
            {task.subtasks ? task.subtasks.map((item, i) => {
                return (
                    <SubTaskCard subtask={item} 
                    loading={i === targetSubTask && subtaskLoading === "changeSubTaskStatus"} 
                    changeStatus={(value) => {
                        subTaskstatusChangeHandler(value, i)
                    }} />
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