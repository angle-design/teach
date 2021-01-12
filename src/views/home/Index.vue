<template>
  <div class="teach_home">
    <Header :type="1"></Header>
    <main>
      <div class="teach_top">
        <NavCon></NavCon>
        <div class="teach_con">
          <div class="teach_con_body">
            <div class="teach_con_left">
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
            <div class="teach_con_right">
              <Title
                >课程进展<span
                  ><router-link tag="a" target="_blank" to="/home/topic"
                    >更多</router-link
                  ></span
                ></Title
              >
              <dl @click="toTopic(onepro.toid)">
                <dt>
                  <img :src="onepro.n_img" class="scal" />
                </dt>
                <dd>
                  <h4>{{ onepro.title }}</h4>
                  <p>
                    {{ onepro.desc }}
                  </p>
                </dd>
              </dl>
              <ul>
                <li
                  v-for="(item, i) in progress"
                  @click="toTopic(item.toid)"
                  :key="i"
                >
                  <CircleText :text="item.title"></CircleText>
                </li>
              </ul>
            </div>
          </div>
          <!-- 资源推荐 -->
          <div class="resources">
            <Title>资源推荐</Title>
            <ul>
              <li
                v-for="(item, i) in resources"
                :key="i"
                @click="toCourse(item.bo_id)"
              >
                <PicText :item="item"></PicText>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="teach_research">
        <div class="research_h3">
          <span>教研交流</span>
          <div>
            <p>
              <span
                v-for="(item, i) in categoryList"
                :key="i"
                @mouseover="tabTeach(item.c_id, i)"
                ><font :class="[index == i ? 'active' : '']">{{
                  item.c_title
                }}</font
                >|</span
              >
            </p>
            <font
              ><router-link tag="a" to="/home/teach" target="_blank"
                >更多</router-link
              ></font
            >
          </div>
        </div>
        <ul style="height: 100px">
          <li
            v-for="(item, i) in teaching"
            :key="i"
            @click="toTeachDetails(item.l_id)"
          >
            <CircleText :text="item.l_title"></CircleText>
          </li>
        </ul>
        <div class="teach_research_swiper">
          <myswiper
            swipeid="h_teach"
            :slidesPerView="4"
            effect="slide"
            :spaceBetween="10"
            v-if="cflag"
            :pagination="false"
          >
            <div
              class="swiper-slide"
              slot="swiper-con"
              v-for="(item, i) in swiperLesson"
              :key="i"
              @click="toCoursedetails(item)"
            >
              <p>
                <img :src="item.img" class="scal" />
              </p>
              <div>
                <h4>{{ item.se_name }}</h4>
                <p>
                  <font>{{ item.e_name }}</font
                  ><font>{{ item.bb_name }}</font>
                </p>
                <button><i class="iconfont icon-xiazai1"></i>下载</button>
              </div>
            </div>
          </myswiper>
          <!-- 左右导航栏 -->
          <div class="swiper-button-prev h_teachprev"><font></font></div>
          <div class="swiper-button-next h_teachnext"><font></font></div>
        </div>
      </div>
      <div class="teach_research new_upload">
        <div class="research_h3">
          <span>最新下载</span>
        </div>
        <ul>
          <li
            v-for="(item, i) in newbestlist"
            :key="i"
            @click="toCourse(item.books_id)"
          >
            <PicText :item="item"></PicText>
            <span>{{ item.create_at.split(" ")[0] }}</span>
          </li>
        </ul>
      </div>
      <div class="teach_research new_upload hot_upload">
        <div class="research_h3">
          <span>最热下载</span>
        </div>
        <ul>
          <li
            v-for="(item, i) in hotbestlist"
            :key="i"
            @click="toCourse(item.books_id)"
          >
            <PicText :item="item"></PicText>
            <span>{{ item.create_at.split(" ")[0] }}</span>
          </li>
        </ul>
      </div>
      <div class="teach_research education_new">
        <div class="research_h3">
          <span>教育资讯</span>
          <div>
            <font
              ><router-link tag="a" to="/home/education" target="_blank"
                >更多</router-link
              ></font
            >
          </div>
        </div>
        <dl @click="toNew(item.nid)" v-for="(item, i) in onenew" :key="i">
          <dt>
            <img :src="imgsrc" class="scal" />
          </dt>
          <dd>
            <div>
              <h4>
                <a href="#" target="_blank">{{ item.title }}</a>
              </h4>
              <p v-html="item.content"></p>
            </div>
          </dd>
        </dl>
        <ul>
          <li v-for="(item, i) in newList" :key="i" @click="toNew(item.nid)">
            <CircleText :text="item.title"
              ><span>{{ item.create_at.split(" ")[0] }}</span></CircleText
            >
          </li>
        </ul>
      </div>
    </main>
    <div class="footer"><Foot></Foot></div>
  </div>
</template>

<script>
import { Loading } from "element-ui";
import Header from "@/components/header/Index.vue";
import NavCon from "@/components/navcon/Index.vue";
import Title from "@/components/title.vue";
import Foot from "@/components/foot/Index.vue";
import PicText from "@/components/text/PicText.vue";
import CircleText from "@/components/text/CircleText.vue";
import myswiper from "@/components/swiper/Index.vue";
export default {
  data() {
    return {
      lesson: [],
      swiperOne: [],
      swiperTwo: [],
      categoryList: [],
      index: 0,
      c_id: 1,
      imgsrc: "",
      onepro: {},
      progress: {}, //课题进展
      resources: [], //资源下载
      teaching: [], //教材交流
      onenew: [],
      newList: [], //新闻列表
      newbestlist: [],
      hotbestlist: [],
      swiperLesson: [], //课节轮播
      aflag: false,
      bflag: false,
      cflag: false,
    };
  },
  mounted() {
    // 轮播图
    Loading.service({ target: "body" });

    this.axios
      .get("/api/index/System/activity", {
        params: {
          type: 0,
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
        },
      })
      .then((res) => {
        if (res.data.code == 200) {
          this.swiperTwo = res.data.data;
          this.bflag = true;
        }
      });
    this.axios.get("/api/index/System/getTopic").then((res) => {
      if (res.data.code == 200) {
        (this.onepro = res.data.data[0]),
          (this.progress = res.data.data.slice(1));
      } else {
      }
    });
    this.axios.get("/api/index/System/recommend").then((res) => {
      if (res.data.code == 200) {
        this.resources = res.data.data;
      } else {
      }
    });
    this.learn();
    // 教育资讯
    this.axios
      .get("/api/index/System/newsList", {
        params: {
          limit: 7,
        },
      })
      .then((res) => {
        if (res.data.code == 200) {
          this.imgsrc = res.data.data[0].n_img;
          this.onenew = res.data.data.slice(0, 1);

          this.newList = res.data.data.slice(1);
        }
      });
    // 最新最热下载
    this.axios
      .post("/api/index/System/getBooksList", { order: "bo_count" })
      .then((res) => {
        if (res.data.code == 200) {
          this.hotbestlist = res.data.data;
        } else {
          // alert(res.data.descb);
        }
      });
    this.axios
      .post("/api/index/System/getBooksList", { order: "bl_create_at" })
      .then((res) => {
        if (res.data.code == 200) {
          this.newbestlist = res.data.data;
        } else {
          // alert(res.data.descb);
        }
      });
    //课节轮播
    this.axios.get("/api/index/System/getBsection").then((res) => {
      if (res.data.code == 200) {
        this.swiperLesson = res.data.data;
        this.cflag = true;
      }
    });
    this.$nextTick(() => {
      // 以服务的方式调用的 Loading 需要异步关闭
      Loading.service({ target: "body" }).close();
    });
  },
  methods: {
    // 进入三级页
    toCoursedetails(obj) {
      // alert(obj);
      let { href } = this.$router.resolve({
        path: "/home/resource",
        query: { p_id: obj.p_id, s_id: obj.s_id, se_id: obj.se_id },
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
    toTeachDetails(id) {
      let { href } = this.$router.resolve({
        path: "/home/teachdetails/" + id,
      });
      window.open(href, "_blank");
    },
    toTopic(id) {
      let { href } = this.$router.resolve({
        path: "/home/topicdetails/" + id,
      });
      window.open(href, "_blank");
    },
    learn() {
      this.axios
        .post("/api/index/System/learning", { category: this.c_id })
        .then((res) => {
          if (res.data.code == 200) {
            this.categoryList = res.data.data.category;
            this.teaching = res.data.data.learning;
          } else {
            // alert(res.data.descb);
          }
        });
    },
    toCourse(id) {
      let { href } = this.$router.resolve({
        path: "/home/coursedetails/" + id,
      });
      window.open(href, "_blank");
    },
    // 教研交流切换
    tabTeach(id, i) {
      this.index = i;
      this.c_id = id;
      this.teaching = [];
      this.learn();
    },
  },
  components: {
    Header,
    NavCon,
    Title,
    Foot,
    PicText,
    CircleText,
    myswiper,
  },
};
</script>

<style lang="less" scoped>
@bgurl: "../../assets/icon.png";
@size:260px 260px;
.teach_home {
  a {
    margin-top: 10px;
    color: #999;
    text-decoration: none;
    &:hover {
      color: #b9151e;
    }
  }
  .title {
    border-bottom: 1px dashed #b5b4b4;
  }
  .teach_top {
    position: relative;
    margin: 0 auto;
    .teach_con {
      position: absolute;
      top: 60px;
      left: 50%;
      margin-left: -400px;
      width: 1000px;
      z-index: 0;
      .teach_con_body {
        display: flex;
        justify-content: space-between;
        .teach_con_left {
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
        .teach_con_right {
          width: 300px;
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
                &:hover {
                  text-decoration: underline;
                  color: #b9151e;
                }
              }
            }
          }
          & > ul {
            margin-top: 10px;
          }
        }
        .teach_con_right {
          clear: both;
        }
      }
      .resources {
        margin-top: 10px;
        ul {
          display: flex;
          flex-wrap: wrap;
          margin-top: 6px;
          li {
            width: 50%;
            font-size: 14px;
            height: 30px;
            display: block;
            line-height: 30px;
          }
        }
      }
    }
  }
  .teach_research {
    width: 1200px;
    margin: 30px auto 0;
    .teach_research_swiper {
      height: 140px;
      position: relative;
      margin: 20px 0 20px;
      .swiper-container {
        width: 1100px;
        margin: 0 auto;
        height: 140px;
        .swiper-slide {
          width: 268px;
          border: 1px solid #d6d6d6;
          padding: 5px;
          box-sizing: border-box;
          display: flex;
          cursor: pointer;
          & > P {
            width: 102px;
            height: 128px;
            overflow: hidden;
            img {
              width: 102px;
              height: 128px;
            }
          }
          div {
            width: 135px;
            margin-left: 14px;
            h4 {
              height: 50px;
              line-height: 20px;
              display: flex;
              align-items: center;
              border-bottom: 1px dashed #9a9a9a;
            }
            p {
              display: flex;
              margin: 10px 0 14px;
              font {
                font-size: 12px;
                display: inline-block;
                background: #e3efff;
                border-radius: 5px;
                height: 20px;
                color: #666;
                padding: 0 3px;
                margin-right: 10px;
              }
            }
            button {
              width: 85px;
              height: 28px;
              border-radius: 5px;
              display: flex;
              align-items: center;
              justify-content: center;
              background: #bd2025;
              font-size: 12px;
              color: #fff;
              cursor: pointer;
              i {
                font-size: 12px;
              }
              &:hover {
                background: #90090d;
              }
            }
          }
        }
      }
      .swiper-button-next,
      .swiper-button-prev {
        width: 32px;
        height: 126px;
        background: #ececec;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: -63px;
        font {
          display: block;
          width: 18px;
          height: 53px;
          background: url(@bgurl) no-repeat;
          background-size: 260px 260px;
          background-position: -95px -196px;
        }
      }
      .swiper-button-next {
        right: 0;
        font {
          background-position: -122px -196px;
        }
      }
      .swiper-button-prev {
        left: 0;
      }
    }
    .research_h3 {
      height: 60px;
      border-bottom: 3px solid #dedede;
      display: flex;
      line-height: 80px;
      justify-content: space-between;
      font-size: 22px;
      padding-left: 28px;
      font-weight: bold;
      position: relative;
      &:after {
        content: "";
        width: 25px;
        height: 21px;
        position: absolute;
        bottom: 10px;
        left: 0;
        background: url(@bgurl) no-repeat;
        background-size: @size;
        background-position: -126px -130px;
      }
      div {
        display: flex;
        font {
          color: #acacac;
          font-size: 14px;
          cursor: pointer;
        }
        p {
          display: flex;
          font-size: 16px;
          color: #dedede;
          margin-right: 60px;
          span {
            height: 50px;
            display: flex;
            font {
              margin: 0 20px;
              color: #427bb5;
              height: 60px;
              line-height: 90px;
              position: relative;

              &.active {
                color: #b9151e;

                &:after {
                  animation: a 0.4s;
                  content: "";
                  width: 100%;
                  height: 3px;
                  background: #b9151e;
                  position: absolute;
                  bottom: -3px;
                  left: 0;
                }
              }
            }
          }
        }
      }
    }
    ul {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      margin-top: 20px;
      align-content: flex-start;
      li {
        line-height: 32px;
        height: 32px;
        font-size: 14px;
        width: 50%;
        box-sizing: border-box;
      }
    }
    &.new_upload {
      margin-top: 0;
      .research_h3 {
        &:after {
          width: 23px;
          height: 21px;
          background-position: -179px -137px;
        }
      }
      ul {
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
    &.hot_upload {
      margin-top: 10px;
      .research_h3 {
        &:after {
          width: 21px;
          height: 23px;
          background-position: -35px -173px;
        }
      }
    }
    &.education_new {
      margin-top: 10px;
      padding-bottom: 40px;
      .research_h3 {
        &:after {
          width: 18px;
          height: 23px;
          background-position: -45px -211px;
        }
      }
      dl {
        display: flex;
        margin-bottom: 20px;
        cursor: pointer;
        dt {
          width: 246px;
          height: 176px;
          margin-right: 20px;
          overflow: hidden;
          margin-top: 15px;
          flex-shrink: 0;
          img {
            width: 246px;
            height: 176px;
          }
        }
        dd {
          height:176px;
          overflow: hidden;
          div {
            margin-top: 15px;
            line-height: 24px;
            h4 {
              color: #b03333;
              line-height: 32px;
              a {
                color: #b03333;
                text-decoration: none;
                &:hover {
                  text-decoration: underline;
                }
              }
            }
            p {
              font-size: 14px;
              color: #999;
            }
          }
        }
      }
      ul {
        li {
          width: 47%;
          padding-right: 10px;
          &:nth-child(even) {
            margin-left: 6%;
          }
          span {
            font-size: 14px;
            color: #acacac;
          }
        }
      }
    }
  }
}
.footer {
  background: #eaeaea;
}
@keyframes a {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>