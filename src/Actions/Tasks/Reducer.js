import { TaksActionTypes } from "./ActionType";

const unloadedState = {
    list: false,
    loading: false,
    createModalStatus: false,
};

export const TasksReducer = (
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
        case TaksActionTypes.CreateModalStatus: {
            return {
                ...state,
                createModalStatus: action.open,
            }
        }
    }
    return state;
};
