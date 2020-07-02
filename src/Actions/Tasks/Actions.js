import { TaksActionTypes } from "./ActionType";
import { TasksApi } from "./api";
import { EModal } from "../../Components/Modals/ErrorModal";


export const createModal= (open) => (dispatch, getState) => {
    dispatch({ type: TaksActionTypes.CreateModalStatus, open })

}
export const fetchList = () => async (dispatch, getState) => {
    dispatch({ type: TaksActionTypes.FetchTaskList })
    try {
        const res = await TasksApi.fetchList()
        if (res.data) {
            dispatch({ type: TaksActionTypes.FetchTaskListSuccess, list: res.data })
        }else {
            EModal(res)
            dispatch({ type: TaksActionTypes.FetchTaskListFaild })
        }
    } catch (error) {
        dispatch({ type: TaksActionTypes.FetchTaskListFaild })
        EModal(error)
    }

}
export const createTask = (data) => async (dispatch, getState) => {
    dispatch({ type: TaksActionTypes.CreateTask })
    try {
        const res = await TasksApi.create(data)
        if (res.data) {
            dispatch({ type: TaksActionTypes.CreateTaskSuccess });
            createModal(false)(dispatch, getState)
            fetchList()(dispatch, getState)
        }else {
            EModal(res)
            dispatch({ type: TaksActionTypes.CreateTaskFaild })
        }
    } catch (error) {
        dispatch({ type: TaksActionTypes.CreateTaskFaild })
        EModal(error)
    }

}

export const changeTaskStatus = (data) => async (dispatch, getState) => {
    dispatch({ type: TaksActionTypes.ChangeTaskStatus, data })
    try {
        const res = await TasksApi.changeTaskStatus(data)
        if (res.data) {
            dispatch({ type: TaksActionTypes.ChangeTaskStatusSuccess });
            fetchList()(dispatch, getState)
        }else {
            EModal(res)
            dispatch({ type: TaksActionTypes.ChangeTaskStatusFaild })
        }
    } catch (error) {
        dispatch({ type: TaksActionTypes.ChangeTaskStatusFaild })
        EModal(error)
    }

}