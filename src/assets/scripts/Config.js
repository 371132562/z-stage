/*
 * @Description: 环境变量，配置等
 * @Author: Zhao Linxing
 * @CreateTime: 2019-10-14 21:30:28
 * @LastEditor: Zhao Linxing
 * @LastEditTime: 2019-10-14 21:32:23
 */

const config = {
    isProd: process.env.NODE_ENV === 'production'
}

export default config
