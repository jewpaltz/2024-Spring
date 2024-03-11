import { ref, computed, watch } from "vue"
import type { Product } from "@/model/products"


    export type CartItem = {
        product: Product,
        quantity: number
    }

    const cart = ref([] as CartItem[])

    export const refCart = () => cart;

    export function addToCart(product: Product) {

        const item = cart.value.find(item => item.product.id === product.id)

        if (item) {
            item.quantity++
        } else {
            cart.value.push({ product, quantity: 1 })
        }
    }

    export const total = computed( () => cart.value.reduce((total, item) => total + item.product.price * item.quantity, 0) )
    export const count = computed( () => cart.value.reduce((total, item) => total + item.quantity, 0) )

    export const isOpen = ref(false);
    watch(isOpen, (value) => { console.log("Cart is open: ", value) })