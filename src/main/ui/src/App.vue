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
//Цвета
$la-color: hsla(233, 20%, 83%, 1); //бэкграунд
$btn-color: hsla(233, 66%, 91%, 1); //кнопка
$input-color: hsla(234, 67%, 92% ,1); //поле ввода
$text-color: hsla(233,7%,50%,1); //текст
$bg-card-color: hsla(51, 7%, 92%, 1); //фон карточки
$light-el-bg-color: hsla(233, 66%, 91%, 1); //фон верхнего элемента

$bxsh-down: 9px 9px 16px hsla(228, 48%, 93%, 1); // тень нижняя
$bxsh-up: -9px -9px 16px hsla(228, 15%, 70%, 1); // тень верхняя

$bdrs: 7px; //скругление границ
$border: 1px solid hsla(0, 0%, 100%, 0.4); //границы

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
