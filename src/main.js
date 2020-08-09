import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { ValidationProvider, ValidationObserver, configure } from 'vee-validate/dist/vee-validate.full';
import App from './App.vue';
import router from './router';

window.$ = $;
Vue.component('loading', Loading);
Vue.use(VueAxios, axios);
Vue.component('validation-provider', ValidationProvider);
Vue.component('validation-observer', ValidationObserver);

// Class 設定檔案
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
