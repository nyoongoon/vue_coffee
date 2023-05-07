<template>
  <div class="sigh-in-page">
    <h3>로그인</h3>
    <p>회원이 아니신가요?
      <router-link :to="{name: 'Signup'}">
        회원가입하러 가기
      </router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "Signin"
}
</script>

<style scoped>

</style>
