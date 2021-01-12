<template>
  <div class="teach">
    <p><img src="@/assets/teachbg.jpg" /></p>
    <div class="teach_body">
      <p>
        <span v-for="(item,i) in teachList.category" :key="i" :class="[index==i?'active':'']" @click="toTab(i,item.c_id)">{{item.c_title}}</span>
      </p>
      <div class="teach_con">
        <div v-for="(item,i) in list" :key="i" @click.capture="toTeachDetails(item.l_id)"><NewItem  :item="item"></NewItem></div>
        
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
      se_id: 0,
      index:0,
      teachList: [],
      list:[],
    };
  },
  mounted() {
      this.getList()
  },
  methods: {
     toTeachDetails(id){
      let { href } = this.$router.resolve({
        path: "/home/teachdetails/" + id,
      });
      window.open(href, "_blank");
    },
    getList() {
      this.axios
        .post("/api/index/System/learning", {
          category: this.se_id,
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.list=res.data.data.learning;
            this.list.forEach((el)=>{
                el.n_img=el.l_img;
                el.desc=el.l_desc;
                el.title=el.l_title;
                el.create_at=el.l_create_at;
            })
            this.teachList = res.data.data;
          }
        });
    },
    toTab(i,c_id){
        this.index=i;
        this.list=[];
        this.se_id=c_id;
        this.getList()
    }
  },
  components: {
    NewItem,
  },
};
</script>

<style  lang="less" scoped>
.teach {
  background: #f8f8f8;
  padding-bottom: 80px;

  & > P {
    width: 100%;
    background: #297ac5;
    height: 170rpx;
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
      width: 100%;
      height: 54px;
      font-size: 18rpx;
      background: #ececec;
      line-height: 54px;
      span {
        padding: 0 40px;
        margin: 0 20px;
        display: inline-block;
        cursor: pointer;
        &:hover{
            color:#bd2025;
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
      &>div{

  border-bottom: 1px solid #ececec;
  &:last-child{
    border-bottom:0;
  }
  dl{
    border:none
  }
      }
    }
  }
}
</style>