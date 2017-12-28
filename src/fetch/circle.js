import axios from "./public";
export default {
    getCircleAd(params) {
        return axios.get('/api/level1/get/circle/adimg', params);
    },
    getCircleC(params) {
        return axios.get('/api/level1/get/circle/circle', params);
    },
    getHotList(params) {
        return axios.get('/api/level1/get/circle/hot', params);
    },
    getCircleActive(params) {
        return axios.get('/api/level1/get/circle/active', params);
    }, 
    getCTFollow(params) {
        return axios.get('/api/level1/get/circle/follow', params);
    },
    getCTFriend(params) {
        return axios.get('/api/level1/get/circle/friends', params);
    },

}

