module.exports = {
    presets: ['@vue/app'],
    plugins: [
        // element-ui按需引入
        [
            'component',
            {
                libraryName: 'element-ui',
                styleLibraryName: 'theme-chalk'
            }
        ]
    ]
}
