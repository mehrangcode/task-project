import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchList } from '../../Actions/Tasks/Actions'
import CreateTaskForm from './Create';

const TaskList = (props) => {

    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(fetchList())
    }, [])
    return <div className="taskList">
        <CreateTaskForm />
        TaskList
    </div>
}

export default TaskList