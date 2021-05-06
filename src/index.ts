import Vue from 'vue';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import * as _ from 'lodash';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './style.scss';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import App from './App.vue';

var host = "yuto.takamo.to";
if ((host == window.location.host) && (window.location.protocol != "https:")) {
  window.location.protocol = "https";
}

new Vue({
  render: h => h(App),
}).$mount('#app');
