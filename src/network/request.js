import axios from 'axios'

export function request(config){
    const instance = axios.create({
        baseURL:'http://192.168.0.63:8080',
        timeout:5000
    })

    instance.interceptors.request.use(config=>{

        return config
    },err=>{})
    instance.interceptors.response.use(config=>{

        return config
    },err=>{})
    
    return instance(config)
}