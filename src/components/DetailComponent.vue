<template>
    <div class="p-3">
        <div class="card h-70 mb-3">
            <div class="row g-0">
                <div class="col-md-6 d-flex justify-content-center align-items-center flex-column">
                <img :src="getProductDetail.image" class="img-fluid rounded-start imagen-detail" alt="img">
                </div>
                <div class="col-md-6">
                <div class="card-body d-grid gap-2">
                    <h4 class="card-title">{{getProductDetail.name}}</h4>
                    <p class="card-text">{{getProductDetail.description}}</p>
                    <h5>Caracteristicas</h5>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item" v-for="(detalle, index) in getProductDetail.detail" :key="index">
                            <h2 class="accordion-header" :id="index">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="`#${detalle.titulo}`" aria-expanded="false" :aria-controls="`${detalle.titulo}`">
                                {{detalle.titulo}}
                            </button>
                            </h2>
                            <div :id="`${detalle.titulo}`" class="accordion-collapse collapse" :aria-labelledby="index" data-bs-parent="#accordionExample">
                            <div class="accordion-body">{{detalle.descripcion}}</div>
                        </div>
                        </div>
                    </div>
                    <div class="d-flex flex-row pt-3">
                        <h5 class="pe-3">Precio</h5>
                        <p>${{getProductDetail.price}}</p>
                    </div>
                    <button @click="comprar(getProductDetail)" type="button" class="btn btn-success">Añadir al carrito</button>
                </div>
                </div>
            </div>
        </div>
        <div v-if="showSuccessAlert" class="alert alert-success" role="alert">
           El comentario se guardó con éxito!!
        </div>
        <div v-if="showDangerAlert" class="alert alert-danger" role="alert">
           No se ha podido guardar el comentario. Por favor volvé a intentarlo
        </div>
        <h4>Comentarios</h4>
        <div class="d-grid gap-3">
            <textarea v-model="comentario" class="form-control" id="areaComentarios" placeholder="Escribi un comentario" rows="3"></textarea>
            <div class="d-flex justify-content-end">
                <button v-if="comentario" @click="guardarComentario" type="button" class="btn btn-success" >Comentar</button>
            </div>
        </div>
        <br/>
        <ul class="list-group" v-for="(comentario, index) in getProductDetail.coments" :key="index">
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                <div class=" fw-bold mb-3">
                    <img class="imagen-user" :src="comentario.user.avatar" alt="foto usuario">
                    {{comentario.user.firstName}} {{comentario.user.lastName}}
                </div>
                    {{comentario.coment}}
                </div>
                <p class="card-text"><small class="text-muted">{{comentario.date}}</small></p>
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
            showSuccessAlert:false,
            showDangerAlert:false,
        }   
    },
    created(){
        this.fetchProductDetail(this.$route.params.id)
    },
    computed:{
        ...mapGetters('productModule',['getProductDetail']),
        ...mapGetters('userModule', ['getUserLogged'])
    },
    methods:{
        ...mapMutations('shoppingCartModule',['addShoppingCartItem']),
        ...mapActions('productModule',['fetchProductDetail', 'sendComent']),
        comprar(producto){
            const dataItem = {
                    id: producto.id,
                    name: producto.name,
                    price: producto.price,
                    cant: 1,
                }
            this.addShoppingCartItem(dataItem)
            
        },
        guardarComentario(){
            const coments = {
                coment: this.comentario,
                date: new Date(),
                user: {
                    avatar:this.getUserLogged.avantar,
                    firstName: this.getUserLogged.firstName,
                    lastName: this.getUserLogged.lastName,
                }
            }
             this.sendComent({
                param: this.getProductDetail.id, 
                productChanges:{coments:[...this.getProductDetail.coments, coments]}
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
</script>

<style scope>
.imagen-detail{
    object-fit: contain;
    width: 500px;
    height: 600px;
}
.line{
    border: 1px solid grey ;
}
.imagen-user{
    height: 39px;
    border-radius: 50%;
    border: 2px solid darkseagreen
}
</style>