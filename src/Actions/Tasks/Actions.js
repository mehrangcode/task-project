import { TaksActionTypes } from "./ActionType";
import { TasksApi } from "./api";


export const createModal= (open) => (dispatch, getState) => {
    dispatch({ type: TaksActionTypes.CreateModalStatus, open })

}
export const fetchList = () => async (dispatch, getState) => {
    dispatch({ type: TaksActionTypes.FetchTaskList })
    try {
        const res = await TasksApi.fetchList()
        if (res.data) {
            dispatch({ type: TaksActionTypes.FetchTaskListSuccess, list: res.data })
        }
    } catch (error) {
        dispatch({ type: TaksActionTypes.FetchTaskListFaild })
    }

}
export const createTask = (data) => async (dispatch, getState) => {
    dispatch({ type: TaksActionTypes.FetchTaskList })
    try {
        const res = await TasksApi.create(data)
        if (res.data) {
            dispatch({ type: TaksActionTypes.FetchTaskListSuccess });
            createModal(false)(dispatch, getState)
            fetchList()(dispatch, getState)
        }
    } catch (error) {
        dispatch({ type: TaksActionTypes.FetchTaskListFaild })
    }

}