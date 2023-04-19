// src/store/actions.
import axios from 'axios';
import {FETCH_MEMOS} from './mutations-types'

const memoAPICore = axios.create({
  baseURL: 'http://localhost:8000/api/memos'
})

export function fetchMemos({ commit }){
  memoAPICore.get('/')
    .then(res => {
      // API 호출 결과의 데이터와 함꼐 mutations의 커밋을 함
      commit(FETCH_MEMOS, res.data);
    });
}

export default{
  fetchMemos
}
