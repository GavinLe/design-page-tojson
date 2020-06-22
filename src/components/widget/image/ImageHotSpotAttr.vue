<template>
  <!-- -->
  <div class="editor-image-hot-sport-wrapper">
    <div class="editor-title"><span v-text="$attrs.curItem.name"></span></div>
    <div class="editor-hotspot">
      <img :src="$attrs.curItem.style.imgUrl" width="100%">
      <template v-for="(drag, index) of $attrs.curItem.data">
        <vue-draggable-resizable 
          :x="drag.absolute.x" 
          :y="drag.absolute.y" 
          :w="drag.absolute.width" 
          :h="drag.absolute.height" 
          @dragging="onDrag(...arguments, index)" 
          @resizing="onResize(...arguments, index)" 
          @click.native="editHotSpot(index)"
          :parent="true" style="top:0;" :key="'draggable'+index">
          <div class="content-box">
            <p class="title">
              {{ drag.name ? drag.name : '热点' + (index + 1) }}
            </p>
            <div class="delete-hot-spot">
              <img src="../../../assets/img/close-b.png" @click="onEditorDeleleData(index, $attrs.selectedIndex)" />
            </div>
          </div>
            
        </vue-draggable-resizable>
      </template>
    </div>
    <el-form :form="$attrs.curItem" label-width="120px">
      <div class="el-form-item">
        <label class="el-form-item__label">背景图片</label>
        <div class="el-form-item__content">
          <div class="content-center">
            <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/">
              <el-button size="mini">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件</div>
            </el-upload>
          </div>
        </div>
      </div>

      <div class="el-form-item" v-if="isEdit">
        <label class="el-form-item__label">热点名称{{hotspotIndex+1}} </label>
        <div class="el-form-item__content">
          <div class="content-center">
            <el-input v-model="$attrs.curItem.data[hotspotIndex].name" placeholder="热区名称"></el-input>
          </div>
        </div>
      </div>
      <div class="el-form-item" v-if="isEdit">
        <label class="el-form-item__label">跳转链接{{hotspotIndex +1}} </label>
        <div class="el-form-item__content">
          <div class="content-center">
            <el-input v-model="$attrs.curItem.data[hotspotIndex].linkUrl" placeholder="跳转链接"></el-input>
          </div>
        </div>
      </div>
    </el-form>
    <el-button size="small" @click="onEditorAddData">添加一个</el-button>
  </div>
</template>

<script>
import vueDraggableResizable from 'vue-draggable-resizable';
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

export default {
  name: '',
  props: {},
  components: {
    vueDraggableResizable
  },
  data () {
    return {
      isEdit: false,
      hotspotIndex: null // 选中修改的热区下标
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
      this.isEdit = false
      this.hotspotIndex = null
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
    onResize: function (x, y, width, height, index) {
      // console.log('onResize', x, y, width, height, index)
      this.$attrs.curItem.data[index].absolute.x = x
      this.$attrs.curItem.data[index].absolute.y = y
      this.$attrs.curItem.data[index].absolute.width = width
      this.$attrs.curItem.data[index].absolute.height = height
    },
    onDrag: function (x, y, index) {
      // console.log('onDrag', x, y, index)
      this.$attrs.curItem.data[index].absolute.x = x
      this.$attrs.curItem.data[index].absolute.y = y
    },
    toLink(item) {
      if (item.linkUrl && item.linkUrl.length > 0) {
        window.open(item.linkUrl)
      }
    },
    editHotSpot(index) {
      this.hotspotIndex = index
      this.isEdit = true;
    }
  },
  created () {},
  mounted () {},
  beforeDestroy () {}
}
</script>

<style scoped lang="scss">
.editor-image-hot-sport-wrapper {
  .editor-hotspot {
    display: block; 
    position: relative;
    .content-box {
      position: relative;
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .title {cursor: pointer;}
      .delete-hot-spot {
        position: absolute;
        cursor: pointer;
        right: 0;
        top: 0;
        height: 16px;
        width: 16px;
        z-index: 999;
        img {
          height: 16px;
          width: 16px;
        }
      }
    } 
  }
}
  
</style>
