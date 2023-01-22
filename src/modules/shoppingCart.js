// import axios from "axios";

export default{
    namespaced:true,
    state: {
        shoppingCartList: [],
        countItems:0
      },
      getters: {
        getShoppingCartList(state){
          return state.shoppingCartList
        },
        getCountItems(state){
          return state.countItems
        }
      },
      mutations: {
        // loadShoppingCartList(state,shoppingCartList){
        //   state.shoppingCartList = shoppingCartList
        // },
        // postData(state, data){
        //   console.log(data)
        // },
        addShoppingCartItem(state, dataItem){
            state.shoppingCartList = [...state.shoppingCartList,dataItem]
            state.countItems++
        },
        deleteShoppingCartItem(state, idItem){
            state.shoppingCartList = state.shoppingCartList.filter((el)=> el.id !== idItem)
            state.countItems--
        },
        resetShoppingCart(state){
          state.shoppingCartList = []
          state.countItems=0
        },
      },
      actions: {
        // fetchShoppingCartList: ({commit}) => {
        //   const URLGET = 'https://639e6cf43542a261305b9ed0.mockapi.io/carrito'
        //     axios.get(URLGET).then((response)=>{
        //         commit('loadShoppingCartList', response.data)
        //     })
        // },
        //consultar los post si estan bien implementados
        // addShoppingCartItem: ({commit}, data)=>{
        //   const URLPOST = 'https://639e6cf43542a261305b9ed0.mockapi.io/carrito'
        //   axios.post(URLPOST,data.dataItem).then((response)=>{
        //     commit('postData', response)
        //     data.urlPush
        //   })
        }
}