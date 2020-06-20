import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store/'
import router from './router'
import animate from 'animate.css'
Vue.use(animate);


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')