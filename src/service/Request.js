import Axios from 'axios'
import { utils } from '@/assets/scripts'

let csrfToken = utils.getCookie('csrfToken')

class Request {
    constructor() {}

    //默认配置
    defaultConfig = {
        baseURL: process.env.VUE_APP_BASE_URL,
        timeout: 1000 * 20,
        withCredentials: true
    }

    // 拦截器
    interceptors(instance) {
        // 添加请求拦截器
        instance.interceptors.request.use(
            config => {
                // 在发送请求之前做些什么
                // if (!config.data.loadingSilent) utils.loadingOpen({})
                return config
            },
            function(error) {
                // 对请求错误做些什么
                return Promise.reject(error)
            }
        )
        // 添加响应拦截器
        instance.interceptors.response.use(
            resp => {
                // 对响应数据做点什么
                utils.loadingClose()
                return resp.data
            },
            error => {
                // 对响应错误做点什么
                utils.loadingClose()
                return Promise.reject(error)
            }
        )
    }

    //形成实例
    request(options) {
        const instance = Axios.create()
        // 合并options
        options = Object.assign(this.defaultConfig, options)
        // 注册拦截器
        this.interceptors(instance)
        // 返回实例
        return instance(options)
    }

    //定义具体请求
    get(url, params = {}) {
        return this.request({ method: 'GET', url, params })
    }
    post(url, data = {}, headers = {}, isJson = true) {
        return isJson
            ? this.request({ method: 'POST', url, data, headers })
            : this.request({
                  method: 'POST',
                  url,
                  data: utils.initFormData(data),
                  headers: Object.assign(
                      { 'Content-Type': 'application/x-www-form-urlencoded' },
                      headers
                  )
              })
    }
    all(...request) {
        return Promise.all([...request])
    }
}

export default Request
