import Vue from 'vue';
import LottoGenerator from './LottoGenerator';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

new Vue(LottoGenerator).$mount('#root');

