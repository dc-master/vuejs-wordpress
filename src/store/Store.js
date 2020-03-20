import Vue from 'vue';
import Vuex from 'vuex';

import posts from './Modules/Posts';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {},
    modules: {
        posts
    }
});