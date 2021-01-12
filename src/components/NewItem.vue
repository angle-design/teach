<!--  -->
<template>
  <dl v-if="item" @click="toDetails(item.nid)">
    <dt>
      <img :src="item.n_img" class="scal"/>
    </dt>
    <dd>
      <h4>{{ item.title }}</h4>
      <p>
        {{ item.desc }}
      </p>
      <font
        ><slot></slot><font>{{ item.create_at }}</font></font
      >
    </dd>
  </dl>
</template>

<script>
export default {
  name: "",
  props: {
    item: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    toDetails(id) {
      let { href } = this.$router.resolve({
        path: "/home/newdetails/" + id,
      });
      window.open(href, "_blank");
    },
  },
};
</script>
<style scoped lang="less">
dl {
  padding: 25px 30px;
  border-bottom: 1px solid #ececec;
  display: flex;
  cursor: pointer;
  &:Hover{
    background:#f8f8f8;
  }
  dt {
    width: 154px;
    height: 98px;
    margin-right: 20px;
    overflow: hidden;
    img {
      width: 154px;
      height: 98px;
    }
  }
  dd {
    height: 98px;
    display: flex;
    flex: 1;
    justify-content: center;
    flex-direction: column;
    h4 {
      font-size: 18px;
      line-height: 30px;
    }
    p {
      font-size: 14px;
      color: #666;
      height: 80px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    font {
      font-size: 14px;
      color: #acacac;
      margin-top: 5px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>