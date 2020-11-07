import Vue from 'vue'
import VueRouter from 'vue-router'
const Home=()=>import ('../views/home/Home.vue')
const Category=()=>import ('../views/category/Category.vue')
const Cart=()=>import ('../views/cart/Cart.vue')
const Profile=()=>import ('../views/profile/Profile.vue')
// 安装插件
Vue.use(VueRouter)
const routes = [
    {
        path:'',
        redirect: '/home'
      },
      {
        path:'/home',
        component:Home
      },
      {
        path:'/Category',
        component:Category
    
      },
      {
        path:'/Cart',
        component:Cart
      },
      {
        path:'/Profile',
        component:Profile
      }

]
// 创建router
const router = new VueRouter({
    routes,
    mode:'history'


})
export default router