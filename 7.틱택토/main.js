import Vue from 'vue';
import TicTacToe from './TicTacToe';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

new Vue(TicTacToe).$mount('#root');

