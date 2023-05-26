// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import Cookies from 'js-cookie';

// const savedToken = Cookies.get('accessToken');
// if(savedToken){
//   // 아래 액션은 비동기적으로 작동하고 있으므로 아래 Vue 인스턴스가 생성될 떄 signinByToken 액션이 완료되었음을 보장하지 못함.
//   store.dispatch('signinByToken', savedToken);
// }


function init(){
  const savedToken = Cookies.get('accessToken');
  if(savedToken){
    // 저장된 토큰이 존재한다면 signinByToken 액션을 반환함.
    return store.dispatch('signinByToken', savedToken);
  }else{
    // 토큰이 존재하지 않는다면 바로 Promise를 성공시킴.
    return Promise.resolve();
  }
}

init().then(res=> {
  // init 함수의 then 체이닝 메소드 내부는 init 함수가 종료되었음을 보장받음
  new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    store
  });
});

