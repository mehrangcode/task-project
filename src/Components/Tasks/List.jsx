import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchList } from '../../Actions/Tasks/Actions'

const TaskList = (props) => {

    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(fetchList())
    }, [])
    console.log(tasks)
    return <div className="taskList">
        TaskList
    </div>
}

export default TaskList