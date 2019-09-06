import Vue from 'vue'
import Vue2Filters from 'vue2-filters'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps'


Vue.use(Vue2Filters)
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyD-W6zNqMJL5P4VlrGuiHwX9plgi7LaJ4o",
    libraries: "places" // necessary for places input
  }
});
Vue.use(Antd)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
