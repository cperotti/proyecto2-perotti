<template>
    <div class="p-3">
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-6 d-flex justify-content-center align-items-center flex-column">
                <img :src="detalleProducto.imagen" class="img-fluid rounded-start imagen-detail" alt="img">
                <p class="card-text"><small class="text-muted"><a :href="detalleProducto.autorLink">Imagen de rawpixel.com</a> en Freepik</small></p>
                </div>
                <div class="col-md-6">
                <div class="card-body d-grid gap-2">
                    <h4 class="card-title">{{detalleProducto.name}}</h4>
                    <p class="card-text">{{detalleProducto.descripcion}}</p>
                    <h5>Caracteristicas</h5>
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item" v-for="(detalle, index) in detalleProducto.detail" :key="index">
                            <h2 class="accordion-header" :id="index">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#${detalle.titulo}`" aria-expanded="false" :aria-controls="`${detalle.titulo}`">
                                {{detalle.titulo}}
                            </button>
                            </h2>
                            <div :id="`${detalle.titulo}`" class="accordion-collapse collapse" :aria-labelledby="index" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">{{detalle.descripcion}}</div>
                        </div>
                        </div>
                    </div>
                    <button @click="comprar(detalleProducto)" type="button" class="btn btn-success">Añadir al carrito</button>
                </div>
                </div>
            </div>
        </div>
        <h4>Comentarios</h4>
        <div class="d-grid gap-3">
            <textarea v-model="comentario" class="form-control" id="areaComentarios" placeholder="Escribi un comentario" rows="3"></textarea>
            <div class="d-flex justify-content-end">
                <button v-if="comentario" @click="guardarComentario()" type="button" class="btn btn-success" >Comentar</button>
            </div>
        </div>
        <br/>
        <ul class="list-group" v-for="(comentario, index) in detalleProducto.coments" :key="index">
            <li v-if="detalleProducto.coments.length > 0" class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                <div class="fw-bold">{{comentario.usuario}}</div>
                    {{comentario.comentario}}
                </div>
                <p class="card-text"><small class="text-muted">{{comentario.fechaHora}}</small></p>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'DetailComponent',
    data() {
        return {
            comentario:'',
            dataCompraProducto:{
                id:'',
                nombre:'',
                precio:0,
                cantidad:''
            },
            detalleProducto:{}
        }   
    },
    created(){
        const URLGET = `https://639e6cf43542a261305b9ed0.mockapi.io/productos/${this.$route.params.id}`
        axios.get(URLGET).then((response)=>{
            console.log(response)
            this.detalleProducto = {...response.data}
        })
    },
    methods:{
        guardarComentario(){
            this.detalleProducto={
                ...this.detalleProducto,
                comentarios:[
                    ...this.detalleProducto.comentarios,
                    {
                        usuario:'Carolina',
                        fechaHora:new Date(),
                        comentario: this.comentario
                    }
                ]
            }
            this.comentario=''
        },
        comprar(producto){
            const URLPOST = 'https://639e6cf43542a261305b9ed0.mockapi.io/carrito'
                axios.post(URLPOST,{
                    id: producto.id,
                    name: producto.name,
                    price: producto.price,
                    cant: 1,
                }).then(()=> this.$router.push(`/carrito`))
                .catch((error)=> console.log(error))
            
        }
    }
}
</script>

<style scope>
.imagen-detail{
    object-fit: contain;
    width: 500px;
    height: 600px;
}
</style>