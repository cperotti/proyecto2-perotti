import axios from "axios";

export default{
    namespaced:true,
    state: {
        productsList: [],
        productDetail:{}
      },
      getters: {
        getProductsList(state){
          return state.productsList
        },
        getProductDetail(state){
          return state.productDetail
        }
      },
      mutations: {
        loadProductsList(state,productsList){
          state.productsList= productsList
        },
        loadProductDetail(state,productDetail){
          state.productDetail= productDetail
        },
      },
      actions: {
        fetchProductsList: ({commit}) => {
          const URLGET = "https://639e6cf43542a261305b9ed0.mockapi.io/productos"
            axios.get(URLGET).then((response)=>{
                commit('loadProductsList', response.data)
            })
        },
        fetchProductDetail: ({commit}, param)=> {
          const URLGET = `https://639e6cf43542a261305b9ed0.mockapi.io/productos/${param}`
            axios.get(URLGET).then((response)=>{
                commit('loadProductDetail',response.data)
            })
        },
    }
}