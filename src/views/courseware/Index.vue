<template>
  <div class="courseware">
    <div class="course_top">
      <div class="courdertop_left">
        <ul>
          <li v-for="(item, i) in lesson.edition" :key="i" @mouseenter="toShow(i)" @mouseleave="toHide(i)">
            {{ item.e_name }}<i class="iconfont icon-youjiantou1"></i>
            <div class="pup_course" v-if="item.flag=='true'">
              <span v-for="(item1,j) in item.booklet" :key="j" @click="toCoursedetails(item,item.bb_id)">{{item1.name}}</span>
              </div>
          </li>
        </ul>
      </div>
      <div class="courdertop_main">
        <myswiper swipeid="q_teach" v-if="aflag">
          <div
            class="swiper-slide"
            slot="swiper-con"
            v-for="(item, i) in swiperOne"
            :key="i"
          >
            <a :href="item.ac_url" target="_blank"
              ><img :src="item.ac_img" class="scal"
            /></a>
          </div>
        </myswiper>
        <div class="teach_con_leftswiper">
          <!-- 轮播图 -->
          <myswiper
            swipeid="z_teach"
            :slidesPerView="4"
            effect="slide"
            :pagination="false"
            :spaceBetween="10"
            v-if="bflag"
          >
            <div
              class="swiper-slide"
              slot="swiper-con"
              v-for="(item, i) in swiperTwo"
              :key="i"
            >
              <a :href="item.ac_url" target="_blank"
                ><img :src="item.ac_img" class="scal"
              /></a>
            </div>
          </myswiper>
          <!-- 左右导航栏 -->
          <div class="swiper-button-prev z_teachprev"><font></font></div>
          <div class="swiper-button-next z_teachnext"><font></font></div>
        </div>
      </div>
      <div class="courdertop_right" v-if="newList[0]">
        <Title>学科教育理念<span>更多</span></Title>
        <dl @click="toNew(newList[0].nid)">
          <dt v-if="newList[0].n_img">
            <img :src="newList[0].n_img" />
          </dt>
          <dd>
            <h4>{{ newList[0].title }}</h4>
            <p>
              {{ newList[0].desc }}
            </p>
          </dd>
        </dl>
        <ul>
          <li v-for="(item, i) in newList.slice(1)" :key="i"  @click="toNew(item.nid)">
            <CircleText :text="item.title"></CircleText>
          </li>
        </ul>
      </div>
    </div>
    <div class="new_upload">
      <div class="research_h3">
        <span><img src="../../assets/a.png" />资源下载</span>
        <!-- <font>更多</font> -->
      </div>
      <ul>
        <li
          v-for="(item, i) in courseList"
          :key="i"
          @click="toCourse(item.bo_id)"
        >
          <PicText :item="item"></PicText>
          <span>{{ item.create_at.split(' ')[0] }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import myswiper from "@/components/swiper/Index.vue";
import Title from "@/components/title.vue";
import CircleText from "@/components/text/CircleText.vue";
import PicText from "@/components/text/PicText.vue";
export default {
  data() {
    return {
      swiperOne: [],
      swiperTwo: [],
      aflag: false,
      bflag: false,
      lesson: [],
      newList: [],
      courseList: [],
      edition:[]
    };
  },
  mounted() {
    this.getList(this.$route.query.p_id, this.$route.query.s_id);
    // 轮播图
    this.axios
      .get("/api/index/System/activity", {
        params: {
          type: 0,
          subject_id: this.$route.query.s_id,
        },
      })
      .then((res) => {
        if (res.data.code == 200) {
          this.swiperOne = res.data.data;
          this.aflag = true;
        }
      });
    // 小轮播
    this.axios
      .get("/api/index/System/activity", {
        params: {
          type: 1,
          subject_id: this.$route.query.s_id,
        },
      })
      .then((res) => {
        if (res.data.code == 200) {
          this.swiperTwo = res.data.data;
          this.bflag = true;
        }
      });
    this.axios
      .post("/api/index/System/newsList", {
        subject_id: this.$route.query.s_id,
        limit: 7,
        page: 1,
      })
      .then((res) => {
        if (res.data.code == 200) {
          this.newList = res.data.data;
        }
      });
    this.axios
      .get("/api/index/System/recommend", {
        params: { subject_id: this.$route.query.s_id },
      })
      .then((res) => {
        if (res.data.code == 200) {
          this.courseList = res.data.data;
        }
      });
  },
  methods: {
       toCoursedetails(obj,id){
         console.log(obj)
        let { href } = this.$router.resolve({
          path: '/home/resource',query: {p_id:this.$route.query.p_id,s_id:this.$route.query.s_id,b_id:id,e_id:obj.e_id}
        });
          window.open(href, "_blank");
    },
     // 进入资讯详情
    toNew(id) {
      let { href } = this.$router.resolve({
        path: "/home/newdetails/" + id,
      });
      window.open(href, "_blank");
    },
    toShow(index){
      this.$set(this.edition[index],'flag','true')
      this.$forceUpdate() 
      
    },
    toHide(index){
      this.$set(this.edition[index],'flag','false')
      this.$forceUpdate() 
    },
    // 进入下载详情
    toCourse(id) {
      let { href } = this.$router.resolve({
        path: "/home/coursedetails/" + id,
      });
      window.open(href, "_blank");
    },
    //获取页面数据
    getList(p_id, s_id) {
      this.axios
        .post("/api/index/books/getTwoBookList", { p_id: p_id, s_id: s_id })
        .then((res) => {
          if (res.data.code == 200) {
            this.lesson = res.data.data;
            this.edition=res.data.data.edition;
            this.edition.map(item=>{
              item.flag='false'
            })
          }
        });
    },
  },
  components: {
    myswiper,
    Title,
    CircleText,
    PicText,
  },
};
</script>

<style lang="less" scoped>
@bgurl: "../../assets/icon.png";
@size:260px 260px;
.course_top {
  display: flex;
  width: 1200px;
  margin: 0 auto;
  .courdertop_left {
    width: 186px;
    height: 340px;
    background: #868585;
    color: #fff;
    margin-right: 12px;
    position: relative;

    h4 {
      height: 44px;
      background: #bd2025;
      line-height: 44px;
      text-align: center;
    }
    ul {
      li {
        padding: 0 16px 0 22px;
        line-height: 45px;
        border-bottom: 1px solid #939292;
        display: flex;
        justify-content: space-between;
        position: relative;
        cursor: pointer;
        .pup_course {
          width: 696px;
          height:auto;
          padding:0 10px;
          box-sizing: border-box;
          background:#f8f8f8;
          position: absolute;
          left:186px;
          top: 0;
          z-index: 3;
          span{
            margin:0 20px;
            font-size:14px;
            padding:5px 10px;
            color:#333;
            &:hover{
              background: #bd2025;
              color:#fff;
              border-radius:5px;
            }
          }
        }
        i {
          color: rgba(255, 255, 255, 0.6);
        }
        &:hover {
          font-weight: bold;
          i {
            color: #fff;
          }
          .pup_course{
            span{
              font-weight: normal;
              cursor: pointer;
              &:hover{
                 font-weight: bold;
              }
            }
          }
        }
        &:last-child {
          border-bottom: 0;
        }
      }
    }
  }
}
.courdertop_main {
  margin-right: 16px;
  .swiper-container,
  .swiper-slide {
    width: 684px;
    height: 256px;
    overflow: hidden;
    img {
      width: 684px;
      height: 256px;
    }
  }
}
.teach_con_leftswiper {
  width: 624px;
  height: 60px;
  background: #f2f2f2;
  margin-top: 8px;
  position: relative;
  padding: 5px 30px;
  .swiper-container {
    width: 638px;
    height: 60px;
    .swiper-slide {
      overflow: hidden;
      img {
        width: 140px;
        height: 60px;
      }
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    width: 25px;
    height: 60px;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -30px;
    font {
      display: block;
      width: 14px;
      height: 37px;
      background: url(@bgurl) no-repeat;
      background-size: 180px 180px;
      background-position: -65px -136px;
    }
  }
  .swiper-button-next {
    right: 0;
    font {
      background-position: -86px -136px;
    }
  }
  .swiper-button-prev {
    left: 0;
  }
}
.courdertop_right {
  width: 300px;
  .title {
    border-bottom: 1px dashed #b5b4b4;
  }
  dl {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    cursor: pointer;
    dt {
      width: 110px;
      height: 100px;
      overflow: hidden;
      border-radius: 10px;
      img {
        width: 110px;
        height: 100px;
      }
    }
    dd {
      font-size: 14px;
      color: #999;
      margin-left: 10px;
      width: 180px;
      h4 {
        color: #333;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 30px;
      }
    }
  }
  & > ul {
    margin-top: 10px;
  }
}
.new_upload {
  width: 1200px;
  margin: 0 auto;
  .research_h3 {
    height: 60px;
    border-bottom: 3px solid #dedede;
    display: flex;
    line-height: 80px;
    justify-content: space-between;
    font-size: 22px;
    color: #333;
    font-weight: bold;
    position: relative;
    img {
      margin-right: 5px;
    }
    font {
      color: #acacac;
      font-size: 14px;
      cursor: pointer;
    }
  }
  ul {
    display: flex;
    padding: 10px 0;
    flex-wrap: wrap;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 32px;
      font-size: 14px;
      position: relative;
      padding: 0 32px 0 0;
      width: 50%;
      box-sizing: border-box;
      border-right: 1px dashed #cfcfcf;

      &:after {
        width: 0;
        height: 0;
      }
      &:nth-child(even) {
        padding: 0 0 0 32px;
        border-right: none;
      }
      span {
        margin-left: 10px;
        font-size: 14px;
        color: #acacac;
      }
    }
  }
}
</style>