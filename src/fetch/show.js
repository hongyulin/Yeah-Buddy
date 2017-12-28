import axios from "./public";
export default {
    getShowAd(params) {
        return axios.get('/api/level1/get/show/adimg', params);
    },
    getShowExper(params) {
        return axios.get('/api/level1/experience', params);
    },
    getShowTopic(params) {
        return axios.get('/api/level1/topic', params);
    },
    getShowPicked(params) {
        return axios.get('/api/level1/choice', params);
    },
    getShowVideo(params) {
        return axios.get('/api/level1/get/show/video', params);
    },
    getShowSwiper(params) {
        return axios.get('/api/level1/get/show/swiper', params);
    },
    getShowRecommend(params) {
        return axios.get('/api/level1/recommend', params);
    },
}