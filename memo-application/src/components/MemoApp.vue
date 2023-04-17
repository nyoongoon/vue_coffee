<template>
  <div class="memo-app">
    <!--    <memo-form v-on:addMemo="addMemo"/> 아래와 같은 의미 -->
    <memo-form @addMemo="addMemo"/>
    <ul class="memo-list">
      <memo v-for="memo in memos"
            :key="memo.id"
            :memo="memo"
            @deleteMemo ="deleteMemo" />
    </ul>
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
  components: {
    MemoForm, Memo
  },
  methods: {
    deleteMemo(id){
      const targetIndex = this.memos.findIndex(v => v.id === id);
      this.memos.splice(targetIndex, 1);
      this.storeMemo();
    },
    addMemo(payload) {
      // MemoForm에서 올려받은 데이터를 먼저 컴포넌트 내부데이터에 추가
      this.memos.push(payload);
      // 내부 데이터를 문자열로 변환 후, 로컬 스토리지에 저장
      this.storeMemo();
    },
    storeMemo() {
      const memosToString = JSON.stringify(this.memos);
      localStorage.setItem('memos', memosToString);
    }
  }
}
</script>

<style scoped>
.memo-list {
  padding: 20px 0;
  margin: 0;
}
</style>
