<template>
  <div class="app-container">
    <div class="map-content">
      <div id="map-container" />
      <div class="input-card" style="width:18rem">
        <h4>选择用户</h4>
        <div id="coordinate">
          <div class="input-item">
            <input id="top-left" name="language" type="radio" checked="checked">
            <span class="input-text">用户one</span>
          </div>
          <div class="input-item">
            <input id="top-center" name="language" type="radio">
            <span class="input-text">用户one</span>
          </div>
          <div class="input-item">
            <input id="top-right" name="language" type="radio">
            <span class="input-text">用户one</span>
          </div>
          <div class="input-item">
            <input id="middle-left" name="language" type="radio">
            <span class="input-text">用户one</span>
          </div>
          <div class="input-item">
            <input id="center" name="language" type="radio">
            <span class="input-text">用户oner</span>
          </div>
          <div class="input-item">
            <input id="middle-right" name="language" type="radio">
            <span class="input-text">用户one</span>
          </div>
          <div class="input-item">
            <input id="bottom-left" name="language" type="radio">
            <span class="input-text">用户one</span>
          </div>
          <div class="input-item">
            <input id="bottom-center" name="language" type="radio">
            <span class="input-text">用户one</span>
          </div>
          <div class="input-item">
            <input id="bottom-right" name="language" type="radio">
            <span class="input-text">用户one</span>
          </div>
        </div>
      </div>
      <div class="block">
        <span class="demonstration">click</span>
        <el-cascader
          v-model="value"
          :options="options"
          @change="handleChange"
        />
      </div>
      <div class="block">
        <span class="demonstration">click-hover 选择地址</span>
        <el-cascader
          v-model="value"
          :options="options"
          :props="{ expandTrigger: 'hover' }"
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
          prop="date"
          label="日期"
          width="180"
        />
        <el-table-column
          prop="name"
          label="姓名"
          width="180"
        />
        <el-table-column
          prop="address"
          label="地址"
        />
      </el-table>
    </aside>

  </div>

</template>
<style>
    .map-content{
        width: 100%;
        height: 100%;
        background: red;
        position: relative;
    }
    #map-container {
        width: 100%;
        height: 20rem;
    }
    .input-card {
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border-radius: .25rem;
        width: 22rem;
        border-width: 0;
        border-radius: 0.4rem;
        box-shadow: 0 2px 6px 0 rgba(114, 124, 245, .5);
        position: absolute;
        top: 1rem;
        right: 1rem;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        padding: 0.75rem 1.25rem;
    }

    .input-card .btn {
        margin-right: 0.8rem;
    }

    .input-card .btn:last-child {
        margin-right: 0;
    }
    .block{
        position: absolute;
        top: 1rem;
        left: 1rem;
        background:#fff}
</style>

<script>
  export default {
    name: 'NameValue',
    data() {
      return {
        driver: null,
        map: Object,
        gridData: [{
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

        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        value: [],
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }]
      }
    },
    mounted() {
      this.loadmap()
      this.init()
    },
    methods: {
      loadmap() {
        this.map = new AMap.Map('map-container', {
          resizeEnable: true,
          zoom: 13
        })
      },
      init() {
        const infoWindow = new AMap.InfoWindow({
          anchor: 'top-left',
          content: '姓名，类型，订单(单击前往订单信息)'
        })

        infoWindow.open(this.map, [102.735168, 25.049058])

        function setAnchor() {
          var anchor = this.id
          infoWindow.setAnchor(anchor)
        }
        // 绑定radio点击事件
        const radios = document.querySelectorAll('#coordinate input')
        radios.forEach(function(ratio) {
          ratio.onclick = setAnchor
        })
      },
      handleChange(value) {
        console.log(value)
      }
    }
  }
</script>
