<!--
 * @描述: 登录页
 * @创建者: Zhao Linxing
 * @创建时间: 2019/9/24 20:21
 * @修改人:
 * @修改时间:
 -->
<template>
    <main class="login-wrap">
        <aside class="login-left">背景</aside>
        <section class="login-right"></section>
    </main>
</template>

<script>
import { Register } from '@/service/api'

export default {
    name: 'index',
    data() {
        return {
            params: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            Register.login(this.params)
        }
    }
}
</script>

<style scoped lang="scss">
.login-wrap {
    margin: 210px auto 0;
    display: flex;
    justify-content: center;
    width: 60%;
    overflow: hidden;
    border-radius: 12px;
    box-shadow: 0 2px 16px #9c9c9c;
    .login-left,
    .login-right {
        height: 400px;
    }

    .login-left {
        width: 45%;
        background: url('../../assets/images/Login-bg1.jpg') no-repeat top left;
        background-size: cover;
    }

    .login-right {
        width: 55%;
    }
}
</style>
