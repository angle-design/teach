<template>
  <p class="pictext">{{ text }}</p>
</template>

<script>
export default {
  props: {
    text: "",
  },
};
</script>

<style lang="less" scoped>
@bgurl: "../../assets/icon.png";
@size:260px 260px;
.pictext {
  padding: 0 22px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 14px;
    height: 18px;
    background: url(@bgurl) no-repeat;
    background-size: @size;
    background-position: -237px -99px;
    top: 50%;
    margin-top: -9px;
  }
}
</style>