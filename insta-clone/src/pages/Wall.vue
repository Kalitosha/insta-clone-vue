<template>
  <div class="container">
    <post v-for="post of posts" :data="post" v-bind:key="post.id"></post>
  </div>
</template>

<script>
import Post from "@/components/Post";
import fakeData from "@/fakeData.json";

export default {
  // тут говорим, что будем использовать эти компоненты
  name: "app",
  components: {
    Post
  },

  data() {// это данные поста    
    return {
      posts: fakeData.posts
    };
  }
};
</script>

