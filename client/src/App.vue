<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';

</script>

<template>
  <NavBar />
  <div class="container">
    <RouterView /> 
  </div>

</template>

<style scoped>
</style>
