<template>
  <div class="memo-app">
    <!--    <memo-form v-on:addMemo="addMemo"/> 아래와 같은 의미 -->
    <memo-form @addMemo="addMemo"/>
    <ul class="memo-list">
      <memo v-for="memo in memos"
            :key="memo.id"
            :memo="memo"
            @deleteMemo ="deleteMemo"
            @updateMemo="updateMemo"
            :editing-id="editingId"
            @setEditingId="SET_EDITING_ID"
            @resetEditingId="RESET_EDITING_ID"/>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import MemoForm from "./MemoForm";
import Memo from "./Memo";
import {mapActions, mapState, mapMutations} from 'vuex';
import {RESET_EDITING_ID, SET_EDITING_ID} from "../store/mutations-types";

const memoAPICore = axios.create({
  baseURL: 'http://localhost:8000/api/memos'
})

export default {
  name: 'MemoApp',
  computed:{
    ...mapState([
      'memos',
      'editingId'
    ])
  },
  created() {
   this.fetchMemos();
  },
  components: {
    MemoForm, Memo
  },
  methods: {
    ...mapActions([
      'fetchMemos',
      'addMemo',
      'deleteMemo',
      'updateMemo'
    ]),
    ...mapMutations([
      SET_EDITING_ID,
      RESET_EDITING_ID
    ])
  }
}
</script>

<style scoped>
.memo-list {
  padding: 20px 0;
  margin: 0;
}
</style>
