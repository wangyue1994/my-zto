import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login/login'
import Waybill from '@/components/waybill/WayBill'
import Register from '@/components/login/register/Register'
import OrderCreate from '@/components/order/OrderCreate'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      children: [
        {
          path: 'regiter',
          component: Register
        }
      ]
    },
    {
      path: '/Waybill/:billId',
      name: 'Waybill',
      component: Waybill
    },
    {
      path: '/OrderCreate',
      name: 'OrderCreate',
      component: OrderCreate
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default {
  router
}

