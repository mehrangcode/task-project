import { AuthActionTypes } from "./ActionType";
import { AuthApi } from "./api";
import { EModal } from "../../Components/Modals/ErrorModal";

export const registerRequest = (data) => async (dispatch, getState) => {
    dispatch({ type: AuthActionTypes.Login })
    try {
        const res = await AuthApi.register(data)
        if (res.data) {

            const loginData = { userName: data.userName }
            loginRequest(loginData)(dispatch, getState)
            dispatch({ type: AuthActionTypes.LoginSuccess })
        } else {
            EModal(res)
            dispatch({ type: AuthActionTypes.LoginFail })
        }
    } catch (error) {
        console.log("Errror", error)
        dispatch({ type: AuthActionTypes.LoginFail })
        EModal(error)
    }

}

export const loginRequest = (data) => async (dispatch, getState) => {
    dispatch({ type: AuthActionTypes.Login })
    try {
        const res = await AuthApi.login(data)
        if (res.data) {
            if(res.data.length > 0){
                window.localStorage.setItem("task-userData", JSON.stringify(res.data[0]));
                dispatch({ type: AuthActionTypes.LoginSuccess, data: res.data[0] })
            }
            else {
                EModal(" کاربر یافت نشد")
                dispatch({ type: AuthActionTypes.LoginFail })
            }
    }else {
        EModal(res)
        dispatch({ type: AuthActionTypes.LoginFail })
    }
    } catch (error) {

    dispatch({ type: AuthActionTypes.LoginFail })
    EModal(error)
}

}


export const logOutRequest = () => (dispatch, getState) => {
    window.localStorage.removeItem("task-userData");
    dispatch({ type: AuthActionTypes.LogOut });
}
