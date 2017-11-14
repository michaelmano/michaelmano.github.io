import '../scss/app.scss';
import Vue from 'vue';

Vue.component('vue-header', require('./vue/components/Header.vue'));

const app = new Vue({
    el: '#app',
    data: {
        loaded: sessionStorage.getItem('loaded'),
    }
});

document.addEventListener("DOMContentLoaded", function() {
    if (!app.loaded) sessionStorage.setItem('loaded', true);
});