<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to="/profile">Profile</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Привет мир'
    }
  }
}
</script>

<style scoped>
</style>
