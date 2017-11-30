import fetch from "./public"
export default {
    getShowAd(params) {
        return fetch('/api/get/show/adimg', params)
    },
    getShowExper(params) {
        return fetch('/api/get/show/experience', params)
    },
    getShowPicked(params) {
        return fetch('/api/get/show/picked', params)
    },
    getShowVideo(params) {
        return fetch('/api/get/show/video', params)
    },
    getShowSwiper(params) {
        return fetch('/api/get/show/swiper', params)
    },
    getShowRecommend(params) {
        return fetch('/api/get/show/recommend', params)
    },
}