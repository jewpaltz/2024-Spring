<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { count, isOpen } from '@/viewModel/cart';
import LoginBadge from './LoginBadge.vue';

let isActive = ref(false);

function toggleMenu() {
  isActive.value = !isActive.value;
}

function toggleCart() {
  isOpen.value = !isOpen.value;
}

</script>

<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" @click="toggleMenu" :class="{ 'is-active': isActive } " class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div :class="{ 'is-active': isActive } " id="navbarBasicExample" class="navbar-menu"  >
    <div class="navbar-start">
      <RouterLink to="/" class="navbar-item">
        Home
      </RouterLink>

      <RouterLink to="/documentation" class="navbar-item">
        Documentation
      </RouterLink>

      <RouterLink to="/products" class="navbar-item">
        Products
      </RouterLink>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <RouterLink to="/about" class="navbar-item">
            About
          </RouterLink>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider">
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">

      <div class="navbar-item">
          <button class="button is-light" @click="toggleCart()" :class="{ shiftLeft : isOpen }">
            <i class="fas fa-shopping-cart"></i>
            <span class="tag is-danger is-rounded sup-tag">{{ count }}</span>            
          </button>
      </div>

      <div class="navbar-item">
        <LoginBadge />
      </div>
    </div>
  </div>
</nav>
</template>

<style scoped>

    .router-link-active {
        border-bottom: 2px solid #00d1b2;
    }

    .sup-tag {
        transform: translate(-20%, -50%);
    }

    .shiftLeft {
        transform: translateX(-100%);
        transition: transform 1s ease-in-out;
    }
</style>