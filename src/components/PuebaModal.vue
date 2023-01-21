<template>
  <!-- Modal -->
<div class="modal fade" id="exampleModalAdd" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-scrollable w-70">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Editar producto</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div >
            <div class="row mb-3">
                <div class="col">
                    <label for="imagenProducto" class="form-label">Imagen</label>
                    <input v-model="image" type="url" class="form-control form-control-sm" id="imagenProducto" aria-describedby="imageHelp">
                </div>
                <div class="col">
                    <img v-if="image" :src="image" alt="imagen" class="imagen">
                    <div v-else class="h-100 border border-primary-subtle d-flex justify-content-center align-items-center">
                        <p>Empty</p>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <label for="nombreProducto" class="form-label">Nombre</label>
                <input v-model="name" type="text" class="form-control form-control-sm" id="nombreProducto" aria-describedby="nameHelp">
            </div>
            <div class="mb-3">
                <label for="descripcionProducto" class="form-label">Descripcion</label>
                <textarea v-model="description" class="form-control form-control-sm" id="descripcionProducto" rows="3"></textarea>
            </div>
            <div class="row mb-3">
                <div class="col">
                    <label for="tipoProducto" class="form-label">Tipo</label>
                    <select class="form-select form-select-sm" id="tipoProducto" aria-label="Default select example">
                        <option v-for="(type) in types" :key="type.id" :value="type.id" :selected="type.id === type">{{ type.title }}</option>
                    </select>
                </div>
                <div class="col">
                    <label for="precioProducto" class="form-label">Precio</label>
                    <input v-model="price" type="text" class="form-control form-control-sm"  id="precioProducto" aria-describedby="priceHelp">
                </div>
            </div>
            <p>--------------------------------------------------------------------------------------------------------------------------------------------</p>
            <h5>Detalle</h5>
            <div v-for="(productDetail, index) in detail" :key="index">
                    <label for="precioProducto" class="form-label">{{ productDetail.titulo }}</label>
                    <textarea v-model="productDetail.descripcion" class="form-control form-control-sm" id="descripcionProducto" rows="3"></textarea>
            </div>
            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal">Cancelar</button>
        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Guardar</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'PruebaModal',
    data() {
        return {
            name:'',
            image:'',
            description:'',
            price:'',
            type:'',
            detail:[],
            types:[
                {
                    id:'plantas',
                    title:'Plantas'
                },
                {
                    id:'semillas',
                    title:'Semillas'
                },
                {
                    id:'herramientas',
                    title:'Herramientas'
                }
            ],
        }
    },

}
</script>

<style scope>

</style>