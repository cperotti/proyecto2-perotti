<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
/*<nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>*/

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  background-color:darkseagreen;
  height: 100vh;
}

body{
  background-color: red;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
