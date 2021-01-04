<template>
    <h3 class="title"><slot></slot></h3>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .title{
        // border-bottom:1px dashed #b5b4b4;
        font-size:18px;
        height:40px;
        line-height:44px;
        text-align: left;
        padding-left:10px;
        position: relative;
        &:after{
            content:"";
            width:5px;
            height:17px;
            background:#b9151e;
            border-radius:40px;
            position: absolute;
            left:0px;
            top:50%;
            margin-top:-8.5px;
        }
        span{
            float: right;
            color:#acacac;
            font-size:14px;
            cursor: pointer;
        }
    }
</style>