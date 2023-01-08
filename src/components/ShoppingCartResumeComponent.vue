<template>
  <div class="card">
        <div class="card-body">
        <h4 class="card-title">Resumen de compra</h4>
        <div class="card-text">
            <div v-if="getShoppingCartList.length > 0" >
                <div v-for="(item, index) in getShoppingCartList" :key="index" class="row">
                    <div class="col-8">
                        <p>{{ item.name }}</p>
                    </div>
                    <div class="col-4">
                        <p>${{ item.price }}</p>
                    </div>
                </div>
                <p>---------------------------------------------------</p>
                <div class="row">
                    <div class="col-8">
                        <p><strong>Total</strong></p>
                    </div>
                    <div class="col-4">
                        <p>${{calcularTotal}}</p>
                    </div>
                </div>
            </div>
            <div v-else>
                <p>Aun no tenemos información para mostrar</p>
            </div>
        </div>
        <button :disabled="getShoppingCartList.length === 0" type="button" class="btn btn-success w-100">Finalizar compra</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name:'ShoppingCartResumeComponent',
    computed:{
        ...mapGetters('shoppingCartModule',['getShoppingCartList']),
        calcularTotal(){
            let suma = this.getShoppingCartList.reduce((acum,data) =>
                acum + parseInt(data.price)
            ,0)
            return suma
        }
    }
}
</script>

<style>

</style>