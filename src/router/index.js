import Vue from 'vue'
import VueRouter from 'vue-router'
import register from '@/views/register.vue'
import Login from '@/views/Login.vue'
import userInfo from '@/views/userInfo.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/register',
    component: register,
  },
  {
    path: '/Login',
    component: Login,
  },
  {
    path: '/userInfo',
    component: userInfo,
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
