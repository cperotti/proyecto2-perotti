<template>
  <div class="card mb-3 w-100 h-50">
        <div class="row g-0">
          <div class="col-md-6 d-flex justify-content-center align-items-center flex-column p-3">
              <h3 class="text-center">Descuentos</h3>
             <h1 class="text-center">🌳GardenSHOP🌳</h1>
          </div>
          <div class="col-md-6 d-flex justify-content-center align-items-center">
            <div class="card-body">
              <div>
                <p class="card-text">
                  Todos los viernes, <strong>35%</strong> de descuento comprando más de 3 productos de la variedad <button @click="irAHerramientas" type="button" class="btn btn-link p-0">herramientas</button>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: "CardSale",
  methods:{
    irAHerramientas(){
      this.$router.push('/productos/herramientas')
    }
  }
}
</script>

<style scope>

</style>