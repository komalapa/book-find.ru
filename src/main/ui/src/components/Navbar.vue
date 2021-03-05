<template>
  <div class="row">
    <div id="login-wrp" v-if="isLoginFormVisible && !isLoggedIn" @click="exitByClick"><Login /></div>
    <div id="reg-wrp" v-if="isRegFormVisible && !isLoggedIn" @click="exitByClick"><Registration /></div>
    <div class="row col-8 justify-content-start">
      <a href="#" class="btn-header">Мои книги</a>
      <a href="#" class="btn-header">Подборки</a>
      <a href="#" class="btn-header">Рецензии</a>
    </div>
    <div class="row col justify-content-end">
      <a href="#" v-if="!isLoggedIn" @click="showLoginForm" class="btn-header btn-auth">Вход</a>
      <a href="#" v-if="!isLoggedIn" @click="showRegForm" class="btn-header btn-auth">Регистрация</a>
      <a href="#" v-if="isLoggedIn" @click="logout" class="btn-header btn-auth">Выход</a>
    </div>
  </div>
</template>

<script>
import Login from './Login.vue'
import Registration from './Registration.vue'

export default {
  name: "Navbar",
  components: {
        Login,
        Registration
    },
  data:function(){
    return {
      isLoginFormVisible: false,
      isRegFormVisible: false,
    }
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    logout: function () {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/"); 
        this.isRegFormVisible = false;
        this.isLoginFormVisible = false;
      });
    },
    showLoginForm: function(){
      this.isLoginFormVisible = true;
    },
    showRegForm: function(){
      this.isRegFormVisible = true;
    },
    exitByClick: function(e){
      if (
        (e.path[0] === document.getElementById("login-wrp"))//document.querySelector("#app > div.login-wrp > div")) 
        )
        {
        this.isLoginFormVisible = false
      }
      if (
        (e.path[0] === document.getElementById("reg-wrp"))//document.querySelector("#app > div.reg-wrp > div")) 
        )
        {
        this.isRegFormVisible = false
      }
    }
  },
};

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
  margin-right: 14px;
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

.btn-auth {
  -webkit-border-radius: 32px;
  -moz-border-radius: 32px;
  border-radius: 32px;
  margin: 0;
}
#login-wrp, #reg-wrp{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 1;
    z-index: 10;
    background-color: rgba(0, 0, 0, .7);
    display: flex;
    justify-content: center;
    align-items: center;  
  }
</style>
