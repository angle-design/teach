<template>
  <p class="circletext">{{ text }}</p>
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
.circletext {
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 28px;
  font-size: 14px;
  position: relative;
  padding-left: 10px;
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    margin-top: -2px;
    left: 2px;
    width: 4px;
    height: 4px;
    background: url(@bgurl) no-repeat;
    background-size: @size;
    background-position: -13px -156px;
  }
}
</style>