import Vue from 'vue'
import VueRx from 'vue-rx'
import App from './AppStart.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.use(VueRx)

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app')
