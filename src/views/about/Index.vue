<!--  -->
<template>
<div><AB></AB><AC></AC></div>
</template>

<script>
import AB from './click'
import AC from './show'
export default {
    name:"",
    data() {
        return {
            a:1,
            b:2,
            c:3
        }
    },
    provide(){
    return{
      test:this
    }
  },
    components:{
        AB,AC
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {

    }
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>