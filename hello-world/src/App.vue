<template>
  <div id="app">
    <app-header/>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from ''
export default {
  name: 'App'
}
</script>

<style>
  @import 'http://localhost:8000/assets/index.css';
</style>
