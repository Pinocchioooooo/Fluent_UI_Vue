import Vue from 'vue'
import VueRouter from 'vue-router'

import FeButton from '@/button/demo'

Vue.use(VueRouter)

const routes = [{ path: '/fe-button', component: FeButton }]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
