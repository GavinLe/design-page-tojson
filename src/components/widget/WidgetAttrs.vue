<template>
  <!-- 编辑器容器 -->
  <div
    id="diy-editor"
    class="diy-editor"
    :style="{ visibility: $attrs.selectedIndex != -1 ? 'visible' : 'hidden' }"
    v-cloak
  >
    <!-- 编辑器: 标题栏 -->
    <page-attr v-if="$attrs.selectedIndex === 'page'" v-on="$listeners" v-bind="$attrs" v-cloak></page-attr>

    <template v-if="$attrs.diyData.items.length && $attrs.curItem">
      <!-- 编辑器: 轮播 -->
      <carousel-attr v-if="$attrs.curItem.type === 'carousel'" v-on="$listeners" v-bind="$attrs" v-cloak></carousel-attr>
      <!-- 编辑器: 单图组 -->
      <image-signle-attr v-if="$attrs.curItem.type === 'imageSingle'" v-on="$listeners" v-bind="$attrs" v-cloak></image-signle-attr>
      <!-- 编辑器: 橱窗 -->
      <image-window-attr v-if="$attrs.curItem.type === 'imageWindow'" v-on="$listeners" v-bind="$attrs" v-cloak></image-window-attr>
      <!-- 编辑器: 空白 -->
      <blank-attr v-if="$attrs.curItem.type === 'blank'" v-on="$listeners" v-bind="$attrs" v-cloak></blank-attr>
      <!-- 编辑器: 辅助线 -->
      <guide-attr v-if="$attrs.curItem.type === 'guide'" v-on="$listeners" v-bind="$attrs" v-cloak></guide-attr>
      <!-- 编辑器: 导航条 -->
      <nav-bar-attr v-if="$attrs.curItem.type === 'navBar'" v-on="$listeners" v-bind="$attrs" v-cloak></nav-bar-attr>
      <!-- 编辑器: 商品组 -->
      <goods-attr v-if="$attrs.curItem.type === 'goods'" v-on="$listeners" v-bind="$attrs" v-cloak></goods-attr>
    </template>
  </div>
</template>

<script>
import PageAttr from "./page/PageAttr";
import CarouselAttr from "./carousel/CarouselAttr";
import BlankAttr from "./blank/BlankAttr";
import ImageSignleAttr from "./image/ImageSignleAttr";
import ImageWindowAttr from './image/ImageWindowAttr'
import GuideAttr from "./guide/GuideAttr";
import NavBarAttr from './nav/NavBarAttr';
import GoodsAttr from './goods/GoodsAttr';


export default {
  name: "WidgetAttrs",
  inheritAttrs: false,
  props: {},
  components: {
    PageAttr,
    CarouselAttr,
    ImageSignleAttr,
    ImageWindowAttr,
    BlankAttr,
    GuideAttr,
    NavBarAttr,
    GoodsAttr
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    /**
     * 注册编辑器事件
     */
    initEditor: function() {
      // 注册dom事件
      this.$nextTick(function() {
        // 注册html组件
        this.editorHtmlComponent();
      });
    },
    /**
     * 编辑器事件：html组件
     */
    editorHtmlComponent: function() {}
  },
  created() {},
  mounted() {
    console.log("widget attrs =======", this.$attrs);
    console.log("widget listeners =======", this.$listeners);
  },
  beforeDestroy() {}
};
</script>

<style scoped lang="scss">
// 编辑器
.diy-editor {
  width: 400px;
  height: 614px;
  overflow-y: auto;
  min-height: 100px;
  padding: 15px 10px;
  border: 1px solid #ddd;
  // editor-title
  /deep/ .editor-title {
    position: relative;
    padding: 0 22px;
    height: 34px;
    border-bottom: 1px solid #eef1f5;
    margin-bottom: 20px;
    &::before {
      content: "";
      position: absolute;
      width: 4px;
      height: 13px;
      background: #00aeff;
      top: 8px;
      left: 9px;
    }
    span {
      font-size: 1.3rem;
    }
  }

  // 图片
  /deep/ .data-image {
    display: inline-block;
    width: auto;
    min-width: 40px;
    max-width: 220px;
    //height: 50px;
    text-align: center;
    cursor: pointer;
    img {
      display: block;
      max-width: 100%;
      height: 50px;
    }
  }

  // form items
  /deep/ .form-items {
    height: auto;
    padding: 5px 6px;
    .form-item {
      background: #f7fafc;
      margin-bottom: 0.6rem;
      position: relative;
      border-radius: 3px;
      cursor: move;
      // 删除元素
      .item-delete {
        position: absolute;
        top: -6px;
        right: -6px;
        height: 16px;
        width: 16px;
        line-height: 16px;
        background: rgba(153, 153, 153, 0.7);
        color: #fff;
        border-radius: 50%;
        text-align: center;
        cursor: pointer;
        font-size: 12px;
        -webkit-transition: background-color 0.3s ease-out,
          border-color 0.3s ease-out;
        transition: background-color 0.3s ease-out, border-color 0.3s ease-out;
        &:hover {
          background: #c9c9c9;
        }
      }
      .item-inner {
        padding: 10px;
        background: #f7fafc;
        .help-block {
          margin-top: 10px;
        }
      }
    }

    // 商品元素
    &.__goods {
      .form-item {
        float: left;
        margin: 10px;
        height: 70px;
        width: 70px;
      }
      .data-image {
        cursor: unset;
      }
    }
  }

  /deep/ .el-form-item {
      margin-bottom: 10px;
      .el-form-item__label {
        width: 100px;
        text-align: right;
        vertical-align: middle;
        float: left;
        font-size: 14px;
        color: #606266;
        line-height: 40px;
        padding: 0 12px 0 0;
        box-sizing: border-box;
      }
      .el-form-item__content {
        margin-left: 110px;
        text-align: left;
        .content-center {
          display: flex;
          align-items: center;
          .el-color-picker + .el-button { margin-left: 10px;}
          .el-radio {margin-right: 15px;}
        }
        .span-desc {
          font-size: 12px; 
          color: #838fa1;
          line-height: 20px;
        }
      }
    }
}
</style>
