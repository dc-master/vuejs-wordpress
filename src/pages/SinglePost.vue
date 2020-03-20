<template>
  <div class="bv-example-row pt-4">
    <template v-if="Post">
        <div class="card">
            <div class="card-divider">
              
              {{ Post[0].title.rendered }}
            </div>
            <div class="card-section">
                <p v-html="Post[0].content.rendered"></p>
            </div>
        </div>
    </template>
  </div>
</template>

<script>
export default {
    computed:{
      Post(){
        return this.$store.getters.GetSinglePost;
      }
    },
    watch: {
      $route(){
        this.$store.dispatch("GetSinglePost", {
            slug: this.$route.params.postSlug
        });
      }
    },
    created() {
      this.$store.dispatch("GetSinglePost", {
            slug: this.$route.params.postSlug
        });
    },
  }

</script>
