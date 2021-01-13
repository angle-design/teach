<template>
  <div class="teach">
    <p><img src="@/assets/teachbg.jpg" /></p>
    <div class="teach_body">
      <p id="listItem" :class="[isFixed ? 'fixedBox' : '']">
        <span
          v-for="(item, i) in teachList.category"
          :key="i"
          :class="[index == i ? 'active' : '']"
          @click="toTab(i, item.c_id)"
          >{{ item.c_title }}</span
        >
      </p>
      <div class="teach_con">
        <div
          v-for="(item, i) in list"
          :key="i"
          @click.capture="toTeachDetails(item.l_id)"
        >
          <NewItem :item="item"></NewItem>
        </div>
        <p v-if="loading"><img src="../../assets/load.gif" />加载中...</p>
        <p v-if="noMore">没有更多内容~</p>
        <!--<NewItem imgflag="false"></NewItem> -->
      </div>
    </div>
  </div>
</template>

<script>
import NewItem from "../../components/NewItem.vue";
export default {
  data() {
    return {
      isFixed: false,
      se_id: 1,
      index: 0,
      teachList: [],
      list: [],
      loading: false,
      noMore: false,
      flag: true,
      page: 1,
    };
  },
  mounted() {
    this.getList();
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll, false);
  },
  methods: {
    handleScroll() {
      var scrollTop =document.documentElement.scrollTop || document.body.scrollTop;
      this.isFixed = scrollTop >= 300 ? true : false;
      if (!this.flag) return;
      var windowHeight =document.documentElement.clientHeight || document.body.clientHeight;
      var scrollHeight =document.documentElement.scrollHeight || document.body.scrollHeight;
      if (scrollTop + windowHeight == scrollHeight - 0 &&this.list.length !== 0
      ) {
        this.loading = true;
        this.page++;
        this.getList();
      }
    },
    toTeachDetails(id) {
      let { href } = this.$router.resolve({
        path: "/home/teachdetails/" + id,
      });
      window.open(href, "_blank");
    },
    getList() {
      this.axios
        .post("/api/index/System/learning", {
          category: this.se_id,
          limit:5,
          page: this.page,
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.list = this.list.concat(res.data.data.learning);
            this.list.forEach((el) => {
              el.n_img = el.l_img;
              el.desc = el.l_desc;
              el.title = el.l_title;
              el.create_at = el.l_create_at;
            });
            this.teachList = res.data.data;
             this.loading = false;
            if (res.data.data.learning.length <5) {
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
    toTab(i, c_id) {
      this.index = i;
      this.list = [];
      this.page = 1;
      this.se_id = c_id;
      this.getList();
    },
  },
  components: {
    NewItem,
  },
};
</script>

<style  lang="less" scoped>
.teach {
  background: #f8f8f8;
  padding-bottom: 0px;

  & > P {
    width: 100%;
    background: #297ac5;
    height: 170px;
    overflow: hidden;
    img {
      width: 1200px;
      display: block;
      margin: 0 auto;
    }
  }
  .teach_body {
    width: 1200px;
    margin: 0 auto;
    margin-top: 20px;
    & > p {
      width: 1200px;
      height: 54px;
      font-size: 18px;
      background: #ececec;
      line-height: 54px;
      &.fixedBox {
        animation: a 0.3s;
        position: fixed;
        top: 0;
        left: 50%;
        margin-left: -600px;
        z-index:10;
      }
      span {
        padding: 0 40px;
        margin: 0 20px;
        display: inline-block;
        cursor: pointer;
        &:hover {
          color: #bd2025;
        }
        &.active {
          background: #bd2025;
          color: #fff;
        }
      }
    }
    .teach_con {
      background: #fff;
      border: 1px solid #ececec;
      & > P {
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
        border-bottom: 1px solid #ececec;
        &:last-child {
          border-bottom: 0;
        }
        dl {
          border: none;
        }
      }
    }
  }
}
@keyframes a {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>