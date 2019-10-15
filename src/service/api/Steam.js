/*
 * @Description: Steam
 * @Author: Zhao Linxing
 * @CreateTime: 2019-10-15 14:27:17
 * @LastEditor: Zhao Linxing
 * @LastEditTime: 2019-10-15 14:28:29
 */

import Request from '@/service/Request'

export default new (class extends Request {
    getGameDetails(data = {}) {
        //获取游戏详情
        return this.post('/getGameDetails', data)
    }
})()
