/*
 * @Description: 登录注册接口
 * @Author: Zhao Linxing
 * @CreateTime: 2019-10-12 09:23:05
 * @LastEditor: Zhao Linxing
 * @LastEditTime: 2019-10-12 10:16:32
 */

import Request from '@/service/Request'

export default new (class extends Request {
    login(data = {}) {
        return this.post('/login', data)
    }
})()
