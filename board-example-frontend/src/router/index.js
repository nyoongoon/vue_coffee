import Vue from 'vue';
import Router from 'vue-router';
import PostListPage from "@/pages/PostListPage.vue";
import PostViewPage from "@/pages/PostViewPage.vue";
import Signup from "@/pages/Signup.vue";
import Signin from "@/pages/Signin.vue";
import AppHeader from "../components/AppHeader.vue";
import PostCreatePage from "../pages/PostCreatePage.vue";
import store from "../store";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    // 라우터가 히스토리 모드로 작동하도록 설정
    {
      path: '/',
      name: 'PostListPage',
      component: PostListPage,
    },
    {
      path: '/post/create',
      name: 'PostCreatePage',
      components: {
        header: AppHeader,
        default: PostCreatePage
      },
      // beforeEnter 가드 훅을 추가
      beforeEnter(to, from, next) {
        const {isAuthorized} = store.getters;
        if (!isAuthorized) {
          alert('로그인이 필요합니다!');
          // 로그인이 되어있지 않다면 로그인 페이지로 이동시킴
          next({name : 'Signin'});
        }
        next();
      }
    },
    {
      path: '/post/:postId',
      name: 'PostViewPage',
      components: {
        header: AppHeader,
        default: PostViewPage,
      },
      props: {
        // props값 역시 대상 components의 이름으로 수정한다.
        default: true
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      components: {
        header: AppHeader,
        default: Signup
      }
    },
    {
      path: '/signin',
      name: 'Signin',
      // components 속성이 아니라 component 속성을 사용하면 자동으로 이름이 없는 router-view에만 컴포넌트를 렌더
      component: Signin
    },

  ]
});
