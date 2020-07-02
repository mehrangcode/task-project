import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchList } from '../../Actions/Tasks/Actions'
import CreateTaskForm from './Create';
import AddSubTaskForm from '../SubTask/Create';
import TaskCard from './Card';

import ScrollContainer from 'react-indiana-drag-scroll'
import Spinner from '../../Utils/Spinner';
const TaskList = (props) => {
    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchList())
    }, [])



    if (!tasks) {
        return null
    }
    return (
        <React.Fragment>
            <CreateTaskForm />
            <AddSubTaskForm />
            <ScrollContainer hideScrollbars={false} className="scroll-container">
                <div className="taskList">
                <Spinner loading={tasks.loading === "fetchTask"} />

                    {tasks.list && tasks.list.map(task => {
                        return <TaskCard key={"KEY" + task._id} task={task} />
                    })}
                </div>
            </ScrollContainer>
        </React.Fragment>
    )
}

export default TaskList