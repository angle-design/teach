<!--  -->
<template>
<div class="show">
11111
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
    created() {
        Bus.$on('getTarget',target=>{
            console.log(target,111)
        })
    },
    mounted() {

    }
}
</script>
<style scoped>

</style>