// src/store/mutations.js
import {FETCH_MEMOS, ADD_MEMO} from './mutations-types.js';

export default {
  // 2. FETCH_MEMOS 변수를 변이 이름으로 가지는 변이 함수를 작성함
  [FETCH_MEMOS](state, payload) {
    state.memos = payload;
  },
  [ADD_MEMO](state, payload) {
    state.memos.push(payload);
  }
}
