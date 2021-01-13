<!--  -->
<template>
  <div class="updown">
    <div class="file">
      <div
        v-for="(item, i) in upDownList"
        :key="i"
        @click.stop="toCourse(item.link_id)"
      >
        <FileItem :item="item"
          ><button @click.stop="toUpDown(item.link_id)">重新下载</button
          ><font class="time">{{ item.createtime }}</font></FileItem
        >
      </div>
      <span v-if="loading"><img src="../../assets/load.gif" />加载中...</span>
      <span v-if="noMore">没有更多内容~</span>
    </div>
  </div>
</template>

<script>
import FileItem from "../../components/FileItem";
export default {
  name: "",
  data() {
    return {
      upDownList: [],
      page: 1,
      loading: false,
      noMore: false,
      flag: true,
    };
  },
  components: {
    FileItem,
  },
  created() {},
  methods: {
    // 获取下载列表
    getList() {
      this.axios
        .get("/api/index/files/getTtoreUp", {
          params: {
            store_type: 2,
            page: this.page,
            limit: 5,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.upDownList = this.upDownList.concat(res.data.data);
            this.loading = false;
            if (res.data.data.length < 5) {
              this.noMore = true;
              this.flag = false;
            }
          } else {
            this.loading = false;
            this.noMore = true;
            this.flag = false;
          }
        });
    },
    // 下载
    toUpDown(id) {
      this.axios
        .get("/api/index/files/exportFile", {
          params: { book_id: id },
        })
        .then((res) => {
          if (res.data.code == 200) {
            let a = document.createElement("a");
            a.href = "/api/index/files/godown?book_id=" + id;
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
    // 下拉加载
    handleScroll() {
      if (!this.flag) return;
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      if (scrollTop + windowHeight == scrollHeight - 0) {
        this.loading = true;
        this.page++;
        this.getList();
      }
    },
  },
  mounted() {
    this.getList();
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style scoped lang="less">
.updown {
  .file {
     & > span {
    line-height: 80px;
    color: #999;
    text-align: center;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 18px;
      height: 18px;
      margin-right: 5px;
    }
  }
    & > div {
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