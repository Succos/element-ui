<template>
  <div class="app-content">
    <div class="swiper" style="width: 100%" :height="bannerHeight + 'px'">
      <el-carousel :interval="2000" arrow="always">
        <el-carousel-item v-for="(item,index) in dataimg" :key="index">
          <div>
            <img :src="item.src" class="bannerImg" :title="item.txt">
          </div>
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
    min-height: 360px;
    min-width: 1400px;
  }
</style>
<script>
    export default {
        name: 'AppContent',
        data() {
            return {
              bannerHeight: 530,
              items: null,
                dataimg: [{
                    src: 'https://www.dayujiedan.cn/wp-content/uploads/2019/06/2.jpg',
                    txt: '"Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."'
                },
                    {
                        src: 'https://www.dayujiedan.cn/wp-content/uploads/2019/06/2.jpg',
                        txt: '"Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor."'
                    },
                    {
                        src: 'https://www.dayujiedan.cn/wp-content/uploads/2019/06/2.jpg',
                        txt: '"Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna."'
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
          if (this.bannerHeight === 740) this.bannerHeight = 740
          if (this.bannerHeight < 360) this.bannerHeight = 360
        }
      }
    }
</script>

