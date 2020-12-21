<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

*{
  margin:0;
  padding:0;
  list-style: none;
  border:none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-size:16px;
}
input,button{
  outline: none;
}
img{
    transition: all 2s;
    -webkit-transition: all 2s;
    -moz-transition: all 2s;
    -o-transition: all 2s;
}
img:hover{
    transform: scale(1.1, 1.1);
    -webkit-taransform: scale(1.1, 1.1);
    -o-transform: scale(1.1, 1.1);
    -moz-transform: scale(1.1, 1.1);
}
</style>
