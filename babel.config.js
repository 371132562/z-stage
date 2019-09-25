module.exports = {
    presets: ['@vue/app'],
    plugins: [
        [
            /* element-ui 按需引入*/
            'component',
            {
                libraryName: 'element-ui',
                styleLibraryName: 'theme-chalk'
            }
        ],
        /* ant-design-vue 按需引入*/
        ['import', { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: true }]
    ]
}
