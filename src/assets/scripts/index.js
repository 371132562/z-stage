/*
 * @描述: 脚本集中管理
 * @创建者: Zhao Linxing
 * @创建时间: 2019/9/24 20:53
 * @修改人:
 * @修改时间:
 */

import Vue from 'vue'

import utils from '@/assets/scripts/utils.js'

import '@/assets/scripts/global.js'
import '@/assets/scripts/plugins/antdesign.js'

//组件

Vue.prototype.$utils = utils
export { utils }
