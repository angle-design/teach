<!--  -->
<template>
<div class="click" @click="changeProvide">
{{myzz}}
</div>
</template>

<script>
import Bus from './bus'
export default {
    name:"",
    data() {
        return {

        }
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {

    },
    inject:['test'],
    mounted(){
        console.log('---')
        console.log(this.test)
    },
    computed:{
        myzz(){ //使用计算属性动态监听上(n)级组件的某个属性变化
            return this.test.a
        }
    },
    methods:{  //更改属性，同时我们的计算属性也会得到更新
        changeProvide(){
            this.test.a = 'changed'
        }
    },
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>


666 1000 1000 600 200 200 