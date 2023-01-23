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
        <div>
            <div class="pb-3">
                <label for="imagenProducto" class="form-label">Imagen</label>
                <input v-model="image" type="url" class="form-control form-control-sm" id="imagenProducto" aria-describedby="imageHelp">
            </div>
            <div class="pb-3">
                <label for="nombreProducto" class="form-label">Nombre</label>
                <input v-model="name" type="text" class="form-control form-control-sm" id="nombreProducto" aria-describedby="nameHelp">
            </div>
            <div class="pb-3">
                <label for="descripcionProducto" class="form-label">Descripcion</label>
                <textarea v-model="description" class="form-control form-control-sm" id="descripcionProducto" rows="3"></textarea>
            </div>
            <div class="row pb-3">
                <div class="col">
                    <label for="tipoProducto" class="form-label">Tipo</label>
                    <select v-model="type" class="form-select form-select-sm" id="tipoProducto" aria-label="Default select example">
                        <option v-for="(typeSelect) in types" :key="typeSelect.id" :value="typeSelect.id">{{ typeSelect.title }}</option>
                    </select>
                </div>
                <div class="col">
                    <label for="precioProducto" class="form-label">Precio</label>
                    <input v-model="price" type="text" class="form-control form-control-sm"  id="precioProducto" aria-describedby="priceHelp">
                </div>
            </div>
            <div class="line"></div>
            <h5 class="pt-3">Detalle</h5>
            <div v-if="type">
                <div class="pb-3" v-for="(detail, index) in content[type]" :key="index">
                    <label for="precioProducto" class="form-label">{{ detail.titulo }}</label>
                    <textarea v-model="detail.descripcion" class="form-control form-control-sm" id="descripcionProducto" rows="3"></textarea>
                </div>
            </div>
            </div>
      </div>
      <div class="modal-footer">
        <button @click="limpiarModal" type="button" class="btn btn-outline-success" data-bs-dismiss="modal">Cancelar</button>
        <button @click="guardarProducto" type="button" class="btn btn-success" data-bs-dismiss="modal">Guardar</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'PruebaModal',
    data() {
        return {
            name:'',
            image:'',
            description:'',
            price:'',
            type:'',
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
            content:{
                plantas:[
                    {
                        titulo:'Familia',
                        descripcion:''
                    },
                    {
                        titulo:'Origen',
                        descripcion:''
                    },
                    {
                        titulo:'Mantenimiento',
                        descripcion:''
                    },
                    {
                        titulo:'Plagas',
                        descripcion:''
                    },
                ],
                herramientas:[
                    {
                        titulo:'General',
                        descripcion:''
                    },
                    {
                        titulo:'Adicional',
                        descripcion:''
                    }
                ],
                semillas:[
                    {
                        titulo:'Siembre',
                        descripcion:''
                    },
                    {
                        titulo:'Floracion',
                        descripcion:''
                    },
                    {
                        titulo:'Utilizacion',
                        descripcion:''
                    },
                ]
            }
        }
    },
    methods:{
        ...mapActions('productModule',['addNewProduct']),
        limpiarModal(){
            Object.assign(this.$data, this.$options.data())
        },
        guardarProducto(){
            const dataAux ={
                image:this.image,
                name: this.name,
                description: this.description,
                type: this.type,
                price:this.price,
                detail: this.content[this.type]
            }
            this.addNewProduct(dataAux)
        }
    }

}
</script>

<style scope>
.line{
    border: 1px solid gray;
}
</style>