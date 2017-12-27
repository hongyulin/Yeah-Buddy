import fetch from "./public"
export default {
    getCircleAd(params) {
        return fetch('/api/level1/get/circle/adimg', params)
    },
    getCircleC(params) {
        return fetch('/api/level1/get/circle/circle', params)
    },
    getHotList(params) {
        return fetch('/api/level1/get/circle/hot', params)
    },
    getCircleActive(params) {
        return fetch('/api/level1/get/circle/active', params)
    }, 
    getCTFollow(params) {
        return fetch('/api/level1/get/circle/follow', params)
    },
    getCTFriend(params) {
        return fetch('/api/level1/get/circle/friends', params)
    },

}

