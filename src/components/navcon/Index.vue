<template>
  <div class="top_nav">
    <div class="nav_list">
      <ul>
        <li v-for="(item, i) in list" :key="i" @click="toBlank(item.path)" :class="[i===0?'active':'']">
          <template v-if="item.flag!='false'">
              {{ item.name }}
          </template>
        </li>
      </ul>
    </div>
    <div class="nav_left">
      <div class="nav_con">
        <p>
          <span
            v-for="(item, i) in lesson"
            :key="i"
            @click="toTabLesson(item.p_id, i)"
            :class="[index == i ? 'active' : '']"
            >{{ item.p_name }}</span
          >
        </p>
        <ul  @mouseleave="a=false">
          <li v-for="(item1, index) in subject.subject" :key="index" @click="toTeach(p_id,item1.s_id)" @mouseenter="toPup(item1)">
            {{ item1.s_name }}
            <i class="iconfont icon-youjiantou1"></i>
            
          </li>
           <div class="navpup_body" v-show="a">
        <div>
          <h3>教材</h3>
          <span><font @click="toCoursedetails(1,item.e_id)" v-for="(item,i) in info.edition" :key="i">{{item.e_name}}</font></span>
        </div>
         <div>
          <h3>内容</h3>
           <span><font @click="toCoursedetails(2,item.ct_id)" v-for="(item,i) in info.content" :key="i">{{item.ct_name}}</font></span>
        </div>
      </div>
        </ul>
      </div>
     
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lesson: [],
      subject: {},
      index: 0,
      p_id:0,
      s_id:0,
      list: [
        { name: "首页", path: "/index",flag:true,},
        // { name: "资源下载", path: "/home/resource",flag:true,},
        { name: "教研交流", path: "/home/teach",flag:true, },
        { name: "教育资讯", path: "/home/education",flag:true, },
        { name: "课题进展", path: "/home/topic",flag:true, },
        { name: "个人中心", path: "/home/my",flag:localStorage.getItem('login') },
      ],
      info:{},
      a:false,
    };
  },
  mounted() {
    //左侧课节
    this.axios.get("/api/index/System/indexBooksList").then((res) => {
      if (res.data.code == 200) {
        this.lesson = res.data.data;
        this.p_id=res.data.data[0].p_id;
        this.s_id=res.data.data[0].subject[0].s_id;
        this.toTabLesson(res.data.data[0].p_id, this.index);
      }
    });
    
  },
  methods: {
    // 进入三级页
    toCoursedetails(type,id){
      console.log(id)
      if(type==1){
        let { href } = this.$router.resolve({
          path: '/home/resource',query: {p_id:this.p_id,s_id:this.s_id,ct_id:0,e_id:id}
        });
          window.open(href, "_blank");
      }else if(type==2){
         let { href } = this.$router.resolve({
          path: '/home/resource',query: {p_id:this.p_id,s_id:this.s_id,ct_id:id,e_id:0}
        });
          window.open(href, "_blank");
      }
       
    
    },
    toPup(obj){
      this.a=true;
      this.info=obj;
    },
    toTeach(a,b){
        this.s_id=b;
       let { href } = this.$router.resolve({
        path: '/home/courseware'
        ,query: {p_id:a,s_id:b}
      });
      window.open(href, "_blank");
    
    },
    toTabLesson(id, index) {
      this.index = index;
      this.p_id=id;
      this.subject = this.lesson.find((item) => item.p_id == id);
    },
    // 跳转新窗口
    toBlank(path) {
      let { href } = this.$router.resolve({
        path: path,
      });
      window.open(href, "_blank");
    },
  },
};
</script>

<style  lang="less" scoped>
@bgurl: "../../assets/icon.png";
@size:260px 260px;
.top_nav {
  position: relative;
  height:508px;
  .nav_list {
    position: absolute;
    top: 0;
    left: 0;
    height: 44px;
    border-bottom: 1px solid #dedede;
    line-height:41px;
    width: 100%;
    ul {
      left:50%;
      margin-left:-400px;
      display: flex;
      font-size: 16px;
      position: absolute;
      z-index:2;
      li {
        margin: 0 30px;
        padding: 0 10px;
        cursor: pointer;
        &:hover{
          color: #b9151e;
          font-weight: bold;
        }
        &.active {
          color: #b9151e;
          font-weight: bold;
          border-bottom: 2px solid #b9151e;
        }
      }
    }
  }
  .nav_left {
    position: relative;
    z-index: 1;
    color: #fff;
    width: 186px;
    position: absolute;
    left:50%;
    margin-left:-600px;
   
    .nav_con {
      width: 186px;
      height: 508px;
      background: #868585;
       position: relative;
      z-index:3;
    }
    p {
      height: 44px;
      line-height: 44px;
      display: flex;
      background: #b9151e;
     
      span {
        display: flex;
        flex: 1;
        justify-content: center;
        cursor: pointer;
        &.active {
          background: #868585;
        }
      }
    }
    ul {
      position: relative;
       .navpup_body{
      position: absolute;
      left:186px;
      height:463px;
      width:1014px;
      background:#f8f8f8;
      top:2px;
      z-index:3;
      padding:30px;
      box-sizing: border-box;
      color:#333;
      &>div{
        border-bottom:1px dashed #c1c1c1;
          margin-bottom:20px;
          padding-bottom:10px;
          &:last-child{
            border:none;
          }
        h3{
          line-height:25px;
          padding:5px 10px;
          border-radius:5px;
          background:#e7e7e7;
          display: inline-block;
          font-size:16px;
        }
        span{
          display: flex;
          flex-wrap: wrap;
          font{
            color:#333;
            font-size:14px;
            padding:5px 10px;
            cursor: pointer;
            margin:10px 20px 5px;
            &:hover{
              background:#bd2025;
              border-radius:5px;
              color:#fff;
            }
          }
        }
      }
    }
      li {
        height: 48px;
        line-height: 48px;
        border-bottom: 1px solid #939292;
        padding: 0 15px;
        text-align: left;
        position: relative;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        i{
          font-size:14px;
          color:rgba(255,255,255,0.6)
        }
        &:hover{
           font-weight: bold;
          i{
            color:#fff
          }
        }
        &:last-child {
          border-bottom: 0;
        }
      }
    }
  }
}
</style>