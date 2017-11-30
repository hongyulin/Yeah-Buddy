import fetch from "./public"
export default {
    getCircleAd(params) {
        return fetch('/api/get/circle/adimg', params)
    },
    getCircleC(params) {
        return fetch('/api/get/circle/circle', params)
    },
    getHotList(params) {
        return fetch('/api/get/circle/hot', params)
    },
    getCircleActive(params) {
        return fetch('/api/get/circle/active', params)
    }, 
    getCTFollow(params) {
        return fetch('/api/get/circle/follow', params)
    },
    getCTFriend(params) {
        return fetch('/api/get/circle/friends', params)
    },

}

