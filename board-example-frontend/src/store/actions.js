import api from '@/api';
import {
  FETCH_POST_LIST,
  FETCH_POST, SET_ACCESS_TOKEN,
  SET_MY_INFO
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
  return api.post('/auth/signin', {email, password})
    .then(res => {
      const {accessToken} = res.data;
      commit(SET_ACCESS_TOKEN, accessToken);

      //토큰을 스토어에 저장하면 api 모듈의 headers에 토큰이 저장되므로 바로 사용자 정보를 불러올 수 있음
      return api.get('/users/me');
    }).then(res => {
      // 사용자 정보 요청 성공하면 변이를 사용하여 스토어에 사용자 정보 저장
      commit(SET_MY_INFO, res.data);
    });
}

export function signinByToken({commit}, token){
  commit(SET_ACCESS_TOKEN, token);
  return api.get('/users/me')
    .then(res => {
      commit(SET_MY_INFO, res.data);
    })
}

export default {
  fetchPostList,
  fetchPost,
  signin,
  signinByToken
};
