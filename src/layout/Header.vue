<!--
 * @Description: Header
 * @Author: Zhao Linxing
 * @CreateTime: 2019-10-14 13:44:33
 * @LastEditor: Zhao Linxing
 * @LastEditTime: 2019-10-14 15:53:03
 -->

<template>
    <a-layout-header>
        <div class="user-info">{{ username }}</div>
    </a-layout-header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            username: ''
        }
    },
    computed: {
        ...mapGetters(['userInfo'])
    },
    methods: {
        ...mapActions(['getUserInfo'])
    },
    created() {
        if (!this.userInfo.username) {
            this.getUserInfo()
        }
    }
}
</script>

<style lang="scss" scoped>
.ant-layout-header {
    position: fixed;
    width: 100%;
    z-index: 1;
    .user-info {
        float: right;
        color: white;
    }
}
</style>
