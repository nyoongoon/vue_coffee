### watch 
- 예시
```vue
Vue.component('MyComponent', {
  data(){
    return {a : 'Hello World', b:1 }
  },
  watch{
    a (nextValue, preValue){
      // ...
    }
  }
}) 
```
- watch 속성을 선언할 때 함수의 첫번째 인자로 새로운 값, 두번째 인자로 변경되기 전의 값을 받을 수 있음
- 비동기 처리 등과 같이 특정 로직을 처리하는 데 걸리는 소요시간이 많을 경우 사용
```vue
// watch 속성에 대한 페이징 API 호출 예시
Vue.component('Board', {
  data(){
    return { contents: [], paging: 1}
  },
  watch: {
    paging (page) {
      fetchBoard(`/api/board?page=${page}`)
        .then(res => {
          this.contents = res.data
        })
    }
  }
})
```
- 만약 감시하고자 하는 데이터가 Object 속성이라면 deep이나 handler와 같은
- 옵션을 사용하여 해당 데이터의 내부 속성까지 감시할 수 있음.

#### watch VS computed
- computed는 메소드 내부에서 사용된 변수들을 감시하며,
- 한 번 저장된 값은 캐싱되므로 어떤 변수들을 사용해서 값을 계산해내는데 적합함.
- 반면,watch는 캐싱도 되지 않고, 변수가 Object라고 해도 deep옵션을 사용해서 내부를 깊게 감시 할 수 있기 떄문에
- 어떤 값이 변경되었을 때 그 값을 사용하여, api 통신을 수행해 모델을 서버로부터 다시 받아와야 한다든가의 특정 로직ㅇ르 수행할 때 적합함

## Vue 인스턴스의 생명주기
- 인스턴스의 상태에 따라 생명주기 훅이 실행됨
### beforeCreate
- 인스턴스가 생성될 때 가장 처음으로 실행되는 훅
- 데이터와 이벤트는 아직 생성되지 않아 접근할 수 없는 단계
### created
- beforeCreate훅이 호출된 직후, 데이터와 이벤트가 초기화 되어 created훅에서는 데이터와 이벤트에 접근 가능
- 아직 DOM이 마운트되지 않았으므로 인스턴스의 DOM에 접근하는 $el 속성을 사용할 수 없는 상태
- 주로 API 서버의 요청을 통해 애플리케이션에서 필요한 데이터를 받아올 때 해당 훅에서 받아옴.
### beforeMount
- beforeMount 훅 이후부터는 컴포넌트에 접근할 수 있음
- 아직 DOM이 마운트 되지 않은 상태이기 때문에 아직은 $el 속성을 통해 인스턴스의 DOM에는 접근할 수 없음
### mounted
- 인스턴스의 렌더와 DOM 마운트가 끝난 상태
- $el 속성을 사용하여 인스턴스의 DOM에 접근할 수 있게 됨
- 그래프와 같은 DOM 관련 라이브러리를 사용하는 경우 해당 훅에서 DOM을 렌더하면 됨.
- 자식 컴포넌트들까지 마운트가 끝난 상태를 의미하는 것은 아님
- -> vm.$nextTick 메소드를 사용하여 전체 컴포넌트가 렌더된 상태를 보장할 수 있음. 
### beforeUpdate
- 컴포넌트가 마운트 다 된 후, 데이터의 변화가 감지됐을 때
- 해당하는 데이터와 관련 있는 DOM을 업데이트하기 전에 호출됨
- 가상돔과 연관이 깊은 훅으로서, Vue.js는 데이터가 변경됨에 따라 변경된 데이터를 가상돔에 적용
- 가상돔에 적용된 DOM을 렌더링하기 전에 호출되는 훅으로서, 이 과정에서 데이터가 변경되더라도 다시 렌더링되지 않음
### updated
- updated 훅은 가상 DOM이 재렌더링되어 실제 DOM이 되었을 떄 호출.
- 데이터가 변경된 후 DOM까지 모두 업데이트가 완료된 상태이므로 DOM에 접근하여 특정 로직을 수행하는 일이 가능.
- 자식컴포넌트 상태 보장x -> vm.$nextTick
- 무한루프 주의
### beforeDestory
- Vue 인스턴스가 제거되기 전에 호출되는 훅
- 아직 인스턴스가 제거되지 않은 상태이므로 this를 사용하여 인스턴스에 접근하는 것이 아직 가능
- 주로 인스턴스가 제거되기 전 인스턴스에 접근해서 수행해야하는 코드를 작성할 때 beforeDestory 훅에서 해당하는 로직을 작성
- ex) 특정 이벤트 초기화
### destoryed
- Vue 인스턴스가 제거된 후이 실행되는 훅
- 인스턴스는 이미 제거 되었기 때문에 this를 사용하여 인스턴스에 접근하는 것 불가
- 컴포넌트에 걸려있는 모든 이벤트가 해제됨

## Vue 템플릿 문법 
- Vue는 자바스크립트 내의 데이터가 뷰와 연동되도록 선언할 수 있는 템플릿 문법을 지원
### 텍스트 보간
- 자바스크립트 내의 데이터를 DOM에 바인딩하기 위해서는 이중 중괄호 문법을 사용
```vue
<p>{{ msg }}</p> 
```
- 위와 같이 작성된 msg 변수는 렌더가 진행될 때 자바스크립트에 선언된 msg 변수의 실제 값으로 치환됨
- 또한, 자바스크립트 내의 msg 변수가 갱신된다면 뷰에 바인딩 된 msg 변수 또한 갱신됨
- v-once 디렉티브를 이용하여 일회성 보간할 수도 있음
- html을 사용하더라도 일반 텍스트로 해석됨 -> v-html으로 변수를 HTML으로 인식하게 가능
- -> 이때 내부의 텍스트 보간 문법을 모두 무시됨
- v-html 사용 시 XSS 공격 주의

### HTML 속성
- Vue는 HTML 속성 또한 변수를 사용하여 보간할 수 있게 지원해줌
- HTML 속성에 변수를 바인딩하기 위해 v-bind 디렉티브 사용
```vue
<div v-bind:id="dynamicId"></div>
```
- 불리언 자료형 변수를 사용하는 경우 반드시 true, false
- 와 같은 불리언 자료형의 값이 아니더라도
- 빈 배열([])과 1 같은 Truthy값과 null과 0같은 Falsy값들도 같은 방식으로 처리

### 자바스크립트 표현식 사용
- 텍스트 보간 문법인 이중 중괄호 문법에는 변수 뿐만아니라, 자바스크립트 표현식 사용 가능
```vue
{{ userName.split('').reverse().join('') }}
```
- v-bind와 자바스크립트 표현식 함꼐 사용 가능
```
<div v-bind:id="'element-' + userId"></div>
```
- 위 같은 보간 문법은 표현식만 허용
- 선언문이나 조건문과 같은 구문은 사용할 수 없음 (삼항연산자 가능)
#### 표현식이란?
- 어떤 하나의 값으로 평가되는 식.
- 값이 할당된 변수, 함수 호출 결과, 연산자와 피연산자의 조합 등.
- -> 대상 구문 그 자체만으로 값으로 평가되면 표현식.
```vue
5 // 5라는 표현식은 값 그자체로 평가된
5 + 1 // 5+1 이라는 표현식은 6으로 표현됨
let number = 10 * 2; // 이 선언문은 10 * 2라는 표현식을 포함하고 있음
number = 1; //할당문은 표현식 그 자체이지만 그와 동시에 완전한 하나의 문이기도 함.

```



# axios 옵션
- validateStatus 서버에서 보내준 응답의 HTTP 상태 코드 중 어떤 것을 성공으로 처리할 것인지를 정의 
- 기본은 200이상 300 미만, 성공하면 axios.then, 실패하면 axios.catch
```js
validateStatus(status) {
    return status >= 200 && status < 300;
}
``` 
### axios의 HTTP 응답 핸들링하기 
- axios는 http 응답을 자체적으로 한 번 가공하여 사용하기 편하게 만들어주며, 성공 또는 실패여부와 관계 없이 항상 같은 구조의 응답을 반환해줌.
```js
{
    // 'data'는 서버에서 응답에 실어 보낸 HTTP 본문에 있는 데이터를 의미
    data: {},
    
    // 'status'는 서버 응답의 HTTP 상태 코드를 의미함.
    status: 200,
    
    // 'statusText'는 서버 응답의 HTTP 상태의 메시지를 의미함.
    stastusText: 'OK',
        
    // 'config'는 Axios가 서버로 요청을 보냈을 때 어떤 설정을 가지고 있었는지를 의미 <<-- 서버가 아닌 요청의 설정인 것 주의 !
    config: {},
        
    // 'request'는 현재 응답을 받기 위해 서버로 보낸 요청에 대한 데이터
    request: {},
}
```
- 요청에 성공했다면 axios.then 함수를 사용하여 이 응답을 확인하고 제어할 수 있음
```js
axios.get('/users/1/memos')
    .then(response=>{
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.config);
        console.log(response.requset);
    })
```
- 반대로 요청이 실패로 끝났을 때 Axios는 Promise.reject를 반환하게 되고, 우리는 axios.catch를 사용하여 에러를 핸들링 할 수 있음
```js
// axios 에러 핸들링 예시
axios.get('/users/1/memos')
    .then(response => { /* ... */ })
    .catch(error => {
      if(error.response){
          //응답이 실패로 처리되었을 때는 error 객체에 resonse 속성이 들어있음
          //error.response의 속성은 성공 시의 response 응답과 같은 구조.
          console.log(response.data);
          console.log(response.status);
          console.log(response.statusText);  
      }else if(error.request){
          // 실패로 처리가 아닌, 아무 응답이 없는 경우엔 response 속성이 들어있지 않음.
          console.log(error.request)
      }else{
          // 어떤 이유인지 모르지만 에러가 발생한 경우의 핸들링
          console.log('Error', error.message);
      }
    });
```

# RESTful API 확인하기
- 