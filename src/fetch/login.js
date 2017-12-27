import fetch from "./public"
export default {
    checkIn(params) {
        return fetch('/api/level1/checkIn', params)
    },
    checkInByWechat(params) {
        return fetch('/api/level1/checkInByWechat', params)
    },
    register(params) {
        return fetch('/api/level1/register', params)
    },
}
