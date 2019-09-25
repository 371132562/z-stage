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
import User from '@/service/api/User.js'
export default {
    name: 'index',
    created() {
        let params = {
            username: 'asdad',
            password: 'asdad'
        }
        User.login(params).then(resp => {
            console.log(resp)
        })
    },
    methods: {
        load() {}
    }
}
</script>

<style scoped lang="scss"></style>
