import { TaksActionTypes } from "./ActionType";

const unloadedState = {
    list: [],
    loading: "",
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
                loading: "fetchTask",
            }
        }
        case TaksActionTypes.FetchTaskListSuccess: {
            return {
                ...state,
                loading: "",
                list: action.list
            }
        }
        case TaksActionTypes.FetchTaskListFail: {
            return {
                ...state,
                loading: "",
            }
        }
        case TaksActionTypes.CreateModalStatus: {
            return {
                ...state,
                createModalStatus: action.open,
            }
        }
        case TaksActionTypes.CreateTask: {
            return {
                ...state,
                loading: "createTask"
            }
        }
        case TaksActionTypes.CreateTaskSuccess: {
            return {
                ...state,
                loading: ""
            }
        }
        case TaksActionTypes.CreateTaskFaild: {
            return {
                ...state,
                loading: ""
            }
        }
        case TaksActionTypes.ChangeTaskStatus: {
            return {
                ...state,
                loading: "changeTaskStatus"
            }
        }
        case TaksActionTypes.ChangeTaskStatusSuccess: {
            return {
                ...state,
                loading: ""
            }
        }
        case TaksActionTypes.ChangeTaskStatusFaild: {
            return {
                ...state,
                loading: ""
            }
        }
    }
    return state;
};
