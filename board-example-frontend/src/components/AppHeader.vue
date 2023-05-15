<template>
  <div class="app-header">
    <h1>Community</h1>
    <div>
      <router-link :to="{name: 'Signin'}">로그인</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style scoped>

</style>
