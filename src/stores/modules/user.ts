import type { LoginForm } from '../../types/login';
import { defineStore } from 'pinia'
import { StorageSerializers, useStorage } from '@vueuse/core';

 const useUserStore = defineStore('user', {
  state: () => ({
    user: useStorage('user', null, undefined, { serializer: StorageSerializers.object }),
  }),
  getters: {
    isLogin: (state) => !!state.user?.id,
  },
  actions: {
    async login(formData: LoginForm) {
      this.user = { id: 1, username: formData.username };
    },
    async logout() {
      this.user = {} as LoginForm
    }
  }
})
export default useUserStore;