<template>
  <h1 class="text-center p-3">Bienvenid@ {{getUserLogged?.firstName}} 👋</h1>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name:'WelcomeText',
    created(){
      const userId = localStorage.getItem('userId');
      this.fetchUserDetail(userId)
    },
    computed:{
    ...mapGetters('userModule',['getUserLogged'])
  },
  methods:{
    ...mapActions('userModule', ['fetchUserDetail']),
  }
}
</script>

<style scope>

</style>