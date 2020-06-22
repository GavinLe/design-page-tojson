<template>
<div>
  <!-- 页面编辑器 diy-->
  <div class="diy-wrapper">
    <!-- 组件选择 -->
    <widget-group ref="group" @handleAddItem="onAddItem"></widget-group>
    <!-- 首页页面显示 -->
    <widget-phone-main ref="phoneMain" :selectedIndex="selectedIndex" :diyData="diyData" @onEditer="handleSelectEdit" @onDeleleItem="handleoODeleleItem"></widget-phone-main>
    <!-- 属性编辑 -->
    <widget-attrs ref="attrs" :selectedIndex="selectedIndex" :diyData="diyData" :curItem="curItem" @onEditorAddData="handleOnEditorAddData" @onEditorDeleleData="handleOnEditorDeleleData" @onEditResetField="handleOnEditResetFiled"></widget-attrs>
  </div>
  <div class="save-button">
    <el-button @click="onSubmit">保存页面</el-button>
  </div>
</div>
  
</template>

<script>

import WidgetGroup from './widget/WidgetGroup'
import WidgetPhoneMain from './widget/WidgetPhoneMain'
import WidgetAttrs from './widget/WidgetAttrs'
import config from './widget/config'
// 默认数据
var defaultData = config.defaultData;

// umeditor 实例
var $umeditor = {};

export default {
  name: 'designpage',
  props: {},
  components: {
    WidgetGroup,
    WidgetPhoneMain,
    WidgetAttrs
  },
  data () {
    return {
      diyData: {
          page: {
            name: '页面标题',
            type: 'page',
            params: {
              name: '页面标题',
              title: '页面标题',
              shareTitle: '分享标题'
            },
            style: {
              titleBackgroundColor: '#ffffff',
              titleTextColor: 'black'
            }
          },
          items: []
        },
      // 当前选中的元素（下标）
      selectedIndex: -1,
      // 当前选中的diy元素
      curItem: {},
      // 外部数据
      opts: {}
    }
  },
  computed: {},
  watch: {},
  methods: {
    onCheckAddItem: function (key) {
      // 验证关注公众号组件只能存在一个
      if (key === 'officialAccount') {
        for (var index in this.diyData.items) {
          if (this.diyData.items.hasOwnProperty(index)) {
            var item = this.diyData.items[index];
            if (item.type === 'officialAccount') {
              this.$message.error('公众号组件只能有一个')
              return false;
            }
          }
        }
      }
      return true;
    },
    onAddItem (widgetType) {
      // 验证新增Diy组件
      console.log('=== widgetType ===', widgetType)
      if (!this.onCheckAddItem(widgetType)) {
          return false;
      }
      // 复制默认diy组件数据
      var data = JSON.parse(JSON.stringify(defaultData[widgetType]));
      // 新增到diy列表数据
      this.diyData.items.push(data);
      // 编辑当前选中的元素
      this.handleSelectEdit(this.diyData.items.length - 1);
    },
    handleSelectEdit(index) {
      this.selectedIndex = index;
      // 当前选中的元素数据
      this.curItem = this.selectedIndex === 'page' ? this.diyData.page
          : this.diyData.items[this.selectedIndex];
      // 注册编辑器事件
      this.$refs['attrs'].initEditor();
    },
    handleoODeleleItem(index) {
      var _this = this;
      this.$confirm('确定要删除吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          _this.diyData.items.splice(index, 1);
          _this.selectedIndex = -1;
        }).catch(() => {        
        });
    },
    handleOnEditorAddData(type) {
      // 新增data数据
      var newDataItem = Object.assign({}, JSON.parse(JSON.stringify(defaultData[type].data[0])))
      this.curItem.data.push(newDataItem);
    },
    /**
     * 编辑器：删除data元素
     * @param index
     * @param selectedIndex
     */
    handleOnEditorDeleleData: function (index, selectedIndex) {
      console.log('onEditorDeleleData', index, selectedIndex)
      if (this.diyData.items[selectedIndex].data.length <= 1) {
          this.$message({
            type: 'warning',
            message: '至少保留一个！'
          });
          return false;
      }
      this.diyData.items[selectedIndex].data.splice(index, 1);
    },
    handleOnEditResetFiled: function (holder, attribute, value) {
      holder[attribute] = value
    },
    /**
     * 提交后端保存
     * @returns {boolean}
     */
    onSubmit: function () {
        if (this.diyData.items.length <= 0) {
          this.$message({
            type: 'warning',
            message: '至少保留一个！'
          });
          return false
        }
        var data = JSON.stringify(this.diyData);
        var timeStamp = parseInt(new Date().getTime() / 1000);
        console.log(this.diyData, data)
        // localStorage.setItem("diy_" + timeStamp, data);
        // $.post('', {data: data}, function (result) {
        //     result.code === 1 ? $.show_success(result.msg, result.url)
        //         : $.show_error(result.msg);
        // });
    }
  },
  created () {},
  mounted () {},
  beforeDestroy () {}
}
</script>

<style scoped lang="scss">
  .diy-wrapper {
    display: flex;
  }
  .save-button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 20px;
    }
</style>
