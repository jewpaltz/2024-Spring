<script setup lang="ts">

const props = defineProps<{
    isOpen?: boolean
}>()
</script>

<template>
    <div class="flyout" :class="{ open: isOpen}">
        <slot></slot>
    </div>
</template>

<style scoped>
    .flyout {
        position: fixed;
        top: 0;
        right: 0;
        width: 20rem;
        height: 100%;
        background-color: white;
        border: 1px solid #ccc;
        box-shadow: -1px 0 5px 0 rgba(0,0,0,.5);
        z-index: 100;
        transform: translateX(80%);
        transition: transform 1s;
        padding: 1rem;
    }
    .flyout.open, .flyout:hover {
        transform: translateX(0);
    }
</style>