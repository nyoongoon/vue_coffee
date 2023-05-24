# 프로젝트 구조  
## .babelrc
- es6 -> es5로 트랜스파일링
### presets 속성
- 바벨이 어떤 문법까지 트랜스파일링 해줄 지 정의 
- vue cli는 기본적으로 env와 stage-2 프리셋을 세팅해주는데, 이중 env 바벨의 가장 기본적인 프리셋.
- modules : 모듈 문법을 다른 문법으로 변경, 여기에선 webpack사용하여 모듈링하기 때문에 변경필요x
- targets : 어느 브라우저까지 지원할지 설정
- Stage-2 : js 표준명세 2단계
## .editorconfig
- indent나 파일의 인코딩 형식 등 코딩 스타일에 대한 설정이 정의되어 있음. 
## .eslintrc.js
- 코딩 컨벤션과 관련된 에러를 체크해줌. 
## .eslintignore 
- .eslintignore 파일의 내부에 선언되어 있는 경로에 위치한 파일들은 린터가 검사하지 않음
## .postcssrc.js
- PostCSS는 자바스크립를 사용하여 CSS를 변환하는 툴.
## build/
- build 디렉터리에는 vue 프로젝트를 브라우저에서 실행할 수 있게끔 빌드하기 위해 작성된 파일들이 위치하게 됨
- webpack.base.conf.js - 기반으로하여 각 환경별로 세팅  
- webpack.dev.conf.js
- webpack.prod.conf.js
- webpack.test.conf.js

## config/
- config 디렉터리에는 설정에 필요한 여러가지 상수들이 선언되어 있음
- dev 속성 : dev 속성에는 개발환경에서 사용하는 상수들이 선언되어 있음
- build 속성 : build 속성에는 개발이 완료된 후 애플리케이션을 빌드할 때 사용하는 상수들이 선언되어 있음

## index.html 
- index.html은 사용가자 웹페이지에 접속했을 때 다운로드하게 되는 HTML 템플릿
- 기본적인 Vue 애플리케이션은 Webpack이 번들링된 파일을 
- index.html에 삽입하고 클라이언트에서 렌더링을 수행하는 방식으로 작동
- 외부 스크립트를 CDN을 통해 호출해야하거나 문서의 타이틀 수정들 HTML 작성하는 코드가 있다면 이 파일에 작성

## node_modules, package.json
- node_modules에는 사용자가 npm을 통해 설치한 패키지들이 위치하고 있음
- npm을 통해 설치한 패키지들은 package.json이라는 파일을 통해서 관리하게 되는데
- Vue CLI는 기본적으로 Vue 애플리케이션을 작성할 때 필요한 패키지들을 초기 설정 시 설치해주기 떄문에 원하는 패키지가 없다면 새롭게 설치 필요x

## src/
- src 디렉터리에는 애플리케이션의 소스가 위치하게 됨.
- src/에는 main.js, App.vue, assets, router, components 5개의 파일과 디렉터리가 기본적으로 세팅됨.
### assets
- 정적 리소스가 위치함
- static 디렉터리와 차이, 이 디렉처리에 위치하는 리소스들은 빌드시 webpack이 처리하게 된다는 것.
- Vue CLI는 png, jpg, gif와 같은 이미지 파일이나 mp4, mp3와 같은 미디어 파일을 url-loader를 통해 처리하게 됨. 
- url-loader는 파일이 코드내에서 사용되었을 때 파일의 경로를 사용하여 파일을 불러오는 것이 아니라
- 파일을 Base64라는 포맷의 문자열로 인코딩시켜 코드에 직접 삽입하느 방식으로 불러옴. 
- 이 방식은 HTML이나 자바스크립트 같은 코드를 로드한 후에 추가적으로 파일을 다시 로드할 필요가 없기 때문에 효율적 
- 그러나 정적 리소스의 크리가 커지면 커질수록 리소스를 Base64로 변환하였을 때 문자열의 길이가 길어져 HTML에 삽입하는 방식의 효율설이 떨어짐
- -> 프로젝트 진행 시 정적 리소스를 static 디렉터리에 위치할 것인지 assets에 위치할 것인지에 대한 판단 필요\
### components
- components 디렉터리에는 Vue 컴포넌트들이 위치하게 됨
- 컴포넌트는 하나의 독립적인 기능을 가지고 있는 단위 모듈
### router 디렉터리에는 Vue의 공식 라이브러리인 Vue Router의 코드가 위치
- Vue Router는 사용자가 접속한 URL에 어떤 컴포넌트를 렌더해야하는지 정해주는 라이브러리
- index.js에서 Router 객체를 추출하는 모듈 형태로 되어 있음
- 애플리케이션이 커지게 되면 Router 객체의 개수도 늘어나 index.js에 작성하는 코드가 많아지게 되므로
- 관리를 쉽게 하기 위해 별도의 자바스크립트 모듈 파일을 만들고 import를 이용해 index.js에 모듈을 추가하여 병합하는 방법을 사용하기도함.
### App.vue
- App.vue파일은 Vue 애플리케이션의 루트 컴포넌트.
- Vue 애플리케이션의 컴포넌트들은 App 컴포넌트를 중심으로 트리 형태의 구조를 가지게 됨.
### main.js
- main.js는 Webpack이 빌드를 시작할 때 가질 처음 불러오는 진입지점
- 즉, 작성한 애플리케이션은 이 파일을 실행함으로써 시작됨
- 해당 파일에서 App.vue 파일을 불러와서 Vue객체를 생성하고
- #app 엘리먼트에 바인딩하는 코드가 작성되어 있음
### static/
- static 디렉터리는 이미지, 폰트와 같은 정적 리소스들이 위치하게 됨
- static 내부에 위치한 파일들은 Webpack을 거치지 않음.
- Webpack은 이 디렉터리에 있는 파일들을 그대로 복사하여 빌드 결과물 디렉터리인 dist 디렉터리로 옮긴다.
- Vue CLI로 프로젝트를 세팅하면, .gitkeep파일 하나만 존재하는 것을 확인할 수 있음
- 깃은 현재 비어있는 디렉터리를 추적하지 않기 때문에 .gitkeep이라는 파일을 하나 생성해둔 것.
### test/
- test 디렉터리에는 e2e 테스트에 관한 코드와 단위테스트에 대한 코드들이 위치하고 있음
- 테스트 실행은 각각의 명령어를 통해 실행할 수 있

# 챕터2 - 알면 보이는 Vue
## Vue 필수 요소
### Vue 인스턴스
- Vue애플리케이션은 Vue함수를 사용하여 새로운 Vue 인스턴스를 만드는 것부터 시작함 
```vue
import Vue from 'vue
import App from './App.vue'

vue Vue({
  el: '#app',
  components:{ App },
  template: '<App/>'
})
```
### Vue 인스턴스의 온셥
- Vue 인스턴스 및 Vue 인스턴스가 확장된 컴포넌트에서 사용할 수 있는 데이터 관련 기능 및 옵션
#### data
- Vue 인스턴스의 data 속성은 반응형 모델을 선언할 때 사용. 
- 반응형 모델이란 어떤 액션으로 인해 값이 변경되었을 떄 자바스크립트와 사용자가 보는 뷰에서
- 보이는 값도 같이 연동되어 변경되는 것을 의미함
- 인스턴스가 생성된 후 this.$data로 접근할 수 있음.
- 또한, Vue 인스턴스틑 데이터 객체 내부의 값을 프락싱(Proxying) 하므로 this.$data.a와 this.a는 같은 값임.
```vue
// 뷰 인스턴스
const data = { a: 1};
new Vue({
  data: data
})
// 뷰 컴포넌트
const myComponent = Vue.extend({
  name: 'MyComponent',
  data (){
    return {a: 1};
  }
})
```
- 위를 보면 뷰 인스턴스에서 data 속성 선언할 때와 컴포넌트에서 data 속성 선언할 때 문법 다름
- **컴포넌트를 정의할 떄 data 속성은 반드시 Object 자료형을 반환하는 함수로 선언**되어야 함
- 자바스크립트의 Object 자료형은 메모리에 저장된 값을 직접 가져오는 호출이 아닌,
- 메모리에 저장된 주소값을 가져오는 참조에 의한 호출이기 때문에 
- 컴포넌트에서 data 속성을 일반 객체로 선언한다면 같은 주소를 참조하는 데이터들을 컴포넌트들이 공유하게 됨.
- Vue 인스턴스는 일반적인 SPA에서 단 하나만 존재하기 떄문에 괜찮지만, 컴포넌트는 여러개인 경우가 많기 때문에
- 각 컴포넌트가 완전하게 독립적인 data 속성을 가지고 있도록 신경 써주지 않으면 의도치 않은 순간에 원하지 않는 컴포넌트의 데이터가 변경될 수도 있음.
### props
- props 속성의 선언방법 (자식 컴포넌트에서)
```vue
Vue.component('MyComponent', {
  //단순한 구문으로 표현하기
  props: ['size', 'myMessage']
})
Vue.compoenent('MyComponent2', {
  props: {
    //타입만 체크할 경우
    height: Number,
    width: {
      type: Number,
      required: true,
      default: 1,
      validator(value){
        return value > 0
      }
    }
  }
})
```
- props 속성의 사용 예시 (부모 컴포넌트에서)
```vue
<my-component :width="3" :height="3"></my-component>
```
- 자식 컴포넌트 내부에서도 props 속성을 직접 변경할 수는 있지만 반응형 데이터를 다루도록 설계되지 않았기 때문에 이렇게 사용
- 자식 컴포넌트 내부에서 props의 데이터를 다뤄야 하는 경우 data 속성 내에서 해당 prop을 this로 접근하여 참조하도록 다시 선언하거나
- emit을 통해 부모 컴포넌트의 데이터를 변경해줘야함.
```vue
// props를 반응형으로 사용하는 예시
Vue.component('MyComponent2', {
  props: {
    height: Number, //data 속성 내에서 해당 prop을 this로 접근하여 참조하도록 다시 선언
  },
  data() {
    return {
      dataHeight: this.height,
    }
  }
})
```

### computed
- computed를 사용하지 않고도 인스턴스 내에서 자바스크립트 표현식을 사용할 수 있지만, 렌더 성능이 떨어질 수 있음
```vue
Vue.component('MyComponent', {
  template: '<div>{{age * 2}}</div>' //템플릿 내에서 자바스크립트 표현식 사용한 경우
  data(){
    return {age: 28}
  }
})
```
- computed 속성의 선언 방법
```vue
Vue.component('MyComponent', {
  template: '<div>{{ doubleAge }}</div>
  data(){
    return {age : 28}
  },
  computed: {
    doubleAge(){
      return this.age * 2;
    }
  }
}
```
- computed 내부에서 사용된 데이터가 변경되면 자동으로 computed의 값도 갱신된다
- computed의 장점은 한 번 계산되면 캐싱됨. 
- computed 함수는 getter 인자를 받지 않는 함수로 선언하여 사용
- computed 함수는 기본적으로 getter갖고 있고, setter 함수를 선언할 수도 있음.

### methods
- methods는 인스턴스에 추가되는 메소드

```vue
Vue.component('MyComponent', {
  data() {
    return {age:28}
  },
  method: {
    plusNumber(){
      this.age++;
    }
  }
})
```
- 1. this를 통해 직접 접근하여 실행시키거나 
- 2. 디렉티브 표현식을 통해 사용.
- 선언된 모든 메소드는 this 컨텍스트를 Vue 인스턴스에 바인딩
- 화살표 함수를 사용하여 메소드를 정의하면 this가 현재 인스턴스가 아닌 부모 컨텍스트를 의미하게 되므로 X

### watch
- 뷰 인스턴스 내의 데이터의 변화를 감지하여 특정 로직을 수행해야 할 때 주로 사용하는 감시자 속성
- watch에 사용되면 메소드 이름은 감시하는 데이터의 이름
- **해당 데이터가 변경되었을 때 메소드 내부에 작성한 코드가 실행되는 방식으로 작동**함.
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
- -> 이때 내부의

# 디렉티브(지시문)
- 디렉티브는 HTML 속성과 같은 문법으로 사용할 수 있음
- 디렉티브 속성의 값으로는 하나의 자바스크립트 표현식을 사용할 수 있음.
## 디렉티브 수식어
- 수식어는 점으로 표시되는 특수 접미사로 v-model.number와 같이 조건에 따라 어떠한 기능을 추가할 수도 있고
- v-on:click.right와 같이 디렉티브 값을 실행할 때의 조건을 추가할 수도 있음. 
```vue
<!-- 사용자가 입력한 모델의 값을 자동으로 숫자 자료형으로 변환해줌 -->
<input v-model.number="productPrice">
<!-- 마우스 오른쪽 버튼으로 클릭되었을 때만 이벤트 리스너가 호출됨. -->
<button v-on:click.right="onLeftClick"></button>
```
## v-bind
- v-bind 디렉티브는 **HTML 속성의 값을 동적으로 바인딩**하거나 컴포넌트의 **props 속성에 값을 주입할 때** 사용하는 디렉티브.
- cf) v-bind:id와 같이 디렉티브의 전달인자를 사용할 떄 사용하는 콜런과, :id와 같이 v-bind 디렉티브의 약어인 콜론은 같은 기호일뿐 관계없음
```vue
<!-- href 속성에 url 변수의 값을 바인딩-->
<a v-bind:href="url"></a>
<!-- 약어를 사용한 모습 -->
<a :href="url"></a>
<!-- 전달인자를 사용하지 않고 속성 객체를 바인딩할 수도 있음-->
<a v-bind="{id: 'test-link', href: url}"></a>
<!-- 클래스를 바인딩할 때는 배열을 사용할 수도 있음-->
<div :class="['classA', 'classB']"></div>
<!-- 컴포넌트의 props에 user 객체의 name 속성 값을 주입-->
<UserProfile :name="user.name"></UserProfile>
```

## v-on
- DOM 엘리먼트나 컴포넌트에 이벤트 리스너를 연결할 수 있는 디렉티브.
- 디렉티브 **값으로는 함수** 또는 **한 줄로 표현할 수 있는 문**과 **Object 자료형의 값**을 사용할 수 있음. 약어로는 @
```vue
<!-- 선언되어 있는 메소드 이름을 사용하여 바인딩-->
<button v-on:click="onClick">Click</button>
<!-- 약어를 사용한 모습 -->
<button @click="onClick">Click</button>
<!-- 한 줄로 표현할 수 있는 문을 사용하여 바인딩-->
<button v-on:click="isToggle = !isToggle">Click Me</button>
<!-- 전달인자를 사용하지 않고 속성 객체를 바인딩-->
<button v-on="{click: onClick, hover: onHover}">Click Me</button>
```
### v-on 디렉티브의 수식어
- .stop
- .prevent
- .capture
- .self
- .keyCode, .keyAlias
- .once
- .left, .right, .middle
- .passive 
- cf) passive 속성 : 리스너 함수는 preventDefault가 언제 호출될지 모르기 때문에 리스너의 실행이 끝나때까지 기다린 후, 기본 동작을 수행
- -> passive속성을 true로 하면 기본동작을 막지 않는 것을 보장하여 실행을 끝까지 기다리지 않고 바로 기본 기능을 실행시킴. 

### v-if
- 주의점 : Vue는 재사용 요소는 최대한 재사용하려하므로, DOM이 변경되지 않는다면 Vue는 변경된 사항만 변경하려고함.
```vue
<template v-if="inputType==='text'">
  <label>텍스트 필드</label>
  <input type="text">
</template>
<template v-else>
  <label>이메일 필드</label>
  <input type="email">
</template>
```
- 위의 예시에서 사용자가 텍스트 필드에 값을 입력한 후 다른 필드로 변경하더라도 **DOM이 변경된게 아니므로** 사용자가 입력한 값은 필드에 그대로 남아있게 됨ㅈ
- 이런 경우 key 속성을 사용 -> 이 요소가 고유한 요소임을 의미 -> DOM 구조가 같은 여러개 요소를 구별하고 싶을 떄

### v-show
- 주어진 표현식이 참일 경우에 CSS의 display 속성을 사용하여 컴포넌트나 엘리먼트를 노출함.
- -> 항상 렌더링 되고 DOM에도 남아있는 것임 (보이지 않더라도)
- v-if 와 v-show의 비용을 비교하여 선택 -> 초기 : v-if < v-show // 토글 : v-if > v-show

### v-for
- 변수 in 표현식을 사용하며 표현식으로는 배열과 객체를 사용할 수 있음.
```vue
<!-- 배열 -->
<div v-for="(item, index) in items"></div>
<!-- 객체 -->
<div v-for="(value, key, indx) in object"></div>
```
- -> 이 상황에서도 각 요소들이 다른 고유한 요소라는 것을 설정하고 싶으면 **key 속성**을 사용

### v-model
- 폼 요소와 같이 사용자 입력을 받을 수 있는 요소에 양방향 데이터 바인딩을 생성할 수 있는 디렉티브.
- v-model의 값은 컴포넌트 혹은 Vue 인스턴스가 가지고 있는 원본 데이터.
- 바인딩할 데이터의 자료형은 폼의 종류에 따라 다름 -> 아래처럼 문자열 입력 받는 인풋요소일 경우 100같은 숫자를 입력하더라도 '100'으로 해석
```vue
<input v-model="message">
<p>입력한 메시지: {{message}}</p>
```
- 체크박스는 기본적으로 불리언값, 그러나 여러 개의 체크박스를 사용하면 다른 자료형을 사용할 수 있음.
- -> 이때 바인딩할 데이터를 배열로 초기화하지 않는다면 Vue는 데이터가 값의 집합이라고 판단하지 않고 불리언 자료형으로 처리함.
```vue
<!--단일체크 박스는 선택 여부에 대한 하나의 불리언 값을 가진다.-->
<input type="checkbox" v-model="isChecked">
<!--여러개의 체크박스는 선택된 값들의 배열을 가진다-->
<!--value 속성이 없다면 하나의 불리언 값을 가진다-->
<input type="checkbox" v-model="checkedValues" value="1">
<input type="checkbox" v-model="checkedValues" value="2">
```
- 배열로 초기화 하지 않는다면 Vue가 불리언 자료형으로 처리해버림
- value로 구분할 고유 값을 입력해주어야함. -> 입력하지 않으면 공통적으로 value값이 null 이되기 때문에 한꺼번에 선택됨
- 라디오 버튼 : 반드시 하나의 요소만 선택할 수 있으므로 value값 가짐
- 셀렉트 요소 : multiple 속성을 사용하여 여러개의 요소를 선택할 수 있음 -> 배열 사용
- 라디오, 체크박스, 셀렉트 요소의 경우 다양한 자료형의 값을 바인딩 할수도 있음
```vue
<select v-model="selected" multiple>
  <option :value="{name: 'Evan'}">Evan</option>
  <option :value="{name: 'Martin'}">Martin</option>
</select>
```

### v-once
- 엘리먼트나 컴포넌트를 '한 번만' 렌더링하도록 만들어주는 디렉티브
- 사용한 엘리먼트 뿐만아니라, 모든 하위 요소까지 한 번만 렌더링되기 최적화 가능

### v-pre
- 하위 요소에 대한 모든 컴파일을 하지 않음. 

## Vue 인스턴스의 속성과 메소드
### vm.$data, vm.$props
- 해당 컴포넌트의 옵션's API에 접근 가능한 속성
- 각각 해당 컴포넌트의 data 옵션과, props 속성에 접근 가능
- props는 부모-> 자식
### vm.$el
- Vue인스턴스의 DOM 엘리먼트를 의미
### vm.$parent, vm.$children, vm.$root
- $parent 속성과 $children 속성은 현재 인스턴스의 부모와 자식들을 의미
- 부모는 하나이기 때문에 단수, 자식은 여럿이 될 수 있기 때문에 복수형
- $root는 가장 위에 있는 부모인 트리의 루트를 의미
- Vue CLI를 통해 생성한 프로젝트는 보통 App 컴포넌트가 루프 컴포넌트.

### vm.$attrs 
- $attrs 속성은 현재 컴포넌트에 주어진 HTML 속성 중 props 데이터로 인식되지 않은 속성들을 의미
- props가 아닌 데이터임을 보장
```vue
<template>
  <ExampleComponent id="test" name="example-component"/>
</template>
<script>
export default{
  name: 'ExampleComponent',
  props: {
    name: {
      type: String
    }
  },
  mounted(){
    console.log(this.$attrs.id) // test
    console.log(this.$attrs.name) // undefined -> props라서 제외됨
    console.log(this.$props.name) // example-component
  }
}
</script>
```

### vm.$set, vm.$delete
- $set 메소드는 반응형으로 선언된 값을 업데이트 하는 메소드 
- -> data 옵션을 통해 선언된 데이터는 기본적으로 $set사용 안해도 값 갱신됨.
- => $set을 사용하는 상황 : 반응형 데이터로 객체를 사용할 때.
```
- Vue는 컴포넌트가 생성될 때 data 옵션에 선언된 데이터들만 반응형 데이터로 인식
- 이때 Vue는 내부적으로 이 값들을 감시할 감시자들을 생성.
- 그러나 이 감시자들은 객체가 생성될 당시의 속성들은 감시할 수 있지만
- 새로운 속성이 추가되거나 제거될 때 객체가 변화하는 것은 감지하지 못함.
```
```javascript
export default {
    data(){
        return {
            message: {text: 'Hello World!'}
        }
    }
}
```
- 위에서 반응형 데이터로 선언된 message 객체의 경우 text라는 속성을 가지고 있고
- Vue는 이 속성을 반응형 데이터로 인식하고 변화를 추적함
- 그래나 message 객체에 새로운 속성이 추가되거나 
- text 속성을 삭제한다면 Vue는 감지하지 못함
- -> 이렇게 객체ㅔ 속성을 추가하거나 삭제할 때 Vue에 "값이 갱신되었음"
- 을 수동으로 알려줄 수 있는 메소드가 바로 $set 메소드와 $delete 메소드
- vm.$set(객체, 추가할 속성의 키, 추가할 속성의 값)
- vm.$delete(객체, 제거할 속성의 키)

```javascript
export default{
    data(){
        return{
            message: {text: 'Hello World!'}
        }
    },
    mounted(){
        this.$set(this.message, 'author', 'John')
        this.$delete(this.message, 'text')
    }
}
```

### vm.$emit
- $emit 메소드는 인자로 주어진 이벤트를 트리거링함 (자식->부모)
- 이때 이벤트 명은 자유롭게 정할 수 있으며 두번째 인자는 이벤트 리스너의 콜백함수의 인자로 전달됨
- vm.$emit(이벤트 이름, 이벤트 리스너 콜백 함수의 인자)
```vue
<template>
  <Foo @click="sayhi"/>
</template> 
<script>
export default{
  name: 'Foo',
  methods: {
    onClick(){
      this.$emit('click', {message: 'Hi'})
    }
  }
}
</script>
```

### vm.$on, vm.$once, vm.$off
#### $on 
- 메소드는 인스턴스에 이벤트 핸들러를 등록할 수 있는 메소드
- 기본적으로 v-on 디렉티브와 같은 기능을 갖고 있음
- 이벤트는 $emit 메소드에 의해 호출됨 
- $on 메소드에 등록된 이벤트 핸들러는 인자로 $emit 이벤트에서 넘어온 인자를 수신한다
```vue
vm.$emit('click', 'Hi')
```
```vue
vm.$on('click', payload => {
    console.log(paylaod) // Hi가 출력됨
})
```
#### $once
- $once메소드는 $on메소드와 동일한 기능을 가지고 있으나 이벤트 핸들러가 단 한 번만 실행됨
- $once메소드로 등록된 사용자 정의 이벤트는 한 번 호출되면 바로 제거됨.\
#### $off
- $off메소드는 등록된 사용자 정의 이벤트를 제거
```vue
vm.$off()// 인자가 없으면 모든 이벤트 리스너를 제거함
vm.$off('click') // click 이벤트의 모든 이벤트 리스너를 제거함
vm.$off('click', sayHi) // click 이벤트의 리스너 중 sayHi 콜백함수를 이벤트 핸들러로 가진 리스너만 제거한다.
```

### vm.$forceUpdate
- $forceUpdate는 인스턴스를 강제로 다시 렌더링 하는 메소드
- 하위 컴포넌트나 인스턴스에 영향을 끼치지 않고 $forceUpdate메소드가 실행된 인스턴스만 다시 렌더링

### vm.$nextIck
- 다음 렌더링 사이클 이후 실행될 콜백함수를 등록할 수 있는 기능을 제공하는 메소드
- Vue가 상태가 갱신된 후 갱신된 상태를 토대로 화면을 다시 그리는 주기를 틱이라고 부름


# Vue를 똑똑하게 사용하기 

## 단일 파일 컴포넌트 (SFC)
### 장점
- IDE 구문 강조 지원
- CSS 유효범위 지원 : style태그에 scoped 옵션을 사용함으로써 Css의 유효범위를 지원하여 현재 컴포넌트에만 제한된 스타일을 사용할 수 있음
- HTML 전처리기 지원 : 빌드시 *.vue 파일을 webpack에서 처리하므로 jade와 같은 HTML 전처리기를 손쉽게 사용하여 더 간편한 마크업이 가능
- 직관성, 유지보수성 높음

## FIRST 원칙
### Focused(단일 책임 원칙)
- 하나의 컴포넌트가 단 하나의 책임만 가져야함
### Independent(독립적인)
- 컴포넌트는 다른 컴포넌트와는 독립적으로 작동할 수 있어야함.
### Reusable(재사용 가능함)
- 컴포넌트는 어느 한 곳만 사용되는 것이 아니라 재사용될 수 있어야 함
### Small(작은)
- 컴포넌트를 작은 크기로 유지하면 복잡성이 줄어들어 유지보수성이 향상됨
### Testable(테스트 가능한)
- 컴포넌트는 테스트가 가능해야한다(유닛테스트)


## 가상 DOM의 원리
- 가상 DOM은 자원 소모가 높은 렌더링을 해결하기 위해 고안된 방법
### DOM이란?
- DOM이란 트리 형태로 구조화된 텍스트의 개념
### 가상DOM이란?
- 가상DOM은 DOM을 추상화한 트리구조로 DOM을 렌더링 하는 과정에서 이러한 성능 저하가 발생하는 것을 최소화
- DOM을 복사한 가벼운 버전의 DOM의 개념
```javascript
const VNodeTree = {
    element: 'div',
    children:[
        {
            element: 'p'
        },
        {
            element: 'ul',
            children: [
                { element: 'li'},
                { element: 'li'}
            ]
        }
    ]
}
```
- 이렇게 생성된 가상 DOM은 화면에 렌더된 DOM과 같은 내용을 갖고 있음
- DOM의 내용을 변경하고 싶을 때 직접 DOM을 변경하는 것이 아니라 가상 DOM을 변경하는 것
- 이렇게 되면 몇번을 수정하더라도 실제 DOM의 내용을 변경한 것이 아니기 때문에 렌더링 발생x
- 마지막으로 모든 변경사항을 반영한 가상 DOM을 토대로 브라우저에게 실제 DOM 렌더하나는 요청을 함
```
예시로 li 요소들을 생신하는 경우 DOM을 직접 수정하려면 500번의 렌더링이 필요하지만
가상 DOM 내에서만 li 요소들을 수정한 후 그 결과를 한 번에 DOM에 반영하면 렌더링은 1번만 수행됨.
```

## 범위 컴파일 사용하기
- 범위 컴파일은 외부에서 주입받는 템플릿
- Vue가 제공해주는 내장 컴포넌트인 slot 컴포넌트와 속성을 통해 사용할 수 있음.
- 주입하는 템플릿에는 일반적인 템플릿 문법을 사용한 데이터 바인딩이 가능
- 주의해야할 점은 이때 사용되는 데이터는 slot 컴포넌트를 가지고 있는 컴포넌트의 데이터가 아니라 
- **템플릿을 주입하는 컴포넌트 쪽의 데이터임.** 
### 단일 슬롯 범위 컴파일
```vue
<template>
  <div>
    <h1>Foo 컴포넌트의 내용입니다.</h1>
    <slot></slot>
  </div>
</template>
<script>
export default{
  name: 'Foo'
}
</script>
```
- 위와 같이 slot 컴포넌트에 아무런 이름을 부여하지 않을 경우 slot 컴포넌트는 자동으로 default라는 이름을 부여받게 됨
```vue
this.$slots.default 
```
- 이때 $slots의 값은 VNode 자료형을 가진 가상 DOM의 노드 객체들로 이루어진 배열
```vue
<template>
  <div>
    <foo>
      <p>{{ message }}</p>
    </foo>
  </div>
</template> 
<script>
import Foo from './Foo.vue'

export default{
  name: 'Bar',
  components: {Foo},
  data() {
    return {message : 'Bar 컴포넌트의 상태입니다.'}
  }
}
</script>
```
- 외부에서 주입하는 템플릿에 사용되는 데이터는 Foo 컴포넌트의 상태가 아니라 Foo 컴포넌트를 사용하고 있는 Bar 컴포넌트의 상태
- 최종적으로 Foo 컴포넌트는 외부에서 주입받은 템플릿과 자신의 템플릿이 결합된 DOM 구조를 갖게 됨
```html
<div>
    <h1>Foo 컴포넌트의 내용입니다.</h1>
    <p>Bar 컴포넌트의 상태입니다.</p> <!-- 외부에서 주입받은 템플릿 -->
</div>
```
### 다중 슬롯 범위 컴파일
- slot 컴포넌트에 name 속성을 부여하면 여러 개의 slot 컴포넌트를 사용할 수도 있다. 
```vue
<template>
  <div>
    <slot name="title"></slot>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Foo'
}
</script>
```
```vue
<div>
    <foo>
      <h1 slot="title"> Foo 컴포넌트의 제목입니다.</h1>
      <p> Foo 컴포넌트의 내용입니다. </p>
    </foo>
</div>
```
### slot 컴포넌트의 대체 템플릿
- slot 컴포넌트를 사용할 때 주입받은 템플릿이 아니라 원래 slot 컴포넌트 내부에 있던 템플릿은 대체 템플릿으로 활용됨
```vue
<template>
  <div>
    <h1>Foo 컴포넌트의 내용입니다.</h1>
    <slot>
      <!-- 외부로부터 템플릿을 주입받으면 이 내용은 사라짐     -->
      <p>주입받은 템ㅍ플릿이 없습니다.</p>
    </slot>
  </div>
</template>
<script>
export default{
  name: 'Foo'
}
</script>
```

# Vuex란 무엇일까?
- Vuex는 Vue로 작성된 애플리케이션의 상태관리 라이브러리
- 애플리케이션의 상태를 저장할 수 있게 도와주는 중앙 집중식 저장소
- -> 예측 가능한 애플리케이션을 구축하는데 큰 도움을 줌.
- Flux에 영감을 받음 -> MVC 패턴의 문제를 해결한 아키텍처

## MVC의 문제
- 하나의 컨트롤러가 여러 개의 모델이나 뷰를 컨트롤하는 것에 대한 제약이 없음
- -> 애플리케이션이 커질수록 복잡한 구조가 되기 쉽다. 

## Flux 패턴
- MVC 패턴과 가장 큰 차이점은 데이터의 흐름이 양방향이 아닌 단방향으로 흐른다는 것
- Action -> Dispatcher -> Store -> View --> Action
- 데이터 플로우는 언제나 액션으로 부터 시작해서 순서대로 흘러간다
- 뷰에서 사용자 액션이 일어나서 데이터를 업데이트해야한다면
- -> 액션부터 다시 시작해서 디스패처를 통해 스토어에 있는 데이터를 업데이트하고 뷰에 반영해야함
- 이러한 단방향 데이터 흐름은 MVC 패턴의 양방향 데이터 흐름에 비교해서 데이터의 상태를 예측하기 쉽다.
- 또한 중앙 집중되어있는 저장소인 스토어의 데이터를 모든 컴포넌트가 접근할 수 있으며 상태를 공유하기도 쉬워진다.

### 액션
- Flux 패턴 안에서는 스토어를 변경하려면 디스패처를 통해서 업데이트가 이뤄져야함
- 이러한 **디스패처는 액션을 통해 실행**시킬 수 있는데, 
- ->이러한 **액션은 타입과 페이로드**를 가지고 있는 단순한 객체로 이뤄짐
```
// 액션의 구조
{
    type: 'INCREMENT_COUNT',
    payload: { count: 1}
}
```
- 이때 액션의 타입은 Flux 내부에 미리 정해져 있는 것이 아니라
- -> 개발자가 직접 정의해놓은 상수들의 목록으로 이루어진다.
- 이러한 액션은 액션 생성자를 통해 생성됨
- 액션 생성자는 사용자 화면(view)의 이벤트 핸들러로부터 호출될 수 있으며,
- 액션 생성자를 통해 전달된 액션은 스토어(Store)에서 이해할 수 있는 포맷으로 변경되어 디스패처로 전달됨.

### 디스패처
- 디스패처는 flux 패턴의 애플리케이션 중앙 허브의 일종, 모든 데이터의 흐름을 관리
- 디스패처는 액션에 대한 콜백함수를 제공
- 액션이 발생하면 스토어는 등록된 디스패처의 콜백함수를 통해 발생한 액션에 대한 메시지를 전달받음
- 디스패처는 어떤 액션이 들어왔을 때 어떤 함수를 실행시켜야하는지 알고 있으며,
- 이 함수는 "어떤 스토어의 어떤 값을 어떻게 변경해라"와 같은 로직을 갖음
- 이러한 디스패처는 전체 앱 내에 하나의 인스턴스만 사용함.

### 스토어 
- 스토어는 애플리케이션 내의 상태를 갖고 있음.
- 스토어에 들어가있는 상태는 MVC 패턴에서의 모델과 같은 역할을 함.
- 스토어에 있는 상태를 변경하기 위해서는 반드시 액션 생성자가 액션을 생성한 후 
- -> 디스패처를 통해 스토어에 상태 변경을 요청해야함. 
- 즉, 스토어에 들어있는 상태 store.count = 1 과 같은 방식으로는 직접 업데이트할 수 없음
- 스토어에 등록된 상태가 변경되면 
- -> 스토어는 상태가 변경되었다는 **변경 이벤트를 통해 뷰에 새로운 상태를 전달하고 뷰가 스스로 업데이트**를 하게 함
- 대체로 이러한 스토어는 단순한 자바스크립트 객체로 이루어져 있음.

### 뷰
- Flux 패턴의 뷰는 MVC 패턴의 뷰와는 다르게 단순히 화면을 렌더링하는 역할뿐 아니라,
- **컨트롤러의 역할도 가짐**
- 최상위 뷰는 스토어의 상태를 가져와 자식 뷰에 분배하는 역할 -> 컨트롤러-뷰라고 부르기도 함
- 이리하여, 자식 뷰는 직접 스토어의 데이터를 받아오는 대신, 부모 뷰로부터 Props를 통해 데이터를 전달받음
- 필요에 따라 자식뷰에서 직접 스토어의 상태를 가져올 수도 있음
- 뿐만아니라 뷰는 사용자와의 상호작용을 통해 스토어의 상태에 따라 변경사항을 뷰에 반영 (이러한 뷰는 Vue컴포넌트가 역할을 담당함)


## Vuex
- Vuex의 데이터플로우 : 액션, 변이, 상태, 뷰 컴포넌트
### 상태 (State)
- Vuex의 상태는 애플리케이션에서 공통으로 관리할 상태, 즉 모델을 의미함
- 상태는 단일 상태 트리를 사용, 원본 소스의 역할을 함
- 단일 상태트리란 단 하나의 객체를 의미, 애플리케이션 내에서는 애플리케이션의 상태를 포함하고 있음
- 단일 상태 트리를 사용하면 Vue Devtools를 통해 쉽게 디버깅을 할 수 있다는 장점을 가짐
- 스토어에 연결된 컴포넌트는 저장소의 상태가 변경되면 변경 사항을 컴포넌트에 효율적으로 반영함. 
- **컴포넌트에서 스토어의 상태에 접근해서 가져올 때는 다음과 같이 computed내에 작성**한다

```vue
<template>
  <div>
    {{ count }}
  </div>
</template>
<script>
  import store from 'src/store';
  
  export default {
    computed: {
      count() {
        return store.state.count;
      }
    }
  }
</script>
```
- store.state.count 값은 count 라는 computed 속성에 포함되어 있기 때문에
- store.state.count 값이 변경되면 컴포넌트의 computed 또한 자동으로 갱신되어 관련된 DOM 업데이트가 발생하게 됨.
- 그러나 이 방법은 스토어를 사용하려고 하는 모든 컴포넌트에 스토어를 임포트해야하는 단점
- -> Vuex는 store 옵션을 통해 루트 컴포넌트의 모든 자식 컴포넌트 저장소에 주입을 할 수 있음
```vue
import Vue from 'vue'
import Vue from 'vuex'
import store from 'src/stores'
import StoreTest from 'src/components/StoreTest'

Vue.use(Vuex)

const app = new Vue({
  el: '#app',
  store,
  components: { App },
})
```
- 스토어가 주입된 이후부터 모든 자식 컴포넌트에서 스토어에 대하여 this.$store로 접근할 수 있음
```vue
<template>
  <div>
    {{ count }}
  </div>
</template>
<script>
  // import store from 'src/store';
  export default {
    computed: {
      count() {
        // return store.state.count;
        return this.$store.state.count;
      }
    }
  }
</script>
```
- 하지만 이런 방법도 컴포넌트 내에서 여러 상태에 접근해야하는 경우 반복적이고 장황해질 수 있음
- 이러한 부분을 mapState 헬퍼 함수를 통해 더욱더 간결하게 사용할 수 있음
```vue
// mapState 헬퍼 함수를 통해 상태가 컴포넌트에 매핑된 모습
<template>
  <div>
    {{ count }} + {{ number }} = {{ sum }}
  </div>
</template>
<script>
  import { mapState } from 'vuex';
  export default {
    data(){
      return {
        number : 3
      }
    },
    computed : mapState({
      count: state => state.count,
      sum(state){
        return state.count + this.number
      }
    })
  }
</script>
```
- mapState 헬퍼 함수가 아닌 객체 전개 연선자를 이용하여 사용한 예시
```vue
<template>
  <div>
    {{ count }} + {{ number }} = {{ sum }}
  </div>
</template>
<script>
  import { mapState } from 'vuex';
  export default {
    data(){
      return {
        number : 3
      }
    },
    computed : {
      sum() {
        return this.count + this.number
      },
      ...mapState([
          'count'
      ])
    }
  }
</script>
```

### 게터 (Getter)
- **게터는 스토어 내에서 Vue의 computed와 같은 역할**을 하는 아주 유용한 기능
- 때로는 스토어의 상태를 바로 가져와서 사용하는 것이 아니라, 다음과 같이 일정 부분 가공해서 사용해야할 때도 있음
```vue
// computed 속성을 사용하여 상태의 데이터를 가공하는 코드 (문제 상황)
<template>
  <div>
    {{ multiply }}
  </div>
</template>
<script>
  import { mapState } from 'vuex';
  export default{
    computed: {
      multiply(){
        return this.count * this.count
      },
      ...mapState([
          'count'
      ])
    }
  }
</script>
```
- 만약 multiply 값을 다른 컴포넌트에서 다시 사용하고 싶다면, multiply 함수를 똑같이 다시 사용하려는 컴포넌트에 작성해야함
- -> **재사용성 문제 --> 게터를 사용**
```vue
// Vuex Store에 게터를 선언한 모습
<script>
export default new Vuex.Store({
  state: {
    count: 2
  },
  getters: {
    multiply (state){
      return state.count * state.count
    }
  }
})
</script>
```
- 게터는 컴포넌트의 computed와 마찬가지로 내부에서 사용된 데이터가 변경될 때마다
- 자동으로 갱신되고 한 번 계산된 후로는 재계산되기 전까지는 반환되는 값이 캐싱되는 점 또한 같음.
- gettres 속성 내부에 선언되는 함수는 첫 번째 인자로 속해있는 스토어의 상태르 전달받고
- 두 번째 인자로는 getters 속성 자체를 전달 받는다. 
```javascript
// 게터 내에서 다른 게터를 사용
getters: {
  add: state => {
    return state.count + state.count;
  },
  multiply: (state, getters) => {
    return getters.add * state.count;
  }
}
```
- 이렇게 선언된 게터는 store.getters 객체에 노출되고 이 속성을 통해 게터에 접근할 수 있따
```
store.getters.add
store.getters.multiply
```
- 컴포넌트 내에서 computed 속성을 통해 접근
```javascript
computed: {
    doneMemosCount(){
        return this.$store.getters.doneTodosCount
    }
}
```
- 이러한 게터는 상태와 마찬가지로 mapGetters 헬퍼 함수를 통해 더욱더 편하게 이용할 수 있음]
```vue
<template>
  <div>
    {{ multiply }}
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  export default {
    computed : {
      ...mapGetters([
          'multiply'
      ]),
    }
  }
</script>
```

### 변이 (Mutation)
- 변이는 Vuex에서 **스토어의 상태를 변경할 수 있는 유일한 방법**
- 각 변이 **함수의 이름**은 Flux패턴에서 설명했던 **액션의 타입과 동일**
- **변이 함수의 내용은 실제 상태 수정을 할 수 있는 로직을 가지고 있음**
- 즉, Flux 패턴에서 디스패처의 역할을 Vuex에서는 변이라는 이름을 가진 기능이 동일한 역할을 함
```vue
export default new Vuex.Store({
  state:{
    count: 2
  },
  mutations: {
    INCREMENT (state, payload){
      state.count = state.count + payload
    }
  }
})
```
- 변이 핸들러 함수는 첫 번째 인자로 스토어의 상태를, 두 번쨰 인자로는 페이로드를 받음
- 변이는 게터와 다르게 store.mutation으로 직접 접근이 불가능
- 변이는 디스패처의 역할과 마찬가지로 **어떤 액션이 들어왔을 때** 그 액션이 가지고 있는 **타입과 일치하는 함수를 실행**시킬 뿐임
- 변이를 호출하려면 반드시 store.commit 메소드를 통해 사용해야함.

```vue
<template>
  <div>
    <button @click ="increment">더하기</button>
  </div>
</template>
<script>
  import store from "../store";
  export default{
    methods: {
      increment(){
        store.commit('INCREMENT', 2)
      }
    }
  }
</script>
```
- 이러한 변이에 대한 헬퍼함수로 Vuex에서는 mapMutations 헬퍼 함수를 제공함
```vue
//mapMutations 헬퍼 함수를 이용하여 변이를 호출하는 모습
<template>
  <div>
    <button @click="increment">더하기</button>
  </div>
</template> 
<scirpt>
  import {mapMutations} from "vuex"
  export default{
    methods: {
      ...mapMutations([
        "INCREMENT"
      ]),
      increment(){
        this.INCREMENT(2)
      }
    }
  }
</scirpt>
```
- 만약 변이 안에서 하나 이상의 인자를 사용하려한다면 인자를 순서대로 나열하는 것이 아니라, 하나의 객체 형태로 전달해야함
```vue
// Object형태의 payload를 인자로 받는 변이 함수 모습
<script>
export default new Vuex.Store({
  state: {
    count: 2
  },
  mutations: {
    DECREMENT (state, payload){
      state.count = state.count - payload.count
    }
  }
})
</script>
```
```vue
<template>
  <div>
    <button @click="decrement">빼기</button>
  </div>
</template>
<script>
  import { maoMutations } from "vuex"
  export default {
    methods: {
      ...mapMutations([
          "DECREMENT"
      ]),
      decrement(){
        this.DECREMENT({ count: 2 })
      }
    }
  }
</script>
```
- 변이에서 가장 중요한 사실은 변이는 반드시 동기적이어야 한다는 것 (디버깅이 어려워지는 문제)
- 비동기에 대한 변이를 해결할 수 있는 것이 "액션"

### 액션
- 액션의 경우 크게 2가지 역할을 담당
- 첫 번째는 '변이에 대한 커밋'이라는 것
- 두 번째는 '비동기적인 작업'이 포함될 수 있다는 점
```vue
<script>
export default new Vuex.Store({
  state:{
    count: 2
  },
  mutations: {
    INCREMENT (state, payload){
      state.count = state.count + payload
    }
  },
  actions: {
    increment(context, payload){
      context.commit("INCREMENT", payload)
    }
  }
})
</script> 
```
- 액션 핸들러는 첫 번째 인자로 context를 받는데, 이 인자는 스토어의 메소드, 속성들을 그대로 가지고 있는 값.
- 그러므로 context.commit과 같이 스토어의 메소드를 context라는 값을 통해 실행시킬 수 있음.
- 그리고 액션의 두 번째 인자는 변이와 마찬가지로 payload. 
- **액션은 dispatch라는 메소드를 통해서 사용**할 수 있음.

```vue
// 액션을 호출하는 방법
<template>
  <div>
    <button @click="increment">더하기</button>
  </div>
</template>
<script>
  import store from "../store"
  export default{
    methods: {
      increment(){
        store.dispatch('increment', 3);
      }
    }
  }
</script>
```
- 혹은 mapActions 헬퍼 함수를 통해서도 사용할 수 있음
```vue
<template>
  <div>
    <h1>Actions</h1>
    <button @click="incrementHandler">더하기</button>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  export default{
    methods: {
      ...mapActions([
          'increment'
      ]),
      incrementHandler(){
        this.increment(3);
      }
    }
  }
</script>
```
- 액션의 좀 더 실용적인 예는 앞에서 설명했던 비동기 통신을 통한 변이가 이루어져야 할 때임
```vue
<script>
 actions: {
  // 전달인자 분해 문법을 사용하면 context.commit을 바로 가져올 수 있음
   setAsyncUserInfo({commit}, userId){
     commit('SET_USER_INFO_REQUEST')
     api.fetchUserInfo(response => {
       commit('SET_USER_INFO_SUCCESS', response.data.user)
     });
   }
 }
</script>
```
- 액션 핸들러는 서버와 통신하여 사용자 데이터를 받아오고 그 후 변이를 요청하는 commit 메소드를 호출함
- 이러한 방식의 변이는 Vue Devtools에서 commit 메소드의 호출을 인식했을 때 동기적으로 상태가 업데이트 되므로 제대로된 상태 추적이가능하게 됨.
- 또 한가지 실용적인 예는
- **여러 개의 변이가 필요한 하나의 액션을 수행**해야하는 경우. 
```vue
// 액션 내에서 연속적인 비동기처리를 하는 모습
<script>
export default new Vuex.Store({
  actions:{
    setAsyncUserInfo({ commit }, userId){
      commit('SET_USER_INFO_REQUEST')
      api.fetchUserInfo(response => {
        commit('SET_UESR_INFO_SUCCESS', response.data.user)
        
        // 받아온 사용자의 정보를 토대로 사용자의 친구목록을 받아온다
        const userId = response.data.user.id;
        commit('SET_USER_FRIENDS_REQUEST')
        api.fetchUserFriends(userId, response => {
          // 친구목록에 대한 API가 성공 시
          commit('SET_USER_FRIENDS_SUCCESS', response.data.friends);
          // return Promise.resolve(); // 프로미스 반환할수도 있음 !! -> 비동기 로직을 마친후의 처리에 대한 추가 작업을 수행
        }, err =>{
          // 친구목록에 대한 API가 실패 시
          commit('SET_USER_FRIENDS_FAILURE');
          throw new Error(err);
        })
      }, err =>{
        // 사용자 데이터 요청이 실패했을 경우에 사용자 정보를 초기화한다.
        commit('SET_USER_INFO_FAILURE');
        throw new Error(err);
      });
    }
  }
})
</script>
```
- 이처럼 액션은 비동기 흐름을 제어하여 변이를 수행해야할 때 효과적.
- 또한, 액션이 Promise를 반환하게 작성한다면 해당 액션을 사용하는 쪽에서
- -> 비동기로직을 마친 후의 처리에 대한 추가작업을 수행할 수 있음
- 액션이 Promise를 반환하면 해당 액션을 호출하는 쪽에서 ES6의 Promise문법, 또는 자바스크립트 ES7의 async/await 문법으로사용가능
```javascript
// Promise 패턴으로 작성 가능
store.dispatch('setAsyncUserInfo').then(()=>{
   // 액션이 종료된 후의 작업을 수행 
});
// 또는 async await 패턴도 사용 가능
async onUpdateUserInfo(){
    await store.dispatch('setAsyncUserInfo');
}
```

### Vuex 모듈 관리
- 규모의 크기에 따라 상황에 맞게 분리.
- 애플리케이션 구조가 커질수록 각각의 관심사별로 파일을 분리하는 것이 좋음
```
-- src
    |_ store
         |_ actions.js
         |_ mutations.js
         |_ getters.js
         |_ states.js
         |_ index.js
```
- Vuex에서는 이러한 모듈을 효과적으로 관리하기 위해 modules 옵션을 제공함.
```vue
// modules 옵션을 이용한 모습
<script>
  export default new Vuex.Store({
    modules: {
      a: foo,
      b: bar
    },
    state: {
      // ...
    },
    actions: {
      // ...
    },
    mutations: {
      // ...
    },
    getters: {
      // ...
    }
  })
</script>
```
```
-- src
    |_ store
         |_ actions.js
         |_ mutations.js
         |_ getters.js
         |_ states.js
         |_ index.js
         |_ modules.js
                |_ foo.js
                |_ bar.js
```
- 스토어 내의 변이 유형에 따라 상수를 사용하는 것은 Flux 패턴에서 일반적인 방법
- 변이 유형에 대한 상수를 사용하는 상황에서 
- -> 스토어가 각각의 관심사에 맞게 분리되었다면 
- -> 변이의 타입에 대한 상수에도 모듈에 따라 접두사 혹은 접미사를 붙인다면 효율적으로 관리할 수 있음
```javascript
//변이 유형에 대한 상수
// foo에 대한 상수 타입
const FETCH_FOO = "FOO/FETCH_FOO"
// bar에 대한 상수 타입
const FETCH_BAR = "BAR/FETCH_BAR"
```

### 정리
- Vuex의 효과는 Vue Devtools와 함께 할 때 효과적
- Vuex의 큰 장점으로는 중앙 집중식 저장소 역할을 통해 컴포넌트들 간의
- -> 분산된 상태를 효육적으로 관리할 수도 있음
- -> 애플리케이션에 예측이 가능하다는 점 역시 큰 장점

# Vue Router
- Vue CLI를 사용하여 프로젝트를 생성하면 작성되어 있는 기본적인 라우터의 모습
```js
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

vue.use(Router)

export default new Router({
    routes: [
        {
          path: '/',
          name: 'HelloWorld',
          component: HelloWorld  
        },
    ]
})
```
- 현재 경로가 루트인 경우 HelloWorld라는 컴포넌트를 페이지에 삽입하고 렌더하는 코드

## Vue 애플리케이션에서 Vue Router 사용하는 법
- Vue Router를 사용하려면 우선 명시적으로 Vue Router를 Vue에 추가해줘야함
```js
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
```
- 이 후 Vue Router 인스턴스를 생성하고 애플리케이션에서 사용할 라우트 설정을 Vue Router에 추가해야함
```js
export default new VueRouter({
    routes: [
        {
            path: '/foo',
            component: Foo
        },
        {
            path: '/bar',
            component: Bar
        }
    ]
});
```
- routers 옵션은 여러 개의 라우트 설정을 갖고 있는 배열
- 규모가 커지게 된다면 라우트 설정만을 선언하는 파일을 따로 분리해줄 수 있음
```js
// 인증페이지에 대한 라우트 설정과 사용자 페이지에 대한 라우트 설정 분비

// src/router/auth.js
export const AuthRouters = [
    {
        path: 'auth/login',
        name: 'Login',
        component: Login
    }
]
// src/router/user.js
export const UserRouters = [
    {
        path: '/user/profile',
        name: 'Profile',
        component: Profile
    }
]
```
```js
// 각각 선언된 라우트 설정을 라우터에 주입하는 코드
// src/router/index.js
import {AuthRouters} from '@/router/auth'
import {UserRouters} from '@/router/user'

export default new VueRouter({
    routes:[
        ...AuthRouter,
        ...UserRouters
    ]
    
})
```

## Vue Router의 라우트 설정 속성들.
- Vue Router의 routes 속성에 선언된 라우트 설정 객체의 모습
```js
new VueRouter({ 
    routes:[
        { // 라우트 설정 객체
            path: '/foo',
            name: 'Foo',
            component: Foo
        }
    ]
})
```
- 라우트 설정 객체는 필수값으로 path를 가짐
### 라우트 설정 객체의 주요 속성들
- path : 라우트가 가질 경로
- name : 라우트의 이름
- component : 라우트가 불러와졌을 때 <router-view>에 주입될 컴포넌트
- components : 라우트가 불러와졌을 떄 이름을 가지는 뷰에 주입될 컴포넌트들
- redirect : 리다이렉트할 라우트
- alias : 라우트의 별칭
- children : 중첩된 라우트들
- props : 동적 세그먼트 변수를 컴포넌트의 props 속성으로 주입할 것인지 여부

## 동적 라우트 매칭
### 동적 세그먼트란 무엇인가?
- 동적 라우트란 posts/{게시글의 아이디} 와 같이 경로에 변수를 가지고 있는 라우트를 의미.
- 이때 경로 내부에 들어있는 변수를 동적 세그먼트라고 부름
- 동적 세그먼트에 어떤 값이 들어올 지 알 수 없으므로 우리는 라우트를 선언할 떄 path속성을 사용하여 패턴을 정의
```js
// 동적 라우트를 선언한 모습
new VueRouter({
  routes: [
      // 동적 세그먼트를 콜론으로 시작한다.
      {path : 'posts/:postId', component: PostDetailPage}
  ]
})
```
- 동적 세그먼트는 :(콜론)기호로 시작하며, 콜런 뒤의 단어는 변수명으로 사용됨
- 이렇게 선언된 라우트의 동적 세그먼트는 컴포넌트 내에서 this.$rouste.params를 통해 접근할 수 있음

## 동적 세그먼트의 변경에 반응하기
- /posts/1 에서 /posts/2로 변경되었을 때 
- /posts/:postId와 같은 동적 라우트를 사용했다면 postId에 해당하는 동적 세그먼트가 변경 되더라도
- VueRoute는 이를 동일한 경로로 인식하기 때문에 한 번 사용되었던 컴포넌트를 새로 불러오지 않고
- -> 기존에 불러왔던 컴포넌트를 재사용함 -> csr의 장점 활용
- 주의점) creted나 mounted와 같은 기존에 불러왔ㄷ너 컴포넌트의 라이플 사이클 훅이 호출되지 않음
- 이렇게 동일한 경로의 동적 세그먼트만 변겨오디는 상황에서 우리는 Vue의 watch 속성을 사용하여 $route 객체를 감시

```js
export default{
    name : 'PostDetailPage',
    watch: {
        '$route'(to, from){
            console.log('라우트 객체가 변경되었습니다.')
        }
    }
}
```
- 또는 VueRouter에서 제공해주는 네비에기연 가드의 일종인 
- beforeRouteUpdate가드를 사용하여 라우트 객체가 갱신되었음을 감지할 수도 있음.

```js
export default{
    name: 'PostDetailPage',
    beforeRouteUpdate(to, from, next){
        console.log('라우트 객체가 변경되었습니다.')
        //next 함수를 호출하지 않으면 다음 라우트로 이동하지 않는다.
        next()
    }
}
```

## 매칭 우선순위
- Vue Router는 경로가 변경되었을 때 현재 경로와 일치하는 라우트를 찾기 위해
- routes 배열을 탐색
- 주의점)배열의 머리인 0번 원소부터 배열의 꼬리인 가장 마지막 원소의 순서대로 진행
```js
new VueRouter({
    routes: [
        {path: '/posts/:postId', name: 'PostDetailPage'},
        {path: '/posts/hello', name: 'HelloPost'}
    ]
})
```
- 사용자가 /posts/hello 라는 경로로 이동하면 PostDetailPage 라우트로 이동하게 됨
- 순서 반대로 설정해야 각 상황에 대해 처리 가능함

## 중첩된 라우트
- 중첩된 라우트란 /posts/foo, /posts/bar와 같이 여러 단계로 중첩된 라우트를 말함
- cf) 각 경로들의 페이지가 레이아웃과 내용이 모든 완벽하게 다른 페이지라면 중첩된 라우트 기능은 사용할 수 없음

### 중첩된 라우트 기능 사용하지 않고 만들어보기
- 같은 레이아웃을 가진 페이지를 만드려면 
- 모두 같은 컴포넌트를 매칭한 후 컴포넌트 내부에서 v-if 또는 v-show를 사용하여 자식 컴포넌트 조건부 노출해야함
```js
new VueRouter({
    routes: [
        {
            path: '/posts/foo',
            name: 'Foo',
            component: Post
        },
        {
            path: '/posts/bar',
            name: 'Bar',
            component: Post
        }
    ]
})
```
```vue
<template>
  <div>
    <h4>Post 컴포넌트입니다.</h4>
    <Foo v-if="$route.fullPath === 'posts/foo'"/>
    <Foo v-else="$route.fullPath === 'posts/bar'"/>
  </div>
</template>
```

### 중첩된 라우트 사용하기
- 현재 경로와 일치하는 컴포넌트들을 그리기 위해서 **router-view** 컴포넌트를 사용
- 처음 Vue CLI를 사용하여 프로젝트 생성하면 router-view 컴포넌트는 루트 컴포넌트인 App.vue에만 존재함
```vue
//App.vue에 선언된 router-view 컴포넌트
<div id="app">
  <router-view></router-view>
</div>
``` 
- 위처럼 일반적인 경우 router-view는 루트 컴포넌트에만 존재하지만,
- 중첩된 라우트는 router-view 컴포넌트를 중첩해서 사용할 수 있다는 것을 의미.
- 상단 예시처럼 v-fi를 사용해 조건부 노출했던 코드에 중첩된 라우트 기능을 사용가능
```vue
<template>
  <div id="post">
    <h4>Post 컴포넌트입니다.</h4>
    <!-- Foo, Bar 컴포넌트가 있던 자리에 router-view를 삽입    -->
    <router-view></router-view>
  </div>
</template> 
```
- 애플리케이션의 DOM 구조는 router-view컴포넌트가 중첩된 모습이 된다.
```vue
<!-- 중첩된 라우트를 사용한 DOM 구조의 모습-->
<div id="app">
  <router-view> <!--  첫번째 router-view에는 Post 컴포넌트가 렌더됨  -->
    <div id="post">
      <h4>Post 컴포넌트입니다.</h4>
      <router-view></router-view> <!-- 중첩된 router-view에 다른 컴포넌트를 렌더할 수 있음.-->
    </div>
  </router-view>
</div>
```
- 중첩된 라우트를 선언할 때는 children 속성을 사용
```js
new VueRouter({
    routes:[
        {
            path:'/posts',
            component: Post,
            children: [
                {
                    path:'',
                },
                {
                    path:'foo', // /posts/foo
                    component: Foo
                },
                {
                    path:'bar',
                    component: Bar
                }
            ]
        }
    ]
})
```


## 프로그램 방식 네비게이션
- VueRouter는 router-link 컴포넌트를 사용하여 anchor 태그를 만드는 방법 외에도
- 컴포넌트 내에서 this.$router로 접근할 수 있는 라우터 객체의 메소드를 사용하여 라우팅할 수 있도록 지원함
- 이렇게 코드를 사용하여 실행하는 방법을 프로그래밍 방식으로 수행한다고 함

### router.push
```js
// push: Function(locatoin, onComplete?, onAbort?)

$router.puth('/posts') //경로 직접 전달
//라우트 객체를 통해 경로를 전달
$router.push({path: '/posts'}, ()=>{
    console.log('라우트 이동 완료')
}, ()=>{
    console.log('라우트 이동 중단')
}) 
```

### router.replace
- push와 같은 역할을 하지만, 브라우저 히스토리에 이동한 라우트가 추가되지 않음

### router.go
```js
$router.go(1) // 한단계 앞으로
$router.go(-1) // 한단계 뒤로
$router.go(3) // 3단계 앞으로
```

### 이름을 가지는 뷰
- 여러개의 레이아웃을 사용해야하는 경우 생김
- 이때 각 레이아웃은 중첩된 상태가 아닌 동시에 같은 계층에 존재하는 레이아웃
- 이런경우 router-view 컴포넌트에 이름을 부여함으로써 라우트 설정 시 원하는 router-view에 컴포넌트를 삽입할 수 있음
```vue
<!-- router-view 컴포넌트에 이름을 부여한 모습-->
<router-view name="header"></router-view>
<router-view name="aside"></router-view>
<router-view></router-view>
<router-view name="footer"></router-view>
```
- 이후 Vue Router 인스턴스를 생성할 때 라우트 설정 객체의
- components 속성을 사용함으로써 이름을 가진 뷰에 여러 개의 컴포넌트를 삽입할 수 있음.
```js
new VueRouster({
    routes:[
        {
            path: '/',
            components:{
                header: AppHeader,
                aside: AppAside,
                default: Content,
                footer: AppFooter
            }
        }
    ]
})
```

## 라우트 컴포넌트에 속성 전달 (props 속성)
- 동적 라우트 매칭에서 $route.params 속성으로 동적 세그먼트에 접근할 수 있었음
- 그러나, 컴포넌트 내에서 $route를 사용하면 특정 URL에서만 사용할 수 있는 컴포넌트가 됨
- -> 컴포넌트 자체의 재사용성을 떨어뜨리게돤다.
- --> VueRoute는 이러한 컴포넌트와 라우트 간의 동적 세그먼트를 
- 컴포넌트의 props 속성으로 주입할 수 있는 기능을 제공
- -> props속성을 통해 동적 세그먼트를 주입한다면 
- -> 이 컴포넌트는 라우트에 postId 동적 세그먼트가 없더라도 props를 통해서 해당 데이터를 주입받을 수 있기 때문에 결합도가 사라짐
- -> **this.$route.postId 아니라, this.postId로 접근가능** 해짐

```vue
<script>
new VueRouter({
  routes:[
    {
      path: '/posts/:postId',
      components:{
        header: AppHeader,
        contents: Example
      },
      //뷰의 이름을 따로 사용하여 옵션을 설정할 수 있음
      props:{
        contents: true
      }
    }
  ]
})
</script>
```
- props 속성을 사용해서 선언한 postId 변수
```js
export default{
    name: 'Example',
    props:{
        postId:{
            typs: String, // ==> VueRouter를 통해 동적 세그먼트 props로 전달받음 !!! 
            required: true
        }
    },
    created(){
        // 컴포넌트의 props 속성으로 주입된 postId 동적 세그먼트에 바로 접근 가능
        console.log(this.postId)
    }
}
```

## 해시 모드와 히스토리 모드
### 해시모드
- Vue Router는 두가지 라우팅 모드르 지원
- 기본값은 해시 모드
```
// URL에 해시 프래그먼트를 사용하는 모습
http://localhost:8080#hello
```
- 최근에는 HITML5의 HistoryAPI를 사용하는 URL 변경 방법을 더 선호하고 있음
### 히스토리 모드
- HTML5의 스펙인 historyAPI를 사용하는 방법
- 이 API는 pushState라는 메소드를 제공
- -> url을 변경하고 브라우저의 히스토리도 남겨지지만 실제로 페이지는 이동하지 않는 기능
- -> pushState 메소드를 사용하여 URL을 변경하면 브라우저가 페이지 이동으로 인식하지 않고
- URL변경 내용이 저장되기 떄문에 실제 페이지 이동과 유사한 사용자 경험

### 네비게이션 가드
- 네비게이션 가드는 라우터에서 다른 라우터로 이동하는 네비게이팅이 수행될 때 실행되어
- 라우터의 이동을 막거나 혹은 다른 라우터로 리다이렉팅 할 수 있는 기능.
- 적용범위에 따라 전역 가드, 라우트별 가드, 컴포넌트별 가드로 나뉨.
- 또한 가드의 호출 타이밍에 따라 before 훅과 after 훅으로 나뉨

#### 전역 가드
- 주로 애플리케이션 내에서 공통적으로 수행해야하는 동작을 정의할 때 사용
##### beforeEach
```js
const router = new VueRouter({...})
router.beforeEach((to, from, next)=>{
    // ...
    next()
})
```
- to : 다음에 이동할 라우트 정보
- from : 이전 라우트 정보
- next : 이 함수가 명시적으로 호출되어야 다음 라우트로 이동을 시작함.
- -> beforeEach를 포함한 모든 before훅은 명시적으로 next함수가 호출되지 않으면 다음 라우터로 이동하지 않음
- next 함수는 전달인자에 따라 다른 동작을 하게 됨
```js
// 다음 라우트로 이동
next() 
// 현재 네이게이팅을 중단하고 이전 라우트로 돌아감
next(false)
// 인자로 주어진 라우트로 이동
next('/')
next({path: '/'})
// 인자가 Error 객체라면 라우트 이동이 취소되고 router.onError를 사용하여 등록된 콜백이 호출됨
const error = new Error('Navigation Failed')
next(error)
```
- beforeEach 훅의 이러한 기능을 사용하면 현재 라우트로 이동할 권한이 있는지 여부를 확인하는 용도로 사용 가능
##### afterEach
```js
const router = new VueRouter({...})
router.afterEach((to, from)=>{
    // ...
})
```
#### 라우트별 가드
##### beforeEnter
- beforeEnter 훅은 라우트의 설정 객체에 직접 정의할 수 있음

#### 컴포넌트별 가드
- leave 훅 사용 가능
##### beforeRouterEnter
##### beforeRouterLeave
- this를 통해 컴포넌트에 접근 가능
- next(false)를 사용하여 다음 라우트로의 이동을 취소할 수도 있음

# 메모 관리 애플리케이션 실습
## 컴포넌트 구조
- App
- AppHeader
- MemoApp(Memo, MemoForm)
- AppHeader 컴포넌트와 MemoApp컴포넌트는 상태 공유 X
- 메모 애플리케이션에 대한 상태는 MemoApp 컴포넌트가 관리


## 메모 데이터 생성 기능 구현
- MemoForm : 사용자의 메모를 입력받는 폼 컴포넌트
- Memo : 각각의 메모의 상태를 표현할 수 있는 컴포넌트
- MemoApp : 메모들의 상태를 관리하는 컴포넌트 (부모 컴포넌트)
- 부모컴포넌트에서 상태 초기화 해야함 (데이터 흐름 단방향이므로 메모와 연관된 모든 자식 컴포넌트에서 알 수 있어야함)

### 컴포넌트 초기화
#### MemoApp
```vue
<script>
export default {
  name: "MemoApp",
  data() {
    return {
      memos: [],
    };
  },
  created() {
    this.memos = localStorage.memos ? JSON.parse(localStorage.memos) : [];
  },
  components:
    {
      MemoForm, Memo
    }
}
</script>
```
- 초기화에 필요한 데이터를 외부에서 받을 경우
- 일반적으로 훅의 실행타이밍이 가장 빠른 created 훅에서 데이터를 받아옴

#### scoped 속성이란?
- MemoForm 컴포넌트의 style 태그에 scoped라는 속성을 입력함
- 이 속성을 통해 스타일의 유효범위를 적용해 해당 컴포넌트의 돔 엘리먼트에만 스타일을 적용가능.
- -> scoped 옵션을 주면 data-v 속성이 자동으로 입력됨

#### MemoForm
- 컴포넌트 data 속성에 사용자가 입력하는 데이터를 제목과 내용으로 나누어 저장할 수 있도록 컴포넌트 내의 데이터로 각각 초기화함.
- 컴포넌트의 데이터로 저장하기위해서 다음과 같이 먼저 data속성에 저장하고자 하는 값에 대한 키와 값을 등록해줘야함.
```vue
<script>
export default{
  name: 'MemoForm',
  data(){
    return {
      // 사용자가 입력할 제목과 콘텐츠가 저장될 데이터의 키와 값
      title: '',
      content: ''
    }
  }
}
</script>
```
- 위에서 등록한 데이터를 v-model 디렉티브를 이용하여 양방향 바인딩
```vue
<template>
  <div class="memo-form">
    <form @submit.prevent="addMemo">
      <fieldset>
        <div>
          <input class="memo-form__title-form"
                 type="text"
                 v-model="title"
                 placeholder="메모의 제목을 입력해주세요."/>
          <textarea class="memo-form__content-form"
                    v-model="content"
                    placeholder="메모의 내용을 입력해주세요"/>
          <button type="reset"><i class="fas fa-sync-alt"></i></button>
        </div>
        <button type="submit">등록하기</button>
      </fieldset>
    </form>
  </div>
</template>
```
- submit 이벤트의 event.preventDefault 함수하여 새로고침 방지
- 이 옵션을 통해 submit 이벤트의 기본 동작을 막은 후
- addMemo 함수에서 사용자가 입력한 제목과 내용에 대한 데이터를 부모 컴포너트인 MemoApp 컴포넌트에 emit 이용하여 전파
```javascript
methods: {
    addMemo(){
      // 비구조화 할당 구문을 이용하여 변수를 선언
      const {title, content} = this;
      // 데이터의 고유한 식별자를 생성
      const id = new Date().getTime();

      // 제목이나 내용을 입력하지 않은 경우를 대비하여 방어 코드를 추가.
      const isEmpty = title.length <= 0 || content.length <= 0;
      if(isEmpty){
        return false;
      }
      // addMemo 이벤트를 발생시키고 payload로 사용자가 입력한 데이터를 넣어주기
      this.$emit('addMemo', {id, title, content});
    }
  }
```
- 이제 부모 컴포넌트인 MemoApp 컴포넌트는 자식 컴포넌트인 MemoForm에서 인자로 전달한 데이터를 로컬 스토리지에 추가해주면 됨
```javascript
methods: {
    addMemo(payload){
      // MemoForm에서 올려받은 데이터를 먼저 컴포넌트 내부데이터에 추가
      this.memos.push(payload);
      // 내부 데이터를 문자열로 변환 후, 로컬 스토리지에 저장
      this.storeMemo();
    },
    storeMemo(){
      const memosToString = JSON.stringify(this.memos);
      localStorage.setItem('memos', memosToString);
    }
}
```
- v-on 디렉티브를 이용하여 자식 컴포넌트인 MemoForm 컴포넌트의 addMemo이벤트 콜백함수로 연결

### 컴포넌트 업데이트
```vue
<script>
export default {
    method:{
        handleDblClick(){
            this.isEditing = true;
            //content에 focus 이벤트를 추가하기
            console.log("handleDbClick =>", this.$refs.content);
            this.$refs.content.focus();
        }    
    },
    beforeUpdate(){
        console.log("beforeUpdate => ", this.$refs.content);
    },
    updated(){
        console.log("updated => ", this.$refs.content);
    }
}
</script>
```
- handelDblClick 내에서 focus함수를 실행시킬 때 이벤트의 대상이 될 $refs.content가 감지되지 않는다는 것을 알 수 있음
- 이는 isEditind 값의 변경으로 인한 Vue의 재렌더링이 아직 진행중이라 $refs.content라는 값이 없다는 것을 의미
- DOM업데이트 하기 직전인 beforeUpdate에서도 마찬가지
- updated에서는 DOM 감지됨
- --> 데이터의 변경에 따른 컴포넌트 재렌더링 순서가 보장되지 않는다는 것을 알 수 있음.
#### nextTick
- 위 상황에서 nextTick을 이용하면 우회할 수 있음
```js
handleDblClick(){
  this.isEditing = true;
  //content에 focus 이벤트를 추가하기
  this.$nextTick(()=>{
    console.log("handleDbClick =>", this.$refs.content);
   this.$refs.content.focus();
  });
}
```
- callback함수 $nextTick()을 통해 DOM을 조작하게 되면
- Data 갱신 후 렌더링까지 완료한 후 내부 로직을 수행. 또한 await/async을 활용할 수도 있다.

# RESTful API
- RESTful API란 엔드포인트가 어떠한 특정 상태를 가진 자원을 의미할 수 있도록 설계된 API를 의미.
## 자원의 상태란?
- 




# Vuex
## index.js
- index.js 파일에 애플리케이션 내에서 Vuex 라이브러리를 사용할 수 있도록 등록해준다.
```js
Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
```
- 위에서 생성한 Vuex Store를 애플리케이션의 엔트리 파일인 main.js에 추가해준다.
- 해당 디렉터리 경로까지만 적어주면 그 디렉터리 내에 있는 index.js 파일을 찾아서 불러옴.
```js
// src/main.js
import Vue from 'vue'
import App from './App.vue'
import store from './store'; //-> index.js를 찾음

new Vue({
    el: '#app',
    store,
    render: h=> h(App)
});
```
## 상태 정의 - 데이터 선언, 초기화의 개념
- 먼저 애플리케이션을 위한 상태를 정의
```js
export default{
    memos: []
}
```
## 상태 데이터 저장하기
### 액션 : 컨트롤러처럼 요청이 시작되는 곳 정의 (컴포넌트 내에서 호출)
- 앞서 MemoApp 컴포너트의 created 훅에서 실행되고 있는 API호출과 동일한 코드를 actions.js에도 작성해줌
- 액션을 사용할 때는 API 응답 내의 메모 데이터를 commit 메소드를 통해 변이시켜야함. 
- 스토어의 상태 직접 변경 X
```js
// src/store/actions.
import axios from 'axios';

const memoAPICore = axios.create({
  baseURL: 'http://localhost:8000/api/memos'
})

export function fetchMemos({ commit }){
  memoAPICore.get('/')
    .then(res => {
      // API 호출 결과의 데이터와 함꼐 mutations의 커밋을 함
      commit('FETCH_MEMOS', res.data);
    })
}

export default{
  fetchMemos //액션 함수 export
}
```
### 변이 : 상태가 어떻게 변할지에 대한 정의
### actions서 커밋한 타입과 일치하는 함수를 mutations에 작성
- Flux 패턴에서 변이 이름을 상수로 사용하는 것이 일반적
```js
// src/store/mutations.js
const FETCH_MEMOS = 'FETCH_MEMOS';

export default {
  // 2. FETCH_MEMOS 변수를 변이 이름으로 가지는 변이 함수를 작성함
  [FETCH_MEMOS] (state, payload){
    state.memos = payload;
  }
}
```
### 변이 이름 상수
- 액션 내 함수에서 호출한 commit 메소드의 첫번째 인자값과 변이의 이름이 일치
- -> 이러한 변이 이름 상수는 한 곳에서 통합적으로 관리하기 위해 별도의 파일을 만들어 관리하는 것이 좋음
- 다른 곳에서도 mutations-types.js에 선언된 해당 변이 타입을 이용하는 형태의 함수로 수정.

## 작성한 스토어를 컴포넌트 내에서 호출 (액션 호출) 
```js
import {mapActions} from 'vuex'; // 1. 헬퍼 함수 가져오기

export default {
    name: 'MemoApp',
    created() {
        this.fetchMemos(); // 주입된 액션 함수 호출
    },
    methods: {
        // 2. mapActions 헬퍼 함수에 사용할 actions함수를 인스턴스의 메소드에 주입
        ...mapActions([
            'fetchMemos'
        ])
    }
}
```
## 변화된 상태 데이터 사용하기
```js
import {mapActions, mapState} from 'vuex';
export default{
    name: 'MemoApp',
    computed: { // mapState 헬퍼함수에 사용할 상태를 computed에 주입
        ...mapState([
            'memos'
        ])
    }
}
```
## getter 사용하기
- 상태가 중앙 저장소인 스토어에서 관리됨에 따라 컴포넌트의 개수나 컴포넌트의 트리의 깊이에 상관없이 각 컴포넌트들 간의 상태 공유가 월활해짐
- -> 메모 데이터 개수를 AppHeader 컴포넌트에 노출할 수 있는 방법은 2가지.
### 1. mapState 헬퍼 함수를 이용하여 직접 스토어의 상태를 가져온 후 노출
```js
computed: {
    getMemoCount() {
      return this.memos.length;
    },
    ...mapState([
      'memos'
    ])
}
```
- 상태에 접근할 때마다 재작성 해주어야함 -> 스토어에 게터 선언해두고 mapGetters 헬퍼 함수를 이용하여 사용하는 방식디 더 효율적
```js
export function getMemoCount(state){
    return state.memos.length;
}
export default{
    getMemoCount
}
```

## 예측 가능한 애플리케이션 만들기
### 어떤 메모가 수정 중인지 확인할 수 있을까?
- 수정 중인 메모의 ID를 저장할 데이터를 추가
```js
// src/store/states.js
export default{
    memos: [],
    editingId: 0
}
```
- 수정중인 메모의 ID 값을 설정하는 변이와 설정된 ID값을 해제해주는 변이에 대한 타입과 변이 함수를 추가
```js
export const SET_EDITING_ID = 'SET_EDITING_ID';
export const RESET_EDITING_ID = 'RESET_EDITING_ID';
```
```js
[SET_EDITING_ID](state, id){
state.editingId = id;
},
[RESET_EDITING_ID](state){
state.editingId = 0;
}
```
- 기존 Memo 컴포넌트 내에 데이터를 통해 관리한 것을 store의 editingId로 관리

# 커뮤니티 애플리케이션 만들기
## 인증 & 인가
- Vue Router의 네비게이션 가드 내에서 게시물을 작성한 사용자와 현재 로그인되어 있는 사용자의 아이디를 비교하면 간단하게 방어할 수 있음.
## 프로젝트 생성
- vue CLI에서 webpack-simple이 아닌 "webpack" 옵션 선택

## 커뮤니티 게시글 읽기 기능 구현하기
- 라우터 설정 -> 라우터가 히스토리 모드로 작동하도록 설정 

## 페이지 컴포넌트와 리스트 컴포넌트를 분리
- FIRST 원칙 중 단일 책임 원칙에서 작은 단위의 모듈을 만들어 조립하는 형태로 만들면 유연하게 개발 가능
- 관심사에 따라 작은 단위의 컴포넌트로 나누어서 설계하면 재사용 측면에서도 큰 효과를 가져옴
- ex
```
- 게시물 리스트 페이지 : PostList + PostListPage
- 게시물 리스트 모달 : PostList + Modal
- 다른 페이지에 게시물 리스트 조회 기능이 추가될 경우 : PostList + ExamplePage
```
## API 모듈을 분리
```js
import axios from 'axios'

export default axios.create({
  baseURL: '//localhost:8000/api'
})
```
- Axios 라이브러리를 가져온 후 Axios의 인스턴스에 create 메소드를 이용하여 기본이 되는 값들을 설정한 후 다시 외부로 내보내는 모듈
- 위와같이 애플리케이션 내에서 사용할 Axios 객체에 대해서 한 군데에서 관리하며 사용한다면
- 엔드포인트의 호스트를 비즈니스 로직 내에서 작성할 필요가 없고 API호출에 대한 공통 로직을 사용하는 모든 부분에 작성 필요 X
- ex) 에러 트래킹 로직을 추가한다고 하면 아래 처럼 공통 로직으로 관리 가능
```js
import axios from 'axios';
const api = axios.create({
    baseURL: '//localhost:8000/api'
});
api.intercepters.response.use(function(response){
    return response;
}, function (error){
    // 에러 트래킹을 위한 함수 호출
    sendErrorReport(error);
    return Promise.reject(error);
})
export default api;
```

## 커뮤니티 게시물 데이터를 스토어로 옮기기.
- 스토어레 필요한 파일을 모두 생성하고 기본적인 코드를 작성
- -> Vuex의 인스턴스(main.js)를 애플리케이션의 Vue 인스턴스에 store옵션을 통해 주입함
```js
import store from './store'

new Vue({
    //...
    store,
    //...
})
```
- 상태 작성 -> 변이(+변이상수) 작성 -> 액션 작성(axios사용) -> 컴포넌트내에서 액션함수 호출(헬퍼함수 사용) -> mapState헬퍼 함수로 스토어의 게시물 상태를 참조

### 에러 발생
- TypeError: Cannot read properties of undefined (reading 'dispatch')
- vue2와 vuex 버전 맞추기

## 커뮤니티 게시글 상세보기 페이지 
- PostViewPage.vue 페이지 컴포넌트 생성
- PostViewPage를 라우터에 연결 -> path에 동적 변수 포함 유의 !!
- 라우트의 props 옵션으로 컴포넌트의 props를 통해 라우트의 파라미터에 접근할 수 있음 !
```
{
  path: '/post/:postId',
  name: 'PostViewPage',
  component: PostViewPage,
  props: true // props를 통해 라우트의 파라미터에 접근
}
```
### 게시글 상세보기 페이지를 위한 게시물 상태 선언
```js
export default{
    //...
    // 상세 보기 페이지를 위한 게시물 상태인 post 추가
    post: null
}
```
### props 밸리데이션 추가
```
props:{
    post:{
      type: Object,
      required: true,
      validator(post){ //post props에 대한 밸리데이션
        const isValidPostId = typeof post.id === 'number'
        const isValidTitle = !!post.title && post.title.length
        const isValidContents = post.contents && post.contents.length
        return isValidPostId && isValidTitle && isValidContents
      }
    }
  }
```
- null 역시 Object이므로 타입 검증을 추가, 내부의 특정 키 존재 여부 감지

### 컴포넌트가 post 변수에 접근하려고 할 때 변수가 null이 아니도록 조치하기
``` vue
<post-view v-if="post" :post="post"/>
<p v-else>게시글 불러오는 중...</p>
```
- post는 비동기 처리 방식 때문에 예외 처리를 해줘야함.

## 회원가입 페이지 구현
```
 <form novalidate>
```
- novalidate 속성으로 html5의 자체적인 유효성 검사 x

### 클라이언트 검증 이유
- 좋은 사용자 경험, 서버 부하 줄임

# jwt
## 애플리케이션에서 사용자를 인증하는 방법
- 로그인을 시도했을 때 사용자가 서버에 등록되어 있는 인증된 사용자라면 API서비스는 응답으로 엑세스 토큰을 보내줌
- 3개의 구분된 필드를 갖고 있음 (헤더, 정보, 서명)
### 헤더 
- 토큰의 타입과 암호화 알고리즘의 종류
### 정보
- 토큰에 대한 정보. 토큰의 발급일, 토큰 발급자등의 정보를 갖고 있음
### 서명
- 서명은 토큰의 헤더와 정보를 합친 후 서버만 알고 있는 비밀키를 사용하여 암호화한 정보.
- 서버는 토큰을 받으면 서명을 검토한 후 해당 토큰의 유효성을 검사.
## HTTP 헤더
- 인증정보가 담기는 곳
```http request
GET http://localhost:8080/api/contents
HOST: localhost
Accept: application/json, text/plain, */*
Accept-Language: en, ko; q=0.9, *; q=0.1
Authorization: Bearer @@@... # 인증정보가 이곳에 담김
```
- 클라이언트가 Authorization 필드에 토큰 값을 추가하면 서버에서 요청을 받았을때 토큰 내용을 읽음

### cf) 토큰 vs 세션
- 세션 기반 인증은 서버는 고유한 ID를 생성하여 서버에 저장하고 이 ID를 클라이언트의 쿠키에 저장함
- 이후 클라이언트가 서버로 요청을 보내면 HTTP 헤더에 쿠키 정보가 함께 포함되어 전송됨

## HTTP 헤더에 토큰 등록하기
- 서버로부터 받은 토큰을 HTTP 메시지의 헤더에 토큰으로 등록해야함.
```js
onSubmit(payload) {
  // /auth/signin 엔드포인트로 사용자가 입력한 email, password 값 보내기
  const {email, password} = payload;
  api.post('/auth/signin', {email, password})
    .then(res => {
      const { accessToken } = res.data;
      api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      alert('로그인이 완료되었습니다.');
      this.$router.push({name: 'PostListPage'})
    });
}
```
- axios의 defaults 속성에는 Axios에서 사용되는 옵션의 기본값들이 들어있음.
- defaults.headers.common 필드는 이 Axios 객체에서 어떤 메소든지 상관없이 헤더에 이 값을 사용한다는 것을 의미함.
- 만약에 defaults.headers.get으로 접근하여 값을 부여한다면 Axios 객체는 GET 메소드를 사용할때만 그 헤더를 사용함.

## 로그인 로직을 스토어로 옮기기
- http 헤더에 토큰을 담았다면 애플리케이션의 상태는 인증된 상태가 됨.
- 대부분의 애플리케이션 인증된 상태와 인증되지 않는 상태를 구분하는 경우가 많은데, 
- 구분값을 컴포넌트마다 따로 갖고 있으면 전체 애플리케이션의 통일된 상태를 공유하기 어려움
- -> 인증 상태에 대한 일관성을 위해 인증 상태를 스토어로 옮기기
- cf) 다른 컴포넌트에서도 로그인 기능 사용하고 싶다면 Vuex의 액션과 변이를 사용하여 
- 여러 컴포넌트가 공통으로 사용할 수 있게 재사용성 높일 수 있음.

### 스토어 상태에 accessToken 추가
- 스토어 state에 토큰 유무로 인증 상태를 구분.
- 먼저 states.js에 초기값 추가
```js
// src/store/states.js
export default{
    //...
    accessToken: ''
}
```
### 변이 추가
```js
export default {
  [SET_ACCESS_TOKEN](state, accessToken){
    // 스토어 상태의 토큰일 업데이트하고
    // api 모듈을 사용하여 HTTP 헤더에 토큰을 심어줌
    if(accessToken){
      state.accessToken = accessToken;
      api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    }
  }
}
```
### 액션 추가
- 비동기적인 이슈를 처리하기 위해 
- 액션 핸들러는 서버와 통신하여 **데이터를 받아오고 난 후 변이를 요청**하는 commit 메소드를 호출
```js
export function signin({commit}, payload) {
  //1. Signin 컴포넌트의 onSubmit 에소드의 내용을 그대로 작성
  const {email, password} = payload;
  return api.post('/auth/signin',{email, password})
    .then(res=>{
      const{accessToken} = res.data;
      commit(SET_ACCESS_TOKEN, accessToken);
    });
}
```
### Signin 컴포넌트의 onSubmit 메소드가 signin 액션으로 대체된 모습
```js
 methods: {
    ...mapActions([ "signin" ]),
    onSubmit(payload) {
      this.signin(payload)
        .then(res=>{
          alert('로그인이 완료되었습니다.')
          this.$router.push({name: 'PostListPage'})
        })
        .catch(err.response.data.msg)
    }
  }
```

## 저장된 토큰 기반 현재 로그인된 사용자의 정보 가져오기
- 토큰에 담겨 있는 정보는 토큰 생성 시점 사용자 정보이기 때문에 현재 정보와 동일함 보장 X
- -> states.js에 현재 로그인한 사용자의 상태 추가.
### 비동기 통신 -> 액션에서 수행
- 사용자 정보는 '서버와의 비동기 통신'을 통해 받아오는 정보이기 때문에 변이에서는 해당 작업 수행X
- 비동기에 대한 처리는 액션에서 수행.
- 사용자 정보를 받는 작업 또한 로그인 과정으로 생각해 signin 액션에 추가로 작성


# 애플리케이션의 헤더 컴포넌트 작성하기
## Named Router View
- Vue Router에서는 라우트마다 하나의 RouterView만 사용할 수 있는 것이 아니라
- 여러개의 RouterView를 사요할 수 있도록 Named Router View라는 기능을 제공하고 있음.
- App.vue에 Named Router View 사용
```js
<template>
    <div id="app">
        <router-view name="header"/>
        <router-view/>
    </div>
</template>
```
- router/index.js
```js
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
```

## 헤더 컴포넌트 기능 추가하기
### 로그인 된 상태 확인할 수 있도록 게터 작성
```js
// src/store/getters.js
export default{
    isAuthorized(state){
        return state.accessToken.length > 0 && !! state.me
    }
}
```
### 로그아웃 기능 추가