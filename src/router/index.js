import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '@/views/register.vue'
import login from '@/views/login.vue'
import userInfo from '@/views/userInfo.vue'
import edit from '@/views/edit.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/register',
    component: register
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/userinfo',
    component: userInfo,
    meta:{
      istoken:true
    }
  },
  {
    path: '/edit',
    component: edit,
    meta:{
      istoken:true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from, next)=>{
  if ((localStorage.getItem('token')=='undefined')&&(localStorage.getItem('id')=='undefined')&&(to.meta.istoken==true)){
    router.push('/login')
    return
  }
  next()
})


export default router
