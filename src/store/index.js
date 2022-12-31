import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userLogged:null,
    usersList:[],
    productsList: [],
    shoppingCartList: [],
    productDetail:{}
  },
  getters: {
    getUsersList(state){
      return state.usersList
    },
    getUserLogged(state){
      return state.userLogged
    },
    getProductsList(state){
      return state.productsList
    },
    getShoppingCartList(state){
      return state.shoppingCartList
    },
    getProductDetail(state){
      return state.productDetail
    }
  },
  mutations: {
    loadUsersList(state, user){
      state.usersList = user
    },
    setUserLogged(state,userLogged){
      state.userLogged= userLogged
    },
    loadProductsList(state,productsList){
      state.productsList= productsList
    },
    loadShoppingCartList(state,shoppingCartList){
      state.shoppingCartList = shoppingCartList
    },
    loadProductDetail(state,productDetail){
      state.productDetail= productDetail
    },
    postData(state, data){
      console.log(data)
    }
  },
  actions: {
    fetchUsersList: ({commit}) => {
      const URLGET = 'https://639e6cf43542a261305b9ed0.mockapi.io/usuarios'
      axios.get(URLGET).then((response)=> commit('loadUsersList', response.data))
    },
    fetchProductsList: ({commit}) => {
      const URLGET = "https://639e6cf43542a261305b9ed0.mockapi.io/productos"
        axios.get(URLGET).then((response)=>{
            commit('loadProductsList', response.data)
        })
    },
    fetchShoppingCartList: ({commit}) => {
      const URLGET = 'https://639e6cf43542a261305b9ed0.mockapi.io/carrito'
        axios.get(URLGET).then((response)=>{
            commit('loadShoppingCartList', response.data)
        })
    },
    fetchProductDetail: ({commit}, param)=> {
      const URLGET = `https://639e6cf43542a261305b9ed0.mockapi.io/productos/${param}`
        axios.get(URLGET).then((response)=>{
            commit('loadProductDetail',response.data)
        })
    },
    //consultar los post si estan bien implementados
    saveUserRegister: ({commit},data) =>{
      const URLPOST = 'https://639e6cf43542a261305b9ed0.mockapi.io/usuarios'
      axios.post(URLPOST,data.dataUser).then((response)=> {
        commit('postData',response)
        data.urlPush
      })
    },
    addShoppingCartItem: ({commit}, data)=>{
      const URLPOST = 'https://639e6cf43542a261305b9ed0.mockapi.io/carrito'
      axios.post(URLPOST,data.dataItem).then((response)=>{
        commit('postData', response)
        data.urlPush
      })
    }

  },
  modules: {
  }
})
