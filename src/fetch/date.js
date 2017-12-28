import axios from "./public";
export default {
    getNearPer(params) {
        return axios.get('/api/level1/get/nearper', params);
    },
    getDateAd(params) {
        return axios.get('/api/level1/get/date/adimg', params);
    },
    getDateExercise(params) {
        return axios.get('/api/level1/get/date/exercise', params);
    },
    getDateClass(params) {
        return axios.get('/api/level1/get/date/list', params);
    },
    getGoodsList(params) {
        return axios.get('/api/level1/get/date/goods/list', params);
    },
    getMallAd(params) {
        return axios.get('/api/level1/get/date/mall/ad', params);
    },

}