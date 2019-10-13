<!--
 * @Description: 登录页
 * @Author: Zhao Linxing
 * @CreateTime: 2019-10-12 09:23:05
 * @LastEditor: Zhao Linxing
 * @LastEditTime: 2019-10-13 22:38:01
 -->

<template>
    <div>
        <div class="login-wrap" style=""></div>
        <div class="login-mask"></div>
        <main class="login-body">
            <section class="login-top">
                <a-input
                    v-model="params.username"
                    size="large"
                    class="login-input"
                    style="margin-bottom: 22px"
                    placeholder="用户名"
                    ref="usernameInput"
                >
                    <a-icon slot="prefix" type="user" />
                    <a-icon
                        slot="suffix"
                        type="close-circle"
                        v-if="params.username"
                        @click="usernameEmpty"
                    />
                </a-input>
                <a-input
                    v-model="params.password"
                    size="large"
                    class="login-input"
                    placeholder="密码"
                    ref="usernameInput"
                >
                    <a-icon slot="prefix" type="lock" />
                </a-input>
            </section>
            <section class="login-hint">
                <span @click="register">新用户注册</span>
                <span>忘记密码</span>
            </section>
            <section class="login-bottom">
                <a-button type="primary" size="large" @click="login">
                    <i class="iconfont iconGamepad"></i>
                    开 始 游 戏
                </a-button>
            </section>
        </main>
    </div>
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
        },
        register() {
            Register.register(this.params)
        },
        usernameEmpty() {
            this.params.username = ''
            this.$refs.usernameInput.focus()
        }
    }
}
</script>

<style scoped lang="scss">
.login-wrap {
    overflow: hidden;
}

.login-mask {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: url('~@/assets/images/Login-bg5.jpg') no-repeat fixed center;
    background-size: cover;
}

main {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 101;
    margin: 25vh auto 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 25%;
    overflow: hidden;
    border-radius: 12px;
    background: rgba(50, 50, 50, 0.85);
    box-shadow: 0 2px 16px #555555;

    .login-top,
    .login-hint,
    .login-bottom {
        width: 100%;
        text-align: center;
    }

    .login-top {
        padding-top: 80px;

        .login-input {
            width: 260px;
        }

        .anticon-close-circle {
            cursor: pointer;
            color: #c1c1c1;
            transition: color 0.3s;
            font-size: 12px;
        }
    }

    .login-hint {
        padding-top: 10px;

        > span {
            color: #fff;
            cursor: pointer;
            &:first-child {
                margin-right: 130px;
            }
            &:hover {
                text-decoration: underline;
            }
        }
    }

    .login-bottom {
        padding: 30px 0 40px;
        i {
            margin-right: 16px;
            font-size: 26px;
            vertical-align: sub;
        }
        span {
            margin-right: 20px;
        }
    }
}
</style>
