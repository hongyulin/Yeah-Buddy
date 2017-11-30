import fetch from "./public"
export default {
    getNearPer(params) {
        return fetch('/api/get/nearper', params)
    },
    getDateAd(params) {
        return fetch('/api/get/date/adimg', params)
    },
    getDateExercise(params) {
        return fetch('/api/get/date/exercise', params)
    },
    getDateClass(params) {
        return fetch('/api/get/date/list', params)
    },
    getGoodsList(params) {
        return fetch('/api/get/date/goods/list', params)
    },
    getMallAd(params) {
        return fetch('/api/get/date/mall/ad', params)
    },

}