<template>
  <div class="foot">
    <h3><font></font>010-63843733</h3>
    <p>版权所有© 典例教案保留一切法律许可权利。</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
@bgurl: "../../assets/icon.png";
@size:260px 260px;
.foot {
  width: 100%;
  height: 100px;
  background: #eaeaea;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  justify-content: center;
  margin-top:60px;
  h3 {
    font-size: 22px;
    line-height:30px;
    display: flex;
    align-items: center;
    margin-bottom:5px;
    font {
        display: inline-block;
      width: 30px;
      height: 30px;
      background: url(@bgurl) no-repeat;
      background-size: @size;
      background-position: -11px -97px;
      margin-right:10px;
    }
  }
}
</style>