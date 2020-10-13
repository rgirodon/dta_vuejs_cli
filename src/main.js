import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import counter from './components/counter.vue';
import stringReverser from './components/string_reverser.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

let routes = [
  { path: '/counter', component: counter },
  { path: '/string-reverser', component: stringReverser }
];

let router = new VueRouter({
  routes : routes
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
