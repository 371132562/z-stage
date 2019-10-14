/*
 * @Description: 全局js 管理插件组件等配置
 * @Author: Zhao Linxing
 * @CreateTime: 2019-09-24 20:55:26
 * @LastEditor: Zhao Linxing
 * @LastEditTime: 2019-10-14 21:30:01
 */

import Vue from 'vue'
import moment from 'moment' //时间格式化

Vue.prototype.moment = moment
Vue.filter('dateFormat', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern)
})
