import useCartStore from './modules/cart'
import useUserStore from './modules/user'


const useStore = () => ({
  userStore: useUserStore(),
  cartStore: useCartStore(),
})

export default useStore