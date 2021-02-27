<template>
  <div>
    <b-row>
      <b-col cols="2">
        <b-avatar src="https://placekitten.com/300/300" size="6rem" />
      </b-col>
      <b-col cols="10" class="ml-0">
        <b-row>
          <h3>nickname</h3>
        </b-row>
        <b-row class="col-5 justify-content-between pl-0">
          <p>Статус</p>
          <p>Рейтинг</p>
        </b-row>
      </b-col>
    </b-row>
    <div class="row justify-content-between mt-5">
      <router-link to="/profile" class="btn-header">Профиль</router-link>
      <router-link to="/reviews" class="btn-header">Рецензии</router-link>
      <router-link to="/mybook" class="btn-header">Мои книги</router-link>
      <router-link to="/lists" class="btn-header">Списки</router-link>
      <router-link to="/ratings" class="btn-header">Оценки</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileNav"
}
</script>

<style scoped lang="scss">
.btn-header {
  text-decoration: none;
  color: $text-color;
  width: 201px;
  height: 64px;
  line-height: 64px;
  font-size: 24px;
  font-weight: 700;
  background-color: $btn-color;
  -webkit-border-radius: $bdrs;
  -moz-border-radius: $bdrs;
  border-radius: $bdrs;
  -webkit-box-shadow: $bxsh;
  -moz-box-shadow: $bxsh;
  box-shadow: $bxsh;

&:hover {
   text-decoration: none;
   color: $text-color;
 }

}
</style>