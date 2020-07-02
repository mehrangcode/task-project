import React from 'react';
import Modal from '../Modals/Modal';
import { useSelector, useDispatch } from "react-redux";
import { addSubTaskModal, addSubTask } from "../../Actions/SubTasks/Actions";
import { FormCreator } from "../../Utils/FormController";
import Select from '../../Utils/FormElements/Select/Select';
const AddSubTaskForm = ({
    getFormItem,
    onFormSubmit,
}) => {

    const subtask = useSelector(state => state.subtask)
    const dispatch = useDispatch()
    const onOk = () => {
        const values = onFormSubmit()
        if(!values.err){
           dispatch(addSubTask(values.data))
        }
    }
    return (
        <Modal
        visible= {subtask.addSubTaskModal}
        onCancel={()=> dispatch(addSubTaskModal(false, null))}
        loading={subtask.loading === "createSubTask"}
        onOk={onOk}
        title="ثبت ریزشاخه جدید"
        >
            <form onSubmit={onOk}>
                <label htmlFor="description"> شرح حال</label>
                {getFormItem({
                    name: "description",
                    rules: [
                        {
                            required: true,
                            msg: "شرح حال الزامی است"
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


export default FormCreator(AddSubTaskForm)