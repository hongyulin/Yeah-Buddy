import axios from "./public";
export default {
    getCircleAd(params) {
        return axios.get('/api/level1/get/circle/adimg', params);
    },
    getCircleC(params) {
        return axios.get('/api/level1/mycircle', params);
    },
    getNearList(params) {
        return axios.get('/api/level1/near/circle', params);
    },
    getCircleActive(params) {
        return axios.get('/api/level1/ads', params);
    }, 
    getRecommendUser(params) {
        return axios.get('/api/level1/recommend/user', params);
    },
    getCircleTrends(params) {
        return axios.get('/api/level1/circle/trends', params);
    },

}

