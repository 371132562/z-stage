/*
 * @描述: 工具方法
 * @创建者: Zhao Linxing
 * @创建时间: 2019/9/24 20:52
 * @修改人:
 * @修改时间:
 */

import { notification, message } from 'ant-design-vue'
import { Loading } from 'element-ui'

let loading //Loading实例

const utils = {
    initFormData(data = {}) {
        /*json数据转为FormData*/
        let ret = ''
        for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret.replace(/&$/, '')
    },

    notificationSuccess(title = '成功', desc = '', duration = 2.5) {
        /*全局，成功提示*/
        notification.success({
            message: title,
            description: desc,
            duration: duration
        })
    },

    notificationError(title = '错误', desc = '', duration = 2.5) {
        /*全局，错误提示*/
        notification.error({
            message: title,
            description: desc,
            duration: duration
        })
    },

    notificationWarning(title = '警告', desc = '', duration = 2.5) {
        /*全局，警告提示*/
        notification.warning({
            message: title,
            description: desc,
            duration: duration
        })
    },

    notificationInfo(title = '提示', desc = '', duration = 2.5) {
        /*全局，一般提示*/
        notification.info({
            message: title,
            description: desc,
            duration: duration
        })
    },

    messageSuccess(content = '成功', duration = 2.5) {
        /*反馈,，成功提示*/
        message.success(content, duration)
    },

    messageError(content = '错误', duration = 2.5) {
        /*反馈,，成功提示*/
        message.error(content, duration)
    },

    messageWarning(content = '警告', duration = 2.5) {
        /*反馈,，成功提示*/
        message.warning(content, duration)
    },

    messageInfo(content = '提示', duration = 2.5) {
        /*反馈,，一般提示*/
        message.info(content, duration)
    },

    messageLoading(content = '加载中') {
        /*反馈，加载提示，调用返回方法关闭提示*/
        /*
        const hide = this.$message.loading('Action in progress..', 0);
        setTimeout(hide, 2500)
        */
        return message.loading(content, 0)
    },

    loadingOpen: function({ target = null, text = 'Loading' }) {
        /*加载开启*/
        loading = Loading.service({
            target: target,
            text: text,
            background: 'rgba(255,255,255,.7)',
            lock: true
        })
    },

    loadingClose: function() {
        /*加载关闭，需要异步关闭避免dom未刷新关闭失败*/
        if (loading) {
            // 避免不存在加载动画时的警告提示
            setTimeout(() => {
                loading.close()
            }, 0)
        }
    }
}

export default utils
