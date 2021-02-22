<template>
  <div id="app">
    <Layout>
      <router-view/>
    </Layout>
  </div>
</template>

<script>
import Layout from './views/Layout'

export default {
  name: 'App',
  components: { Layout }
}
</script>

<style lang="scss">

#app {
  font-family: Rambla, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-color;
  margin-top: 0;
  background-color: $la-color;
  min-height: 100vh;
}
</style>
