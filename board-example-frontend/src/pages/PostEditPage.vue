<template>
  <div class="post-edit-page">
    <h1>게시물 수정</h1>
    <post-edit-form v-if="post"
                    :post="post"
                    @submit="onSubmit"/>
    <p v-else>게시물 불러오는 중...</p>
  </div>
</template>

<script>
import {mapState} from "vuex";
import PostEditForm from "../components/PostEditForm.vue";

export default {
  name: "PostEditPage",
  components: {PostEditForm},
  props: {
    //라우터의 파라미터를 받아오기 위한 props를 선언해준다.
    postId: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState(['post'])
  },
  methods:{
    onSubmit(payload){
      console.log(payload)
    }
  }
}
</script>

<style scoped>

</style>
