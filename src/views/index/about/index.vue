<template>
  <el-main class="app-service">
    <el-row class="banner">
      <a href="https://www.dayujiedan.cn/dyxz.html">
        <img class="banner-bg" src="http://yzg.100zhuangxiu.cn/wp-content/uploads/2019/06/2.jpg" alt=""></a>
    </el-row>
    <el-row class="service-process">
      <h3>公司简介</h3>
      <h4>COMPANY PROFILE</h4>
    </el-row>
    <el-row class="service-main">
      <p style="text-align: left;">
        大鱼装修接单app是一款集海量业主装修需求、用工信息发布的多功能装修接单软件，装修公司、设计师、工长、工人师傅及主材商等类型的装修服务商均可入驻认证，在大鱼装修接单app，您可按照客户需求进行选择性接单，在获得业主需求信息后，及时与业主沟通并提供装修相关服务。
      </p>
      <div class="wp-block-image" style="text-align: left;" />
      <p style="text-align: left;">同时，大鱼装修接单app提供自主用工发布需求功能版块，为您的用工节省时间、成本，大鱼接单app全国超过30万入驻认证服务商将为您提供优质的装修、安装、保洁等专业服务。
      </p>
      <div class="wp-block-image" style="text-align: left;" />
    </el-row>
  </el-main>
</template>
<script>
    export default {
        name: 'About'
    }
</script>
<style lang="css" scoped>
    .service-process h4 {
        margin-top: 0.48rem;
        font-size: 0.8rem;
        color: #aaa;
        text-transform: uppercase;
    }
    p{
        text-indent: 2rem;
        margin: 0.6rem 0;
        line-height: 1.2rem;
        font-size: 0.72rem;
        color: #404040;
        border: medium none;
        box-sizing: border-box;
    }
    .banner .banner-bg {
        width: 100%;
        display: block;
        vertical-align: middle;
    }
    .service-process h3 {
        font-size: 1.2rem;
    }
    .service-main{
        width: 94%;
        margin: 0 auto;
    }
    .service-process {
        text-align: center;
        margin-top: 1rem;
    }

    .service-process h3:before {
        content: "";
        display: inline-block;
        vertical-align: middle;
        width: 2.26rem;
        height: 0.12rem;
        background: url("../../../assets/index/icon8.png") no-repeat;
        background-size: 100% 100%;
        margin-right: 0.40rem;
    }

    .service-process h3:after {
        content: "";
        display: inline-block;
        vertical-align: middle;
        width: 2.26rem;
        height: 0.12rem;
        background: url("../../../assets/index/icon9.png") no-repeat;
        background-size: 100% 100%;
        margin-left: 0.40rem;
    }

    .app-service {
        background: url("../../../assets/index/service_bg_img.jpg") no-repeat center;
        background-size: cover;
    }

</style>

