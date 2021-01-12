<!--  -->
<template>
  <div class="eductioncon">
    <div class="eduction">
      <div class="education_left">
        <div class="education_top">
          <div>
            <PicText :item="coursedetail" :fontSize1="24"></PicText>
            <button class="updown" @click="toUpDown()">
              <i class="iconfont icon-xiazai1"></i>下载
            </button>
          </div>
          <p>
            {{ coursedetail.b_desc }}
          </p>
        </div>
        <div class="details_autor">
          <p>
            <span>发布时间：{{ coursedetail.bl_create_at }}</span
            ><span>下载：{{ coursedetail.bo_count }}次</span
            ><span>大小：100kb</span>
          </p>
          <font class="collect-btn" @click="goCollect(coursedetail.bo_id)"
            ><i
              :class="[
                coursedetail.user_login == 1 && coursedetail.type == 1
                  ? 'iconfont icon-shoucang'
                  : 'iconfont icon-shoucang1',
              ]"
            ></i
            >收藏</font
          >
        </div>
        <div class="content_details">
          <img :src="coursedetail.bo_img" alt="" />
          <el-divider>全文阅读已结束，请下载使用</el-divider>
          <button class="updown">
            <i class="iconfont icon-xiazai1"></i>下载
          </button>
        </div>
      </div>
      <div class="education_right"><div></div></div>
    </div>
  </div>
</template>

<script>
import PicText from "@/components/text/PicText.vue";
export default {
  name: "",
  data() {
    return {
      coursedetail: {},
    };
  },
  mounted() {
    this.axios
      .post("/api/index/books/getBooksInfo", {
        b_id: this.$route.params.id,
      })
      .then((res) => {
        if (res.data.code == 200) {
          console.log(res.data.data, 111);
          this.coursedetail = res.data.data;
        }
      });
  },
  methods: {
    // 下载
    toUpDown() {
      this.axios
        .get("/api/index/files/exportFile", {
          params: { book_id: this.$route.params.id },
        })
        .then((res) => {
          if (res.data.code == 200) {
            let a = document.createElement("a");
            a.href = "/api/index/files/godown?book_id=" + this.$route.params.id;
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
    goCollect(id) {
      if (this.coursedetail.user_login == 0) {
        this.$message({
          showClose: true,
          message: "你还没有登陆哦～",
          type: "warning",
        });
        return false;
      }
      this.axios
        .get("/api/index/files/setTtoreUp", {
          params: { su_type: 1, link_id: id },
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.coursedetail.type = this.coursedetail.user_login == 1;
            this.$message({
              message: "收藏成功",
              type: "success",
            });
          }
        });
    },
  },
  components: {
    PicText,
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
      .education_top {
        padding-top: 30px;
        & > div {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          .pictext {
            font-size: 18px;
            color: #333;
            .iconfont {
              font-size: 24px;
            }
          }
        }
        & > P {
          font-size: 14px;
          color: #666;
          padding: 0 60px 10px 25px;
        }
      }

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
        margin: 30px 0;
        line-height: 30px;
        & > img {
          width: 96%;
          margin: 0 auto;
          display: block;
        }
        .updown {
          width: 132px;
          height: 42px;
          font-size: 18px;
          margin: 0 auto;
          display: block;
          cursor: pointer;
          i {
            font-size: 18px;
          }
        }
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
    .updown {
      width: 85px;
      height: 28px;
      border-radius: 5px;
      background: #bd2025;
      font-size: 14px;
      color: #fff;
      cursor: pointer;
      i {
        margin-right: 3px;
        font-size: 13px;
        font-weight: bold;
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
          color: #bd2025;
        }
      }
    }
  }
}
</style>