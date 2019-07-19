<template>
  <div>
    <el-container>
      <el-header>
        <app-header />
      </el-header>
      <el-main>
        <app-content />
      </el-main>
      <el-footer>
        <app-footer />
        <Boot />
      </el-footer>
    </el-container>
  </div>
</template>
<style lang="css" scoped>

</style>
<script>
    import AppHeader from '@/views/index/header'
    import AppContent from '@/views/index/content'
    import AppFooter from '@/views/index/footer'
    import Boot from '@/views/index/boot'
    export default {
        components: {
            AppHeader,
            AppContent,
            AppFooter,
            Boot
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
