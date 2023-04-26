<template>
<div class="post-view-page">
  <div class="post-view">
    <div>
      <h1>게시글의 제목이 노출된다.</h1>
      <span>게시판 번호 1</span>
      <strong>홍길동 .2019-01-01 09:00</strong>
    </div>
    <p>해당 영역에는 게시글의 콘텐츠 내용이 노출된다.</p>
  </div>
  <router-link :to="{name : 'PostListPage'}">목록</router-link>
</div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "PostViewPage",
  methods:{
    ...mapActions(['fetchPost'])
  },
  props:{
    postId: {
      type: String,
      required: true
    }
  },
  created() {
    this.fetchPost(`/${this.postId}`)
      .catch(err=>{
        alert(err.response.data.msg)
        this.$router.back();
      })
  }
}
</script>

<style scoped>

</style>
