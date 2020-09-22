# supermall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



### 滚动 better-scroll
重点解决移动端（已支持 PC）各种滚动场景需求的插件
github： https://github.com/ustbhuangyi/better-scroll
docs： https://better-scroll.github.io/docs/zh-CN/guide/ 

#### 基本使用
```javascript
<div class="scroll" ref="wrapper">
    // 容器里面的内容只能有一个
    <ul>
        <li></li> *100
    <ul>
</div>

mounted(){
    // '.scroll'
    // document.querySelector('.scroll')
    // this.$refs.wrapper
    this.bScroll = new BScroll(this.$refs.wrapper, {
        scrollY: true
    });
}

.scroll {
  height: 200px;
  border: 1px solid red;
  overflow: hidden;
}
```



新的 思路

前端 vue-cli3


后端  
    实现node也在该端口下运行  

    使用express框架  搭建后台
    先使用 json 文件保存数据
        封装一层对json文件的操作api
    后无缝迁移到 mongoose 数据库
        对 mongose 操作api

    当做后台

最后实现  