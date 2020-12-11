<template lang="pug">
#app
  router-link(to="/")
    | index
  router-link(to="/chess")
    | chess
  router-view
  HelloWorld(msg="Welcome to Your Vue.js App")
</template>

<script>
import { defineComponent } from '@vue/composition-api';

import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
