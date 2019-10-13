/*
 * @Description: 登录注册接口
 * @Author: Zhao Linxing
 * @CreateTime: 2019-10-12 09:23:05
 * @LastEditor: Zhao Linxing
 * @LastEditTime: 2019-10-13 22:35:01
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
})()
