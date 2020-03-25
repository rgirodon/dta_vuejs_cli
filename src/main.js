import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);

import counter from './components/counter.vue';
import shopping from './components/shopping.vue';

let routes = [
    { path: '/counter', component: counter },
    { path: '/shopping/:type', component: shopping, props: true }
];

let router = new VueRouter({
  routes : routes
});

let store = new Vuex.Store({
  state: {
      count: 0,
      epicerieItems: [],
      bricolageItems: []
  },
  mutations: {
      increment: function(state) {

          state.count++;
      },
      addItem: function(state, payload) {
          
          if (payload.type == 'epicerie') {
          
              state.epicerieItems.push({label : payload.itemToAdd});
          }
          else if (payload.type == 'bricolage') {
          
              state.bricolageItems.push({label : payload.itemToAdd, id: payload.id});
          }
      }
  }
});

new Vue({
  render: h => h(App),
  router: router,
  store: store
}).$mount('#app')
