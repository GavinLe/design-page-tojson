<template>
  <div class="drag optional" :class="{selected: index === $attrs.selectedIndex}" @click.stop="onEditer(index)">
    <div class="diy-banner">
      <el-carousel :interval="interval" arrow="always" height="200px">
        <el-carousel-item v-for="(item, index) in item.data" :key="index">
          <img :src="item.imgUrl" height="200">
        </el-carousel-item>
        
      </el-carousel>
    </div>
    <div class="btn-edit-del">
      <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WidgetCarousel',
  inheritAttrs: false,
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
    }
  },
  computed: {
    interval () {
      console.log(this.item.params.interval)
      return Number(this.item.params.interval)
    }
  },
  watch: {},
  methods: {
    onEditer: function (index) {
      this.$emit('onEditer', index)
    },
    onDeleleItem: function (index) {
      this.$emit('onDeleleItem', index)
    }
  },
  created () {},
  mounted () {
    console.log(this.item)
  },
  beforeDestroy () {}
}
</script>

<style scoped lang="scss">

</style>
