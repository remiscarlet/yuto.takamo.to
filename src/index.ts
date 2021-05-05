import Vue from 'vue';

//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import * as _ from 'lodash';

//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap-vue/dist/bootstrap-vue.css';
import './style.scss';

//Vue.use(BootstrapVue);
//Vue.use(IconsPlugin);

import HelloVue from './Components/Hello.vue';

let v = new Vue({
  el: "#app",
  template: `
  <div>
    Name: <input v-model="name" type="text">
    <span>Hi</span>
    <HelloVue/>
  </div>
  `,
  data: { name: 'World' },
  components: {
    HelloVue
  },
});
