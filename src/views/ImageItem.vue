<template>
  <div class="image-wrapper">
    <div class="item">
      <div class="item-action">
        <img :src="item.url" width="200"/>
        <span class="item-hover">
          <span @click="handlePictureCardPreview">
            <i class="el-icon-zoom-in"></i>
          </span>
          <span @click="handleRemove">
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </div>
      <el-input v-model="item.itemId" placeholder="商品ID:" style="width: 200px"></el-input>
      <el-button @click="handleSelectGoods">选择商品</el-button>

      
    </div>
    
    <!-- 选择商品 -->
    <el-dialog :visible.sync="itemDialogVisible">
      <div>选择商品</div>
      <footer>
        <el-button @click="itemDialogVisible=false">取消</el-button>
        <el-button type="primary" @click="itemDialogVisible=false">确认</el-button>
      </footer>
    </el-dialog>
    <!-- 显示大图 -->
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    index: {
      type: [String, Number],
      required: true
    },
    item: {
      type: Object,
      required: true
    }
  },
  components: {
  },
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      itemDialogVisible: false
    }
  },
  computed: {},
  watch: {},
  methods: {
    handleRemove() {
      this.$emit('onRemove', this.index)
    },
    handlePictureCardPreview() {
      this.dialogImageUrl = this.item.url;
      this.dialogVisible = true;
    },
    handleSelectGoods: function () {
      this.itemDialogVisible = true
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
          span + span {margin-left: 20px;}
        }
      }
      
    }
  }
</style>
