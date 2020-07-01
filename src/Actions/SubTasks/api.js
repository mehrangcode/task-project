 import { urlGeneral } from "../../GeneralConst"
import axios from '../../AxiosConfig'

export const SubTasksApi = {
    addSubTask : async (taskId, data) => {
        return axios.put(urlGeneral+ "/tasks/" + taskId, data)
    },
    
    changeSubTaskStatus : async (task) => {
        return axios.put(urlGeneral+ "/tasks/" + task._id, task)
    },
}