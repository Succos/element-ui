<template>
  <div class="app-container">
    <div class="map-content">
      <div id="map-container" />
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
  </div>
</template>
<style>
    .map-content {
        width: 100%;
        height: 100%;
        background: red;
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
        height: 20rem;
    }
</style>
<script>
  import { getList, getRepairList } from '@/api/map'
  export default {
    name: 'NameValue',
    data() {
      return {
        radio: '1',
        driver: null,
        map: Object,
        gridData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            // jinwei  zaixian zhuangtai
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }],
        tableData: [],
        value: [],
        options: [],
        selectedOptions: [25, 265, 2309] // 默认城市

      }
    },
    mounted() {
      this.loadmap()
      this.init()
      this.loadcity()
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
            console.log(e.target.itemId)
          })
        }
      },
      // 选择区域时跳转至指定区域
      gotoCity() {
        this.map.setCity(this.selectedOptions)
      },
      init() {

      },
      handleChange(value) {
        // 地图中心变为指定区域
        this.map.setCity(530381)
      }
    }
  }
</script>
