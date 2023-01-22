<template>
    <div>
        <div v-if="showSuccessAlert" class="alert alert-success" role="alert">
           El producto se editó con éxito!!
        </div>
        <div v-if="showDangerAlert" class="alert alert-danger" role="alert">
           No se ha podido editar el producto. Por favor volvé a intentarlo
        </div>
  <table class="table table-light table-bordered">
            <thead>
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
                <tr v-for="(producto) in getProductsList" :key="producto.id">
                    <td><img :src="producto.image" class="card-img-top imagen" alt="img"></td>
                    <td>{{producto.name}}</td>
                    <td>{{producto.description}}</td>
                    <td>{{producto.type}}</td>
                    <td>${{producto.price}}</td>
                    <td>
                        <div class="d-flex justify-content-between">
                            <div class="contenedor-icono" @click="eliminarProducto(producto.id)">
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
        <!-- Modal -->
<div class="modal fade" id="exampleModalEdit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                    <p v-if="errors.image" class="card-text"><small class="text-danger">{{ errors.image }}</small></p>
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
                <p v-if="errors.name" class="card-text"><small class="text-danger">{{ errors.name }}</small></p>
            </div>
            <div class="mb-3">
                <label for="descripcionProducto" class="form-label">Descripcion</label>
                <textarea v-model="description" class="form-control form-control-sm" id="descripcionProducto" rows="3"></textarea>
                <p v-if="errors.description" class="card-text"><small class="text-danger">{{ errors.description }}</small></p>
            </div>
            <div class="row mb-3">
                <div class="col">
                    <label for="tipoProducto" class="form-label">Tipo</label>
                    <select class="form-select form-select-sm" id="tipoProducto" aria-label="Default select example">
                        <option v-for="(type) in types" :key="type.id" :value="type.id" :selected="type.id === type">{{ type.title }}</option>
                    </select>
                    <p  v-if="errors.type" class="card-text"><small class="text-danger">{{ errors.type }}</small></p>
                </div>
                <div class="col">
                    <label for="precioProducto" class="form-label">Precio</label>
                    <input v-model="price" type="text" class="form-control form-control-sm"  id="precioProducto" aria-describedby="priceHelp">
                    <p v-if="errors.price" class="card-text"><small class="text-danger">{{ errors.price }}</small></p>
                </div>
            </div>
            <p>--------------------------------------------------------------------------------------------------------------------------------------------</p>
            <h5>Detalle</h5>
            <div v-for="(productDetail, index) in detail" :key="index">
                    <label for="precioProducto" class="form-label">{{ productDetail.titulo }}</label>
                    <textarea v-model="productDetail.descripcion" class="form-control form-control-sm" id="descripcionProducto" rows="3"></textarea>
            </div>
            <p v-if="errors.detail" class="card-text"><small class="text-danger">{{errors.detail}}</small></p>
            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal">Cancelar</button>
        <button @click="guardarCambios" type="button" class="btn btn-success" data-bs-dismiss="modal">Guardar</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'TableProducts',
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
            errors:{
                image:'',
                name:'',
                price:'',
                type:'',
                detail:'',
                description:'',
            },
            showSuccessAlert:false,
            showDangerAlert:false
        }
    },
    created(){
        this.fetchProductsList()
    },
    watch:{
        image(nuevo){
            if(nuevo && this.errors.image){
                this.errors = {...this.errors, image:''} 
            }
        },
        name(nuevo){
            if(nuevo && this.errors.name){
                this.errors = {...this.errors, name:''} 
            }
        },
        type(nuevo){
            if(nuevo && this.errors.type){
                this.errors = {...this.errors, type:''} 
            }
        },
        description(nuevo){
            if(nuevo && this.errors.description){
                this.errors = {...this.errors, description:''} 
            }
        },
        price(nuevo){
            if(nuevo && this.errors.price){
                this.errors = {...this.errors, price:''} 
            }
        },
        detail(nuevo){
            if(nuevo && this.errors.detail){
                this.errors = {...this.errors, detail:''} 
            }
        }
    },
    computed:{
        ...mapGetters('productModule',['getProductsList']),
    },
    methods:{
        ...mapActions('productModule',['fetchProductsList', 'editProduct', 'deleteProduct']),
        eliminarProducto(id){
           this.deleteProduct(id)
        },
        editarProducto(dataProducto){
            this.idProducto = dataProducto.id
            this.price = dataProducto.price
            this.image = dataProducto.image
            this.name = dataProducto.name
            this.type = dataProducto.type
            this.description = dataProducto.description
            this.detail = dataProducto.detail
        },
        guardarCambios(){
            console.log('entre a guardar cambios')
            if(!this.image){
                this.errors = {...this.errors, image:'Debes colocar una url de imagen para poder guardar los cambios'} 
            }
            if(!this.name){
                this.errors = {...this.errors, name:'Debes colocar nombre para poder guardar los cambios'} 
            }
            if(!this.price){
                this.errors = {...this.errors, price:'Debes colocar un precio para poder guardar los cambios'} 
            }
            if(!this.description){
                this.errors = {...this.errors, description:'Debes colocar una descripcion para poder guardar los cambios'} 
            }
            if(!this.detail){
                this.errors = {...this.errors, detail:'Debes completar el detalle para poder guardar los cambios'} 
            }
            if(!this.type){
                this.errors = {...this.errors, type:'Debes seleccionar un tipo para poder guardar los cambios'} 
            }

            if(this.name && this.price && this.description && this.type && this.image && this.detail.length >0){
                console.log('entre a esta todo lleno')
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
             setTimeout(() => {
                Object.assign(this.$data, this.$options.data())
                }, 3000);
            })
            .catch(()=>{
            this.showDangerAlert=true
            setTimeout(() => {
                Object.assign(this.$data, this.$options.data())
                }, 3000);
            })
            }
        }
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
</style>