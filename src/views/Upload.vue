<template>
  <div class="upload-wrapper">
    <div>上传组件</div>
    <div>
      <div class="image-item">
          <image-item v-for="(item, index) in imageList" :key="index" :index="index" :item="item" @onRemove="handleRemoveItem"></image-item>
          <el-upload class="image-wrapper" action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :file-list="imageList"
            :show-file-list="false"
            :limit="2"
            :on-preview="handlePictureCardPreview"
            :on-success="handleSuccess"
            :on-exceed="handleExceed">
            <i class="el-icon-plus"></i>
          </el-upload>
      </div>
    </div>
  </div>
</template>

<script>
import ImageItem from './ImageItem'
export default {
  name: 'Upload',
  props: {},
  components: {
    ImageItem
  },
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      imageList: [{itemId: '123125612', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {itemId: '3213512', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    }
  },
  computed: {},
  watch: {},
  methods: {
    handleRemoveItem(index) {
      this.imageList.splice(index, 1);
    },
    handlePictureCardPreview(file) {
      console.log(file)
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleSuccess(response, file, fileList) {
      console.log('成功之后获取数据')
      this.imageList.push({itemId: '', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'})
    },
    handleExceed() {
      this.$message.error('文件已超出上限')
    }
  },
  created () {},
  mounted () {},
  beforeDestroy () {}
}
</script>

<style scoped lang="scss">
  .upload-wrapper {
    .image-item {
      display: flex;
      .image-wrapper + .image-wrapper {margin-left: 5px;}
    }
  }
</style>
