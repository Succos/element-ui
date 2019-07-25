//rukouwenjian
<template>
  <div>
    <el-container>
      <!--      <router-link to="/index/default">Go to index</router-link>-->
      <!--      <router-link to="/index/about">Go to device</router-link>-->
      <el-header class="clearfloat">
        <app-header />
      </el-header>
      <el-main class="clearfloat">
        <transition  name="fade" mode="out-in">
        <router-view />
        </transition>
      </el-main>
      <el-footer class="clearfloat">
        <app-footer />
      </el-footer>
    </el-container>
  </div>
</template>
<style lang="css" scoped>
  .clearfloat:before,.clearfloat:after{content:""; display:table; line-height:0;visibility:hidden;}
</style>
<script>
    import AppHeader from '@/views/index/layout/header'
    import AppFooter from '@/views/index/layout/footer'
    export default {
        components: {
            AppHeader,
            AppFooter
        },
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            }
        },
      computed: {
          key() {
            return this.$route.path
          }
      },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath)
            }
        }
    }
</script>
