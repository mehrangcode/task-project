import React from 'react';
import TaskList from '../Tasks/List';
import { useDispatch } from 'react-redux';
import { createModal } from "../../Actions/Tasks/Actions"
const Panel = () => {

    const dispatch = useDispatch()
    return (
        <div className="Panel">
            <TaskList />
            
            <div className="fab" onClick={()=> dispatch(createModal(true))}>+ </div>
        </div>
    )
}

export default Panel