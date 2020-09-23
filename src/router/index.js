import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home = ()=>import('views/home/Home')
const Category = ()=>import('views/category/Category')
const Card = ()=>import('views/card/Card')
const Wd = ()=>import('views/wd/Wd')
const Detail = ()=>import('views/detail/Detail')


const routes = [
    {path:'/',redirect:'/home'},
    {path:'/home',name:'home',component:Home},
    {path:'/category',name:'category',component:Category},
    {path:'/card',name:'card',component:Card},
    {path:'/wd',name:'wd',component:Wd},
    {path:'/detail/:id',name:'detail',component:Detail},
]

const router = new VueRouter({
    mode:'history',
    routes
})

export default router