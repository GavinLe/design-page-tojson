<template>
<!-- 页面编辑器 diy-->
  <div class="diy-wrapper">
    <!-- 组件选择 -->
    <widget-group ref="group" @handleAddItem="onAddItem"></widget-group>
    <!-- 首页页面显示 -->
    <widget-phone-main ref="phoneMain" :selectedIndex="selectedIndex" :diyData="diyData" @onEditer="handleSelectEdit" @onDeleleItem="handleoODeleleItem"></widget-phone-main>
    <!-- 属性编辑 -->
    <widget-attrs ref="attrs" :selectedIndex="selectedIndex" :diyData="diyData" :curItem="curItem" @onEditorAddData="handleOnEditorAddData"></widget-attrs>
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
      var newDataItem = Object.assign({}, defaultData[type].data[0])
      this.curItem.data.push(newDataItem);
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
</style>
