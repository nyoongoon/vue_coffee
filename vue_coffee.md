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