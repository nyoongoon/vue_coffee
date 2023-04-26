import Vue from 'vue'
import Router from 'vue-router'
import PostListPage from "@/pages/PostListPage.vue";
import PostViewPage from "@/pages/PostViewPage.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // 라우터가 히스토리 모드로 작동하도록 설정
    {
      path: '/',
      name: 'PostListPage',
      component: PostListPage
    },
    {
      path: '/post/:postId',
      name: 'PostViewPage',
      component: PostViewPage
    }
  ]
})
