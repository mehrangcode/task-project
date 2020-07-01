import { AuthReducer } from "../Actions/Auth/Reducer";
import { TasksReducer } from "../Actions/Tasks/Reducer";
import { SubTasksReducer } from "../Actions/SubTasks/Reducer";


export const reducers = {
    auth: AuthReducer,
    tasks: TasksReducer,
    subtask: SubTasksReducer
}