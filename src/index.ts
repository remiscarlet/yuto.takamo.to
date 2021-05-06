import Vue from 'vue';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import * as _ from 'lodash';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './style.scss';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import App from './App.vue';

new Vue({
  render: h => h(App),
}).$mount('#app');
