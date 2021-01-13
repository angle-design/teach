<!--  -->
<template>
  <div class="resource_upload">
    <div class="resource_left">
      <el-col v-if="unit_section&&unit_section.length!==0">
        <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :default-openeds="openeds"
        >
          <template v-for="(item1, i) in unit_section">
            <el-submenu :key="i" :index="i + ''">
              <template slot="title">
                <span>{{ item1.name }}</span>
              </template>
              <el-submenu
                v-for="(item2, j) in item1.child"
                :key="j"
                :index="i + '-' + j + ''"
              >
                <template slot="title">{{ item2.name }}</template>
                <template v-for="(item3, m) in item2.child">
                  <el-submenu
                    v-if="item3.child"
                    :key="m"
                    :index="i + '-' + j + '-' + m + ''"
                  >
                    <template slot="title">{{ item3.name }}</template>
                    <el-menu-item
                      style="margin-left: 68px"
                      v-for="(item4, g) in item3.child"
                      :key="g"
                        :class="[item4.style==1?'is-active':'']"
                      :index="i + '-' + j + '-' + m + '-' + g + ''"
                      @click="toList(item1.id, item2.id, item3.id, item4.id)"
                      >{{ item4.name }}</el-menu-item
                    >
                  </el-submenu>

                  <template v-else>
                    <el-menu-item
                      :key="m"
                      :index="i + '-' + j + '-' + m + ''"
                      :class="[item3.style==1?'is-active':'']"
                      @click="toListOne(item1.id, item2.id, item3.id)"
                      >{{ item3.name }}</el-menu-item
                    >
                  </template>
                </template>
              </el-submenu>
            </el-submenu>
          </template>
        </el-menu>
      </el-col>
    </div>
    <div class="resource_right">
      <div class="resource_right_body">
        <div class="resource_top">
          <div>
            <font>学段</font>
            <p>
              <span
                v-for="(item, i) in lesson.period"
                :key="i"
                :class="[item.style == 1 ? 'active' : '']"
                @click="toTabList(1, item.p_id)"
                >{{ item.p_name }}</span
              >
            </p>
          </div>
          <div>
            <font>学科</font>
            <p>
              <span
                v-for="(item, i) in lesson.subject"
                :key="i"
                :class="[item.style == 1 ? 'active' : '']"
                @click="toTabList(2, item.s_id)"
                >{{ item.s_name }}</span
              >
            </p>
          </div>
          <div>
            <font>版本</font>
            <p>
              <span
                v-for="(item, i) in lesson.edition"
                :key="i"
                :class="[item.style == 1 ? 'active' : '']"
                @click="toTabList(3, item.edition_id)"
                >{{ item.e_name }}</span
              >
            </p>
          </div>
          <div>
            <font>教材</font>
            <p>
              <span
                v-for="(item, i) in lesson.booklet"
                :key="i"
                :class="[item.style == 1 ? 'active' : '']"
                @click="toTabList(4, item.bb_id)"
                >{{ item.name }}</span
              >
            </p>
          </div>

          <div>
            <font>内容</font>
            <p>
              <span
                v-for="(item, i) in lesson.content"
                :key="i"
                :class="[item.style == 1 ? 'active' : '']"
                @click="setClickTask(i)"
                >{{ item.ct_name }}</span
              >
            </p>
          </div>
        </div>
        <div class="resource_body">
          <div
            v-for="(item, i) in lesson.book"
            :key="i"
            @click="toCourse(item.bo_id)"
          >
            <FileItem :item="item"
              ><button>
                <i class="iconfont icon-xiazai1"></i>下载
              </button></FileItem
            >
          </div>
        </div>
      </div>
      <div class="block">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pageSize"
          layout="prev, pager, next, jumper"
          :total="total"
          :hide-on-single-page="true"
        >
        </el-pagination>
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
      openeds: ["0", "0-0", "0-0-0"],
      lesson: {},
      flag: 1,
      total: 0,
      pageSize: 5,
      currentPage: 1,
      unit_section: [],
      params: {
        p_id: 0,
        s_id: 0,
        ct_id: "",
        e_id: 0,
        b_id: 0,
        ch_id: 0,
        se_id: 0,
        books_id: 0,
        page: 1,
        limit: 8,
      },
      leftflag: false,
    };
  },
  created() {},
  mounted() {
    this.params.p_id = this.$route.query.p_id ? this.$route.query.p_id : 0;
    this.params.s_id = this.$route.query.s_id ? this.$route.query.s_id : 0;
    this.params.ct_id = this.$route.query.ct_id ? this.$route.query.ct_id : 0;
    this.params.e_id = this.$route.query.e_id ? this.$route.query.e_id : 0;
    this.params.se_id = this.$route.query.se_id ? this.$route.query.se_id : 0;
    this.getList();
  },
  components: {
    FileItem,
  },
  methods: {
    toList(e_id, b_id, ch_id, se_id) {
      this.params.e_id = e_id;
      this.params.b_id = b_id;
      this.params.ch_id = ch_id;
      this.params.se_id = se_id;
      this.toTabList();
    },
    toListOne(b_id, ch_id, se_id) {
      this.params.b_id = b_id;
      this.params.ch_id = ch_id;
      this.params.se_id = se_id;
      this.toTabList();
    },
    // 标签内容切换
    setClickTask(i) {
      var style = this.lesson.content[i].style;
      this.lesson.content[i].style = style == 1 ? 0 : 1;
      this.aClixk();
    },
    aClixk() {
      var a = this.lesson.content.filter((item) => {
        return item.style === 1;
      });
      var b = "";
      a.map((item) => {
        b += item.ct_id + ",";
      });
      this.toTabList(5, b);
    },
    toTabList(type, id) {
this.params.page = 1;
      if (type == 1) {
        this.params={
        p_id: 0,
        s_id: 0,
        ct_id: "",
        e_id: 0,
        b_id: 0,
        ch_id: 0,
        se_id: 0,
        books_id: 0,
        page: 1,
        limit: 8,
      },
        this.params.p_id = id;
      } else if (type == 2) {
        this.params.s_id = id;
      } else if (type == 3) {
        this.params.e_id = id;
      } else if (type == 4) {
        this.params.b_id = id;
      } else if (type == 5) {
        this.params.ct_id = id;
      }
      this.getList();
    },
    toCourse(id) {
      let { href } = this.$router.resolve({
        path: "/home/coursedetails/" + id,
      });
      window.open(href, "_blank");
    },
    //获取页面数据
    getList() {
      // console.log(this.params.page)
      this.lesson = [];
      this.unit_section=[];
      
      this.axios.post("/api/index/books/book", this.params).then((res) => {
        if (res.data.code == 200) {
          // if (!this.leftflag) {
            this.unit_section = res.data.data.unit_section;
            var a = res.data.data.tighten.split("-");
            var b = ["0"];
            for (var i = 0; i < a.length; i++) {
               if (i == 0) {
                b.push(a[0]);
              }
              if (i == 1) {
                b.push(a[0] + "-" + a[1]);
              }
              if (i == 2) {
                b.push( a[0] + "-" + a[1]+ "-" + a[2]);
              }
             
              if (i == 3) {
                b.push(a[0] + "-" + a[1]+ "-" + a[2]+ "-" + a[3]);
              }
            }
            this.openeds=b;
            // console.log(b)
          //   this.leftflag = true;
          // }
          this.total = res.data.data.book_count;

          this.lesson = res.data.data;
        }
      });
    },
    handleCurrentChange: function (currentPage) {
    // console.log(currentPage)
      this.params.page=this.currentPage = currentPage;
      // this.params.page = this.currentPage;
      this.getList();
    },
    handleOpen(key, keyPath) {},
    handleClose(key, keyPath) {
      // this.flag = 1;
      // console.log(key, keyPath);
    },
  },
};
</script>
<style lang="less">
.resource_upload {
  margin-top: 30px;
  font-size: 14px;
  width: 1200px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  .resource_left {
    width: 280px;
    overflow: hidden;
    margin-right: 20px;
    .el-col {
      border: 1px solid #e4e4e4;
      padding: 10px 10px;
      background: #fff;
      .el-menu-item {
        padding-left: 7px !important;
        margin-left: 50px;
        color: #666;
        height: 30px;
        line-height: 30px;

        border-left: 1px solid #dedede;
        &:hover {
          color: #bd2025;
        }
      }
    }
    .el-submenu {
      .el-submenu__title {
        display: flex;
        align-items: center;
        padding: 0 18px;
        font-weight: bold;
        font-size: 16px;
        height: 50px;
        line-height: 50px;
      }
    }
    .el-menu {
      border: none;
      .el-submenu {
        .el-submenu__title {
          padding: 0 18px;
          font-size: 14px;
          height: 35px;
          line-height: 35px;
        }
      }
      .el-submenu__title {
        display: flex;
        align-items: center;
        padding: 0 18px;
        font-weight: bold;
        font-size: 16px;
        height: 50px;
        line-height: 50px;
        &.active {
          color: #bd2025;
          background: #cecece;
        }
      }
      .jia {
        width: 16px;
        height: 16px;
        background: #c4c4c4;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        margin-right:5px;
      }
    }
  }
  .resource_right {
    width: 900px;
    padding: 0 0 15px;
    font-size: 16px;
    .resource_right_body {
      border: 1px solid #e4e4e4;
      background: #fff;
    }
    .resource_top {
      padding: 0 30px 20px 30px;
      border-bottom: 10px solid #f8f8f8;
      & > div {
        display: flex;
        height: 50px;
        align-items: center;
        font {
          background: #f4f4f4;
          font-weight: bold;
          padding: 2px 5px;
          border-radius: 2px;
          margin-right: 12px;
        }
        &:last-child {
          p {
            border-bottom: none;
          }
        }
        p {
          width: 780px;
          height: 50px;
          display: flex;
          align-items: center;
          border-bottom: 1px dashed #d6d6d6;
          span {
            height: 28px;
            line-height: 28px;
            padding: 3px 10px;
            margin-right: 30px;
            border-radius: 4px;
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
      }
    }
    .resource_body {
      padding: 20px 0;
      & > div {
        cursor: pointer;
      }
    }
    .block {
      display: flex;
      justify-content: center;
      margin-top: 30px;
    }
  }
}
.resource_upload .resource_left .el-col .el-menu-item {
  margin-left: 50px;
}
.resource_upload .resource_left .el-col .el-menu-item.is-active {
  color: #fff;
  background: #bd2025;
}
.resource_upload .resource_left .el-col .el-submenu {
  position: relative;
}
.resource_upload .resource_left .el-col .el-submenu:after {
  content: "+";
  left: 0;
  top: 10px;
  position: absolute;
  width: 16px;
  height: 16px;
  background: #c4c4c4;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin-right: 5px;
  font-size: 16px;
  font-weight: bold;
}
.resource_upload .resource_left .el-col .el-submenu.is-opened:after {
  content: "-";
}
.resource_upload .resource_left .el-col .el-submenu .el-submenu:after {
  left: 18px;
}
</style>