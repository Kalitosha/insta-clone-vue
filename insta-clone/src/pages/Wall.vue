<template>
  <div class="container">
    <post v-for="post of posts" :data="post" v-bind:key="post.id"></post>
  </div>
</template>

<script>
import Post from "@/components/Post";
//import fakeData from "@/fakeData.json";

export default {
  // тут говорим, что будем использовать эти компоненты
  name: "app",
  components: {
    Post
  },

  created(){ // при создании поста вызываем это
    this.$store.dispatch('downloadPosts')
  },

  
  // data() {// это данные поста    //это было до store/vuex
  //   return {
  //     posts: fakeData.posts
  //   };
  // },

  computed: {
    posts(){
      return this.$store.state.posts
    }
  }

};
</script>

