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