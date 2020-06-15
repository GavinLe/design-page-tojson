             <!-- diy元素: 单图组 -->
              <template v-else-if="item.type == 'imageSingle'">
                <div @click.stop="onEditer(index)" :key="index">
                  <div class="drag optional" :class="{selected:index === selectedIndex}">
                    <div class="diy-imageSingle" :style="{ paddingBottom: item.style.paddingTop + 'px', background: item.style.background}">
                      <div class="item-image" v-for="(imageSingle, imageIndex) in item.data" :style="{padding: item.style.paddingTop + 'px ' + item.style.paddingLeft + 'px 0'}" :key="imageIndex">
                        <img :src="imageSingle.imgUrl">
                      </div>
                    </div>
                    <div class="btn-edit-del">
                        <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
                    </div>
                  </div>
                </div>
              </template>

              <!-- diy元素: 图片橱窗 -->
              <template v-else-if="item.type == 'imageWindow'" >
                  <div @click.stop="onEditer(index)" :key="index">
                      <div class="drag optional" :class="{selected:index === selectedIndex}">
                          <div class="diy-window" :style="{ background: item.style.background, padding: item.style.paddingTop + 'px ' + item.style.paddingLeft + 'px' }">
                              <ul class="data-list" v-if="item.style.layout > -1"
                                  :class="'am-avg-sm-' + item.style.layout">
                                  <li v-for="(window, windowIndex) in item.data" :style="{ padding: item.style.paddingTop + 'px ' + item.style.paddingLeft + 'px' }" :key="windowIndex">
                                    <div class="item-image">
                                      <img :src="window.imgUrl">
                                    </div>
                                  </li>
                              </ul>
                              <div class="display" v-else>
                                  <div class="display-left"
                                        :style="{ padding: item.style.paddingTop + 'px ' + item.style.paddingLeft + 'px' }">
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
                  </div>
              </template>

              <!-- diy元素: 视频组 -->
              <template v-else-if="item.type == 'video'">
                  <div @click.stop="onEditer(index)" :key="index">
                      <div class="drag optional" :class="{selected:index === selectedIndex}">
                          <div class="diy-video" :style="{padding:item.style.paddingTop + 'px 0'}">
                              <video :style="{height:item.style.height + 'px'}"
                                      :src="item.params.videoUrl"
                                      :poster="item.params.poster"
                                      :autoplay="item.params.autoplay == 1"
                                      controls>
                                  您的浏览器不支持 video 标签
                              </video>
                          </div>
                          <div class="btn-edit-del">
                              <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
                          </div>
                      </div>
                  </div>
              </template>

              <!-- diy元素: 搜索栏 -->
              <template v-else-if="item.type == 'search'">
                  <div @click.stop="onEditer(index)" :key="index">
                      <div class="drag optional" :class="{selected:index === selectedIndex}">
                          <div class="diy-search">
                              <div class="inner"
                                    :class="item.style.searchStyle">
                                  <div class="search-input"
                                        :style="{textAlign: item.style.textAlign}">
                                      <i class="search-icon iconfont icon-ss-search"></i>
                                      <span>{{item.params.placeholder}}</span>
                                  </div>
                              </div>
                          </div>
                          <div class="btn-edit-del">
                              <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
                          </div>
                      </div>
                  </div>
              </template>

              <!-- diy元素: 公告组 -->
              <template v-else-if="item.type == 'notice'">
                  <div @click.stop="onEditer(index)" :key="index">
                      <div class="drag optional" :class="{selected:index === selectedIndex}">
                          <div class="diy-notice dis-flex"
                                :style="{padding: item.style.paddingTop + 'px' + ' 10px', background: item.style.background}">
                              <div class="notice__icon">
                                  <img :src="item.params.icon">
                              </div>
                              <div class="notice__text flex-box am-text-truncate">
                                  <span :style="{color: item.style.textColor}">{{item.params.text}}</span>
                              </div>
                          </div>
                          <div class="btn-edit-del">
                              <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
                          </div>
                      </div>
                  </div>
              </template>

              <!-- diy元素: 导航组 -->
              <template v-else-if="item.type == 'navBar'">
                  <div @click.stop="onEditer(index)" :key="index">
                      <div class="drag optional" :class="{selected:index === selectedIndex}">
                          <div class="diy-navBar" :style="{background:item.style.background}">
                              <ul class=""
                                  :class="item.style.rowsNum === '4'?'am-avg-sm-4':(item.style.rowsNum ==='3'?'am-avg-sm-3':'am-avg-sm-5')">
                                  <li class="" v-for="(navBar,index) in item.data" :key="index" >
                                      <div class="item-image">
                                          <img :src="navBar.imgUrl">
                                      </div>
                                      <p class="item-text am-text-truncate"
                                          :style="{color:navBar.color}">
                                          {{navBar.text}}</p>
                                  </li>
                              </ul>
                          </div>
                          <div class="btn-edit-del">
                              <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
                          </div>
                      </div>
                  </div>
              </template>

              <!-- diy元素: 商品组 -->
              <template v-else-if="item.type == 'goods'">
                  <div @click.stop="onEditer(index)"  :key="index">
                      <div class="drag optional" :class="{selected: index === selectedIndex}">
                          <div class="diy-goods" :style="{background:item.style.background}">
                              <ul class="goods-list am-cf"
                                  :class="['display__' + item.style.display, 'column__' + item.style.column]">


                                  <li class="goods-item"
                                      v-for="(goods, goodsIndex) in (item.params.source == 'choice' ? item.data : item.defaultData)"  :key="goodsIndex">

                                      <!-- 单列商品 -->
                                      <template v-if="item.style.column == 1">
                                          <div class="dis-flex">
                                              <!-- 商品图片 -->
                                              <div class="goods-item_left">
                                                  <img :src="goods.image">
                                              </div>
                                              <div class="goods-item_right">
                                                  <!-- 商品名称 -->
                                                  <div v-if="item.style.show.goodsName"
                                                        class="goods-item_title twolist-hidden">
                                                      <span>{{ goods.goods_name }}</span>
                                                  </div>
                                                  <div class="goods-item_desc">
                                                      <!-- 商品卖点 -->
                                                      <div v-if="item.style.show.sellingPoint"
                                                            class="desc-selling_point am-text-truncate">
                                                          <span>{{ goods.selling_point }}</span>
                                                      </div>
                                                      <!-- 商品销量 -->
                                                      <div v-if="item.style.show.goodsSales"
                                                            class="desc-goods_sales am-text-truncate">
                                                          <span>已售{{ goods.goods_sales }}件</span>
                                                      </div>
                                                      <!-- 商品价格 -->
                                                      <div class="desc_footer">
                                                          <span v-if="item.style.show.goodsPrice"
                                                                class="price_x">¥{{ goods.goods_price }}</span>
                                                          <span class="price_y x-color-999"
                                                                v-if="item.style.show.linePrice && goods.line_price > 0">¥{{ goods.line_price }}</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </template>

                                      <!-- 两列三列 -->
                                      <template v-else>
                                          <div class="goods-image">
                                              <img :src="goods.image">
                                          </div>
                                          <div class="detail">
                                              <p v-if="item.style.show.goodsName"
                                                  class="goods-name twolist-hidden">
                                                  {{goods.goods_name}}
                                              </p>
                                              <p class="detail-price">
                                                <span v-if="item.style.show.goodsPrice"
                                                      class="goods-price x-color-red">{{ goods.goods_price }}</span>
                                                  <span v-if="item.style.show.linePrice && goods.line_price > 0"
                                                        class="line-price">{{ goods.line_price }}</span>
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
                  </div>
              </template>

              <!-- diy元素: 优惠券组 -->
              <template v-else-if="item.type == 'coupon'">
                  <div @click.stop="onEditer(index)" class="drag optional" :class="{selected: index === selectedIndex}" :key="index">
                      <div class="diy-coupon dis-flex flex-x-around"
                            :style="{background:item.style.background,padding: item.style.paddingTop+'px '+' 0'}">
                          <div v-for="(coupon, couponIndex) in item.data" class="coupon-wrapper" :key="couponIndex">
                              <div class="coupon-item" :style="{background:coupon.color}">
                                  <i class="before" :style="{background:item.style.background}"></i>
                                  <div :style="{background:coupon.color}"
                                        class="left-content dis-flex flex-dir-column flex-x-center flex-y-center">
                                      <div class="content-top">
                                          <span class="unit">￥</span>
                                          <span class="price">{{ coupon.reduce_price }}</span>
                                      </div>
                                      <div class="content-bottom">
                                          <span>满{{ coupon.min_price }}元可用</span>
                                      </div>
                                  </div>
                                  <div class="right-receive dis-flex flex-dir-column flex-x-center flex-y-center">
                                      <span>立即</span>
                                      <span>领取</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="btn-edit-del">
                          <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
                      </div>
                  </div>
              </template>

              <!-- diy元素: 拼团商品组 -->
              <template v-else-if="item.type == 'sharingGoods'">
                  <div @click.stop="onEditer(index)" :key="index">
                      <div class="drag optional" :class="{selected:index === selectedIndex}">
                          <div class="diy-sharingGoods" :style="{background: item.style.background }">
                              <div class="goods-item dis-flex" v-for="(goods, goodIndex) in item.data" :key="goodIndex">
                                  <!-- 商品图片 -->
                                  <div class="goods-item_left">
                                      <img :src="goods.image">
                                  </div>
                                  <div class="goods-item_right">
                                      <!-- 商品名称 -->
                                      <div v-if="item.style.show.goodsName"
                                            class="goods-item_title twolist-hidden">
                                          <span>{{ goods.goods_name }}</span>
                                      </div>
                                      <div class="goods-item_desc">
                                          <!-- 商品卖点 -->
                                          <div v-if="item.style.show.sellingPoint"
                                                class="desc-selling_point am-text-truncate">
                                              <span>{{ goods.selling_point }}</span>
                                          </div>
                                          <!-- 拼团信息 -->
                                          <div class="desc-situation">
                                              <span class="iconfont icon-pintuan_huaban"></span>
                                              <span class="people">2人团</span>
                                              <span class="x-color-999">已有43人进行拼团</span>
                                          </div>
                                          <!-- 商品价格 -->
                                          <div class="desc_footer">
                                              <span class="price_x"
                                                    v-if="item.style.show.sharingPrice">¥{{ goods.sharing_price }}</span>
                                              <span class="price_y x-color-999"
                                                    v-if="item.style.show.linePrice && goods.line_price > 0">¥{{ goods.line_price }}</span>
                                          </div>
                                      </div>
                                      <div class="btn-settlement">去拼团</div>
                                  </div>
                              </div>
                          </div>
                          <div class="btn-edit-del">
                              <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
                          </div>
                      </div>
                  </div>
              </template>

              <!-- diy元素: 砍价商品组 -->
              <template v-else-if="item.type == 'bargainGoods'">
                  <div @click.stop="onEditer(index)" :key="index">
                      <div class="drag optional" :class="{selected:index === selectedIndex}">
                          <div class="diy-bargainGoods" :style="{background: item.style.background }">
                              <div class="goods-item dis-flex" v-for="(goods, index) in item.data" :key="index">
                                  <!-- 商品图片 -->
                                  <div class="goods-image">
                                      <img :src="goods.goods_image">
                                  </div>
                                  <div class="goods-info">
                                      <!-- 商品名称 -->
                                      <div v-if="item.style.show.goodsName" class="goods-name">
                                          <span class="twolist-hidden">{{ goods.goods_name }}</span>
                                      </div>
                                      <!-- 参与的用户头像 -->
                                      <div v-if="item.style.show.peoples"
                                            class="peoples dis-flex">
                                          <div class="user-list dis-flex">
                                              <div v-for="(help, helpIndex) in item.demo.helps" class="user-item-avatar" :key="helpIndex">
                                                  <img :src="help.avatarUrl">
                                              </div>
                                          </div>
                                          <div class="people__text">
                                              <span>{{ item.demo.helps_count }}人正在砍价</span>
                                          </div>
                                      </div>
                                      <!-- 商品原价 -->
                                      <div v-if="item.style.show.originalPrice" class="goods-price">
                                          <span>￥{{ goods.original_price }}</span>
                                      </div>
                                      <!-- 砍价低价 -->
                                      <div v-if="item.style.show.floorPrice" class="floor-price">
                                          <span class="small">最低￥</span><span class="big">{{ goods.floor_price }}</span>
                                      </div>
                                      <!-- 操作按钮 -->
                                      <div class="opt-touch">
                                          <div class="touch-btn">
                                              <span>立即参加</span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="btn-edit-del">
                              <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
                          </div>
                      </div>
                  </div>
              </template>

              <!-- diy元素: 秒杀商品组 -->
              <template v-else-if="item.type == 'sharpGoods'">
                  <div @click.stop="onEditer(index)" :key="index">
                      <div class="drag optional" :class="{selected: index === selectedIndex}">
                          <div class="diy-sharpGoods" :style="{background:item.style.background}">
                              <div class="sharp-top dis-flex flex-y-center">
                                  <div class="sharp-top--left flex-box dis-flex flex-y-center">
                                      <div class="sharp-modular dis-flex flex-y-center">
                                          <i class="iconfont icon-miaosha-b"></i>
                                          <span class="modular-name">限时秒杀</span>
                                      </div>
                                      <div class="sharp-active-status">
                                          <span>正在疯抢</span>
                                      </div>
                                      <div class="active-count-down">
                                          <div class="clock dis-flex">
                                              <div class="clock-time">
                                                  <span>00</span>
                                              </div>
                                              <div class="clock-symbol">
                                                  <span>:</span>
                                              </div>
                                              <div class="clock-time">
                                                  <span>58</span>
                                              </div>
                                              <div class="clock-symbol">
                                                  <span>:</span>
                                              </div>
                                              <div class="clock-time">
                                                  <span>04</span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="sharp-top--right">
                                      <div class="sharp-more dis-flex flex-y-center">
                                          <span class="sharp-more-text">更多</span>
                                          <span class="sharp-more-arrow">
                                              <i class="iconfont icon-xiangyoujiantou"></i>
                                          </span>
                                      </div>
                                  </div>
                              </div>
                              <div class="goods-list">
                                  <ul class="goods-list display__list am-cf"
                                      :class="['column__' + item.style.column]">
                                      <li class="goods-item" v-for="(goods, index) in item.data" :key="index">
                                          <!-- 单列商品 -->
                                          <template v-if="item.style.column == 1">
                                          </template>
                                          <!-- 两列三列 -->
                                          <template v-else>
                                              <div class="goods-image">
                                                  <img :src="goods.goods_image">
                                              </div>
                                              <div class="detail">
                                                  <p v-if="item.style.show.goodsName"
                                                      class="goods-name twolist-hidden">
                                                      {{goods.goods_name}}
                                                  </p>
                                                  <p class="detail-price">
                                                <span v-if="item.style.show.seckillPrice"
                                                      class="goods-price x-color-red">{{ goods.seckill_price }}</span>
                                                      <span v-if="item.style.show.originalPrice && goods.original_price > 0"
                                                            class="line-price">{{ goods.original_price }}</span>
                                                  </p>
                                              </div>
                                          </template>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div class="btn-edit-del">
                              <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
                          </div>
                      </div>
                  </div>
              </template>

              <!-- diy元素: 辅助空白 -->
              <template v-else-if="item.type == 'blank'">
                  <div @click.stop="onEditer(index)" :key="index">
                      <div class="drag optional" :class="{selected:index === selectedIndex}">
                          <div class="diy-blank"
                                :style="{height: item.style.height +'px', background:item.style.background }">
                          </div>
                          <div class="btn-edit-del">
                              <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
                          </div>
                      </div>
                  </div>
              </template>

              <!-- diy元素: 辅助线 -->
              <template v-else-if="item.type == 'guide'">
                  <div @click.stop="onEditer(index)" class="drag optional" :class="{selected: index === selectedIndex}" :key="index">
                      <div class="diy-guide"
                            :style="{padding: item.style.paddingTop +'px '+'0', background:item.style.background }">
                          <p class="line"
                              :style="{borderTopWidth: item.style.lineHeight +'px',borderTopColor:item.style.lineColor,borderTopStyle: item.style.lineStyle }">
                          </p>
                      </div>
                      <div class="btn-edit-del">
                          <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
                      </div>
                  </div>
              </template>

              <!-- diy元素: 在线客服 -->
              <template v-else-if="item.type == 'service'">
                  <div class="diy-service drag optional drag__nomove" @click.stop="onEditer(index)" :key="index"
                        :class="{selected: index === selectedIndex}"
                        :style="{ right: item.style.right + '%', bottom: item.style.bottom + '%', opacity: item.style.opacity / 100 }">
                      <div class="service-icon">
                          <img :src="item.params.image" alt="">
                      </div>
                      <div class="btn-edit-del">
                          <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
                      </div>
                  </div>
              </template>

              <!-- diy元素: 关注公众号 -->
              <template v-else-if="item.type == 'officialAccount'">
                  <div @click.stop="onEditer(index)" :key="index">
                      <div class="drag optional" :class="{selected:index === selectedIndex}">
                          <div class="diy-officialAccount">
                              <div class="item-top">
                                  <span>关联的公众号</span>
                              </div>
                              <div class="item-content am-cf">
                                  <div class="item-cont-avatar am-fl">
                                      <img src="assets/store/img/diy/circular.png" alt="">
                                  </div>
                                  <div class="item-cont-public am-fl">
                                      <div class="public-name"><span>公众号名称</span></div>
                                      <div class="public-describe"><span>公众号简介公众号简介公众号简介</span></div>
                                  </div>
                                  <div class="item-cont-active am-fl">
                                      <div class="active-btn">
                                          <span>关注</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="btn-edit-del">
                              <div class="btn-del" @click.stop="onDeleleItem(index)">删除</div>
                          </div>
                      </div>
                  </div>
              </template>