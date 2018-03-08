// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// used for creating global scope variable usage (flux data architecture)
import Vuex from 'vuex'
Vue.use(Vuex);
/*
const store = new Vue.Store({

    // contains all our properties and data, which define our app state.
    state:{

    },
    // are invoked by actions when changing or mutating the state object
    mutations:{

    },
    // can call multiple mutations or other actions to check data integrity before committing data
    actions:{

    }

});
*/

import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Login from './pages/loginForm'
import Dashboard from './pages/dashBoard'
import Search from './pages/search'
import Claims from './pages/claims'

const router = new VueRouter({
    routes: [
        {
          path: '/', component: Login
        },
        {
          path: '/dashboard', component: Dashboard, name: 'Dashboard'
        },
        {
            path: '/search', component: Search, name: 'Search'
        },
        {
            path: '/claims/:claimID/campaign/:campaignID/', component: Claims, name: 'Claims', props: true
        }
    ]
});

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate);

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial);


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //store,
  router,
  render: h => h(App),
  //components: { App },
  //template: '<App/>'
})
