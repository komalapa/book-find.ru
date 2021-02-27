<template>
  <div>
    <h1>Profile</h1>
    <CabinetNav />
    <b-card
        header="Информация"
        header-text-variant="white"
        header-tag="header"
        header-bg-variant="secondary"
        footer-border-variant="light"
        style="max-width: 100%"
    >
      <b-row>
        <b-col class="justify-content-start">
          <b-card-text><strong>Имя: </strong>Мария</b-card-text>
          <b-card-text><strong>Фамилия: </strong>Мария</b-card-text>
          <b-card-text><strong>Пол: </strong>Женский</b-card-text>
          <b-card-text><strong>Возраст: </strong>22</b-card-text>
          <b-card-text><strong>Местоположение: </strong>Москва, Россия</b-card-text>
        </b-col>
        <b-col>
          <b-card-text><strong>Регистрация: </strong>23 февраля 2021</b-card-text>
          <b-card-text><strong>Статус: </strong>Новичок</b-card-text>
        </b-col>
      </b-row>
    </b-card>
    <p>{{ user }}</p>
  </div>
</template>

<script>
import CabinetNav from '@/components/CabinetNav'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: "Profile",
  components: {
    CabinetNav
  },
  computed: mapGetters(["user"]),
  methods: mapActions(["fetchUser"]),
  mounted() {
    this.fetchUser();
  },
}
</script>

<style scoped>

</style>
