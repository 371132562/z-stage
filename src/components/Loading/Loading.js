/*
 * @描述: 全覆盖Loading逻辑处理
 * @创建者: Zhao Linxing
 * @创建时间: 2019/9/24 22:03
 * @修改人:
 * @修改时间:
 */

import Vue from 'vue'
import LoadingVue from '@/components/Loading/Loading.vue'

const LoadingConstructor = Vue.extend(LoadingVue)

let id = 1
const Loading = () => {
    let instance = new LoadingConstructor()
    instance.id = 'loading' + id++
    instance.vm = instance.$mount()
    document.body.appendChild(instance.vm.$el)
    instance.dom = instance.vm.$el
    instance.vm.close = () => {
        document.body.style.overflow = 'auto'
        // this.$destroy(true) //销毁组件
        document.body.removeChild(instance.vm.$el) // 从DOM里将这个组件移除
    }
    return instance.vm
}

export default Loading
