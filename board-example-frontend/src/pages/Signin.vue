<template>
  <div class="sign-in-page">
    <h3>로그인</h3>
    <signin-form @submit="onSubmit"/>
    <p>회원이 아니신가요?
      <router-link :to="{name: 'Signup'}">
        회원가입하러 가기
      </router-link>
    </p>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
import SigninForm from "../components/SigninForm.vue";
import {mapActions} from "vuex";

export default {
  name: "Signin",
  components: {
    SigninForm,
    SignupForm
  },
  methods: {
    ...mapActions([ 'signin' ]),
    onSubmit(payload) {
      this.signin(payload)
        .then(res => {
          alert('로그인이 완료되었습니다.')
          this.$router.push({name: 'PostListPage'})
        })
        .catch( err => {
          console.log(err)
          //alert(err.response.msg)
        })
    }
  }
}
</script>

<style scoped>

</style>
