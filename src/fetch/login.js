import fetch from "./public"
export default {
    checkIn(params) {
        return fetch('/api/checkIn', params)
    },
    checkInByWechat(params) {
        return fetch('/api/checkInByWechat', params)
    },
    register(params) {
        return fetch('/api/register', params)
    },
}
