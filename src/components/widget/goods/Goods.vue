<template>
  <div class="drag optional" :class="{selected: index === $attrs.selectedIndex}" @click.stop="onEditer(index)">
    <div class="goods-wrapper" :style="{background:item.style.background}">
        <ul class="goods-list"
            :class="['display__' + item.style.display, 'column__' + item.style.column]">
            <li class="goods-item" v-for="(goods, goodsIndex) in item.data"  :key="goodsIndex">
                <!-- 单列商品 -->
                <template v-if="item.style.column == 1">
                  <div class="dis-flex">
                    <!-- 商品图片 -->
                    <div class="goods-item_left">
                        <img :src="goods.image">
                    </div>
                    <div class="goods-item_right">
                      <!-- 商品名称 -->
                      <div class="goods-item_title">
                        <span>{{ goods.goodsName }}</span>
                      </div>
                      <div class="goods-item_desc">
                        <span>{{ goods.goodsDesc }}</span>
                      </div>
                      <div class="goods-item_desc">
                        <!-- 商品卖点 -->
                        <div v-if="item.style.show.sellingPoint" class="desc-selling_point ">
                          <span>{{ goods.sellingPoint }}</span>
                        </div>
                        <!-- 商品销量 -->
                        <div v-if="item.style.show.goodsSales" class="desc-goods_sales">
                          <span>已售{{ goods.goodsSales }}件</span>
                        </div>
                        <!-- 商品价格 -->
                        <div class="desc_footer">
                          <span v-if="item.style.show.goodsPrice" class="price_x">¥{{ goods.goodsPrice }}</span>
                          <span class="price_y x-color-999" v-if="item.style.show.linePrice && goods.linePrice > 0">¥{{ goods.linePrice }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>

                <!-- 两列三列 -->
                <template v-else>
                    <div class="goods-image"><img :src="goods.image">
                    </div>
                    <div class="detail">
                        <p class="goods-name">{{goods.goodsName}}</p>
                        <p class="goods-desc">{{goods.goodsDesc}}</p>
                        <p class="detail-price">
                          <span v-if="item.style.show.goodsPrice" class="goods-price x-color-red">{{ goods.goodsPrice }}</span>
                          <span v-if="item.style.show.linePrice && goods.linePrice > 0" class="line-price">{{ goods.linePrice }}</span>
                        </p>
                    </div>
                </template>

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
  name: 'WidgetGoods',
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
  // diy-商品组
  .goods-wrapper {
    width: 100%;
    height: 100%;
    .goods-list {
      padding: 3px;
      &.display__slide {
        //overflow-x: scroll;
        //overflow-y: hidden;
        overflow-x: hidden;
        white-space: nowrap;
        font-size: 0;
        &::-webkit-scrollbar {
          display: none;
        }
        .goods-item {
          display: inline-block;
          //float: unset;
        }
      }
      &.display__list {
        .goods-item {
          float: left;
        }
      }
      &.column__1 {
        .goods-item {
          width: 100%;
          height: 140px;
          margin-bottom: 6px;
          padding: 10px;
          box-sizing: border-box;
          background: #fff;
        }
        .goods-item:last-child {
          margin-bottom: 0;
        }
        /* 商品图片 */
        .goods-item_left {
          width: 40%;
          float: left;
          background: #fff;
          align-items: center;
        }
        .goods-item_left img {
          display: block;
          width: 120px;
          height: 120px;
        }
        .goods-item_right {
          float: left;
          width: 60%;
        }
        /* 商品名称 */
        .goods-item_right .goods-item_title {
          height: 36px;
          margin-top: 10px;
          font-size: 14px;
          line-height: 1.3;
          color: #333;
        }
        .goods-item_desc {
          margin-top: 4px;
        }
        /* 商品卖点 */
        .desc-selling_point {
          width: 200px;
          height: 20px;
          font-size: 12px;
          color: #ff495e;
        }
        .desc-goods_sales {
          color: #999;
          font-size: 12px;
        }
        /* 商品价格 */
        .desc_footer {
          //margin-top: 6px;
          font-size: 12px;
        }
        .desc_footer .price_x {
          margin-right: 8px;
          color: rgb(240, 60, 60);
          font-size: 15px;
        }
        .desc_footer .price_y {
          text-decoration: line-through;
        }
      }
      &.column__2 {
        .goods-item {
          width: 47.5%;
        }
      }
      &.column__3 {
        .goods-item {
          width: 31.33333%;
        }
      }
      .goods-item {
        padding: 3px;
        text-align: left;
        list-style-type:none;
        .goods-image {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 100%;
          overflow: hidden;
          background: #fff;
          &:after {
            clear: both;
            content: '';
            display: block;
            margin-top: 100%; /* margin 百分比相对父元素宽度计算 */
          }
          img {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            -o-object-fit: cover;
            object-fit: cover;
          }
        }
        .detail {
          padding: 4px;
          background: #fff;
          font-size: 14px;
          .goods-name {
            overflow: hidden;
            width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .goods-desc {
            font-size: 12px;
            color: #999;
            overflow: hidden;
            width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .goods-price {
            font-size: 15px;
            color: #f00;
          }
          .line-price {
            font-size: 14px;
            text-decoration: line-through;
            color: #999;
          }
          .goods-price + .line-price {margin-left: 5px;}
          .selling-point {
            font-size: 12px;
            color: #f20c59
          }
        }
      }
      // 
      &::after {
        clear: both;
        content: " ";
        display: table;
      }
    }
  }
</style>
