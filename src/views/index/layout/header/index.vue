<template>
  <div class="app-header">
    <h1 class="logo">
      <a href="">
        <img src="@/assets/logo/logo-big.png" alt="易订维修" class="logo-img-big">
        <img src="@/assets/logo/logo-small.png" alt="易订维修" class="logo-img-small">
      </a>
    </h1>
    <div class="nav-right">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;" class="menu-btn">
        <el-button :label="false" @click.native="handleOpenMenu">
          <svg-icon icon-class="menu" />
        </el-button>
        <!--        <el-radio-button :label="false">-->
        <!--          <svg-icon icon-class="close" @click.native="handleCloseMenu" />-->
        <!--        </el-radio-button>-->
      </el-radio-group>
      <el-menu
        router
        :default-active="$route.path"
        class="el-menu-pc"
        mode="horizontal"
        background-color="#ffffff"
        text-color="#606060"
        active-text-color="#009fe8"
        @select="handleSelect"
      >
        <el-menu-item index="/index/default">首页</el-menu-item>
        <el-submenu index="" class="el-menu-item">
          <template
            slot="title"
          >医院</template>
          <el-menu-item index="2-1">介绍设备</el-menu-item>
          <el-menu-item index="2-2">2-2</el-menu-item>
        </el-submenu>
        <el-menu-item index="/index/join">我要加入</el-menu-item>
        <el-menu-item index="/index/about">关于我们</el-menu-item>
        <el-menu-item index="/login">登录</el-menu-item>
        <el-menu-item index="6">注册</el-menu-item>
      </el-menu>

      <div v-show="mobileMenuList" class="filter">
        <div class="nav-close">
          <svg-icon icon-class="close" @click.native="handleCloseMenu" />
        </div>
        <el-menu
          router
          :default-active="$route.path"
          class="mobile-menu"
          background-color="#409EFF"
          text-color="#fff"
          active-text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="/index/default">
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <span>医院</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">介绍设备</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/index/join">
            <span slot="title">我要加入</span>
          </el-menu-item>
          <el-menu-item index="/index/about">
            <span slot="title">关于我们</span>
          </el-menu-item>
          <el-menu-item index="/login">
            <span slot="title">登录</span>
          </el-menu-item>
          <el-menu-item index="4">
            <span slot="title">注册</span>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.mobile-menu{
    width: 30%;
    position: fixed;
    top: 0;
    right: 0;
 }
  @media(max-width: 850px) {
    .logo-img-big{
     display: none;
    }
    .el-menu-pc{
      display: none;
    }
    .menu-btn{
      display: block;
    }
    .logo-img-small {
      display: inline-block;
    }
  }
  @media(min-width: 850px) {
    .logo-img-small{
      display: none;
    }
    .el-menu-pc{
      display: block;
    }
    .menu-btn{
      display: none;
    }
    .logo-img-big {
      display: inline-block;
    }
  }
  .app-header{
    width: 100%;
    min-height: 120px;
    padding: 15px 0;
    margin: 0 auto;
  }
  .el-menu.el-menu--horizontal{
    border: 0;
  }
    .logo{
        float: left;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    .el-menu-pc{
        float: right;
        height: 100%;
    }
    .nav-right{
      float: right;
      position: absolute;
      right: 40px;
    }
  .filter{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: 998;
  }
  .nav-close{
    position: absolute;
    top: 14px;
    right: 32%;
  }
</style>
<script>
    export default {
        name: 'AppHeader',
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                isCollapse: false,
                 mobileMenuList: false
            }
        },
      mounted() {

      },
        methods: {
          handleSelect(key, keyPath) {
                console.log(key, keyPath)
          },
          handleOpen(key, keyPath) {
            console.log(key, keyPath)
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath)
          },
          handleOpenMenu() {
            console.log(this.mobileMenuList)
            this.mobileMenuList = true
            console.log(this.mobileMenuList)
          },
          handleCloseMenu() {
            console.log(this.mobileMenuList)
            this.mobileMenuList = !this.mobileMenuList
            console.log(this.mobileMenuList)
          }
        }
    }
</script>
