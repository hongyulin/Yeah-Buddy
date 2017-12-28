import axios from "./public";
export default {
    mineData(params) {
        return axios.get('/api/level1/get/mine/data', params);
    },
}