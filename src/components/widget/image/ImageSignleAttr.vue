<template>
  <!--编辑器: 单图组-->
  <div class="editor-image-signle-wrapper">
      <div class="editor-title"><span>{{ $attrs.curItem.name }}</span></div>
      <el-form :form="$attrs.curItem.params" label-width="120px">
          <div class="el-form-item">
            <label class="el-form-item__label">显示时间 </label>
            <div class="el-form-item__content">
              <div class="content-center">
                <el-date-picker v-model="$attrs.curItem.params.displayDateTimeRange" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
              </div>
            </div>
          </div>
          <div class="el-form-item">
            <label class="el-form-item__label">上下边距 </label>
            <div class="el-form-item__content">
              <div class="content-center">
                <el-slider v-model="$attrs.curItem.style.paddingTop" :min="0" :max="50" style="width:70%"></el-slider>&nbsp;
                <span class="span-desc">{{ $attrs.curItem.style.paddingTop }} px &nbsp; (像素)</span>
              </div>
            </div>
          </div>
          <div class="el-form-item">
              <label class="el-form-item__label">左右边距 </label>
              <div class="el-form-item__content">
                <div class="content-center">
                  <el-slider v-model="$attrs.curItem.style.paddingLeft" :min="0" :max="50" style="width:70%"></el-slider>&nbsp;
                  <span class="span-desc">{{ $attrs.curItem.style.paddingLeft }} px &nbsp; (像素)</span>
                </div>
              </div>
          </div>
          <div class="el-form-item">
              <label class="el-form-item__label">背景颜色 </label>
              <div class="el-form-item__content">
                <div class="content-center">
                  <el-color-picker v-model="$attrs.curItem.style.background" ></el-color-picker>
                  <el-button type="button" size="mini" @click.stop="onEditorResetColor($attrs.curItem.style, 'background', '#ffffff')">重置</el-button>
                </div>
              </div>
          </div>
          <div class="form-items">
            <draggable :list="$attrs.curItem.data" :options="{ animation: 120, filter: 'input', preventOnFilter: false }">
              <div class="form-item drag" v-for="(imageSingle, index) in $attrs.curItem.data" :key="index">
                  <i class="el-icon-close item-delete" @click="onEditorDeleleData($attrs.index, $attrs.selectedIndex)"></i>
                  <div class="item-inner">
                      <div class="el-form-item">
                          <label class="el-form-item__label">图片 </label>
                          <div class="el-form-item__content">
                              <div class="data-image">
                                <!-- <img :src="imageSingle.imgUrl" alt="" @click="onEditorSelectImage(imageSingle, 'imgUrl')"> -->
                                <base-upload-image :imageUrl="imageUrl"></base-upload-image>
                              </div>
                          </div>
                      </div>
                      <div class="el-form-item">
                          <label class="el-form-item__label">链接地址 </label>
                          <div class="el-form-item__content">
                            <!-- <el-input type="text" v-model='imageSingle.linkUrl' placeholder="http://www.baidu.com"></el-input> -->
                            <base-select-link :linkType="imageSingle.linkType" :linkUrl="imageSingle.linkUrl"></base-select-link>
                          </div>
                      </div>
                  </div>
              </div>
            </draggable>
          </div>
        <el-form-item label="">
          <el-button size="small" @click="onEditorAddData">添加一个</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
import BaseUploadImage from '../base/BaseUploadImage'
import BaseSelectLink from '../base/BaseSelectLink'
import draggable from 'vuedraggable'
export default {
  name: 'ImageSignleAttr',
  props: {},
  components: {
    draggable,
    BaseUploadImage,
    BaseSelectLink
  },
  data () {
    return {
      imageUrl: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
    }
  },
  computed: {},
  watch: {},
  methods: {
    /**
     * 编辑器：添加data元素
     */
    onEditorAddData: function () {
        this.$emit('onEditorAddData', this.$attrs.curItem.type)
    },
    /**
     * 编辑器：重置颜色
     * @param holder
     * @param attribute
     * @param color
     */
    onEditorResetColor: function(holder, attribute, color) {
      // this.$emit('onEditResetField', holder, attribute, color) // 交给父类处理 
      holder[attribute] = color; // 自己处理
    },
    /**
    * 编辑器：删除data元素
    * @param index
    * @param selectedIndex
    */
    onEditorDeleleData: function (index, selectedIndex) {
      this.$emit('onEditorDeleleData', index, selectedIndex)
    },
    /**
     * 编辑器：选择图片
     * @param source
     * @param index
     */
    onEditorSelectImage: function (source, index) {
      console.log('处理图片')
    },
  },
  created () {},
  mounted () {},
  beforeDestroy () {}
}
</script>

<style scoped lang="scss">
  .editor-image-signle-wrapper {

  }
</style>
