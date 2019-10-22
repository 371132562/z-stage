/*
 * @Description: js集中引入
 * @Author: Zhao Linxing
 * @CreateTime: 2019-09-25 18:04:21
 * @LastEditor: Zhao Linxing
 * @LastEditTime: 2019-10-22 09:12:34
 */

import Vue from 'vue'

import Utils from '@/assets/scripts/Utils.js'

import '@/assets/scripts/global.js'
import '@/assets/scripts/plugins/antdesign.js'

//组件

Vue.prototype.$Utils = Utils
