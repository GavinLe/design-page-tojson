<template>
  <div class="image-wrapper">
    <div class="item" v-if="imageUrl">
      <div class="item-action">
        <img :src="imageUrl" />
        <span class="item-hover">
          <span @click="handlePictureCardPreview">
            <i class="el-icon-zoom-in"></i>
          </span>
          <span @click="handleRemove">
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </div>
    </div>
    <el-upload v-else action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :show-file-list="false"
      :limit="1"
      :on-success="handleSuccess"
      >
      <i class="el-icon-plus"></i>
    </el-upload>

    <!-- 显示大图 -->
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="imageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    imageUrl: {
      type: String,
      required: true
    }
  },
  components: {
  },
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  computed: {},
  watch: {},
  methods: {
    handleRemove() {
      this.imageUrl = ''
      // this.$emit('onRemove', this.index)
    },
    // handlePictureCardPreview() {
    //   this.dialogImageUrl = this.item.url;
    //   this.dialogVisible = true;
    // },
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
  .image-wrapper {
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      
      .item-action {
        position: relative;
        .item-hover {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          cursor: default;
          text-align: center;
          color: #fff;
          opacity: 0;
          font-size: 20px;
          background-color: rgba(0,0,0,.5);
          transition: opacity .3s;
          &:hover {
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 1;
          }
          span {
            display: inline-block;
            cursor: pointer;
          }
          span + span {margin-left: 10px;}
        }
      }
      
    }
  }
</style>
