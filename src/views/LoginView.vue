<template>
<section class="section-detail">
  <div class="container">
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

</style>
