import { TaksActionTypes } from "./ActionType";
import { AuthApi } from "./api";

export const fetchList = () => async (dispatch, getState) => {
    dispatch({ type: TaksActionTypes.FetchTaskList })
    try {
        const res = await AuthApi.fetchList()
        if (res.data) {
            dispatch({ type: TaksActionTypes.FetchTaskListSuccess, list: res.data })
        }
    } catch (error) {
        dispatch({ type: TaksActionTypes.FetchTaskListFaild })
    }

}