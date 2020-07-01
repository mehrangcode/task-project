 import { urlGeneral } from "../../GeneralConst"
import axios from '../../AxiosConfig'

export const TasksApi = {
    fetchList : async () => {
        return axios.get(urlGeneral+ "/tasks")
    },
}