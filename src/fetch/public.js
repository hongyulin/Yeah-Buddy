import axios from 'axios';
import qs from 'qs';

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/json;chartset=UTF-8';
axios.defaults.baseURL = '';

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

function post(url, params) {
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

function get(url, params) {
    return new Promise((resolve, reject)=>{
        axios.get(url, {params:params})
            .then(response => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error);
            })
    })
}

export default {post, get};