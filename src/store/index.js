import Vue from 'vue'
import Vuex from 'vuex'
import userModule from '@/modules/user'
import productModule from '@/modules/product'
import shoppingCartModule from '@/modules/shoppingCart'
import ordersModule from '@/modules/orders'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    successAlertData:{show:false, message:''},
    dangerAlertData:{show: false, message:''}
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
    shoppingCartModule,
    ordersModule
  }
})
