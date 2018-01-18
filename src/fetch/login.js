import axios from "./public";
export default {
    checkIn(params) {
        return axios.post('/api/level0/login', params);
    },
    checkInByWechat(params) {
        return axios.get('/api/level0/checkin/bywechat', params);
    },
    register(params) {
        return axios.post('/api/level0/register', params);
    },
    uploadImg(params) {
        return axios.post('/api/level0/uploadimg', params)
    },
    updataInfo(params) {
        return axios.post("/api/level0/updatainfo" ,params)
    }
}
