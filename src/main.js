//框架
import Vue from 'vue'
import store from '@/store'

//样式，js，插件
import '@/assets/styles'
import '@/assets/scripts'

//最后引入防止自定义样式被覆盖
import router from '@/router'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
