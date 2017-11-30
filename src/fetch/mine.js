import fetch from "./public"
export default {
    mineData(params) {
        return fetch('api/get/mine/data', params)
    }
}