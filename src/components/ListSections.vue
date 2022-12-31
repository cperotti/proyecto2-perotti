<template>
    <div>
        <table class="table table-light table-bordered">
            <thead>
                <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Precio</th>
                    <th>Detalle</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr >
                    <!-- <td>{{producto.id}}</td>
                    <td>{{producto.name}}</td>
                    <td>${{producto.price}}</td>
                    <td><button @click="decrementar(producto.id)" :disabled="producto.cant === 1" type="button" class="btn btn-success">-</button>{{producto.cant}}<button @click="incrementar(producto.id)" class="btn btn-success" type="button">+</button></td>
                    <td>''</td> -->
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name:'ListSections'
}
</script>

<style scope>

</style>