<!--
 * @描述: 全覆盖Loading组件
 * @创建者: Zhao Linxing
 * @创建时间: 2019/9/24 22:03
 * @修改人:
 * @修改时间:
 -->
<template>
    <div class="loading-wrap">
        <a-spin tip="Loading..." size="large">
            <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />
        </a-spin>
    </div>
</template>

<script>
import Vue from 'vue'
import Spin from 'ant-design-vue'

Vue.use(Spin)
export default {
    name: 'Loading',
    created() {
        document.body.style.overflow = 'hidden'
    },
    methods: {
        close() {
            document.body.style.overflow = 'auto'
            this.$destroy(true) //销毁组件
            document.body.removeChild(this.$el) // 从DOM里将这个组件移除
        }
    }
}
</script>

<style scoped lang="scss">
.loading-wrap {
    z-index: 3000;
    /*background-color: rgba(51, 51, 51, .8);*/
    background: rgba(255, 255, 255, 0.7);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    overflow: hidden;
}
</style>
