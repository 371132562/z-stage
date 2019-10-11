/*
 * @描述: 登录注册相关接口
 * @创建者: Zhao Linxing
 * @创建时间: 2019/9/25 20:47
 * @修改人:
 * @修改时间:
 */

import Request from '@/service/Request'

export default new (class extends Request {
    login(data = {}) {
        // return this.post('/api/cats', data)
        return this.get('/', data)
    }
})()
