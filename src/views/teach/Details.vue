<!--  -->
<template>
  <div class="eductioncon">
    <div class="eduction">
      <div class="education_left">
        <h3>{{ newdetail.l_title }}</h3>
        <div class="details_autor">
          <p>
            <span>发布时间：{{ newdetail.l_create_at }}</span
            ><span>编辑：{{ newdetail.author }}</span
            ><span>来源：典礼教案</span>
          </p>
        </div>
        <div class="content_details" v-html="newdetail.l_content"></div>
      </div>
      <div class="education_right">
        <div><Hot :type="type"></Hot></div>
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
      type:0,
    };
  },
  created() {},
  mounted() {
    this.axios
      .get("/api/index/System/getLearning", {
        params: { l_id: this.$route.params.id },
      })
      .then((res) => {
        if (res.data.code == 200) {
          this.type=res.data.data.category;
          this.newdetail = res.data.data;
        }
      });
  },
  methods: {
  
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