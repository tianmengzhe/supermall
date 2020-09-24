// 详情页接口封装

// 获取详情数据
export function getData(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                data:{
                    name:"ddd",
                    itemInfo:{ 
                        topImages:[ // 轮播图
                            require("assets/img/221307-15784063870d2e.jpg"),
                            require("assets/img/190334-154737741421ca.jpg")
                        ]
                    },
                    desc:'秋装----秋装---秋装--秋装--秋装--秋装--秋装',
                    skuInfo:{
                        
                        price:'￥109.00',
                        p:'￥155.72'  //原价
                    },
                    columns:['销量 4173', '收藏167人', '默认快递']
                }
            })
        },10)
    });
}