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
        data(state,data){
          console.log(state, data)
        }
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
        addNewProduct: ({commit}, data) => {
          const URLPOST = 'https://639e6cf43542a261305b9ed0.mockapi.io/productos'
          axios.post(URLPOST,data).then((response)=> {
            commit('data',response.data)
          })
        },
        editProduct: ({commit}, data)=>{
          const URLPUT= `https://639e6cf43542a261305b9ed0.mockapi.io/productos/${data.param}`
          axios.put(URLPUT, data.productChanges).then((response)=>{
            commit('data', response.data)
          })
        },
        deleteProduct: ({commit}, id) =>{
          const URLDELETE = `https://639e6cf43542a261305b9ed0.mockapi.io/productos/${id}`
          axios.delete(URLDELETE).then((response)=>{
            commit('data', response.data)
          })
        },
        sendComent: ({commit}, data)=>{
          const URLPUT= `https://639e6cf43542a261305b9ed0.mockapi.io/productos/${data.param}`
          axios.put(URLPUT, data.productChanges).then((response)=>{
            commit('data', response.data)
          })
        }
    }
}