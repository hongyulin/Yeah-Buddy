import fetch from "./public"
export default {
    getNearPer(params) {
        return fetch('/api/level1/get/nearper', params)
    },
    getDateAd(params) {
        return fetch('/api/level1/get/date/adimg', params)
    },
    getDateExercise(params) {
        return fetch('/api/level1/get/date/exercise', params)
    },
    getDateClass(params) {
        return fetch('/api/level1/get/date/list', params)
    },
    getGoodsList(params) {
        return fetch('/api/level1/get/date/goods/list', params)
    },
    getMallAd(params) {
        return fetch('/api/level1/get/date/mall/ad', params)
    },

}