/*
 * @Description: 登录注册接口
 * @Author: Zhao Linxing
 * @CreateTime: 2019-10-12 09:23:05
 * @LastEditor: Zhao Linxing
 * @LastEditTime: 2019-10-14 11:24:33
 */

import Request from '@/service/Request'

export default new (class extends Request {
    login(data = {}) {
        //登录
        return this.post('/login', data)
    }

    register(data = {}) {
        //注册
        return this.post('/register', data)
    }

    logout(params = {}) {
        //登出
        return this.get('/register', params)
    }
})()
