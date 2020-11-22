<template>
  <div class="grid-container">
    <article v-for="post in posts" :key="post.id">
      <h3>Navn: {{ post.name }}</h3>
      <h4>Email: {{ post.email }}</h4>
      <h4>Mobil: {{ post.contact }}</h4>
      <img :src="post.image" alt="" />
    </article>
  </div>
</template>

<script>
import { postRef } from '../firebase-db'

export default {
    data() {
        return {
            posts: []
     }
    },
    firestore: {
        posts: postRef
    }
}
</script>

<style>
</style>