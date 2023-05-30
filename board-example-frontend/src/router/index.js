import Vue from 'vue';
import Router from 'vue-router';
import PostListPage from "@/pages/PostListPage.vue";
import PostViewPage from "@/pages/PostViewPage.vue";
import Signup from "@/pages/Signup.vue";
import Signin from "@/pages/Signin.vue";
import AppHeader from "../components/AppHeader.vue";
import PostCreatePage from "../pages/PostCreatePage.vue";
import store from "../store";
import PostEditPage from "../pages/PostEditPage.vue";

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
          next({name: 'Signin'});
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
      path: '/post/:postId/edit',
      name: 'PostEditPage',
      components: {
        header: AppHeader,
        default: PostEditPage
      },
      props: {
        default: true
      },
      beforeEnter(to, from, next) {
        //게시물 생성 페이지와 마찬가지로 비로그인 사용자는 접근할 수 없음
        const {isAuthorized} = store.getters;
        if (!isAuthorized) {
          alert('로그인이 필요합니다!');
          next({name: 'Signin'});
          return false;
        }
        //게시물 뷰 페이지에서 사용했던 fetchPost 액션을 재사용하기
        store.dispatch('fetchPost', to.params.postId)
          .then((res) => {
            const post = store.state.post;
            //게시물 작성자의 아이디와 현재 로그인된 사용자의 아이디가 일치하는지 확인
            const isAuthor = post.user.id === store.state.me.id;
            if(isAuthor){
              next();
            }else{
              alert('게시물의 작성자만 게시물을 수정할 수 있습니다.');
              next(from);
            }
          })
          .catch(err => {
            alert(err.response.data.msg);
            next(from);
          });
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
