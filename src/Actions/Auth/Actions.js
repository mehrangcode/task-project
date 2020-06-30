import { AuthActionTypes } from "./ActionType";
import { AuthApi } from "./api";

export const registerRequest = (data) => async (dispatch, getState) => {
    dispatch({ type: AuthActionTypes.Login })
    try {
        const res = await AuthApi.register(data)
        if (res.data) {

            const loginData = { email: data.email, password: data.password }
            AuthActions.loginRequest(loginData)(dispatch, getState)
            dispatch({ type: AuthActionTypes.LoginSuccess })
        }
    } catch (error) {

        dispatch({ type: AuthActionTypes.LoginFail })
        alert(error.response.data.message)
    }

}

export const loginRequest = (data) => async (dispatch, getState) => {
    dispatch({ type: AuthActionTypes.Login })
    try {
        const res = await AuthApi.login(data)
        if (res.data) {

            window.localStorage.setItem("task-userData", res.data.token);
            dispatch({ type: AuthActionTypes.LoginSuccess })
        }
    } catch (error) {

        dispatch({ type: AuthActionTypes.LoginFail })
        alert(error.response.data.message)
    }

},


export const logOutRequest = () => (dispatch, getState) => {
    window.localStorage.removeItem("task-userData");
    dispatch({ type: AuthActionTypes.LogOut });
}
