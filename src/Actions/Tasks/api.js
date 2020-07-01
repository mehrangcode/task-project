 import { urlGeneral } from "../../GeneralConst"
import axios from '../../AxiosConfig'

export const TasksApi = {
    fetchList : async () => {
        return axios.get(urlGeneral+ "/tasks")
    },
    create : async (data) => {
        return axios.post(urlGeneral+ "/tasks", data)
    },
}