import Vue from 'vue';
import SETTINGS from '../../settings';

const state = {
    posts: [],
    SinglePost: {},
};

const getters = {
    GetPosts(state) {
        return state.posts;
    },
    GetSinglePost(state) {
        return state.SinglePost;
    },
};

const mutations = {
    SetPosts(state, posts) {
        state.posts = posts;
    },
    SetSinglePost(state, singlePost) {
        state.SinglePost = singlePost;
    },
};

const actions = {
    GetPostsAll(context) {
        Vue.http.get(SETTINGS.API_BASE_PATH + "posts")
            .then(response => {
                return response.json();
            }).then(data => {
                context.commit("SetPosts", data);
            });
    },
    GetSinglePost(context, Filter) {
        Vue.http.get(SETTINGS.API_BASE_PATH + "posts?slug=" + Filter.slug)
            .then(response => {
                return response.json();
            }).then(data => {
                context.commit("SetSinglePost", data);
            });
    },
};

export default {
    state,
    getters,
    mutations,
    actions
}