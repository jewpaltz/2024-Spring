<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';

</script>

<template>
  <div class="wrapper">
    <NavBar />
    <div class="container">
      <RouterView /> 
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    margin-right: 2rem;
  }
</style>
