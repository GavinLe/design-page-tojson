<template>

  <div class="drag optional" :class="{selected:index === $attrs.selectedIndex}" @click.stop="onEditer(index)">
    <div class="image-hot-spot-wrapper">
      <div class="hot-spot">
        <img :src="item.style.imgUrl" width="100%">
        <template v-for="(drag, index) of item.data">
          <vue-draggable-resizable :x="drag.absolute.x" :y="drag.absolute.y" :w="drag.absolute.width" :h="drag.absolute.height" :parent="true" style="top:0;" :draggable="false" :resizable="false" :key="'draggable'+index">
            <div class="content-box">
              <p class="title">
                {{ drag.name ? drag.name : '热点' + (index + 1) }}
              </p>
            </div>
              
          </vue-draggable-resizable>
        </template>
      </div>
    </div>
    <div class="btn-edit-del">
      <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
    </div>
  </div>
</template>

<script>
import vueDraggableResizable from 'vue-draggable-resizable';
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

  export default {
    name: 'WidgetImageHotSpot',
    components: {
      vueDraggableResizable
    },
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
    data() {
      return {
      }
    },
    methods: {
      onEditer: function (index) {
        this.$emit('onEditer', index)
      },
      onDeleleItem: function (index) {
        this.$emit('onDeleleItem', index)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet" scoped type="text/scss">
  .image-hot-spot-wrapper {
    padding: 2px;
    .hot-spot {
      display: block; 
      position: relative;
      .content-box {
        height: 100%;
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        .title {cursor: pointer;}
      }
    }
  }
</style>
