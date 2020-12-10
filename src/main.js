import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

import 'normalize.css'
import '@/styles/index.less'

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
