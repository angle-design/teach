<!--  -->
<template>
  <div class="my">
    <div class="my_body">
      <div class="my_left">
        <router-link tag="p" to="/home/my/info"><font></font>个人信息</router-link>
        <router-link tag="p" to="/home/my/collect"><font></font>我的收藏</router-link>
        <router-link tag="p" to="/home/my/updown"><font></font>我的下载</router-link>
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
        font{
          display: flex;
          width:22px;
          height:22px;
          background:url(@bgurl) no-repeat center 100px;
          background-size:@size;
          background-position:-178px -190px;
        } 
        &:nth-child(2){
          font{
             background-position:-178px -213px;
          }
        }
         &:nth-child(3){
          font{
             background-position:-178px -232px;
          }
        }
        &.active,
        &.router-link-active {
          background: #bd2025;
          color: #fff;
          font{
             background-position-x:-202px;
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