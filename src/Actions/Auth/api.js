 import { urlGeneral } from "../../GeneralConst"
import axios from '../../AxiosConfig'

export const AuthApi = {
    login : async (data) => {
        return axios.get(urlGeneral+ "/users?q=userName:"+ data.userName)
    },

    register : async (data) => {
        return axios.post(urlGeneral+ "/users/register")
    }
}