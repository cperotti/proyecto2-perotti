import axios from "axios";

export default {
    namespaced:true,
    state: {
        userLogged:{},
        usersList:[],
      },
      getters: {
        getUsersList(state){
          return state.usersList
        },
        getUserLogged(state){
          return state.userLogged
        },
      },
      mutations: {
        loadUsersList(state, user){
          state.usersList = user
        },
        setUserLogged(state,userLogged){
          state.userLogged= userLogged
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
        fetchUserDetail: ({commit},param) => {
          const URLGET = `https://639e6cf43542a261305b9ed0.mockapi.io/usuarios/${param}`
          axios.get(URLGET).then((response)=>{
            commit('setUserLogged',response.data)
          })
        },
        //consultar los post si estan bien implementados
        saveUserRegister: ({commit},data) =>{
          const URLPOST = 'https://639e6cf43542a261305b9ed0.mockapi.io/usuarios'
          axios.post(URLPOST,data).then((response)=> {
            commit('postData',response)
          })
        },
    
      },
}