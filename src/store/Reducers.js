import { AuthReducer } from "../Actions/Auth/Reducer";
import { TasksReducer } from "../Actions/Tasks/Reducer";


export const reducers = {
    auth: AuthReducer,
    tasks: TasksReducer
}