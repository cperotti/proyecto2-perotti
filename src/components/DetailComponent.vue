<template>
    <div class="p-3">
        <div class="card h-70">
            <div class="row g-0">
                <div class="col-md-6 d-flex justify-content-center align-items-center flex-column">
                <img :src="getProductDetail.image" class="img-fluid rounded-start imagen-detail" alt="img">
                </div>
                <div class="col-md-6">
                <div class="card-body d-grid gap-2">
                    <h4 class="card-title">{{getProductDetail.name}}</h4>
                    <p class="card-text">{{getProductDetail.descripcion}}</p>
                    <h5>Caracteristicas</h5>
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item" v-for="(detalle, index) in getProductDetail.detail" :key="index">
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
                    <h5>Precio</h5>
                    <p>${{getProductDetail.price}}</p>
                    <button @click="comprar(getProductDetail)" type="button" class="btn btn-success">Añadir al carrito</button>
                </div>
                </div>
            </div>
        </div>
        <h4>Comentarios</h4>
        <div class="d-grid gap-3">
            <textarea v-model="comentario" class="form-control" id="areaComentarios" placeholder="Escribi un comentario" rows="3"></textarea>
            <div class="d-flex justify-content-end">
                <button v-if="comentario" type="button" class="btn btn-success" >Comentar</button>
            </div>
        </div>
        <br/>
        <ul class="list-group" v-for="(comentario, index) in getProductDetail.coments" :key="index">
            <li v-if="getProductDetail.coments.length > 0" class="list-group-item d-flex justify-content-between align-items-start">
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
import { mapActions, mapGetters, mapMutations } from 'vuex';
export default {
    name:'DetailComponent',
    data() {
        return {
            comentario:'',
        }   
    },
    created(){
        this.fetchProductDetail(this.$route.params.id)
    },
    computed:{
        ...mapGetters('productModule',['getProductDetail'])
    },
    methods:{
        ...mapMutations('shoppingCartModule',['addShoppingCartItem']),
        ...mapActions('productModule',['fetchProductDetail']),
        comprar(producto){
            const dataItem = {
                    id: producto.id,
                    name: producto.name,
                    price: producto.price,
                    cant: 1,
                }
            this.addShoppingCartItem(dataItem)
            this.$router.push(`/carrito`)
            
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