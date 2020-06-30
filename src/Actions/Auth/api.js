 import { urlGeneral } from "../../GeneralConst"
import axios from '../../AxiosConfig'

export const AuthApi = {
    login : async (email) => {
        return axios.get(urlGeneral+ "/users?q=userName:"+ email)
    },

    register : async (data) => {
        return axios.post(urlGeneral+ "/users/register", data)
    }
}