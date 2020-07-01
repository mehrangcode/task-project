import { SubTaksActionTypes } from "./ActionType";

const unloadedState = {
    mainTask: null,
    loading: "",
    addSubTaskModal: false,
};

export const SubTasksReducer = (
    state = unloadedState,
    action,
) => {
    switch (action.type) {
        case SubTaksActionTypes.SubTaskCreateModalStatus: {
            return {
                ...state,
                addSubTaskModal: action.open,
                mainTask: action.mainTask
            }
        }
        case SubTaksActionTypes.AddSubTask: {
            return {
                ...state,
                loading: "createSubTask"
            }
        }
        case SubTaksActionTypes.AddSubTaskSuccess: {
            return {
                ...state,
                loading: ""
            }
        }
        case SubTaksActionTypes.AddSubTaskFaild: {
            return {
                ...state,
                loading: ""
            }
        }
        case SubTaksActionTypes.ChangeSubTaskStatus: {
            return {
                ...state,
                loading: "changeSubTaskStatus"
            }
        }
        case SubTaksActionTypes.ChangeSubTaskStatusSuccess: {
            return {
                ...state,
                loading: ""
            }
        }
        case SubTaksActionTypes.ChangeSubTaskStatusFaild: {
            return {
                ...state,
                loading: ""
            }
        }
    }
    return state;
};
