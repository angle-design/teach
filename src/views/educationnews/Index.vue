<!--  -->
<template>
  <div class="eduction">
      <div class="education_left">
        <NewItem v-for="(item,i) in newList" :key="i" :item="item">
          <font>来源：典例教案</font>
        </NewItem>
      </div>
    <div class="education_right"><Hot></Hot></div>
    
  </div>
</template>

<script>
import Hot from "./Hot";
import NewItem from '../../components/NewItem.vue';  
export default {
  name: "",
  data() {
    return {
      newList:[]
    };
  },
  created() {},
  mounted(){
     this.axios.get("/api/index/System/newsList").then((res) => {
      if (res.data.code == 200) {
        this.newList = res.data.data;
      }
    });
  },
  components: {
    Hot,
    NewItem
  },
};
</script>
<style scoped lang="less">
.eduction{
    width:1200px;
    margin:0 auto;
    display: flex;
    justify-content: space-between;
    .education_left{
        background:#fff;
        width:780px;
        border:1px solid #e4e4e4;
        padding:0 25px;
        dl{
          padding:15px 0;
        }
    }
    .education_right{
         width:340px;
        background:#fff;
        border:1px solid #e4e4e4;
    }
}
</style>