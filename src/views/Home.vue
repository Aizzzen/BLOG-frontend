<template>
  <div class="home">
    <div class="blog-card-wrap">
      <div class="container">
        <h3>Смотреть больше...</h3>
        <div class="blog-cards">
          <post-card :post="post" v-for="(post, idx) in samplePostCard" :key="idx"/>
        </div>
      </div>
    </div>
    <div class="updates">
      <div class="container">
        <h2>Не пропускайте новые публикации!</h2>
        <router-link class="router-button" :to="{name: 'Register'}">
          Перейти к регистрации <Arrow class="arrow arrow-light" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import PostCard from "../components/PostCard";
import Arrow from '../assets/Icons/arrow-right-light.svg'
export default {
  name: "Home",
  components: {
    PostCard,
    Arrow
  },
  data() {
    return {

    }
  },
  computed: {
    samplePostCard() {
      return this.$store.state.samplePostCard
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}

.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media(min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media(min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>
