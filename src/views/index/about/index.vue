<template>
  <el-main class="app-service">
    <el-row class="banner">
      <a href="https://www.dayujiedan.cn/dyxz.html">
        <img class="banner-bg" src="http://111.230.222.213:8087/img/6.png" alt="" style="height: 50%;width: 100%"></a>
    </el-row>
    <el-row class="service-process">
      <h3>公司简介</h3>
      <h4>COMPANY PROFILE</h4>
    </el-row>
    <el-row class="service-main">
      <p style="text-align: left;">
        易订维修接单app是一款集海量业主装修需求、医院信息发布的多功能装修接单软件，医院、维修人员、第三方维修及销售公司等类型的维修服务商均可入驻认证，在易订维修接单app，您可按照客户需求进行选择性接单，在获得医院需求信息后，及时与医院相关人员沟通并提供维修相关服务。
      </p>
      <div class="wp-block-image" style="text-align: left;" />
      <p style="text-align: left;">公司位于有"春城"美誉的昆明。公司主要承接各科室大、中、小型医疗设备承包整体维修、维护、保养、升级等！
        维修各类医疗设备：CT、彩超、C臂机、DR、呼吸机、生化分析仪、胃镜、超声刀、核磁共振、显微镜、男科设备（性功能康复仪、尿道微波、微波治疗仪等）妇科设备（可视人流系统、阴道镜、电灼光治疗仪等）康复设备（疼痛治疗仪、空气压力波治疗仪、体外短波等）等
        配件供应：彩超主板、显示器、探头（心脏探头、腹部探头、高频探头、阴道探头、四维探头）心电监护仪导联线、利笔刀连接线、利普刀刀笔、核磁共振线圈、CT（主板、球管）等
        二手医疗设备回收：核磁共振回收、CT机回收、彩超回收、监护仪回收、C臂机回收、DR回收、生化分析仪回收、男科设备回收、妇科设备回收
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
        vertical-align: middl e;
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

