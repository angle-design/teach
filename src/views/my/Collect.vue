<!--  -->
<template>
  <div class="collect">
    <p>
      <span
        v-for="(item, i) in tabList"
        :key="i"
        @click="toTab(i)"
        :class="[aIndex == i ? 'active' : '']"
        >{{ item }}</span
      >
    </p>
    <!-- 资源下载 -->
    <div class="file" v-if="aIndex == 0">
      <div v-for="(item, i) in courselist" :key="i">
        <FileItem :item="item"
          ><button @click="toIsCollect(1, item.link_id)">
            取消收藏
          </button></FileItem
        >
      </div>
    </div>
    <!-- 教育资讯 -->
    <div class="education" v-if="aIndex == 1">
      <div v-for="(item, i) in newlist" :key="i">
        <NewItem :item="item"></NewItem>
        <button @click="toIsCollect(2, item.link_id)">取消收藏</button>
      </div>
    </div>
    <!-- 教育资讯 -->
    <div class="topic" v-if="aIndex == 2">
      <div>
        <CircleText v-for="(item, i) in topiclist" :key="i" :text="item.title"
          ><button @click="toIsCollect(3, item.link_id)">
            取消收藏
          </button></CircleText
        >
      </div>
    </div>
    <span v-if="loading"><img src="../../assets/load.gif" />加载中...</span>
    <span v-if="noMore">没有更多内容~</span>
  </div>
</template>

<script>
import FileItem from "../../components/FileItem";
import NewItem from "../../components/NewItem";
import CircleText from "@/components/text/CircleText.vue";
export default {
  name: "",
  data() {
    return {
      tabList: ["资源下载", "教育资讯", "课题进展"],
      aIndex: 0,
      courselist: [],
      newlist: [],
      topiclist: [],
      page: 1,
      loading: false,
      noMore: false,
      flag: true,
    };
  },
  components: {
    FileItem,
    NewItem,
    CircleText,
  },
  created() {},
  methods: {
    getList(type) {
      this.axios
        .get("/api/index/files/getTtoreUp", {
          params: { store_type: 1, su_type: type, page: this.page, limit: 5 },
        })
        .then((res) => {
          if (res.data.code == 200) {
            if (type == 1) {
              this.courselist = this.courselist.concat(res.data.data);
            } else if (type == 2) {
              this.newlist = this.newlist.concat(res.data.data);
            } else {
              this.topiclist = this.topiclist.concat(res.data.data);
            }
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
    toTab(i) {
      (this.courselist = []),
        (this.newlist = []),
        (this.topiclist = []),
        (this.page = 1);
      this.aIndex = i;
      this.getList(this.aIndex + 1);
    },
    toIsCollect(type, id) {
      this.axios
        .get("/api/index/files/delToreup", {
          params: { su_type: type, link_id: id },
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.$message({
              message: "取消成功",
              type: "success",
            });
            this.newlist.splice(
              this.newlist.findIndex((v) => v.link_id === id),
              1
            );
            this.topiclist.splice(
              this.topiclist.findIndex((v) => v.link_id === id),
              1
            );
            this.courselist.splice(
              this.courselist.findIndex((v) => v.link_id === id),
              1
            );
          }
        });
    },
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
        this.getList(this.aIndex + 1);
      }
    },
  },
  mounted() {
    this.getList(this.aIndex + 1);
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style scoped lang="less">
.collect {
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
  & > P {
    margin: 0 30px;
    padding: 0 10px;
    border-bottom: 1px solid #dedede;
    display: flex;
    font-size: 16px;
    margin-bottom: 20px;
    span {
      margin: 0 30px;
      padding: 10px 10px;
      cursor: pointer;
      display: flex;
      &:hover {
        font-weight: bold;
        color: #b9151e;
      }
      &.active,
      &.router-link-active {
        font-weight: bold;
        color: #b9151e;
        border-bottom: 2px solid #b9151e;
      }
    }
  }
  .file {
    button {
      background: #fff;
      border: 1px solid #bd2025;
      color: #bd2025;
    }
  }
  .education > div {
    padding: 0 100px 0 30px;
    //  border-bottom:1px solid #ececec;
    position: relative;
    dl {
      border: none;
    }
    &:hover {
      background: #f6f6f6;
      transition: all 0.6s;
    }
  }
  button {
    background: #fff;
    border: 1px solid #bd2025;
    color: #bd2025;
    position: absolute;
    top: 50%;
    right: 35px;
    width: 80px;
    height: 30px;
    border-radius: 5px;
    margin-top: -15px;
    cursor: pointer;
    &:hover {
      background: #bd2025;
      color: #fff;
      transition: all 0.4s;
    }
  }
  .topic {
    padding: 0 30px;
    & > div {
      & > p.circletext {
        height: 40px;
      }
    }
  }
}
</style>