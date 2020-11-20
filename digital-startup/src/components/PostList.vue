<template>
  <div class="grid-container">
    <article v-for="post in posts" :key="post.id">
      <img :src="post.image" alt="" />
      <h3>Navn: {{ post.name }}</h3>
      <h4>Alder: {{ post.Alder }} år</h4>
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