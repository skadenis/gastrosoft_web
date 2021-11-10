import Vue from 'vue';
import App from './App.vue'

import DefaultLayout from './layouts/Default'

import router from './router';

import './scss/app.scss';


// Vue.config.productionTip = false
// Vue.config.devtools = false

Vue.component("layout-default", DefaultLayout);


router.beforeEach((to, from, next) => {
  document.title = to.name + " - GastroSoft"
  next();
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');


