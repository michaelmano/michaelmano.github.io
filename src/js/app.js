import '../scss/app.scss';
import Vue from 'vue';
require.context("../images", true, /^\.\/.*\.*/);

Vue.component('vue-header', require('./vue/components/Header.vue'));
Vue.component('vue-projects', require('./vue/components/Projects.vue'));

const app = new Vue({
    el: '#app',
    data: {
        loaded: sessionStorage.getItem('loaded') ? true : false,
    },
    watch: {
        loaded: function(value) {
            console.log(value)
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    if (!app.loaded) {
        sessionStorage.setItem('loaded', true);
        setTimeout(function() {
            app.loaded = true;
        }, 3250);
    }
});