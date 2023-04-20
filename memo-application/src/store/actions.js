// src/store/actions.
import axios from 'axios';
import {
  FETCH_MEMOS,
  ADD_MEMO
} from './mutations-types'

const memoAPICore = axios.create({
  baseURL: 'http://localhost:8000/api/memos'
});

export function fetchMemos({commit}) {
  memoAPICore.get('/')
    .then(res => {
      // API 호출 결과의 데이터와 함꼐 mutations의 커밋을 함
      commit(FETCH_MEMOS, res.data);
    });
}

export function addMemo({commit}, payload) {

  memoAPICore.post('/', payload)
    .then(res => {
     // ADD_MEMO 변이를 호출하고 API를 통해 받아온 메모 데이터를 넘겨준다.
      commit(ADD_MEMO, res.data);
    });
}

export default {
  fetchMemos,
  addMemo
}
