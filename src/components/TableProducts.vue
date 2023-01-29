<template>
    <div>
        <div v-if="showSuccessAlert" class="alert alert-success" role="alert">
            {{messageAlertSuccess}}
        </div>
        <div v-if="showDangerAlert" class="alert alert-danger" role="alert">
           {{messageAlertDanger}}
        </div>
        <div class="stickyHeader">
            <table class="table table-light table-bordered ">
                <thead >
                    <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Tipo</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(producto) in filterProductsSection" :key="producto.id">
                        <td><img :src="producto.image" class="card-img-top imagen" alt="img"></td>
                        <td>{{producto.name}}</td>
                        <td>{{producto.description}}</td>
                        <td>{{producto.type}}</td>
                        <td>${{producto.price}}</td>
                        <td>
                            <div class="d-flex justify-content-between">
                                <div class="contenedor-icono" data-bs-toggle="modal" data-bs-target="#modalEliminar" @click="saveId(producto.id)">
                                    <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                    </svg>
                                </div>
                                <div class="contenedor-icono" @click="editarProducto(producto)" data-bs-toggle="modal" data-bs-target="#exampleModalEdit">
                                    <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- Modal -->
<div class="modal fade" id="exampleModalEdit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg modal-dialog-scrollable w-70">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 pe-3" id="exampleModalLabel">Editar producto</h1>
        <small>Todos los campos son obligatorios (*)</small>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div >
            <div class="pb-3">
                <div class="d-flex flex-row">
                    <p class="pe-2"><strong class="text-danger">*</strong></p>
                    <label for="imagenProducto" class="form-label">Imagen</label>
                </div>
                <input v-model="image" type="url" class="form-control form-control-sm" id="imagenProducto" aria-describedby="imageHelp">
            </div>
            <div class="pb-3">
                <div class="d-flex flex-row">
                    <p class="pe-2"><strong class="text-danger">*</strong></p>
                    <label for="nombreProducto" class="form-label">Nombre</label>
                </div>
                <input v-model="name" type="text" class="form-control form-control-sm" id="nombreProducto" aria-describedby="nameHelp">
            </div>
            <div class="pb-3">
                <div class="d-flex flex-row">
                    <p class="pe-2"><strong class="text-danger">*</strong></p>
                    <label for="descripcionProducto" class="form-label">Descripcion</label>
                </div>
                <textarea v-model="description" class="form-control form-control-sm" id="descripcionProducto" rows="3"></textarea>
            </div>
            <div class="pb-3">
                <div class="d-flex flex-row">
                    <p class="pe-2"><strong class="text-danger">*</strong></p>
                    <label for="precioProducto" class="form-label">Precio</label>
                </div>
                <input v-model="price" type="text" class="form-control form-control-sm"  id="precioProducto" aria-describedby="priceHelp">
            </div>
            <div class="line"></div>
            <h5 class="pt-3">Detalle</h5>
            <div class="pb-3" v-for="(productDetail, index) in detail" :key="index">
                <div class="d-flex flex-row">
                    <p class="pe-2"><strong class="text-danger">*</strong></p>
                    <label for="descripcionProducto" class="form-label">{{ productDetail.titulo }}</label>
                </div>
                <textarea v-model="productDetail.descripcion" class="form-control form-control-sm" id="descripcionProducto" rows="3"></textarea>
            </div>
            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal">Cancelar</button>
        <button @click="guardarCambios" :disabled="isDisabled" type="button" class="btn btn-success" data-bs-dismiss="modal">Guardar</button>
      </div>
    </div>
  </div>
</div>
<modal-eliminar :eliminarItem="eliminarProducto" :dataModal="dataModal" />
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ModalEliminar from './ModalEliminar.vue'

export default {
    name: 'TableProducts',
    components:{
        ModalEliminar,
    },
    data(){
        return{
            name:'',
            image:'',
            price:'',
            type: '',
            description:'',
            idProducto:'',
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
            showSuccessAlert:false,
            showDangerAlert:false,
            messageAlertSuccess:'',
            messageAlertDanger:'',
            productId:null,
            dataModal:{
                title:'Eliminar pedido',
                body:'Estás seguro que deseas eliminar este producto?',
                buttonName:'Eliminar'
            }
        }
    },
    props:{
        elementoABuscar:String
    },
    created(){
        this.fetchProductsList()
    },
    computed:{
        ...mapGetters('productModule',['getProductsList']),
        filterProductsSection(){
                return this.getProductsList.filter((el)=> el.name.toLowerCase().includes(this.elementoABuscar) || el.type.toLowerCase().includes(this.elementoABuscar) )
        },
        isDisabled(){
            return !this.name || !this.price || !this.description || !this.type || !this.image || this.detail.length ===0
        }
       },
    methods:{
        ...mapActions('productModule',['fetchProductsList', 'editProduct', 'deleteProduct']),
        saveId(id){
            this.productId=id
        },
        eliminarProducto(){
           this.deleteProduct(this.productId).then(()=>{
                this.showSuccessAlert=true
                this.messageAlertSuccess='Se elimino el producto con éxito!!'
               setTimeout(() => {
                    Object.assign(this.$data, this.$options.data())
                    this.fetchProductsList()
                }, 3000);
           })
           .catch(()=>{
                this.showDangerAlert=true
                this.messageAlertDanger='No se ha podido eliminar el producto. Por favor volvé a intentarlo'
                setTimeout(() => {
                    Object.assign(this.$data, this.$options.data())
                }, 3000);
           })
        },
        editarProducto(dataProducto){
            this.idProducto = dataProducto.id
            this.price = dataProducto.price
            this.image = dataProducto.image
            this.name = dataProducto.name
            this.type = dataProducto.type
            this.description = dataProducto.description
            this.detail = [...this.detail,...dataProducto.detail]
        },
        guardarCambios(){
            if(this.name && this.price && this.description && this.type && this.image && this.detail.length >0){
                const dataAux = {
                    price:this.price,
                    image: this.image,
                    name:this.name,
                    type:this.type,
                    description:this.description,
                    detail: this.detail,
                }
                this.editProduct({
                    param: this.idProducto, 
                    productChanges:dataAux
                }).then(()=> {
                    this.showSuccessAlert=true
                    this.messageAlertSuccess='El producto se editó con éxito!!'
                    setTimeout(() => {
                        Object.assign(this.$data, this.$options.data())
                        this.fetchProductsList()
                    }, 3000);
                })
                .catch(()=>{
                this.showDangerAlert=true
                this.messageAlertDanger='No se ha podido editar el producto. Por favor volvé a intentarlo'
                setTimeout(() => {
                    Object.assign(this.$data, this.$options.data())
                    }, 3000);
                })
            }
        },
    }
}
</script>

<style scope>
.imagen{
    height: 100px;
    object-fit: cover;
}
.contenedor-icono svg{
    width: 30px;
    height: 20px;
}
.line{
    border: 1px solid gray;
}
.stickyHeader { 
    overflow: auto; 
    height: 400px; 
    width: 100%;
}
.stickyHeader thead th { 
    position: sticky; 
    top: 0; 
    z-index: 1; 
}
.stickyHeader tbody th { 
    position: sticky; 
    left: 0; 
}
</style>