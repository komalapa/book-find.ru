<template>
  <div class="container">
    <header>
      <Navbar />
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  name: "layout",
  components: {
    Navbar
  }
}
</script>

<style scoped>

</style>
