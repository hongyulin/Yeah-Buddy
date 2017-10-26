import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/json;chartset=UTF-8'
axios.defaults.baseURL = ''

axios.interceptors.request.use((config) => {
    if(config.method  === 'post')
    {
        config.data = qs.parse(config.data);
    }
    return config;
},(error) =>{     
    return Promise.reject(error);
});

axios.interceptors.response.use((res) =>{
    return res.status == 200 ? res : Promise.reject(res)
    
}, (error) => {
    return Promise.reject(error);
});

export function fetch(url, params) {
     return new Promise((resolve, reject)=>{
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
            })
            .catch((error) => {
               reject(error);
            })
    })
}

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
    register(params) {
        return fetch('/api/register', params)
    },
    getNearPer(params) {
        return fetch('/api/get/nearper', params)
    },
    getDateAd(params) {
        return fetch('/api/get/date/adimg', params)
    },
    getShowAd(params) {
        return fetch('/api/get/show/adimg', params)
    },
    getCircleAd(params) {
        return fetch('/api/get/circle/adimg', params)
    },
    getCircleC(params) {
        return fetch('/api/get/circle/circle', params)
    },
    /*getAge(params) {
        return fetch('/api/get/Age', params)
    },*/
    
}
