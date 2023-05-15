<template>
  <div id="app">
    <memo-app/>
  </div>
</template>

<script>
import MemoApp from "./components/MemoApp.vue";

export default {
  name: 'app',
  components:{
    MemoApp,
    AppHeader
  }
}
</script>

<style>
@import "./styles/reset.css";

#app{
  width: 560px;
  margin: 0 auto;
}
</style>
