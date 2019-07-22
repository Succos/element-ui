<template>
    <div class="app-service">
        <el-row class="service-process">
            <h3>易修资讯</h3>
            <h4>INFORMATION</h4>
        </el-row>
        <el-row class="service-main">

        </el-row>
    </div>
</template>
<script>
    export default {
        name: 'AppInfomation'
    }
</script>
<style lang="css" scoped>
    .service-process h4 {
        margin-top: 0.48rem;
        font-size: 0.8rem;
        color: #aaa;
        text-transform: uppercase;
    }
    .service-process h3 {
        font-size:1.2rem;
    }
    .service-process {
        text-align: center;
        margin-top: 1rem;}

    .service-process h3:before {
        content: "";
        display: inline-block;
        vertical-align: middle;
        width: 2.26rem;
        height: 0.12rem;
        background: url("../../../assets/index/icon8.png") no-repeat;
        background-size: 100% 100%;margin-right: 0.40rem;}
    .service-process h3:after {
        content: "";
        display: inline-block;
        vertical-align: middle;
        width: 2.26rem;height: 0.12rem;
        background: url("../../../assets/index/icon9.png") no-repeat; background-size: 100% 100%;margin-left: 0.40rem;}

    .app-service {
        padding: 0.02rem 0 0.6rem 0;
        background: url("../../../assets/index/service_bg_img.jpg") no-repeat center;
        background-size: cover;
    }
    .service-list {
        margin-top: 0.45rem;
        list-style: none;
        padding-left: 0
    }
    .service-list li {
        float: left;
        width: 20%;
        text-align: center;
        position: relative; }
    .service-list li a {
        display: block;
    }
    .service-list li .pic {
        width: 3rem;
        height: 3rem;
        margin: 0 auto;
        line-height:3rem;
        border-radius: 50%;
        background: linear-gradient(to bottom,#3ec2ff,#02a0e9);}
    .service-list li .pic img {
        width: auto;
        height: 1rem;
        vertical-align: middle;
    }
    .service-list li p {
        margin-top: 0.2rem;
        line-height: 1.6rem;
        font-size: 0.8rem;
        color: #666;}
    .service-list li span.ser-jt {
        position: absolute;
        width: 0.8rem;
        height: 0.28rem;
        background: url("../../../assets/index/menuarrow.png") no-repeat center; background-size: auto 100%;
        top: 1.6rem;
        right: -0.48rem;}
</style>

