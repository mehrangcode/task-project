import { AuthActionTypes } from "./ActionType";

const unloadedState = {
    isAuth: false,
    loading: false,
    data: null
};

export const AuthReducer = (
    state = unloadedState,
    action,
) => {
    switch (action.type) {
        case AuthActionTypes.Login: {
            return {
                ...state,
                loading: true,
            }
        }
        case AuthActionTypes.LoginSuccess: {
            return {
                ...state,
                isAuth: true,
                loading: false,
                data: action.data
            }
        }
        case AuthActionTypes.LoginFail: {
            return {
                ...state,
                loading: false,
            }
        }
        
        case AuthActionTypes.LogOut: {
            return {
                ...state,
                isAuth: false,
            }
        }
        default:
            return state
    }
};
