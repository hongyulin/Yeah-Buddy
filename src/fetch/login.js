import axios from "./public";
export default {
    checkIn(params) {
        return axios.get('/api/level0/checkin', params);
    },
    checkInByWechat(params) {
        return axios.get('/api/level0/checkin/bywechat', params);
    },
    register(params) {
        return axios.get('/api/level0/register', params);
    },
}
