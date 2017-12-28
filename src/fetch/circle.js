import axios from "./public";
export default {
    getCircleAd(params) {
        return axios.get('/api/level1/get/circle/adimg', params);
    },
    getCircleC(params) {
        return axios.get('/api/level1/get/circle/circle', params);
    },
    getNearList(params) {
        return axios.get('/api/level1/get/circle/hot', params);
    },
    getCircleActive(params) {
        return axios.get('/api/level1/get/circle/active', params);
    }, 
    getRecommendUser(params) {
        return axios.get('/api/level1/get/circle/follow', params);
    },
    getCircleTrends(params) {
        return axios.get('/api/level1/get/circle/friends', params);
    },

}

