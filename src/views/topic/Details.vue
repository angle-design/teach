<!--  -->
<template>
  <div class="eductioncon">
    <div class="eduction">
      <div class="education_left">
        <h3>{{ newdetail.title }}</h3>
        <div class="details_autor">
          <p>
            <span>发布时间：{{ newdetail.create_at }}</span
            ><span>编辑：{{ newdetail.author }}</span
            ><span>来源：典礼教案</span>
          </p>
          <font class="collect-btn" @click="goCollect(newdetail.toid)"
            ><i
              :class="[
                newdetail.user_login == 1 && newdetail.type == 1
                  ? 'iconfont icon-shoucang'
                  : 'iconfont icon-shoucang1',
              ]"
            ></i
            >收藏</font
          >
        </div>
        <div class="content_details" v-html="newdetail.content"></div>
      </div>
      <div class="education_right">
        <div><Hot></Hot></div>
      </div>
    </div>
  </div>
</template>

<script>
import Hot from "./Hot";
export default {
  name: "",
  data() {
    return {
      newdetail: {},
      isCollect: false,
    };
  },
  created() {},
  mounted() {
    this.axios
      .get("/api/index/Files/getTopic", {
        params: { toid: this.$route.params.id },
      })
      .then((res) => {
        if (res.data.code == 200) {
          this.newdetail = res.data.data;
          if (this.newdetail.user_login == 1) {
            this.isCollect = true;
          }
        }
      });
  },
  methods: {
    goCollect(id) {
      if (this.newdetail.user_login == 0) {
        this.$message({
          showClose: true,
          message: "你还没有登陆哦～",
          type: "warning",
        });
        return false;
      }
      this.axios
        .get("/api/index/files/setTtoreUp", {
          params: { su_type: 3, link_id: id },
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.newdetail.type = this.newdetail.user_login == 1;
            this.$message({
              message: "收藏成功",
              type: "success",
            });
          }
        });
    },
  },
  components: {
    Hot,
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
      h3 {
        font-size: 22px;
        line-height: 40px;
        text-align: center;
        padding: 15px 0;
      }
      .details_autor {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ececec;
        align-items: center;
        height: 30px;
        p {
          span {
            margin-right: 30px;
            font-size: 14px;
            color: #acacac;
          }
        }
      }
      .content_details {
        font-size: 16px;
        margin-top: 30px;
        line-height: 30px;
      }
    }
    .education_right {
      width: 340px;
      & > div {
        background: #fff;
        border: 1px solid #e4e4e4;
        overflow: hidden;
      }
    }
  }
  .collect-btn {
    font-size: 14px;
    display: flex;
    align-items: center;
    font-weight: bold;
    cursor: pointer;
    i {
      margin-right: 3px;
      &.icon-shoucang {
        color: #b9151e;
      }
    }
  }
}
</style>