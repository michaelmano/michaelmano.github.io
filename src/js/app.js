import '../scss/app.scss';
import Vue from 'vue';

import data from './vue/lib/data';

Vue.component('vue-app', require('./vue/App.vue'));

new Vue({
    el: '#app',
    data,
});