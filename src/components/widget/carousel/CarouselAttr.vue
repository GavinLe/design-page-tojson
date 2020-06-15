<template>
  <div class="edito-carousel-wrapper">
    <div class="editor-title">
      <span>{{ $attrs.curItem.name }}</span>
    </div>
    <el-form :form="$attrs.curItem.params" label-width="120px">
      <el-form-item label="切换时间">
        <el-input v-model="$attrs.curItem.params.interval" placeholder="轮播图自动切换的间隔时间，单位：毫秒"></el-input>
				<span class="span-desc">轮播图自动切换的间隔时间，单位：毫秒</span>
      </el-form-item>
      <div class="form-items el-form-item">
          <draggable :list="$attrs.curItem.data" :options="{ animation: 120, filter: 'input', preventOnFilter: false }">
              <div class="form-item" v-for="(banner, index) in $attrs.curItem.data" :key="index">
                  <i class="el-icon-close item-delete" @click="onEditorDeleleData(index, selectedIndex)"></i>
                  <div class="item-inner">
                      <div class="am-form-group">
                          <label class="el-form-item__label">图片 </label>
                          <div class="el-form-item__content">
                              <div class="data-image">
                                  <img :src="banner.imgUrl" alt=""
                                        @click="onEditorSelectImage(banner, 'imgUrl')">
                              </div>
                              <div class="help-block">
                                  <small>建议尺寸750x360</small>
                              </div>
                          </div>
                      </div>
                      <div class="am-form-group">
                          <label class="el-form-item__label">链接地址 </label>
                          <div class="el-form-item__content">
                              <input type="text" value=""
                                      v-model='banner.linkUrl'>
                          </div>
                      </div>
                  </div>
              </div>
          </draggable>
      </div>
      <el-form-item label="">
        <el-button type="primary" @click="onEditorAddData">添加一个</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'CarouselAttr',
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
        this.$emit('onEditorAddData', this.curItem.type)
    },
  },
  created () {},
  mounted () {},
  beforeDestroy () {}
}
</script>

<style scoped lang="scss">
  .edito-carousel-wrapper {

  }
</style>
