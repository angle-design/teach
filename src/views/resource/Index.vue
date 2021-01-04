<!--  -->
<template>
  <div class="resource_upload">
    <div class="resource_left">
      <el-col>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="jia">{{ flag == 1 ? "+" : "-" }}</i>
              <span>第一章 集合与函数概念</span>
            </template>
            <el-menu-item>第一节 函数及其表示</el-menu-item>
            <el-menu-item>第二节 函数的基本性质</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="jia">{{ flag == 1 ? "+" : "-" }}</i>
              <span>第二章 集合与函数概念</span>
            </template>
            <el-menu-item>第一节 函数及其表示</el-menu-item>
            <el-menu-item>第二节 函数的基本性质</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </div>
    <div class="resource_right">
      <div class="resource_right_body">
        <div class="resource_top">
          <div>
            <font>学段</font>
            <p><span v-for="(item,i) in lesson.period" :key="i">{{item.p_name}}</span></p>
          </div>
          <div>
            <font>学科</font>
            <p>
              <span v-for="(item,i) in lesson.subject" :key="i">{{item.s_name}}</span>
            </p>
          </div>
          <div>
            <font>版本</font>
            <p><span v-for="(item,i) in lesson.edition" :key="i">{{item.e_name}}</span></p>
          </div>
          <div>
            <font>教材</font>
            <p><span v-for="(item,i) in lesson.material" :key="i">{{item.e_name}}</span></p>
          </div>
          
          <div>
            <font>内容</font>
            <p><span v-for="(item,i) in lesson.content" :key="i">{{item.ct_name}}</span></p>
          </div>
        </div>
        <div class="resource_body">
            <FileItem><button><b></b>下载</button></FileItem>
        </div>
      </div>
      <!-- <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :total="1000"
        >
        </el-pagination> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import FileItem from '../../components/FileItem'
export default {
  name: "",
  data() {
    return {
      lesson:{},
      flag: 1,
    };
  },
  created() {},
  mounted() {
    console.log(this.$route.query.p_id,this.$route.query.s_id)
    this.getList(this.$route.query.p_id,this.$route.query.s_id)
  },
  components:{
    FileItem
  },
  methods: {
    //获取页面数据
    getList(p_id,s_id){
      this.axios.post('/api/index/books/book',{p_id:p_id,s_id:s_id}).then((res)=>{
        if(res.data.code==200){
          this.lesson=res.data.data;
        }
      })
    },
    handleOpen(key, keyPath) {
      this.flag = 2;
      //   console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      this.flag = 1;
      console.log(key, keyPath);
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
      padding: 15px 0;
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
    .el-menu {
      border: none;
      .el-submenu__title {
        display: flex;
        align-items: center;
        padding: 0 18px;
        font-weight: bold;
        font-size: 16px;
        height: 50px;
        line-height: 50px;
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
        margin-right: 5px;
      }
    }
  }
  .resource_right {
    width: 900px;
    padding: 15px 0;
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
            margin-right: 50px;
            border-radius: 4px;
            display: inline-block;
            cursor: pointer;
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
     
    }
    .block {
      display: flex;
      justify-content: center;
      margin-top: 30px;
    }
  }
}

/* @import url(); 引入css类 */
</style>