/*
 * @Description: Vuex
 * @Author: Zhao Linxing
 * @CreateTime: 2019-09-20 09:13:19
 * @LastEditor: Zhao Linxing
 * @LastEditTime: 2019-10-14 14:01:21
 */

import Vue from 'vue'
import Vuex from 'vuex'

import * as types from './mutation-types'

import { UserApi } from '@/service'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: {
            id: '',
            username: '',
            steamId: ''
        }
    },
    getters: {
        userInfo: state => state.userInfo
    },
    mutations: {
        [types.USER_INFO](state, data) {
            state.userInfo = data
        }
    },
    actions: {
        getUserInfo({ commit }) {
            UserApi.isAuth().then(resp => {
                commit(types.USER_INFO, resp.data)
            })
        }
    }
})
