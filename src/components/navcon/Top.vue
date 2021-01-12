<!--  -->
<template>
  <div class="eductioncon">
    <div class="eduction">
      <div class="education_left infinite-list-wrapper" style="height:400px;overflow-y: auto">
        <div>
          <NewItem v-for="(item, i) in newList" :key="i" :item="item">
            <font>来源：典例教案</font>
          </NewItem>
        </div>
        <p v-if="loading">加载中...</p>
        <p v-if="noMore">没有更多了</p>
      </div>
      <div class="education_right"><div><Hot></Hot></div></div>
    </div>
  </div>
</template>

<script>
import Hot from "./Hot";
import NewItem from "../../components/NewItem.vue";
export default {
  name: "",
  data() {
    return {
      page: 1,
      newList: [],
      loading: false,
      noMore: false,
      flag: true,
    };
  },
  created() {},
  mounted() {
    this.getList();
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  // mounted() {
  //   // 加载更多
  //   this.getList();
  // },
  computed: {
    disabled() {
      return this.loading || this.noMore;
    },
  },
  methods: {
    getList() {
      this.axios
        .get("/api/index/System/newsList", {
          params: { limit: 10, page: this.page },
        })
        .then((res) => {
          if (res.data.code == 200) {
           this.newList = this.newList.concat(res.data.data);
              this.loading = false;
          } else {
            this.loading = false;
            this.noMore = true;
            this.flag = false;
          }
        });
    },
    handleScroll() {
      if (!this.flag)  return ;
        var scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        var windowHeight =
          document.documentElement.clientHeight || document.body.clientHeight;
        var scrollHeight =
          document.documentElement.scrollHeight || document.body.scrollHeight;
        if (
          scrollTop + windowHeight==scrollHeight-0 &&
          this.newList.length !== 0
        ) {
          this.loading = true;
          this.page++;
          this.getList();
        }
    },
  },
  components: {
    Hot,
    NewItem,
  },
};
</script>
<style scoped lang="less">
.eductioncon {
  position: relative;
  width: 1200px;
  margin: 0 auto;

  .eduction {
    display: flex;
    justify-content: space-between;
    .education_left {
      background: #fff;
      width: 780px;
      border: 1px solid #e4e4e4;
      padding: 0 25px;
      position: relative;
      dl {
        padding: 15px 0;
      }
    }
    .education_right {
      width: 340px;
      div{
 background: #fff;
      border: 1px solid #e4e4e4;
      }
    }
  }
}
</style>