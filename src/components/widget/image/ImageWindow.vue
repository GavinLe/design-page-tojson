<template>
  <!-- diy元素: 图片橱窗 -->
  <div class="drag optional" :class="{selected:index === $attrs.selectedIndex}" @click.stop="onEditer(index)">
      <div class="diy-window" :style="{ background: item.style.background, padding: item.style.paddingTop + 'px ' + item.style.paddingLeft + 'px' }">
          <ul class="data-list" v-if="item.style.layout > -1" :class="'am-avg-sm-' + item.style.layout">
              <li v-for="(window, windowIndex) in item.data" :style="{ padding: item.style.paddingTop + 'px ' + item.style.paddingLeft + 'px' }" :key="windowIndex">
                <div class="item-image">
                  <img :src="window.imgUrl">
                </div>
              </li>
          </ul>
          <div class="display" v-else>
              <div class="display-left" :style="{ padding: item.style.paddingTop + 'px ' + item.style.paddingLeft + 'px' }">
                  <img :src="item.data[0].imgUrl">
              </div>
              <div class="display-right">
                  <div v-if="item.data.length >= 2" class="display-right1"
                        :style="{ padding:item.style.paddingTop+'px '+item.style.paddingLeft +'px' }">
                      <img :src="item.data[1].imgUrl">
                  </div>
                  <div class="display-right2">
                      <div v-if="item.data.length >= 3" class="left"
                            :style="{ padding:item.style.paddingTop + 'px ' + item.style.paddingLeft + 'px' }">
                          <img :src="item.data[2].imgUrl">
                      </div>
                      <div v-if="item.data.length >= 4" class="right"
                            :style="{ padding:item.style.paddingTop + 'px ' + item.style.paddingLeft + 'px' }">
                          <img :src="item.data[3].imgUrl">
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="btn-edit-del">
          <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'WidgetImageWindow',
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
  // diy-图片橱窗
  .diy-window {

    .item-image {
      img {
        width: 100%;
      }
    }

    // 橱窗样式
    .display {
      height: 0;
      width: 100%;
      margin: 0;
      padding-bottom: 50%;
      position: relative;

      img {
        width: 100%;
        height: 100%;
      }

      .display-left {
        width: 50%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }

      .display-right {
        width: 50%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 50%;
      }

      .display-right1 {
        width: 100%;
        height: 50%;
        position: absolute;
        top: 0;
        left: 0;
      }

      .display-right2 {
        width: 100%;
        height: 50%;
        position: absolute;
        top: 50%;
        left: 0;
        .left {
          width: 50%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
        .right {
          width: 50%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 50%;
        }
      }
    }
  }
</style>
