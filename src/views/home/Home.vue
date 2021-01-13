<!--  -->
<template>
  <div class="home">
    <Header :type="1"></Header>
    <div class="topnav">
      <ul>
        <li><router-link tag="a" to="/index" target="_blank">首页</router-link></li>
        <!-- <router-link tag="li" to="/home/resource">资源下载</router-link> -->
        <router-link tag="li" to="/home/teach">教研交流</router-link>
        <router-link tag="li" to="/home/education">教育资讯</router-link>
        <router-link tag="li" to="/home/topic">课题进展</router-link>
        <router-link tag="li" to="/home/my" v-if="flag=='true'">个人中心</router-link>
      </ul>
    </div>
    <div class="home_body">
      <router-view></router-view>
    </div>
    <div class="footer">
      <Foot></Foot>
    </div>
  </div>
</template>

<script>
import Header from "@/components/header/Index.vue";
import Foot from "@/components/foot/Index.vue";
export default {
  name: "",
  data() {
    return {
      flag:false
    };
  },
  mounted(){
    this.flag=localStorage.getItem('login');
  },
  components: {
    Header,
    Foot,
  },
};
</script>
<style scoped lang="less">
.topnav {
  border-bottom: 1px solid #dedede;
  ul {
    display: flex;
    font-size: 16px;
    justify-content: center;
    li {
      margin: 0 30px;
      padding: 10px;
      cursor: pointer;
      &:hover {
        color: #b9151e;
      }
      a{
        text-decoration: none;
        color:#333;
        &:hover{
 color: #b9151e;
        }
      }
      &.active,
      &.router-link-active {
        color: #b9151e;
        border-bottom: 2px solid #b9151e;
      }
    }
  }
}
.home_body {
  padding: 20px 0 80px;
  background: #f8f8f8;
}
.footer {
  background: #fff;
}
</style>