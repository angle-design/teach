<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    this.axios.get('/api/index/index/isLogin').then(res=>{
      if(res.data.code==200){
        localStorage.setItem('login', 'true');
      }else{
        localStorage.setItem('login', 'false');
      }
    })
  }
  
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
img.scal{
    transition: all 2s;
    -webkit-transition: all 2s;
    -moz-transition: all 2s;
    -o-transition: all 2s;
}
img.scal:hover{
    transform: scale(1.1, 1.1);
    -webkit-taransform: scale(1.1, 1.1);
    -o-transform: scale(1.1, 1.1);
    -moz-transform: scale(1.1, 1.1);
}
</style>
