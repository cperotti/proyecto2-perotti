import axios from "axios";

export default{
    namespaced:true,
    state: {
        ordersList: [],
      },
      getters: {
        getOrdersList(state){
          return state.ordersList
        },
      },
      mutations: {
        loadOrdersList(state,ordersList){
          state.ordersList= ordersList
        },
      },
      actions: {
        fetchOrdersList: ({commit}) => {
          const URLGET = "https://639e6cf43542a261305b9ed0.mockapi.io/pedidos"
            axios.get(URLGET).then((response)=>{
                commit('loadOrdersList', response.data)
            })
        },
    }
}