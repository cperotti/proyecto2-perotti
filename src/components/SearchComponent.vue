<template>
  <input v-model="valueSearch" @keyup.enter="presionarEnter" class="form-control" type="search" placeholder="Buscar" aria-label="Search">
</template>

<script>
export default {
    name: 'SearchComponent',
    data() {
        return {
            valueSearch:''
        }
    },
    methods: {
        presionarEnter(){
            this.$emit('enviarElementoBuscado', this.valueSearch)
        }
    },
}
</script>

<style scope>

</style>