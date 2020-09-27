
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
        }
    }
}