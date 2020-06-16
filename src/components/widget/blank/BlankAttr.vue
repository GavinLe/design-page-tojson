<template>
  <!--编辑器: 辅助空白-->
  <div class="editor-blank-wrapper">
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
        <label class="el-form-item__label">组件高度 </label>
        <div class="el-form-item__content">
          <div class="content-center">
            <el-slider v-model="$attrs.curItem.style.height" :min="1" :max="200" style="width:70%"></el-slider>&nbsp;
            <span class="span-desc">{{ $attrs.curItem.style.height }} px &nbsp; (像素)</span>
          </div>
            <!-- <el-input-number v-model="$attrs.curItem.style.height" :min="1" :max="200" label="高度"></el-input-number>
            &nbsp; &nbsp;<span class="span-desc">{{ $attrs.curItem.style.height }}</span>px (像素) -->
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'BlankAttr',
  props: {},
  components: {
  },
  data () {
    return {

    }
  },
  computed: {},
  watch: {},
  methods: {
    /**
     * 编辑器：重置颜色
     * @param holder
     * @param attribute
     * @param color
     */
    onEditorResetColor: function(holder, attribute, color) {
      // this.$emit('onEditResetField', holder, attribute, color) // 交给父类处理 
      holder[attribute] = color; // 自己处理
		}
  },
  created () {},
  mounted () {},
  beforeDestroy () {}
}
</script>

<style scoped lang="scss">
  .editor-blank-wrapper {
  }
</style>
