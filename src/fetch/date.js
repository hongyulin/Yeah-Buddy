import axios from "./public";
export default {
    getNearPer(params) {
        return axios.get('/api/level1/nearperson', params);
    },
    getDateAd(params) {
        return axios.get('/api/level1/ads', params);
    },
    getDateExercise(params) {
        return axios.get('/api/level1/ads', params);
    },
    getDateClass(params) {
        return axios.get('/api/level1/course', params);
    },
    getGoodsList(params) {
        return axios.get('/api/level1/goods', params);
    },
    getMallAd(params) {
        return axios.get('/api/level1/ads', params);
    },

}