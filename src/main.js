import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './App.vue';

import counter from './components/counter.vue';
import stringReverser from './components/string_reverser.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

let routes = [
  { path: '/counter', component: counter },
  { path: '/string-reverser', component: stringReverser }
];

let router = new VueRouter({
  routes : routes
});

let store = new Vuex.Store({
  state: {
    count: 0,
    message: ''
  },
  mutations: {
    increment: function(state) {
      state.count++
    },
    reverse: function(state) {
      state.message = state.message.split('').reverse().join('');
    },
    setMessage: function(state, newValue) {
      state.message = newValue;
    }
  }
});

new Vue({
  render: h => h(App),
  router: router,
  store: store
}).$mount('#app')
