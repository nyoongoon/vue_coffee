import api from '@/api'
import {
  FETCH_POST_LIST,
  FETCH_POST, SET_ACCESS_TOKEN
} from "./mutations-types";

export function fetchPostList({commit}) {
  return api.get('/posts')
    .then(res => {
      commit(FETCH_POST_LIST, res.data);
    });
}

export function fetchPost({commit}, postId) {
  return api.get(`/posts/${postId}`)
    .then(res => {
      commit(FETCH_POST, res.data);
    });
}

export function signin({commit}, payload) {
  //1. Signin 컴포넌트의 onSubmit 에소드의 내용을 그대로 작성
  const {email, password} = payload;
  return api.post('/auth/signin',{email, password})
    .then(res=>{
      const{accessToken} = res.data;
      commit(SET_ACCESS_TOKEN, accessToken);
    });
}

export default {
  fetchPostList,
  fetchPost,
  signin
};
