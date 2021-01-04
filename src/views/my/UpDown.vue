<!--  -->
<template>
  <div class="updown">
    <div class="file">
      <FileItem
        v-for="(item,i) in upDownList" :key="i"
        ><button>重新下载</button
        ><font class="time">{{item}}</font></FileItem
      >
    </div>
  </div>
</template>

<script>
import FileItem from "../../components/FileItem";
export default {
  name: "",
  data() {
    return {
      upDownList:[]
    };
  },
  components: {
    FileItem,
  },
  created() {},
  mounted() {
     this.axios.get("/api/index/files/getTtoreUp",{
       params:{
         store_type:2
       }
     }).then((res) => {
      if (res.data.code == 200) {
        this.upDownList=res.data.data;
        console.log(res.data.data)
      }
    });
  },
};
</script>
<style scoped lang="less">
.updown {
  .file {
    button {
      background: #fff;
      border: 1px solid #42b0ec;
      color: #42b0ec;
      display: flex;
      flex-direction: column;
      top: 45px;
    }
    .time {
      position: absolute;
      top: 80px;
      right: 18px;
      font-size: 14px;
      color: #999999;
    }
  }
}
</style>