import App from './App'
import router from './router'
import store from './store'

import Icon from 'vue2-svg-icon/Icon.vue'
import VueCountUp from 'vue-countupjs'

import './assets/style/index.scss'
import './permission'

Vue.config.productionTip = false
Vue.use(VueCountUp)
Vue.component('icon', Icon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
