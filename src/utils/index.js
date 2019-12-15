import { Loading } from 'element-ui'

let loading //Loading实例

const Utils = {
    initFormData(data = {}) {
        /*json数据转为FormData*/
        let ret = ''
        for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret.replace(/&$/, '')
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

export default Utils
