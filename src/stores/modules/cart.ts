import type { CartItem, Product } from '@/types/cart'
import { defineStore } from 'pinia'
import { ElMessage, ElMessageBox } from 'element-plus'
const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as CartItem[],
  }),
  getters: {
    totalProducts: (state) => state.items.reduce((acc, item) => acc + item.quantity, 0),
    isCartEmpty: (state) => state.items.length === 0,
  },
  actions: {
    async addToCart(product: Product) {
      const item = this.items.find((item) => item.productId === product.id)
      if (item) {
        this.updateQuantity(item, item.quantity + 1)
      } else {
        this.items.push({
          productId: product.id,
          quantity: 1,
          name: product.name,
          price: product.price,
        })
      }
    },
    async updateQuantity(item: CartItem, quantity: number) {
      if (quantity <= 0) {
        this.removeFromCart(item)
      }
      item.quantity = quantity
    },
    async removeFromCart(item: CartItem) {
      ElMessageBox.confirm(
        `是否删除『 ${item.name} 』？`,
        '警告',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }
      )
        .then(() => {
          this.items = this.items.filter((i) => i.productId !== item.productId)
          ElMessage({
            type: 'success',
            message: '删除成功',
          })
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '取消删除',
          })
        })
    }
  }
})
export default useCartStore;