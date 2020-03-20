<template>
    <section class="grid-x grid-margin-x">
        <article class="cell small-3" v-for="post in Posts" :key="post.id">
            <div class="card" style="width: 250px;">
                <div class="card-divider">
                    <h4>{{post.title.rendered}}</h4>
                </div>
                <img v-bind:src="tempuri + '/src/assets/img/pl-250x200.jpg'">
                <div class="card-section">
                    <div v-html="post.excerpt.rendered"></div>
                    <a class="button info" v-bind:href="post.link">ادامه خبر</a>
                </div>
            </div>
        </article>
    </section>
</template>

<script>
import SETTINGS from '../settings';
export default {
    data(){
        return {
            tempuri : SETTINGS.TEMPLATE_URI
        }
    },
    computed:{
        Posts(){
            return this.$store.getters.GetPosts;
        }
    },
    created(){
        if (this.Posts.length == 0)
        this.$store.dispatch("GetPostsAll");
    }
}
</script>