import Vue from 'vue';

//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import * as _ from 'lodash';

//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap-vue/dist/bootstrap-vue.css';
import './style.scss';

//Vue.use(BootstrapVue);
//Vue.use(IconsPlugin);

let v = new Vue({
  el: "#app",
  template: `
  <div>
    Name: <input v-model="name" type="text">
    <span>Hi</span>
  </div>
  `,
  data: { name: 'World' },
});
