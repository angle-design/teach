<template>
  <p class="circletext"><font>{{ text }}</font><slot></slot></p>
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
  line-height: 28px;
  font-size: 14px;
  position: relative;
  padding-left: 10px;
  display: flex;
  align-items: enter;
  justify-content: space-between;
  cursor: pointer;
  &>font{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: block;
  }
 
  &>font:hover{
    color:#b9151e;
    text-decoration: underline;
  }
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