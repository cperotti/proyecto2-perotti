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
        postData(state, data){
          console.log(state, data)
        }
      },
      actions: {
        fetchOrdersList: ({commit}) => {
          const URLGET = "https://639e6cf43542a261305b9ed0.mockapi.io/pedidos"
            axios.get(URLGET).then((response)=>{
                commit('loadOrdersList', response.data)
            })
        },
        addNewItem: ({commit}, data) => {
          const URLPOST = 'https://639e6cf43542a261305b9ed0.mockapi.io/pedidos'
          axios.post(URLPOST,data).then((response)=> {
            commit('postData',response)
          })
        },
        deleteOrder: ({commit}, id) =>{
          const URLDELETE = `https://639e6cf43542a261305b9ed0.mockapi.io/pedidos/${id}`
          axios.delete(URLDELETE).then((response)=>{
            commit('postData', response.data)
          })
        },
    }
}