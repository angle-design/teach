<template>
  <p class="pictext">
    <i :class="getClass" :style="{ fontSize: fontSize1 + 'px' }"></i
    >{{ item.bo_name }}
  </p>
</template>

<script>
export default {
  props: {
    text: "",
    fontSize1: {
      type: Number,
      default: 18,
    },
    item:{},
  },
  data(){
    return {
        getClass:'iconfont icon-word'
    }
  },
  mounted(){
    setTimeout(()=>{
        if(this.item.bo_suffix=='pdf'){
      this.getClass='iconfont icon-pdf'
    }else if(this.item.bo_suffix=='docx'){
       this.getClass='iconfont icon-word'
    }else if(this.item.bo_suffix=='xlsx'){
      this.getClass='iconfont icon-xls'
    }else if(this.item.bo_suffix=='ppt'){
      this.getClass='iconfont icon-ppt'
    }
    },100)
   
  }
};
</script>

<style lang="less" scoped>
.pictext {
  padding: 0 10px 0 0;
  box-sizing: border-box;
  position: relative;
  white-space:nowrap;

overflow:hidden;

text-overflow:ellipsis;

 
  cursor: pointer;
  &:hover {
    color: #b9151e;
  }
  i {
    font-size: 18px;
    margin-bottom: 2px;
    margin-right:5px;
    color: #bd2025;
    &.icon-word {
      color: #6ccbff;
    }
    &.icon-ppt {
      color: #ff8976;
    }
    &.icon-xls {
      color: #2ea346;
    }
  }
}
</style>