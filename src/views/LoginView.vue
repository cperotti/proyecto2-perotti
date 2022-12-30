<template>
<section class="section-detail">
  <div class="container d-flex justify-content-center flex-column">
      <h1 class="text-center pb-5">🌳GardenSHOP🌳</h1>
      <login-component />
  </div>
</section>
</template>

<script>
// @ is an alias to /src
import LoginComponent from '@/components/LoginComponent.vue'

export default {
  name: 'LoginView',
  components: {
    LoginComponent
  }
}
</script>

<style scoped>
.section-detail{
  padding: 60px 30px;
}
</style>
