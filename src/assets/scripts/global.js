/*
 * @描述: 全局js
 * @创建者: Zhao Linxing
 * @创建时间: 2019/9/24 20:55
 * @修改人:
 * @修改时间:
 */

import Vue from 'vue'
import moment from 'moment' //时间格式化

Vue.prototype.moment = moment
Vue.filter('dateFormat', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern)
})
