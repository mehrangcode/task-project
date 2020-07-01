 import { urlGeneral } from "../../GeneralConst"
import axios from '../../AxiosConfig'

export const AuthApi = {
    fetchList : async () => {
        return axios.get(urlGeneral+ "/tasks")
    },
}