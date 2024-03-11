<script setup lang="ts">
    import { refCart, total } from '@/viewModel/cart';

    const cart = refCart()


</script>

<template>
    <div>
        <h1 class="title">
            The Cart
        </h1>
        <ul class="cart">
            <li v-for="item in cart" :key="item.product.id">
                <img :src="item.product.thumbnail" :alt="item.product.title" />
                {{ item.product.title }} x {{ item.quantity }} = ${{ item.product.price * item.quantity }}
            </li>
        </ul>
        {{ cart.length }} items totalling ${{ total }}

    </div>
</template>

<style scoped>
    .cart li {
        display: flex;
        align-items: center;
        margin: 1rem 0;
    }
    .cart img {
        width: 3rem;
        height: 3rem;
        margin-right: 1rem;
    }
</style>