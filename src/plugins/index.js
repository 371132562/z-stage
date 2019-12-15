/*
 * @描述: 插件管理
 * @创建者: Zhao Linxing
 * @创建时间: 2019/12/15 19:02
 * @修改人:
 * @修改时间:
 */
import Vue from 'vue'
import './element.js'

//定义一个全局过滤器实现日期格式化
import moment from 'moment'
Vue.filter('dateFormat', function(val, format = 'YYYY-MM-DD HH:mm:ss') {
    //当val为时间戳时，需转为Number类型
    //使用moment.js这个日期格式化类库实现日期的格式化功能
    return moment(val).format(format)
})
