<template>
  <div class="about">
    <h1>Testpersoner</h1>
    <post-list> </post-list>
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from '../components/PostList.vue'
export default {
  name: "Home",
  components: {
    PostList
  }
};
</script>

<style scoped>
.about {
  margin-top: 80px;
}
</style>
