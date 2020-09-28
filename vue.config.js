
module.exports = {
    configureWebpack:{ // 配置webpack
        resolve:{
            // extensions:[], // 后缀名省略配置
            alias:{
                // '@': resolve('./src')  默认配置了

                'common':'@/common',
                'assets':'@/assets',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views',
                'store':'@/store'

            }
        },

        // plugins:{
        //     autoprefixer:{},
        //     "postcss-px-to-viewport":{
        //         viewportWidth: 375, // 视窗宽度 设计宽度
        //         viewportHeight: 667,
        //         unitPrecision: 5, // 指定 px 转化成视窗单位值的小数位数 （很多时候无法整除）
        //         viewportUnit: 'vw', // 指定需要转换的视窗单位 根据vw计算
        //         selectorBlackList: ['ignore','tab-bar'], // 指定不需要转换的类
        //         minPixelValue: 1, // 小于1px的不转换视窗单位
        //         mediaQuery: false // 允许在媒体查询中转换px
        //     }
        // }
    },
   
}