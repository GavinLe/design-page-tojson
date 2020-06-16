<template>
  <div @click.stop="onEditer(index)" class="drag optional" :class="{selected: index === $attrs.selectedIndex}" :key="index">
    <div class="diy-guide" :style="{padding: item.style.paddingTop +'px '+'0', background: item.style.background }">
        <p class="line" :style="{borderTopWidth: item.style.lineHeight +'px',borderTopColor:item.style.lineColor,borderTopStyle: item.style.lineStyle }">
        </p>
    </div>
    <div class="btn-edit-del">
        <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
    </div>
</div>
</template>

<script>
export default {
  name: 'WidgetGuide',
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
