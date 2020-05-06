import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../node_modules/_foundation-sites@6.6.3@foundation-sites/dist/css/foundation.css'
Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
