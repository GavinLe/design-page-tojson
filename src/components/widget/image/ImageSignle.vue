<template>
  <div class="drag optional" :class="{selected:index === $attrs.selectedIndex}" @click.stop="onEditer(index)">
    <div class="diy-imageSingle" :style="{ paddingBottom: item.style.paddingTop + 'px', background: item.style.background}">
      <div class="item-image" v-for="(imageSingle, imageIndex) in item.data" :style="{padding: item.style.paddingTop + 'px ' + item.style.paddingLeft + 'px 0'}" :key="imageIndex">
        <img :src="imageSingle.imgUrl">
      </div>
    </div>
    <div class="btn-edit-del">
      <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WidgetImageSignle',
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
  computed: {},
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
  mounted () {},
  beforeDestroy () {}
}
</script>

<style scoped lang="scss">

</style>
