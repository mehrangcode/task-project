import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchList, createModal } from '../../Actions/Tasks/Actions'
import CreateTaskForm from './Create';
import AddSubTaskForm from '../SubTask/Create';
import TaskCard from './Card';

import ScrollContainer from 'react-indiana-drag-scroll'
import Spinner from '../../Utils/Spinner';
import Access from '../../Utils/Access';
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

                    {tasks.list && tasks.list.length > 0 ? tasks.list.map(task => {
                        return <TaskCard key={"KEY" + task._id} task={task} />
                    }) : (
                        <div className="noTask">
                            هنوز تسک تعریف نشده است
                           <Access role="admin">
                           <p> <button className="btnGold" onClick={() => dispatch(createModal(true))}> ثبت تسک جدید </button> </p>
                           </Access>
                        </div>
                    )}
                </div>
            </ScrollContainer>
        </React.Fragment>
    )
}

export default TaskList