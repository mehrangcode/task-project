import React from 'react';
import Modal from '../Modals/Modal';
import { useSelector, useDispatch } from "react-redux";
import { createModal } from "../../Actions/Tasks/Actions";
const CreateTaskForm = () => {

    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()
    return (
        <Modal
        visible= {tasks.createModalStatus}
        onCancel={()=> dispatch(createModal(false))}
        title="ثبت تسک جدید"
        >
            tasks
        </Modal>
        
    )
}


export default CreateTaskForm