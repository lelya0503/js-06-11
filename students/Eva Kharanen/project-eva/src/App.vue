<template>
<project-main-page></project-main-page>
</template>

<script>
import ProjectMainPage from './components/project-main-page.vue'

export default {
  name: 'App',
  components: {
    ProjectMainPage,
  }
}
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
