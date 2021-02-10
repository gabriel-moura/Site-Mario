import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Mario from './components/Mario'
Vue.use(VueRouter);

const router = new VueRouter({
  routes:[
    {
        path: '/mario',
        component: Mario

    }
    // {
    //     path:'/',
    //     redirect:'/mario'
    // }
  ]
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
