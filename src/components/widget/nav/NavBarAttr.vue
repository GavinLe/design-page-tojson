<template>
  <div class="navbar-wrapper">
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
            <label class="el-form-item__label">每行数量 </label>
            <div class="el-form-item__content">
              <el-radio-group v-model="$attrs.curItem.style.rowsNum">
                <el-radio :label="3">3个</el-radio>
                <el-radio :label="4">4个</el-radio>
                <el-radio :label="5">5个</el-radio>
              </el-radio-group>
            </div>
          </div>

          <div class="form-items">
            <draggable :list="$attrs.curItem.data" :options="{ animation: 120, filter: 'input', preventOnFilter: false }">
              <div class="form-item drag" v-for="(item, index) in $attrs.curItem.data" :key="index">
                <i class="el-icon-close item-delete" @click="onEditorDeleleData($attrs.index, $attrs.selectedIndex)"></i>
                <div class="item-inner">
                  <div class="el-form-item">
                    <label class="el-form-item__label">图片 </label>
                    <div class="el-form-item__content">
                        <div class="data-image">
                          <img :src="item.imgUrl" alt="" @click="onEditorSelectImage(item, 'imgUrl')">
                        </div>
                    </div>
                  </div>
                  <div class="el-form-item">
                    <label class="el-form-item__label">文字内容 </label>
                    <div class="el-form-item__content">
                      <el-input v-model="item.text" placeholder="文字内容"></el-input>
                    </div>
                  </div>
                  <div class="el-form-item">
                    <label class="el-form-item__label">文字颜色 </label>
                    <div class="el-form-item__content">
                      <div class="content-center">
                        <el-color-picker v-model="item.color" ></el-color-picker>
                        <el-button type="button" size="mini" @click.stop="onEditorResetColor(item, 'color', '#666666')">重置</el-button>
                      </div>
                    </div>
                  </div>
                  <div class="el-form-item">
                      <label class="el-form-item__label">链接地址 </label>
                      <div class="el-form-item__content">
                        <el-input type="text" v-model='item.linkUrl' placeholder="http://www.baidu.com"></el-input>
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
import draggable from 'vuedraggable'

export default {
  name: 'NavNarAttr',
  props: {},
  components: {
    draggable
  },
  data () {
    return {

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

</style>
