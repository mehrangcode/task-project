import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchList } from '../../Actions/Tasks/Actions'
import CreateTaskForm from './Create';
import TaskCard from './Card';

const TaskList = (props) => {

    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(fetchList())
    }, [])
    if(!tasks){
        return null
    }
    return <div className="taskList">
    <CreateTaskForm />
        
        {tasks.list && tasks.list.map(task => {
           return <TaskCard key={"KEY"+ task._id} task={task} />
        })}
    </div>
}

export default TaskList