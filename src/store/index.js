import Vue from 'vue'
import Vuex from 'vuex'
import userModule from '@/modules/user'
import productModule from '@/modules/product'
import shoppingCartModule from '@/modules/shoppingCart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userModule,
    productModule,
    shoppingCartModule
  }
})
