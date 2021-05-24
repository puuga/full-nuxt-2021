<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">full-nuxt-2021</h1>
      <hr />

      <div>{{ msg }}</div>
      <hr />
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { BasicType } from '@/types/BasicType.type'

export default Vue.extend({
  async asyncData({ app }) {
    const users: Array<BasicType> = (await app.$axios.get('/api/v1/users')).data
    const tasks: Array<BasicType> = (await app.$axios.get('/api/v1/tasks')).data
    return { users, tasks }
  },

  data() {
    return {
      msg: 'Hello',
    }
  },
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
