import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue'
import { Routes } from './routes';
import { store } from './store/Store';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
    routes: Routes,
    mode: 'history',
    base: '/vue-api',
});


new Vue({
    el: document.querySelector('#app'),
    store,
    router,
    render: h => h(App)
})