/*
 * @Description: 用户接口
 * @Author: Zhao Linxing
 * @CreateTime: 2019-09-26 08:24:27
 * @LastEditor: Zhao Linxing
 * @LastEditTime: 2019-10-12 10:17:26
 */

import Request from '@/service/Request'

export default new (class extends Request {
    isAuth(params = {}) {
        //检查登录用户
        return this.get('/isAuth', params)
    }
})()
