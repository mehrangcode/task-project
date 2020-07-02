import { SubTaksActionTypes } from "./ActionType";
import { SubTasksApi } from "./api";
import { fetchList } from "../Tasks/Actions"
import { EModal } from "../../Components/Modals/ErrorModal";

export const addSubTaskModal= (open, mainTask) => (dispatch, getState) => {
    dispatch({ type: SubTaksActionTypes.SubTaskCreateModalStatus, open, mainTask })

}


export const addSubTask = (newSubtask) => async (dispatch, getState) => {
    dispatch({ type: SubTaksActionTypes.AddSubTask })
    const mainTask = getState().subtask.mainTask;
    if(!mainTask){
        dispatch({ type: SubTaksActionTypes.AddSubTaskFaild })
        EModal("تسک مورد نظر موجود نیست")
    }
    if(mainTask){
        const newSubList = mainTask.subtasks ? [...mainTask.subtasks, newSubtask] : [newSubtask]
        mainTask.subtasks = newSubList
    }
    try {
        const res = await SubTasksApi.addSubTask(mainTask._id, mainTask)
        if (res.data) {
            dispatch({ type: SubTaksActionTypes.AddSubTaskSuccess });
            addSubTaskModal(false, null)(dispatch, getState)
            fetchList()(dispatch, getState)
        }
    } catch (error) {
        dispatch({ type: SubTaksActionTypes.AddSubTaskFaild })
        EModal(error)
    }

}

export const changeSubTaskStatus = (data) => async (dispatch, getState) => {
    dispatch({ type: SubTaksActionTypes.ChangeSubTaskStatus })
    try {
        const res = await SubTasksApi.changeSubTaskStatus(data)
        if (res.data) {
            dispatch({ type: SubTaksActionTypes.ChangeSubTaskStatusSuccess });
            fetchList()(dispatch, getState)
        }
    } catch (error) {
        dispatch({ type: SubTaksActionTypes.ChangeSubTaskStatusFaild })
        EModal(error)
    }

}