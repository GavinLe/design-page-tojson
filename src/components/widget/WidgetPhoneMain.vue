<template>
  <div class="diy-phone-wrapper" v-cloak>
    <!-- 手机顶部标题 -->
    <div id="diy-page" class="phone-top optional" @click.stop="onEditer('page')" :class="{selected: 'page' === $attrs.selectedIndex}" :style="{background: $attrs.diyData.page.style.titleBackgroundColor + ' url(' + require('../../assets/img/diy/phone-top-' + $attrs.diyData.page.style.titleTextColor + '.png') +')  no-repeat center / contain'}">
      <h4 :style="{color: $attrs.diyData.page.style.titleTextColor}">{{ $attrs.diyData.page.params.title }}</h4>
    </div>
    <!-- 小程序内容区域 -->
    <div id="phone-main" class="phone-main" v-cloak>
      <draggable :list="$attrs.diyData.items" class="dragArea" @update="onDragItemEnd" :options="{animation: 120, filter: '.drag__nomove' }">
        <template v-for="(item, index) in $attrs.diyData.items">
              <!-- diy元素: 图片轮播 -->
              <carousel v-if="item.type == 'carousel'" :key="'carousel' + index" :item="item" :index="index" v-on="$listeners" v-bind="$attrs" v-cloak></carousel>
              <!-- diy元素: 图片轮播 -->
          </template>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import Carousel from './carousel/Carousel'

export default {
  name: 'WidgetPhoneMain',
  inheritAttrs: false,
  props: {
  },
  components: {
    draggable,
    Carousel
  },
  data () {
    return {
    }
  },
  computed: {},
  watch: {},
  methods: {
    onEditer (index) {
      this.$emit('onEditer', index)
    },
    /**
     * 拖动diy元素更新当前索引
     * @param e
     */
    onDragItemEnd: function (e) {
      this.onEditer(e.newIndex);
    },
    
    onDeleleItem(index) {
      this.$emit('onDeleleItem', index)
    }
  },
  created () {
  },
  mounted () {
    console.log(this.$listeners)
  },
  beforeDestroy () {}
}
</script>

<style scoped lang="scss">
  // diy手机
  .diy-phone-wrapper {
    width: 377px;
    border-radius: 3px;
    box-shadow: 0 3px 10px #dcdcdc;
    border: 1px solid #ddd;
    .phone-top {
      width: 100%;
      height: 66px;
      text-align: center;
      h4 {
        margin: 0;
        font-size: 1.4rem;
        font-weight: normal;
        white-space: nowrap;
        line-height: 88px;
      }
    }

    // diy元素容器
    /deep/ .phone-main {
      position: relative;
      border-top: 0;
      user-select: none;
      line-height: normal;
      .dragArea {
        overflow-y: auto;
        height: 580px;
      }
      .drag {
        display: block;
        overflow: hidden;
        font-size: 1.3rem;
        .btn-edit-del {
          height: 16px;
          position: absolute;
          right: 4px;
          bottom: 11px;
          display: none;
          z-index: 90;
          & > div {
            width: 32px;
            height: 16px;
            line-height: 16px;
            display: inline-block;
            text-align: center;
            font-size: 10px;
            color: #fff;
            background: rgba(0, 0, 0, .4);
            margin-left: 2px;
            cursor: pointer;
            position: relative;
            z-index: 11;
          }
        }
        // 选中状态
        &.selected, &:hover {
          // 显示删除按钮
          .btn-edit-del {
            display: block;
          }
        }

      }

      a {
        color: #337ab7;
      }

      // diy-搜索
      .diy-search {
        background: #f1f1f2;
        padding: 10px 10px;
        .inner {
          height: 30px;
          background: #fff;
          overflow: hidden;
          &.radius {
            border-radius: 5px;
          }
          &.round {
            border-radius: 30px;
          }
          .search-input {
            height: 30px;
            //width: 100%;
            line-height: 30px;
            color: #999999;
            padding: 0 10px;
          }
        }
      }

      // diy-banner
      .diy-banner {
        display: block;
        margin: 0;
        padding: 2px;
        height: auto;
        overflow: hidden;
        //position: relative;
        img {
          display: none;
          width: 100%;
          &:first-child {
            display: block;
          }
        }
        .dots {
          height: 14px;
          padding: 0 10px;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 10px;
          opacity: 0.8;
          text-align: center;
          span {
            display: inline-block;
            margin-left: 3px;
          }
          &.rectangle {
            span {
              height: 10px;
              width: 16px;
            }
          }
          &.square {
            span {
              height: 10px;
              width: 10px;
            }
          }
          &.round {
            span {
              height: 10px;
              width: 10px;
              border-radius: 10px;
            }
          }
        }
      }

      // diy-单图组
      .diy-imageSingle {
        display: block;
        margin: 0;
        padding: 0;
        height: auto;
        overflow: hidden;
        img {
          display: block;
          width: 100%;
        }
      }

      // diy-按钮组
      .diy-navBar {
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
          }
        }
      }

      // diy-辅助线
      .diy-guide {
        .line {
          height: 0;
          width: 100%;
        }
      }

      // diy-视频组
      .diy-video {
        video {
          display: block;
          width: 100%;
          height: 100%;
        }
      }

      // diy-文章组
      .diy-article {
        background: #f7f7f7;
        .article-item {
          margin-bottom: 10px;
          padding: 15px;
          background: #fff;
          &:last-child {
            margin-bottom: 0;
          }
          .article-item__image image {
            display: block;
          }
          .article-item__footer {
            margin-top: 5px;
            .article-views {
              font-size: 12px;
              color: #888;
            }
          }
          // 小图模式
          &.show-type__10 {
            display: flex;
            .article-item__left {
              padding-right: 10px;
            }
            .article-item__title {
              min-height: 36px;
            }
            .article-item__image img {
              display: block;
              width: 120px;
            }
          }
          // 大图模式
          &.show-type__20 {
            .article-item__image {
              margin-top: 12.5px;
              img {
                display: block;
                width: 100%;
              }
            }
          }
        }
      }

      // diy-专题组
      .diy-special {
        line-height: normal;
        .special-left {
          padding: 5px 10px;
          img {
            display: block;
            width: 70px;
          }
        }
        .special-content {
          //width: 250px;
          overflow: hidden;
          .content-item {
            padding: 2px 0;
            font-size: 13px;
            color: #141414;
          }
          &.display_1 {
            height: 22px;
          }
          &.display_2 {
            height: 44px;
          }
        }
        .special-more {
          padding: 12px 10px;
          font-size: 12px;
        }
      }

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

      // diy-商品组
      .diy-goods {
        .goods-list {
          padding: 2px;
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
              display: flex;
              width: 40%;
              background: #fff;
              align-items: center;
            }
            .goods-item_left img {
              display: block;
              width: 120px;
              height: 120px;
            }
            .goods-item_right {
              position: relative;
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
              width: 50%;
            }
          }
          &.column__3 {
            .goods-item {
              width: 33.33333%;
            }
          }
          .goods-item {
            padding: 3px;
            .goods-image {
              position: relative;
              width: 100%;
              height: 0;
              padding-bottom: 100%;
              overflow: hidden;
              background: #fff;
              &:after {
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
              font-size: 1.3rem;
              .goods-name {
                height: 40px;
                overflow: hidden;
              }
              .goods-price {
                font-size: 15px;
              }
              .line-price {
                font-size: 12px;
                text-decoration: line-through;
                color: #999;
              }
              .selling-point {
                font-size: 12px;
                color: #f20c59
              }
            }
          }
        }
      }

      // diy-秒杀商品组
      .diy-sharpGoods {

        .sharp-top {
          .sharp-modular {
            font-size: 15px;
            color: #fff;
            background: #FB571D;
            padding: 5px 15px 5px 12px;
            border-bottom-right-radius: 15px;
            border-top-right-radius: 15px;
            .modular-name {
              margin-left: 5px;
            }
          }
          .sharp-active-status {
            color: #616161;
            font-size: 14px;
            margin-left: 10px;
          }
          /* 倒计时 */
          .active-count-down {
            font-size: 13px;
            height: 20px;
            margin-left: 8px;
            .clock-text {
              margin-right: 5px;
            }
            .clock-time {
              background: #252525;
              color: #fff;
              padding: 0 3px;
              line-height: 20px;
              border-radius: 4px;
            }
            .clock-symbol {
              padding: 0 4px;
            }
          }

          /* 更多 */
          .sharp-more {
            padding-right: 12px;
            color: #616161;
            font-size: 14px;
            .sharp-more-arrow {
              font-size: 12px;
            }
          }
        }

        .goods-list {
          padding: 2px;

          &.display__list {
            .goods-item {
              float: left;
            }
          }
          &.column__2 {
            .goods-item {
              width: 50%;
            }
          }
          &.column__3 {
            .goods-item {
              width: 33.33333%;
            }
          }
          .goods-item {
            padding: 3px;
            .goods-image {
              position: relative;
              width: 100%;
              height: 0;
              padding-bottom: 100%;
              overflow: hidden;
              background: #fff;
              &:after {
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
              padding: 2px;
              background: #fff;
              .goods-name {
                font-size: 14px;
                height: 38px;
                line-height: 1.3;
                overflow: hidden;
              }
              .detail-price {
                line-height: 20px;
                .goods-price {
                  font-size: 15px;
                }
                .line-price {
                  font-size: 12px;
                  text-decoration: line-through;
                  color: #999;
                }
              }
            }
          }
        }
      }

      // diy-优惠券组
      .diy-coupon {
        padding: 10px 0;

        .coupon-item {
          width: 150px;
          height: 60px;
          position: relative;
          color: #fff;
          overflow: hidden;
          box-sizing: border-box;
          i.before {
            content: "";
            position: absolute;
            z-index: 1;
            width: 1.6rem;
            height: 1.6rem;
            top: 50%;
            left: -.8rem;
            -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
            -webkit-border-radius: 80%;
            border-radius: 80%;
            background-color: #fff;
          }

          .left-content {
            position: relative;
            float: left;
            width: 70%;
            height: 100%;
            background-color: #E5004F;
            font-size: 12px;
            .content-top {
              .price {
                font-size: 2rem;
              }
            }
            &.color__blue {
              background: linear-gradient(-125deg, #57bdbf, #2f9de2);
            }
            &.color__red {
              background: linear-gradient(-128deg, #ff6d6d, #ff3636);
            }
            &.color__violet {
              background: linear-gradient(-113deg, #ef86ff, #b66ff5);
            }
            &.color__yellow {
              background: linear-gradient(-141deg, #f7d059, #fdb054);
            }
          }
          .right-receive {
            float: right;
            width: 30%;
            height: 100%;
            background-color: #4e4e4e;
            text-align: center;
            span {
              font-size: 1.3rem;
            }
          }
        }

      }

      // diy-拼团商品组
      .diy-sharingGoods {
        padding: 10px;
        .goods-item {
          height: 160px;
          margin-bottom: 10px;
          padding: 10px;
          box-sizing: border-box;
          background: #fff;
        }
        .goods-item:last-child {
          margin-bottom: 0;
        }
        /* 商品图片 */
        .goods-item_left {
          display: flex;
          width: 40%;
          background: #fff;
          align-items: center;
        }
        .goods-item_left img {
          display: block;
          width: 120px;
          height: 120px;
        }
        .goods-item_right {
          position: relative;
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
          margin-top: 8px;
        }
        /* 商品卖点 */
        .desc-selling_point {
          width: 200px;
          height: 16px;
          font-size: 12px;
          line-height: 1.4;
          color: #ff495e;
        }
        /* 拼团信息 */
        .desc-situation {
          margin-top: 6px;
          font-size: 12px;
          line-height: 1.3;
          color: rgb(240, 60, 60);
        }
        .desc-situation .people {
          margin: 0 3px;
        }
        /* 商品价格 */
        .desc_footer {
          margin-top: 6px;
          font-size: 12px;
        }
        .desc_footer .price_x {
          margin-right: 8px;
          color: rgb(240, 60, 60);
          font-size: 14px;
        }
        .desc_footer .price_y {
          text-decoration: line-through;
        }
        /* 去拼团按钮 */
        .goods-item .btn-settlement {
          position: absolute;
          right: 0;
          bottom: 0;
          padding: 0 14px;
          border-radius: 20px;
          background: linear-gradient(to right, rgb(235, 53, 107) 0%, rgb(240, 60, 60) 100%);
          box-shadow: 0 2px 10px -2px rgb(235, 53, 107);
          font-size: 12px;
          line-height: 27px;
          text-align: center;
          color: #fff;
        }

      }

      // diy-砍价商品组
      .diy-bargainGoods {

        .goods-item {
          margin-bottom: 10px;
          background: #fff;
          padding: 10px 8px;
        }

        .goods-item:last-child {
          margin-bottom: 0;
        }

        .goods-item .goods-image img {
          display: block;
          width: 110px;
          height: 110px;
        }

        .goods-item .goods-info {
          width: 249px;
          padding-top: 2px;
          margin-left: 7px;
          position: relative;
        }

        .goods-item .goods-info .goods-name {
          font-size: 14px;
          min-height: 30px;
        }

        /* 正在参与的用户 */

        .goods-item .goods-info .peoples {
          margin-top: 7px;
        }

        .goods-item .goods-info .peoples .user-list {
          margin-right: 5px;
        }

        .goods-item .goods-info .peoples .user-list .user-item-avatar {
          margin-left: -4px;
        }

        .goods-item .goods-info .peoples .user-list .user-item-avatar:first-child {
          margin-left: 0;
        }

        .goods-item .goods-info .peoples .user-list .user-item-avatar img {
          display: block;
          width: 18px;
          height: 18px;
          border-radius: 50%;
        }

        .goods-item .goods-info .peoples .people__text {
          font-size: 12px;
          color: #818181;
        }

        /* 商品原价 */

        .goods-item .goods-info .goods-price {
          margin-top: 7px;
          color: #818181;
          font-size: 12px;
          text-decoration: line-through;
        }

        /* 砍价底价 */

        .goods-item .goods-info .floor-price {
          color: #fc1e56;
        }

        .goods-item .goods-info .floor-price .small {
          font-size: 12px;
        }

        .goods-item .goods-info .floor-price .big {
          font-size: 16px;
        }

        /* 立即参加按钮 */
        .opt-touch {
          position: absolute;
          bottom: 0;
          right: 5px;
        }
        .touch-btn {
          color: #fff;
          font-size: 14px;
          background: #d3a975;
          border-radius: 15px;
          padding: 5px 14px;
        }

      }

      // 公告组
      .diy-notice {
        padding: 4px 10px;
        line-height: 26px;
        .notice__icon {
          font-size: 0;
          img {
            width: 16px;
            height: 16px;
          }
        }
        .notice__text {
          padding-left: 5px;
        }
      }

      // 富文本
      .diy-richText {
        font-size: 14px;
        line-height: normal;
        p {
          padding: 0 4px;
        }
        img {
          display: block;
          width: 375px;
          margin-left: -4px;
        }
        video {
          width: 100%;
        }
        p {
          //margin: 5px 0;
        }
        hr {
          margin: 5px 0;
        }
        * + h1, * + h2, * + h3, * + h4, * + h5, * + h6 {
          margin: 1.6rem 0;
        }
      }

      // 在线客服
      .diy-service {
        position: absolute;
        z-index: 999;
        .service-icon {
          padding: 5px;
          img {
            display: block;
            width: 45px;
            height: 45px;
          }
        }
      }

      // 线下门店
      .diy-shop {

        .shop-item {
          padding: 8px 15px;
          min-height: 90px;
          font-size: 13px;
          line-height: 1.5;
          border-bottom: 1px solid #eee;
        }

        .shop-item__logo {
          margin-right: 15px;
          img {
            display: block;
            width: 65px;
            height: 65px;
            border-radius: 50%;
            border: 1px solid #ececec;
          }
        }

        .shop-item__title {
          font-size: 14px;
          color: #fd4a5f;
          margin-bottom: 5px;
        }

        .shop-item__address, .shop-item__phone {
          color: #919396;
        }

        .shop-item__address {
          width: 260px;
        }

        .shop-item__distance {
          margin-top: 5px;
          color: #c1c1c1;
          height: 20px;
        }

        .shop-item__distance .iconfont {
          color: #81838e;
          margin-right: 3px;
        }

      }

      // 关注公众号
      .diy-officialAccount {
        width: 100%;
        height: 75px;
        padding: 0 8px;
        .item-top {
          padding: 5px 0;
          font-size: 12px;
          color: #c0bdc0;
        }
        .item-content {
          height: 46px;
          .item-cont-avatar {
            margin-right: 10px;
            img {
              display: block;
              width: 42px;
              height: 42px;
            }
          }
          .item-cont-public {
            width: 235px;
            margin-right: 15px;
            .public-name {
              font-size: 14px;
            }
            .public-describe {
              margin-top: 2px;
              font-size: 12px;
              color: #9E9B9F;
            }
          }
          .item-cont-active {
            .active-btn {
              width: 46px;
              height: 24px;
              line-height: 22px;
              border: 1px solid rgb(26, 173, 25);
              border-radius: 3px;
              font-size: 12px;
              color: rgb(26, 173, 25);
              text-align: center;
            }
          }
        }

      }

    }

    .optional {
      position: relative;
      &:before {
        content: "";
      }
      &.__z10:before {
        z-index: 10;
      }
      &.__no-move:before {
        cursor: pointer !important;
      }
      &.selected:before,
      &:hover:before {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 2px dashed #00a0e9;
        cursor: move;
      }
    }

  }
</style>
