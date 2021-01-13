<!--  -->
<template>
  <div class="resource_item">
   <i :class="getClass"></i>
    <div>
      <b>{{item.bo_name}}</b>
      <span><font v-if="item.p_name">{{item.p_name}}</font><font v-if="item.s_name">{{item.s_name}}</font><font v-if="item.s_name">{{item.e_name}}</font></span>
      <p><span v-if="item.create_at">时间：{{item.create_at}}</span><span v-if="item.bo_count">下载：{{item.bo_count}}次</span><span>大小：1993KB</span></p>
    </div>
    <slot></slot>
    <!-- <button><b></b>下载</button> -->
  </div>
</template>

<script>
export default {
  name:"",
 props:{
   item:{}
 },
 data(){
   return {
     getClass:''
   }
 },
  mounted() {
    if(this.item.bo_suffix=='pdf'){
      this.getClass='iconfont icon-pdf'
    }else if(this.item.bo_suffix=='docx'){
       this.getClass='iconfont icon-word'
    }else if(this.item.bo_suffix=='xlsx'){
      this.getClass='iconfont icon-xls'
    }else{
      this.getClass='iconfont icon-ppt'
    }
  
  },
};
</script>
<style scoped lang="less">
.resource_item {
  display: flex;
  height: 140px;
  padding: 0 160px 0 30px;
  position: relative;
  border: 1px solid #fff;
  align-items: center;
  &:hover {
    border: 1px solid #bd2025;
  }
  & > i {
    margin-right: 20px;
    font-size:80px;
    color:#bd2025;
    &.icon-word{
      color:#6ccbff;
    }
     &.icon-ppt{
      color:#ff8976;
    }
      &.icon-xls{
      color:#2ea346;
    }
  }
  & > div {
    width:630px;
    b{
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      display: block;
    }
    &>span {
      display: block;
      margin-top: 10px;
      font {
        padding: 2px 6px;
        background: #eeeeee;
        font-size: 14px;
        color: #999999;
        margin-right: 12px;
      }
    }
    &>P{
      font-size:14px;
      color:#999;
      margin-top:8px;
      span{
        margin-right:30px;
      }
    }
  }
  & > button {
    position: absolute;
    right: 30px;
    width: 85px;
    height: 28px;
    border-radius: 3px;
    color: #fff;
    background: #bd2025;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    i {
      font-size:13px;
      font-weight:bold;
    }
  }
}
</style>