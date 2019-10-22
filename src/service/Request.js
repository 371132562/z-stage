/*
 * @Description: Axios封装
 * @Author: Zhao Linxing
 * @CreateTime: 2019-09-25 18:04:21
 * @LastEditor: Zhao Linxing
 * @LastEditTime: 2019-10-22 09:12:08
 */
import Axios from 'axios'
import Utils from '@/assets/scripts/Utils.js'
import Config from '@/assets/scripts/Config.js'

// let csrfToken = Utils.getCookie('csrfToken')

class Request {
    constructor() {}

    //默认配置
    defaultConfig = {
        baseURL: process.env.VUE_APP_BASE_URL,
        timeout: 1000 * 20000,
        withCredentials: true
    }

    // 拦截器
    interceptors(instance) {
        // 添加请求拦截器
        instance.interceptors.request.use(
            config => {
                // if (!config.data.loadingSilent) Utils.loadingOpen({})
                return config
            },
            function(error) {
                return Promise.reject(error)
            }
        )
        // 添加响应拦截器
        instance.interceptors.response.use(
            resp => {
                Utils.loadingClose()
                switch (resp.data.code) {
                    case 11: //用户名不存在
                    case 12: //密码错误
                        Utils.messageWarning(resp.data.msg)
                        break

                    case 13: //用户名已存在
                        Utils.messageInfo(resp.data.msg)
                        break

                    case 14: //已登出
                        Utils.notificationSuccess(resp.data.msg)
                        break

                    case 15: //未登录
                    case 16: //登录信息过期，需重新登录
                        Utils.notificationInfo(resp.data.msg)
                        break

                    default:
                        return resp.data
                }
                return resp.data
            },
            error => {
                const { response } = error
                Utils.loadingClose()
                Utils.messageError(
                    response.status + '  ' + (Config.isProd ? '' : response.config.url)
                )
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
                  data: Utils.initFormData(data),
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
