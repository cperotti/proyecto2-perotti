<template>
<section class="section-detail">
  <div class="container">
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