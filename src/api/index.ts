import axios from 'axios'

const templateUrl = process.env.REACT_APP_TEMPLATE_URL

export default {
    getTemplates(){
        return axios({
            url : templateUrl,
            method : "GET"
        })
    }
}