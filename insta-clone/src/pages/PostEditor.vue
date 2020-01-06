<template>
  <div class="container" v-if="post">
    <div class="post">
      <div class="post__header">
        <div class="post__user">
          <div class="user">
            <a href="#" class="user__avatar">
              <img :src="post.user.ava" alt="" />
            </a>
            <a href="#" class="user__name">
              {{ post.user.name }} {{ post.user.surname }}
            </a>
          </div>
        </div>

        <div class="post__links"></div>
      </div>

      <div class="post__img">
        <img :src="post.src" alt="Photo" />
      </div>

      <div class="post__edit">
        <div class="post__edit-name">Описание:</div>
        <div class="post__edit-textarea-wrapper">
          <textarea
            class="post__edit-textarea"
            v-model="post.description"
          ></textarea>
        </div>
      </div>

      <div class="post__edit">
        <div class="post__edit-name">Хэштеги:</div>
        <div class="post__edit-textarea-wrapper">
          <textarea class="post__edit-textarea" v-model="post.tags"> </textarea>
        </div>
      </div>

      <div class="post__buttons">
        <button class="btn btn--save">Сохранить</button>
        <button class="btn btn--cancel">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async created() {
    // при запуске вью будем запрашивать из {бд (в сторе)} посты и искать с нужным нам id //lifehooke
    this.post = await this.$store.dispatch("getPostById", this.postId)

    //или так
    /*created() {
      this.$store.dispatch("getPostById", this.postId)
    .then(post => this.post = post);*/
 

    /*const posts = require("@/fakeData.json").posts;
        for(const post of posts){
            if(post.id === this.postId){
                this.post = post;
            }
        }*/
  },
  data() {
    return {
      post: null
    };
  },

  computed: {
    // вычисляемые св-ва
    postId() {
      return parseInt(this.$route.params.id); // router - наш маршрутизатор, route - текущий путь
    }
  }

};
</script>
