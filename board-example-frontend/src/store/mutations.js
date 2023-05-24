import {
  FETCH_POST_LIST,
  FETCH_POST,
  SET_ACCESS_TOKEN,
  SET_MY_INFO,
  DESTORY_ACCESS_TOKEN,
  DESTORY_MY_INFO
} from "./mutations-types";

import api from '../api';
import Cookies from 'js-cookie'

export default {
  [FETCH_POST_LIST](state, posts) {
    state.posts = posts;
  },
  [FETCH_POST](state, post) {
    state.post = post;
  },
  [SET_ACCESS_TOKEN](state, accessToken) {
    // 스토어 상태의 토큰일 업데이트하고
    // api 모듈을 사용하여 HTTP 헤더에 토큰을 심어줌
    if (accessToken) {
      state.accessToken = accessToken;
      api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      Cookies.set('accessToken', accessToken)
    }
  },
  [SET_MY_INFO](state, me){
    if(me){
      state.me = me;
    }
  },
  [DESTORY_ACCESS_TOKEN](state){
    state.accessToken = '';
    // delete 주의 !
    delete api.defaults.headers.common.Authorization;
    Cookies.remove('accessToken'); //p.352
  },
  [DESTORY_MY_INFO](state){
    state.me = null;
  },
};
