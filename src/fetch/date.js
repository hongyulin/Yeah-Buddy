import axios from "./public";
export default {
    getNearPer(params) {
        return axios.get('/api/level1/nearperson', params);
    },
    getDateClass(params) {
        return axios.get('/api/level1/course', params);
    },
    getGoodsList(params) {
        return axios.get('/api/level1/goods', params);
    },
    getAds(params) {
        return axios.get('/api/level1/ads', params);
    },

}