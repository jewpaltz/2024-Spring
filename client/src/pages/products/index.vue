<script setup lang="ts">
    import { ref, computed } from 'vue'
    import { type Product, getProducts } from "@/model/products";
    import ProductCard from '@/components/ProductCard.vue';
import FlyOut from '@/components/FlyOut.vue';

    const products = ref([] as Product[])
    
    products.value = getProducts()

    type CartItem = {
        product: Product,
        quantity: number
    }

    const cart = ref([] as CartItem[])

    function addToCart(product: Product) {

        const item = cart.value.find(item => item.product.id === product.id)

        if (item) {
            item.quantity++
        } else {
            cart.value.push({ product, quantity: 1 })
        }
    }

    const total = computed( () => cart.value.reduce((total, item) => total + item.product.price * item.quantity, 0) )

</script>

<template>
    <div class="product-list">
        <ProductCard    v-for="product in products" :key="product.id"
                        :product="product" @addToCart="addToCart"
                    />
    </div>

    <FlyOut >
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
    </FlyOut>
</template>

<style scoped>
    .product-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

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