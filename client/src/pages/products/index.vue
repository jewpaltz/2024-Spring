<script setup lang="ts">
    import { ref } from 'vue'
    import { type Product, getProducts } from "@/model/products";

    const products = ref([] as Product[])

    products.value = getProducts()

</script>

<template>
    <div class="product-list">
        <div v-for="product in products" :key="product.id" class="card" >
            <div class="card-image">
                <img :src="product.thumbnail" :alt="product.title" />
            </div>
            <div class="card-content">
                <p class="price">${{ product.price }}</p>
                <h3>{{ product.title }}</h3>
                <p>{{ product.description }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .product-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .card {
        flex-basis: 15rem;
        flex-grow: 1;
        margin: .5rem;
    }
    h3 {
        font-weight: bold;
    }
    .price {
        font-weight: bold;
        font-size: xx-large;
        color: hotpink;
        float: right;
    }

</style>