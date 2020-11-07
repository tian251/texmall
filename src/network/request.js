import axios from 'axios'
// 1  vue 自带axios
export function request(config){
    const instance =axios.create({
        baseURL:'http://152.136.185.210:8000/api/w6/'
    })
    return instance (config)
}

// }
// axios 网络请求时拦截器
// export function request(config){
//     const instance =axios.create({
//         baseURL:'http://www.httpbin.org/'
//     })
//     instance.interceptors.request.use(config =>{
//         console.log(config,'----')
//         // 拦截进行操作之后将config返出去，不然后面取不到config的值
//         return config
//     })
//     return instance (config)
// }
