<template>
  <div class="app-header">
    <el-row :gutter="10">
      <el-col :md="12" :xs="2">
        <h1 class="logo">
          <a href="">
            <img src="@/assets/logo/logo-big.png" alt="易订维修" class="logo-img-big">
            <img src="@/assets/logo/logo-small.png" alt="易订维修" class="logo-img-small">
          </a>
        </h1>
      </el-col>
      <el-col :md="12" :xs="22">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#009fe8"
          text-color="#fff"
          active-text-color="#ffd04b"
          @select="handleSelect"
        >
          <el-menu-item index="1" class="el-menu-item">首页</el-menu-item>
          <el-menu-item index="2" class="el-menu-item">医院</el-menu-item>
          <el-menu-item index="3" class="el-menu-item">我要加入</el-menu-item>
          <el-menu-item index="4" class="el-menu-item">关于我们</el-menu-item>
          <el-menu-item index="5" class="el-menu-item">登录</el-menu-item>
          <el-menu-item index="6" class="el-menu-item">注册</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>

  </div>
</template>
<style lang="css" scoped>
  .logo{
    margin: 0;
    padding: 0;
  }
  @media(max-width: 850px) {
    .logo-img-big {
     display: none;
    }
    .el-menu-item{
      padding: 10px;
      margin: 10px;
    }
    .logo-img-small {
      display: inline-block;
    }
  }
  @media(min-width: 850px) {
    .logo-img-small {
      display: none;
    }
    .logo-img-big {
      display: inline-block;
    }
  }
  .app-header{
    width: 100%;
    min-height: 120px;
  }
    .logo{
        float: left;
        height: 100%;
    }
    .el-menu-demo{
        float: right;
        height: 100%;
    }

</style>
<script>
    export default {
        name: 'AppHeader',
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath)
            }
        }
    }
</script>
