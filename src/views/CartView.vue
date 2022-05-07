<script setup lang="ts">
import useStore from '@/stores';

const { cartStore } = useStore();
</script>
<template>
  <div class="about">
    <h1>My Cart</h1>
    <div v-if="cartStore.isCartEmpty">购物车为空</div>
    <ul v-if="!cartStore.isCartEmpty">
      <li v-for="item in cartStore.items">
        <div>
          <h3>{{ item.name }} ¥ {{ item.price }}</h3>
          <el-input-number
            :modelValue="item.quantity"
            @update:modelValue="(quantity:number)=>cartStore.updateQuantity(item,quantity)"
            :min="0"
          ></el-input-number>
          <el-button @click="cartStore.removeFromCart(item)">Remove</el-button>
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
