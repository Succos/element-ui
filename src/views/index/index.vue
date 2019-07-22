<template>
  <div>
    <el-container>
      <el-header class="clearfloat">
        <app-header />
      </el-header>
      <el-main class="clearfloat">
        <app-content />
      </el-main>
      <el-main class="clearfloat">
        <app-service />
      </el-main>
      <el-main class="clearfloat">
        <app-information />
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
    import AppHeader from '@/views/index/header'
    import AppContent from '@/views/index/content'
    import AppFooter from '@/views/index/footer'
    import AppService from '@/views/index/service'
    import AppInformation from '@/views/index/information'
    export default {
        components: {
          AppInformation,
          AppService,
            AppHeader,
            AppContent,
            AppFooter
        },
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
