<script setup lang="ts">
import type { LoginForm } from '@/types/login';
import { ref } from 'vue';
import useStore from '@/stores';

const { userStore } = useStore();
const formData = ref({} as LoginForm);
</script>
<template>
  <div class="about">
    <h2>Login</h2>
    <div v-if="userStore.isLogin">
      <p>Welcome {{ userStore?.user.username }} <a href="#" @click.prevent="userStore.logout">Logout</a></p>
    </div>

    <el-form v-if="!userStore.isLogin" :model="formData" ref="formRef" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="formData.username" clearable></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formData.password" type="password" clearable show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="userStore.login(formData)">登录</el-button>
      </el-form-item>
    </el-form>
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
