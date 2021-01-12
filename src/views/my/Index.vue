<!--  -->
<template>
  <div class="my">
    <div class="my_body">
      <div class="my_left">
        <div>
 <router-link tag="p" to="/home/my/info"><i class="iconfont icon-gerenxinxi"></i>个人信息</router-link>
        <router-link tag="p" to="/home/my/collect"><i class="iconfont icon-shoucang1"></i>我的收藏</router-link>
        <router-link tag="p" to="/home/my/updown"><i class="iconfont icon-download-1-copy"></i>我的下载</router-link>
        </div>   
      </div>
      <div class="my_right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  created() {},
  mounted() {},
};
</script>
<style scoped lang="less">
@bgurl: "../../assets/icon.png";
@size:260px 260px;
.my {
  background: #f8f8f8;
  .my_body {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .my_left {
      width: 210px;
      div{
 background: #fff;
      border: 1px solid #e4e4e4;
      padding: 10px 0;
      font-size: 16px;
      
      p {
        height: 60px;
        line-height: 60px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:nth-child(3){
          i{
             font-size:17px;
          }
        }
        i{
          font-size:20px;
          margin-right:5px;
          color:#666;
        } 
        &.active,
        &.router-link-active {
          background: #bd2025;
          color: #fff;

          i{
             color:#fff;
          }
        }
      }
      }
    }
    .my_right {
      width: 968px;
      background: #fff;
      border: 1px solid #e4e4e4;
      padding: 10px 0;
    }
  }
}
</style>