<template>
  <div class="drag optional" :class="{selected:index === $attrs.selectedIndex}" @click.stop="onEditer(index)">
    <div class="nav-bar-wrapper" :style="{background:item.style.background}">
      <ul class="" :class="item.style.rowsNum === 4?'am-avg-sm-4':(item.style.rowsNum ===3?'am-avg-sm-3':'am-avg-sm-5')">
        <li class="" v-for="(navBar,index) in item.data" :key="index" >
          <div class="item-image">
            <img :src="navBar.imgUrl">
          </div>
          <span class="item-text" :style="{color:navBar.color}"> {{navBar.text}}</span>
        </li>
      </ul>
    </div>
    <div class="btn-edit-del">
      <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WidgetNavBar',
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
  .nav-bar-wrapper {
    li {
      margin: 10px 0;
      .item-image {
        text-align: center;
        margin-bottom: 4px;
        img {
          height: 44px;
          width: 44px;
        }
      }
      .item-text {
        text-align: center;
        font-size: 13px;
      }
    }
  }
</style>
