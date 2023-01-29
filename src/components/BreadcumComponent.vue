<template>
  <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li v-for="(infoBreadcum, index) in breadcumData" :key="index" class="breadcrumb-item"><router-link :to="infoBreadcum.link">{{infoBreadcum.name}}</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{name}}</li>
      </ol>
    </nav>
</template>

<script>
export default {
    name: 'BreadcumComponent',
    props:{
      breadcumData:Array,
      name:String,
    },
}
</script>
