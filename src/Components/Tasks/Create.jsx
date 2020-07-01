import React from 'react';
import Modal from '../Modals/Modal';
import { useSelector, useDispatch } from "react-redux";
import { createModal, createTask } from "../../Actions/Tasks/Actions";
import { FormCreator } from "../../Utils/FormController";
const CreateTaskForm = ({
    getFormItem,
    onFormSubmit,
}) => {

    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()
    const onOk = () => {
        const values = onFormSubmit()
        if(!values.err){
           dispatch(createTask(values.data))
        }
    }
    return (
        <Modal
        visible= {tasks.createModalStatus}
        onCancel={()=> dispatch(createModal(false))}
        onOk={onOk}
        title="ثبت تسک جدید"
        >
            <form onSubmit={onOk}>
                <label htmlFor="description"> Description</label>
                {getFormItem({
                    name: "description",
                    rules: [
                        {
                            required: true,
                            msg: "توضیحات تسک میبایست تعیین شود"
                        }
                    ]
                }, <textarea className="DescriptionBox" />)}
            </form>
        </Modal>
        
    )
}


export default FormCreator(CreateTaskForm)