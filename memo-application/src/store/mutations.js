// src/store/mutations.js
import {
  FETCH_MEMOS,
  ADD_MEMO,
  DELETE_MEMO,
  EDIT_MEMO,
  SET_EDITING_ID,
  RESET_EDITING_ID
} from './mutations-types.js';

export default {
  // 2. FETCH_MEMOS 변수를 변이 이름으로 가지는 변이 함수를 작성함
  [FETCH_MEMOS](state, payload) {
    state.memos = payload;
  },
  [ADD_MEMO](state, payload) {
    state.memos.push(payload);
  },
  [DELETE_MEMO](state, id) {
    const targetIndex = state.memos.findIndex(v => v.id === id);
    state.memos.splice(targetIndex, 1);
  },
  [EDIT_MEMO](state, payload) {
    const {id, content} = payload;
    const targetIndex = state.memos.findIndex(v => v.id === id);
    const targetMemo = state.memos[targetIndex];
    state.memos.splice(targetIndex, 1, {...targetMemo, content});
  },
  [SET_EDITING_ID](state, id){
    state.editingId = id;
  },
  [RESET_EDITING_ID](state){
    state.editingId = 0;
  }

};

