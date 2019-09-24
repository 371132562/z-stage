/*
 * @描述: 脚本集中管理
 * @创建者: Zhao Linxing
 * @创建时间: 2019/9/24 20:53
 * @修改人:
 * @修改时间:
 */

import Vue from 'vue'

import '@/assets/scripts/global.js'
import '@/assets/scripts/plugins/antdesign'
import utils from '@/assets/scripts/utils.js'

//组件
import { Loading } from '@/components'

Vue.prototype.$utils = utils
Vue.prototype.$loading = Loading
export { utils }
