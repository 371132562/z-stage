<!--
 * @描述: 登录页
 * @创建者: Zhao Linxing
 * @创建时间: 2019/9/24 20:21
 * @修改人:
 * @修改时间:
 -->
<template>
    <div @click="load">444</div>
</template>

<script>
import Test from '@/service/api/test'
export default {
    name: 'index',
    created() {
        this.$utils.notificationSuccess()
        // Test.test({ name: '测试', id: 1 })
    },
    methods: {
        load() {}
    }
}
</script>

<style scoped lang="scss"></style>
