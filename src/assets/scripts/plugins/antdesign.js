/*
 * @描述: ant design组件管理
 * @创建者: Zhao Linxing
 * @创建时间: 2019/9/24 21:20
 * @修改人:
 * @修改时间:
 */

/*
使用 babel-plugin-import 来进行按需加载
import { Button } from 'ant-design-vue';
Vue.use(Button)
插件会帮你转换成 ant-design-vue/lib/xxx 的写法。另外此插件配合 style 属性可以做到模块样式的按需自动加载。
参考https://vue.ant.design/docs/vue/getting-started-cn/按需加载部分
*/
import Vue from 'vue'
import { Row, Col } from 'ant-design-vue'

Vue.use(Row)
Vue.use(Col)
