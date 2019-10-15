<!--
 * @Description: 主页布局
 * @Author: Zhao Linxing
 * @CreateTime: 2019-10-08 08:44:43
 * @LastEditor: Zhao Linxing
 * @LastEditTime: 2019-10-15 14:29:21
 -->

<template>
    <a-layout>
        <Header></Header>
        <a-layout-content>
            <router-view></router-view>
        </a-layout-content>
        <a-layout-footer>底部</a-layout-footer>
    </a-layout>
</template>

<script>
import Header from './Header'

export default {
    name: 'index',
    components: {
        Header
    }
}
</script>

<style scoped lang="scss">
.ant-layout {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}
.ant-layout-content {
    margin-top: 64px;
    flex: 1;
}
</style>
