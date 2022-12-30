<template>
<section class="section-detail">
  <div class="container">
    <h1 class="text-center pb-5">🌳GardenSHOP🌳</h1>
   <register-component/>
  </div>
</section>
</template>

<script>
// @ is an alias to /src
import RegisterComponent from '@/components/RegisterComponent.vue'

export default {
  name: 'RegisterView',
  components: {
    RegisterComponent
  }
}
</script>

<style scoped>
.section-detail{
  padding: 60px 30px;
}
</style>