<script setup lang="ts">
import type { Product } from '@/types/cart';
import { onMounted, ref } from 'vue';
import useStore from '@/stores';

const { cartStore } = useStore();
const products = ref<Product[]>([]);
onMounted(() => {
  products.value = [
    {
      id: 1,
      name: 'Product 1',
      price: 10,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 20,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 30,
      quantity: 1,
    },
  ];
});
</script>
<template>
  <div class="about">
    <h1>Products</h1>
    <ul>
      <li v-for="product in products">
        <div>
          <h3>{{ product.name }} ¥ {{ product.price }}</h3>
          <el-button @click="cartStore.addToCart(product)">add to cart</el-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
