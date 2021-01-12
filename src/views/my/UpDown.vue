<!--  -->
<template>
  <div class="updown">
    <div class="file">
      <div v-for="(item,i) in upDownList" :key="i" @click.stop="toCourse(item.link_id)">
  <FileItem :item="item"
        ><button @click.stop="toUpDown(item.link_id)">重新下载</button
        ><font class="time">{{item.createtime}}</font></FileItem
      >
      </div>
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
  methods:{
     // 下载
    toUpDown(id) {
      this.axios
        .get("/api/index/files/exportFile", {
          params: { book_id:id},
        })
        .then((res) => {
          if (res.data.code == 200) {
            let a = document.createElement("a");
            a.href = "/api/index/files/godown?book_id=" +id;
            a.click();
          } else if (res.data.code == 100008) {
            this.$message({
              showClose: true,
              message: "你还没有登陆哦～",
              type: "warning",
            });
          } else {
            this.$message({
              showClose: true,
              message: res.data.descb,
              type: "warning",
            });
          }
        })
        .catch((err) => {
          alert(err);
        });
    },
     toCourse(id) {
      let { href } = this.$router.resolve({
        path: "/home/coursedetails/" + id,
      });
      window.open(href, "_blank");
    },
  }
};
</script>
<style scoped lang="less">
.updown {
  .file {
    &>div{
      cursor: pointer;
    }
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
      right: 34px;
      font-size: 14px;
      color: #999999;
    }
  }
}
</style>