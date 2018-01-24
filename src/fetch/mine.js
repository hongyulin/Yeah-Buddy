import axios from "./public";
export default {
    mineData(params) {
        return axios.post('/api/level1/mine', params);
    },
}