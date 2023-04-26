import api from '@/api'
import {
  FETCH_POST_LIST,
  FETCH_POST
} from "./mutations-types";

export function fetchPostList ({commit}){
    return api.get('/posts')
      .then(res=>{
        commit(FETCH_POST_LIST, res.data)
      })
}

export function fetchPost({commit}, postId){
  return api.get(`/posts/${postId}`)
    .then(res=>{
      commit(FETCH_POST, res.data)
    })
}

export default {
  fetchPostList,
  fetchPost
}
