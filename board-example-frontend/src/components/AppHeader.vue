<template>
  <div class="app-header">
    <h1>Community</h1>
<<<<<<< HEAD
    <div v-if="isAuthorized">
      <strong>
        <button @click="toggle"> {{ me.name }}님 환영합니다.</button>
        <i v-if="!isActive" class="fas fa-sort-down"></i>
        <i v-else class="fas fa-sort-up"></i>
      </strong>
      <ul v-if="isActive">
        <li>
          <button>로그아웃</button>
        </li>
      </ul>
    </div>
    <div v-else>
      <router-link :to="{ name: 'Signin' }">로그인</router-link>
=======
    <div>
      <router-link :to="{name: 'Signin'}">로그인</router-link>
>>>>>>> 60fc979658873f5440bff5eaa2b283842df73d67
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import {mapGetters, mapState} from 'vuex';

export default {
  name: "AppHeader",
  data(){
    return {
      isActive: false
    }
  },
  methods:{
    toggle(){
      this.isActive = !this.isActive;
    }
  },
  computed: {
    ...mapGetters(['isAuthorized']),
    ...mapState(['me'])
  }
=======
export default {
  name: "AppHeader"
>>>>>>> 60fc979658873f5440bff5eaa2b283842df73d67
}
</script>

<style scoped>

</style>
