<template>
  <div class="app-content">
    <div class="swiper" style="width: 100%">
      <el-carousel :interval="2000" arrow="always" :height="bannerHeight + 'px'">
        <el-carousel-item v-for="(item,index) in dataimg" :key="index">
          <img :src="item.src" class="bannerImg" :title="item.txt">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<style>
  .app-content{
    clear: both;
  }
  .bannerImg{
    width: 100%;
    height: inherit;
    min-height: 360px;
    min-width: 1400px;
  }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
  .bannerImg{
    width: 100%;
    height: inherit;
    min-height: 100px;
    min-width: 600px;
  }
</style>
<script>
    export default {
        name: 'AppContent',
        data() {
            return {
              bannerHeight: 630,
              items: null,
                dataimg: [{
                    src: 'http://111.230.222.213:8087/img/6.png',
                    txt: '"Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."'
                },
                  {
                    src: 'http://111.230.222.213:8087/img/7.png',
                    txt: '"Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."'
                  }
                ]
            }
        },
      mounted() {
        this.setSize()
        const that = this
        window.addEventListener('resize', function() {
          that.screenWidth = document.body.offsetWidth
          that.setSize()
        }, false)
      },
      methods: {
        setSize() {
          this.bannerHeight = 740 / 2560 * this.screenWidth
          if (this.bannerHeight > 768) this.bannerHeight = 630
          if (this.bannerHeight < 360) this.bannerHeight = 150
        }
      }
    }
</script>

