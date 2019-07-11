<template>
  <div class="app-container">
    <div class="map-content">
      <div id="map-container" v-loading="loading" />
      <el-radio-group v-model="radio" class="select-role" @change="changeRole">
        <el-radio-button label="0">医院人员</el-radio-button>
        <el-radio-button label="1">维修人员</el-radio-button>
      </el-radio-group>
      <!-- 地图选择城市-->
      <div class="block">
        <span class="demonstration">省份/城市/地区</span>
        <el-cascader
          v-model="selectedOptions"
          :options="options"
          @change="handleChange"
        />
      </div>
    </div>
    <aside>
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column
          prop="name"
          label="名称"
          width="180"
        />
        <el-table-column
          prop="address"
          label="地址"
          width="180"
        />
        <el-table-column
          prop="lat"
          label="经度"
          width="180"
        />
        <el-table-column
          prop="lng"
          label="纬度"
        />
        <el-table-column
          prop="isonline"
          label="在线状态"
        />
      </el-table>
    </aside>
    <div ref="infowindow">
      <amap-info-window title="这货不是弹窗" />
    </div>
  </div>
</template>
<style>
    .map-content {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .map-content .select-role{
        position: absolute;
        top: 1rem;
        right: 1rem;
    }
    .map-content .block{
        position: absolute;
        top: 1rem;
        left: 2rem;
        background: #fff;
    }

    #map-container {
        width: 100%;
        height: 40rem;
    }
</style>
<script>
  import AMap from 'AMap'
  import { getList, getRepairList } from '@/api/map'
  import AmapInfoWindow from '@/views/components/AmapInfoWindow'
  export default {
    name: 'NameValue',
    components: { AmapInfoWindow },
    data() {
      return {
        radio: '1',
        driver: null,
        map: Object,
        loading: true,
        tableData: [],
        value: [],
        options: [],
        selectedOptions: [25, 265, 2309] // 默认城市
      }
    },
    mounted() {
      this.loadcity()
      this.loadmap()
    },
    methods: {
      loadcity() {
         getList().then(response => {
           this.options = response.data.items
         })
      },
      loadmap() {
        this.map = new AMap.Map('map-container', {
            resizeEnable: true,
            zoom: 13
          })
        this.loading = false
      },
      changeRole(val) {
        // 获取该区域维修人员列表
        if (val === '1') {
          getRepairList().then(response => {
            this.tableData = response.data.items
            this.addMarkers()
            this.map.setFitView()
          })
          console.log('维修人员获取列表')
        } else {
          console.log('医院人员获取列表')
        }
      },
      addMarkers() {
        const that = this
        for (const item of this.tableData) {
          console.log(item.lng, item.lat)
          const markers = new AMap.Marker({
            map: this.map,
            icon: item.icon,
            position: [item.lng, item.lat],
            offset: new AMap.Pixel(-13, -30)
          })
          // 给markers添加自定义参数
          markers.itemId = item.name
          // 给marker添加单击事件
          AMap.event.addListener(markers, 'click', function(e) {
            const infoWindow = new AMap.InfoWindow({
              content: that.$refs.infowindow,
              size: new AMap.Size(0, 0),
              autoMove: true,
              offset: new AMap.Pixel(0, -25)
            })
            infoWindow.open(that.map, e.target.getPosition())
          })
        }
      },
      // 选择区域时跳转至指定区域
      gotoCity() {
        this.map.setCity(this.selectedOptions)
      },
      handleChange(value) {
        // 地图中心变为指定区域
        this.map.setCity(530381)
      }
    }
  }
</script>
