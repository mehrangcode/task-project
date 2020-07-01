import { TaksActionTypes } from "./ActionType";

const unloadedState = {
    list: false,
    loading: false
};

export const AuthReducer = (
    state = unloadedState,
    action,
) => {
    switch (action.type) {
        case TaksActionTypes.FetchTaskList: {
            return {
                ...state,
                loading: true,
            }
        }
        case TaksActionTypes.FetchTaskListSuccess: {
            return {
                ...state,
                loading: false,
                list: action.list
            }
        }
        case TaksActionTypes.FetchTaskListFail: {
            return {
                ...state,
                loading: false,
            }
        }
    }
    return state;
};
