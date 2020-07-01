import React from 'react';
import TaskList from '../Tasks/List';
import { useDispatch } from 'react-redux';
import { createModal } from "../../Actions/Tasks/Actions";
import Access from '../../Utils/Access';
const Panel = () => {

    const dispatch = useDispatch()
    return (
        <div className="Panel">
                <TaskList />

            <Access role="admin"><div className="fab" onClick={() => dispatch(createModal(true))}>+ </div></Access>
        </div>
    )
}

export default Panel