import React, { useEffect } from 'react';
import Modal from '../Modals/Modal';
import { useSelector, useDispatch } from "react-redux";
import { createModal, createTask } from "../../Actions/Tasks/Actions";
import { FormCreator } from "../../Utils/FormController";
import Select from '../../Utils/FormElements/Select/Select';
const CreateTaskForm = ({
    getFormItem,
    onFormSubmit,
    resetForm
}) => {

    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()
    const onOk = () => {
        const values = onFormSubmit()
        if(!values.err){
           dispatch(createTask(values.data))
        }
    }

    useEffect(() => {
            if(!tasks.createModalStatus){
                resetForm()
            }
            
    }, [tasks.createModalStatus])
    return (
        <Modal
        visible= {tasks.createModalStatus}
        onCancel={()=> dispatch(createModal(false))}
        loading={tasks.loading === "createTask"}
        onOk={onOk}
        title="ثبت تسک جدید"
        >
            <form onSubmit={onOk}>
                <label htmlFor="description"> توضیحات</label>
                {getFormItem({
                    name: "description",
                    rules: [
                        {
                            required: true,
                            msg: "توضیحات تسک میبایست تعیین شود"
                        }
                    ]
                }, <textarea id="description" className="txtInput" />)}
                <label htmlFor="status">وضعیت</label>
                {getFormItem({ 
                    initialvalue: "تعریف شده",
                    name: "status"
                }, 
                    <Select 
                        optionList={[
                            {id: "تعریف شده", title: "تعریف شده"},
                            {id: "در حال انجام", title: "در حال انجام"},
                            {id: "انجام شد", title: "انجام شد"},
                        ]}
                    />
                )}
            </form>
        </Modal>
        
    )
}


export default FormCreator(CreateTaskForm)