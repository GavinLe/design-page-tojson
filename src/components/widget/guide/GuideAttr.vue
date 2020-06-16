<template>
  <!--编辑器: 辅助线-->
  <div class="guide-wrapper">
      <div class="editor-title"><span>{{ $attrs.curItem.name }}</span></div>
      <el-form :form="$attrs.curItem.params" label-width="120px">
          <div class="el-form-item">
            <label class="el-form-item__label">背景颜色 </label>
            <div class="el-form-item__content">
              <div class="content-center">
                <el-color-picker v-model="$attrs.curItem.style.background"></el-color-picker>
                <el-button type="button" size="mini" @click.stop="onEditorResetColor($attrs.curItem.style, 'background', '#ffffff')">重置</el-button>
              </div>
            </div>
          </div>
          <div class="el-form-item">
              <label class="el-form-item__label">线条样式 </label>
              <div class="el-form-item__content">
                <el-radio-group v-model="$attrs.curItem.style.lineStyle">
                  <el-radio :label="'solid'">实线</el-radio>
                  <el-radio :label="'dashed'">虚线</el-radio>
                  <el-radio :label="'dotted'">点状</el-radio>
                </el-radio-group>
              </div>
          </div>
          <div class="el-form-item">
            <label class="el-form-item__label">线条颜色 </label>
            <div class="el-form-item__content">
              <div class="content-center">
                <el-color-picker v-model="$attrs.curItem.style.lineColor"></el-color-picker>
                <el-button type="button" size="mini" @click.stop="onEditorResetColor($attrs.curItem.style, 'lineColor', '#000000')">重置</el-button>
              </div>
            </div>
          </div>

          <div class="el-form-item">
            <label class="el-form-item__label">线条高度 </label>
            <div class="el-form-item__content">
              <div class="content-center">
                <el-slider v-model="$attrs.curItem.style.lineHeight" :min="0" :max="20" style="width:70%"></el-slider>&nbsp;
                <span class="span-desc">{{ $attrs.curItem.style.lineHeight }} px &nbsp; (像素)</span>
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
      </el-form>
  </div>
</template>

<script>
export default {
  name: 'GuideAttr',
  props: {},
  components: {
  },
  data () {
    return {

    }
  },
  computed: {},
  watch: {},
  methods: {},
  created () {},
  mounted () {},
  beforeDestroy () {}
}
</script>

<style scoped lang="scss">

</style>
