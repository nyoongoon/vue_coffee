<template>
  <div class="memo-app">
    <memo-form/>
    <memo/>
  </div>
</template>

<script>
import MemoForm from "./MemoForm";
import Memo from "./Memo";

export default {
  name: "MemoApp",
  data() {
    return {
      memos: [],
    };
  },
  created() {
    this.memos = localStorage.memos ? JSON.parse(localStorage.memos) : [];
  },
  components:
    {
      MemoForm, Memo
    }
}
</script>

<style scoped>

</style>
