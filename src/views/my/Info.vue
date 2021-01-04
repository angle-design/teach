<template>
    <div class="myInfo">
        <dl>
            <dt><img :src="info.u_headimg"></dt>
            <dd>
                <span>{{info.username}}</span>
                <font></font>
                <!-- <font>用记名：{{info.username}}</font> -->
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
    name:"",
    data() {
        return {
            info:{}
        }
    },
    created() {

    },
    mounted() {
        this.axios.get("/api/index/System/getUserInformation").then(res=>{
            if(res.data.code==200){
                this.info=res.data.data;
            }
        })
    }
}
</script>
<style scoped lang="less">
@bgurl: "../../assets/icon.png";
@size:260px 260px;
    .myInfo{
        height:540px;
        padding-top:50px;
        display: flex;
        justify-content: center;
        dl{
             display: flex;
              height:136px;
              align-items: center;
            dt{
                width:136px;
                height:136px;
                overflow: hidden;
                border-radius:50%;
                margin-right:18px;
                img{
                  width:136px;
                height:136px;
                }
            }
            dd{
                display:flex;
                font-size:20px;
                line-height:40px;
                align-items: center;
                font{
                    font-size:16px;
                    width:24px;
                    height:24px;
                    background:url(@bgurl) no-repeat center center;
                    background-size:@size;
                    background-position:-230px -209px;
                    display: flex;
                    margin-left:5px;
                    cursor: pointer;
                }
            }
        }
    }
</style>