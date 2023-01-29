<template>
    <div class="modal fade" id="exampleModalAdd" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-scrollable w-70">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5 pe-3" id="exampleModalLabel">Agregar producto</h1>
            <small>Todos los campos son obligatorios (*)</small>
            <button type="button" @click="limpiarModal" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div>
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
                <div class="row pb-3">
                    <div class="col">
                        <div class="d-flex flex-row">
                            <p class="pe-2"><strong class="text-danger">*</strong></p>
                            <label for="tipoProducto" class="form-label">Tipo</label>
                        </div>
                        <select v-model="type" class="form-select form-select-sm" id="tipoProducto" aria-label="Default select example">
                            <option v-for="(typeSelect) in types" :key="typeSelect.id" :value="typeSelect.id">{{ typeSelect.title }}</option>
                        </select>
                    </div>
                    <div class="col">
                        <div class="d-flex flex-row">
                            <p class="pe-2"><strong class="text-danger">*</strong></p>
                            <label for="precioProducto" class="form-label">Precio</label>
                        </div>
                        <input v-model="price" type="text" class="form-control form-control-sm"  id="precioProducto" aria-describedby="priceHelp">
                    </div>
                </div>
                <div class="line"></div>
                <h5 class="pt-3">Detalle</h5>
                <small v-if="!type">Aparecerán los campos correspondientes cuando se seleccione un tipo de producto</small>
                <div v-if="type">
                    <div class="pb-3" v-for="(detail, index) in content[type]" :key="index">
                        <div class="d-flex flex-row">
                            <p class="pe-2"><strong class="text-danger">*</strong></p>
                            <label for="precioProducto" class="form-label">{{ detail.titulo }}</label>
                        </div>
                        <textarea v-model="detail.descripcion" class="form-control form-control-sm" id="descripcionProducto" rows="3"></textarea>
                    </div>
                </div>
                </div>
        </div>
        <div class="modal-footer">
            <button @click="limpiarModal" type="button" class="btn btn-outline-success" data-bs-dismiss="modal">Cancelar</button>
            <button @click="guardarProducto" :disabled="isDisabled" type="button" class="btn btn-success" data-bs-dismiss="modal">Guardar</button>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'ModalAgregarNuevo',
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
    computed:{
        isDisabled(){
            return !this.image || !this.name || !this.description || !this.price || !this.type || !this.content[this.type].every(el => el.descripcion)
        }
    },
    methods:{
        ...mapActions('productModule',['fetchProductsList','addNewProduct']),
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
            this.addNewProduct(dataAux).then(()=>{
                 this.$emit('enviarDatosAlertNuevoProducto', {message: 'El producto se agregó con éxito!!', showSuccessAlert:true, showDangerAlert:false})
               setTimeout(() => {
                this.$emit('enviarDatosAlertNuevoProducto', {message: '', showSuccessAlert:false, showDangerAlert:false})
                    Object.assign(this.$data, this.$options.data())
                    this.fetchProductsList()
                }, 3000);
           })
           .catch(()=>{
                this.showDangerAlert=true
                 this.$emit('enviarDatosAlertNuevoProducto', {message: 'No se ha podido agregar el producto. Por favor volvé a intentarlo', showSuccessAlert:false, showDangerAlert:false})
                setTimeout(() => {
                    this.$emit('enviarDatosAlertNuevoProducto', {message: '', showSuccessAlert:false, showDangerAlert:false})
                    Object.assign(this.$data, this.$options.data())
                }, 3000);
           })
        }
    }

}
</script>

<style scope>
.line{
    border: 1px solid gray;
}
</style>