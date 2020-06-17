<template>
  <!--编辑器: 商品组-->
  <div class="good-attr-wrapper">
    <div class="editor-title"><span>{{ $attrs.curItem.name }}</span></div>
    <el-form :form="$attrs.curItem.params" label-width="120px">
        
        <!-- 手动选择 -->
        <div class="switch-source __choice ">
          <div class="form-items __goods am-cf">
            <draggable :list="$attrs.curItem.data" :options="{ animation: 120, filter: 'input', preventOnFilter: false }">
              <div v-for="(goods, index) in $attrs.curItem.data" class="form-item drag" :key="index"> 
                <i class="el-icon-close item-delete" @click="onEditorDeleleData($attrs.index, $attrs.selectedIndex)"></i>
                <div class="item-inner">
                  <div class="data-image">
                    <img :src="goods.image" alt="">
                  </div>
                </div>
              </div>
            </draggable>
          </div>
          
        </div>
        <div>
            <el-button size="mini" @click.stop="onSelectGoods($attrs.curItem)">选择商品</el-button>
          </div>
        <!--分割线-->
        <hr style="width: 100%; display:block; border-top: 1px dashed #ccc; margin: 10px 0"/>
        <!--组件样式-->
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
          <label class="el-form-item__label">显示类型 </label>
          <div class="el-form-item__content">
            <el-radio-group v-model="$attrs.curItem.style.display">
              <el-radio :label="'list'">列表平铺</el-radio>
              <el-radio :label="'slide'" :disabled="$attrs.curItem.style.column == 1">横向滑动</el-radio>
            </el-radio-group>
          </div>
        </div>

        <div class="el-form-item">
          <label class="el-form-item__label">分列数量 </label>
          <div class="el-form-item__content">
            <el-radio-group v-model="$attrs.curItem.style.column">
              <el-radio :label="1" :disabled="$attrs.curItem.style.display == 'slide'">单列</el-radio>
              <el-radio :label="2">两列</el-radio>
              <el-radio :label="3">三列</el-radio>
            </el-radio-group>
          </div>
        </div>
    </el-form>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'GoodsAttr',
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
    * 编辑器：删除data元素
    * @param index
    * @param selectedIndex
    */
    onEditorDeleleData: function (index, selectedIndex) {
      this.$emit('onEditorDeleleData', index, selectedIndex)
    }
  },
  created () {},
  mounted () {},
  beforeDestroy () {}
}
</script>

<style scoped lang="scss">

</style>
