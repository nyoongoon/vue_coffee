<template>
  <div class="sign-up-page">
    <h1>회원가입</h1>
    <signup-form @submit="onSubmit"/>
  </div>
  <p>
    이미 가입하셨나요?
    <router-link to="{name: 'Signup'}">로그인하러 가기</router-link>
  </p>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";

export default {
  name: "Signup",
  components: {SignupForm}
}
</script>

<style scoped>

</style>
