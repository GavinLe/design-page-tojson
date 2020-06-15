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
    </template>
  </div>
</template>

<script>
import PageAttr from "./page/PageAttr";
import CarouselAttr from "./carousel/CarouselAttr";

export default {
  name: "WidgetAttrs",
  inheritAttrs: false,
  props: {},
  components: {
    PageAttr,
    CarouselAttr
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
  height: auto;
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

  // form 样式
  /deep/ .tpl-form-line-form {
    font-size: 1.3rem !important;
    color: #656565;
    .am-form-group {
      margin: 1rem 0;
    }
    .am-form-label {
      padding-top: 0;
      line-height: 28px;
      font-size: 1.3rem;
    }
    .am-radio-inline,
    .am-checkbox-inline {
      padding-top: 0;
      font-size: 1.3rem;
      line-height: 28px;
      margin: 0 10px 0 0;
      .am-ucheck-icons {
        line-height: 28px;
      }
    }
    input[type="text"] {
      line-height: 28px;
      font-size: 1.3rem;
      padding: 0 5px;
      color: #656565;
    }
    input[type="color"] {
      display: inline-block;
      -webkit-appearance: square-button;
      width: 65px;
      height: 26px;
      background-color: #ffffff;
      border: 1px solid #efefef;
      padding: 0 4px;
      margin: 1px 0;
      cursor: pointer;
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

  /deep/ .editor-centent {
    padding: 0 22px;
    font-size: 13px;
    p {
      line-height: 24px;
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
      input {
        background: #f7fafc;
      }
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

  // 添加新元素
  /deep/ .form-item-add {
    width: 100%;
    background: #fdfdfd;
    color: #6b6b6b;
    border: 1px solid #efefef;
    outline: none;
    padding: 10px 16px;
    border-radius: 2px;
    font-size: 12px;
    line-height: 1;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    transition: All 0.2s ease-in-out;
    &:hover {
      background: #f9f9f9;
    }
  }
}
</style>
