<!--
 * @描述: 页面布局
 * @创建者: Zhao Linxing
 * @创建时间: 2019/9/27 14:11
 * @修改人:
 * @修改时间:
 -->
<template>
    <a-layout>
        <a-layout-header></a-layout-header>
        <a-layout-content>
            <router-view></router-view>
        </a-layout-content>
        <a-layout-footer>底部</a-layout-footer>
    </a-layout>
</template>

<script>
export default {
    name: 'index'
}
</script>

<style scoped lang="scss">
.ant-layout {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}
.ant-layout-header {
    position: fixed;
    width: 100%;
    z-index: 1;
}
.ant-layout-content {
    margin-top: 64px;
    flex: 1;
}
.ant-layout-footer {
}
</style>
