<template>
  <div class="modal fade" tabindex="-1" id="modalEliminar" aria-labelledby="modalEliminarLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{dataModal.title}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>{{dataModal.body}}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal">Cancelar</button>
        <button @click="eliminarItem" type="button" class="btn btn-success" data-bs-dismiss="modal" >{{dataModal.buttonName}}</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'ModalEliminar',
    props:{
        eliminarItem: Function,
        dataModal: Object,
    }
}
</script>

<style scope>

</style>