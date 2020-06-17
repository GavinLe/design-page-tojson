// 默认配置
const defaultData = {
  search: {
    name: '搜索框',
    type: 'search',
    params: {
      placeholder: '请输入关键字进行搜索'
    },
    style: {
      textAlign: 'left',
      searchStyle: 'square'
    }
  },
  carousel: {
    name: '图片轮播',
    type: 'carousel',
    style: {
      btnColor: '#ffffff',
      btnShape: 'round'
    },
    params: {
      interval: 2800,
      displayDateTimeRange: [] // 显示时间控制
    },
    data: [{
      imgUrl: 'https://prd-wechat.oss-cn-hangzhou.aliyuncs.com/images/diy/01.png',
      linkUrl: ''
    },
    {
      imgUrl: 'https://prd-wechat.oss-cn-hangzhou.aliyuncs.com/images/diy/01.png',
      linkUrl: ''
    }
    ]
  },
  imageSingle: {
    name: '单图组',
    type: 'imageSingle',
    style: {
      paddingTop: 0,
      paddingLeft: 0,
      background: '#ffffff'
    },
    params: {
      displayDateTimeRange: [] // 显示时间控制
    },
    data: [{
      imgUrl: 'https://prd-wechat.oss-cn-hangzhou.aliyuncs.com/images/diy/01.png',
      imgName: 'image-1.jpg',
      linkUrl: ''
    }
    ]
  },
  navBar: {
    name: '导航组',
    type: 'navBar',
    style: {
      background: '#ffffff',
      rowsNum: 4
    },
    params: {
      displayDateTimeRange: [] // 显示时间控制
    },
    data: [{
      imgUrl: 'https://prd-wechat.oss-cn-hangzhou.aliyuncs.com/images/diy/nav/01.png', // 'assets/img/diy/navbar/01.png',
      imgName: 'icon-1.png',
      linkUrl: '',
      text: '按钮文字1',
      color: '#666666'
    },
    {
      imgUrl: 'https://prd-wechat.oss-cn-hangzhou.aliyuncs.com/images/diy/nav/01.png', // 'assets/img/diy/navbar/01.png',
      imgName: 'icon-2.jpg',
      linkUrl: '',
      text: '按钮文字2',
      color: '#666666'
    },
    {
      imgUrl: 'https://prd-wechat.oss-cn-hangzhou.aliyuncs.com/images/diy/nav/01.png', // 'assets/img/diy/navbar/01.png',
      imgName: 'icon-3.jpg',
      linkUrl: '',
      text: '按钮文字3',
      color: '#666666'
    },
    {
      imgUrl: 'https://prd-wechat.oss-cn-hangzhou.aliyuncs.com/images/diy/nav/01.png', // 'assets/img/diy/navbar/01.png',
      imgName: 'icon-4.jpg',
      linkUrl: '',
      text: '按钮文字4',
      color: '#666666'
    }
    ]
  },
  blank: {
    name: '辅助空白',
    type: 'blank',
    style: {
      height: 20,
      background: '#ffffff'
    }
  },
  guide: {
    name: '辅助线',
    type: 'guide',
    style: {
      background: '#ffffff',
      lineStyle: 'solid',
      lineHeight: 1,
      lineColor: '#000000',
      paddingTop: 0
    }
  },
  video: {
    name: '视频组',
    type: 'video',
    params: {
      videoUrl: 'http: //wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400',
      poster: 'assets/img/diy/video_poster.png',
      autoplay: '0'
    },
    style: {
      paddingTop: '0',
      height: '190'
    }
  },
  article: {
    name: '文章组',
    type: 'article',
    params: {
      source: 'auto', // choice; auto
      auto: {
        category: 0,
        showNum: 6
      }
    },
    style: {},
    // "自动获取": 默认数据
    defaultData: [{
      articleTitle: '此处显示文章标题',
      showType: 10,
      image: 'assets/img/diy/article/01.png',
      viewsNum: '309'
    },
    {
      articleTitle: '此处显示文章标题',
      showType: 10,
      image: 'assets/img/diy/article/01.png',
      viewsNum: '309'
    }
    ],
    // "手动选择": 默认数据
    data: []
  },
  notice: {
    name: '公告组',
    type: 'notice',
    params: {
      text: '这里是第一条自定义公告的标题',
      icon: 'assets/img/diy/notice.png'
    },
    style: {
      paddingTop: '4',
      background: '#ffffff',
      textColor: '#000000'
    }
  },
  richText: {
    name: '富文本',
    type: 'richText',
    params: {
      content: '<p>这里是文本的内容</p>'
    },
    style: {
      paddingTop: '0',
      paddingLeft: '0',
      background: '#ffffff'
    }
  },
  imageWindow: {
    name: '图片橱窗',
    type: 'imageWindow',
    style: {
      paddingTop: 0,
      paddingLeft: 0,
      background: '#ffffff',
      layout: 2
    },
    params: {
      displayDateTimeRange: [] // 显示时间控制
    },
    data: [{
      imgUrl: 'https://prd-wechat.oss-cn-hangzhou.aliyuncs.com/images/diy/window/01.jpg', // 'assets/img/diy/window/01.jpg',
      linkUrl: ''
    },
    {
      imgUrl: 'https://prd-wechat.oss-cn-hangzhou.aliyuncs.com/images/diy/window/02.jpg', // 'assets/img/diy/window/02.jpg',
      linkUrl: ''
    },
    {
      imgUrl: 'https://prd-wechat.oss-cn-hangzhou.aliyuncs.com/images/diy/window/03.jpg', // 'assets/img/diy/window/03.jpg',
      linkUrl: ''
    },
    {
      imgUrl: 'https://prd-wechat.oss-cn-hangzhou.aliyuncs.com/images/diy/window/04.jpg', // 'assets/img/diy/window/04.jpg',
      linkUrl: ''
    }
    ],
    dataNum: 4
  },
  goods: {
    name: '商品组',
    type: 'goods',
    params: {
      auto: {
        category: 0,
        goodsSort: 'all', // all; sales; price
        showNum: 6
      },
      displayDateTimeRange: [] // 显示时间控制
    },
    style: {
      background: '#F6F6F6',
      display: 'list', // list; slide
      column: 2,
      show: {
        goodsName: '1',
        goodsPrice: 1,
        linePrice: 1,
        sellingPoint: 0,
        goodsSales: 0
      }
    },
    // "自动获取": 默认数据
    data: [{
      goodsName: '此处显示商品名称1',
      goodsDesc: '商品描述商品描述商品描述1',
      image: 'https://prd-wechat.oss-cn-hangzhou.aliyuncs.com/images/diy/goods/01.png', // 'https://prd-wechat.oss-cn-hangzhou.aliyuncs.com/images/diy/goods/01.png', // 'assets/img/diy/goods/01.png',
      goodsPrice: '99.00',
      linePrice: '139.00',
      sellingPoint: '此款商品美观大方 不容错过',
      goodsSales: '100'
    },
    {
      goodsName: '此处显示商品名称2',
      goodsDesc: '商品描述商品描述商品描述2',
      image: 'https://prd-wechat.oss-cn-hangzhou.aliyuncs.com/images/diy/goods/01.png', // 'https://prd-wechat.oss-cn-hangzhou.aliyuncs.com/images/diy/goods/01.png', // 'assets/img/diy/goods/01.png',
      goodsPrice: '99.00',
      linePrice: '139.00',
      sellingPoint: '此款商品美观大方 不容错过',
      goodsSales: '100'
    },
    {
      goodsName: '此处显示商品名称3',
      goodsDesc: '商品描述商品描述商品描述商品描述3',
      image: 'https://prd-wechat.oss-cn-hangzhou.aliyuncs.com/images/diy/goods/01.png', // 'https://prd-wechat.oss-cn-hangzhou.aliyuncs.com/images/diy/goods/01.png', // 'assets/img/diy/goods/01.png',
      goodsPrice: '99.00',
      linePrice: '139.00',
      sellingPoint: '此款商品美观大方 不容错过',
      goodsSales: '100'
    },
    {
      goodsName: '此处显示商品名称4',
      goodsDesc: '商品描述商品描述商品描述商品描述4',
      image: 'https://prd-wechat.oss-cn-hangzhou.aliyuncs.com/images/diy/goods/01.png', // 'https://prd-wechat.oss-cn-hangzhou.aliyuncs.com/images/diy/goods/01.png', // 'assets/img/diy/goods/01.png',
      goodsPrice: '99.00',
      linePrice: '139.00',
      sellingPoint: '此款商品美观大方 不容错过',
      goodsSales: '100'
    }
    ]
  },
  coupon: {
    name: '优惠券组',
    type: 'coupon',
    style: {
      paddingTop: '10',
      background: '#ffffff'
    },
    params: {
      limit: '5'
    },
    data: [{
      color: 'red',
      reducePrice: '10',
      minPrice: '100.00'
    },
    {
      color: 'violet',
      reducePrice: '10',
      minPrice: '100.00'
    }
    ]
  },
  sharingGoods: {
    name: '拼团商品组',
    type: 'sharingGoods',
    params: {
      source: 'auto', // choice; auto
      auto: {
        category: 0,
        goodsSort: 'all', // all; sales; price
        showNum: 6
      }
    },
    style: {
      background: '#F6F6F6',
      show: {
        goodsName: '1',
        sellingPoint: '1',
        sharingPrice: '1',
        linePrice: '1'
      }
    },
    // "自动获取": 默认数据
    defaultData: [{
      goodsName: '此处是拼团商品',
      image: 'https://prd-wechat.oss-cn-hangzhou.aliyuncs.com/images/diy/goods/01.png', // 'assets/img/diy/goods/01.png',
      sellingPoint: '此款商品美观大方 性价比较高 不容错过',
      sharingPrice: '99.00',
      linePrice: '139.00'
    },
    {
      goodsName: '此处是拼团商品',
      image: 'https://prd-wechat.oss-cn-hangzhou.aliyuncs.com/images/diy/goods/01.png', // 'assets/img/diy/goods/01.png',
      sellingPoint: '此款商品美观大方 性价比较高 不容错过',
      goodsPrice: '99.00',
      linePrice: '139.00'
    },
    {
      goodsName: '此处是拼团商品',
      image: 'https://prd-wechat.oss-cn-hangzhou.aliyuncs.com/images/diy/goods/01.png', // 'assets/img/diy/goods/01.png',
      sellingPoint: '此款商品美观大方 性价比较高 不容错过',
      sharingPrice: '99.00',
      linePrice: '139.00'
    },
    {
      goodsName: '此处是拼团商品',
      image: 'https://prd-wechat.oss-cn-hangzhou.aliyuncs.com/images/diy/goods/01.png', // 'assets/img/diy/goods/01.png',
      sellingPoint: '此款商品美观大方 性价比较高 不容错过',
      sharingPrice: '99.00',
      linePrice: '139.00'
    }
    ],
    // "手动选择": 默认数据
    data: [{
      goodsName: '此处是拼团商品',
      image: 'https://prd-wechat.oss-cn-hangzhou.aliyuncs.com/images/diy/goods/01.png', // 'assets/img/diy/goods/01.png',
      sellingPoint: '此款商品美观大方 性价比较高 不容错过',
      sharingPrice: '99.00',
      linePrice: '139.00',
      isDefault: true
    },
    {
      goodsName: '此处是拼团商品',
      image: 'https://prd-wechat.oss-cn-hangzhou.aliyuncs.com/images/diy/goods/01.png', // 'assets/img/diy/goods/01.png',
      sellingPoint: '此款商品美观大方 性价比较高 不容错过',
      sharingPrice: '99.00',
      linePrice: '139.00',
      isDefault: true
    }
    ]
  },
  sharpGoods: {
    name: '秒杀商品组',
    type: 'sharpGoods',
    params: {
      showNum: 6
    },
    style: {
      background: '#ffffff',
      column: '3',
      show: {
        goodsName: '1',
        seckillPrice: '1',
        originalPrice: '1'
      }
    },
    // "手动选择": 默认数据
    data: [{
      goodsName: '此处是秒杀商品',
      ggoodsImage: 'https://prd-wechat.oss-cn-hangzhou.aliyuncs.com/images/diy/goods/01.png', // 'assets/img/diy/goods/01.png',
      seckillPrice: '69.00',
      originalPrice: '139.00'
    },
    {
      goodsName: '此处是秒杀商品',
      ggoodsImage: 'https://prd-wechat.oss-cn-hangzhou.aliyuncs.com/images/diy/goods/01.png', // 'assets/img/diy/goods/01.png',
      seckillPrice: '69.00',
      originalPrice: '139.00'
    },
    {
      goodsName: '此处是秒杀商品',
      ggoodsImage: 'https://prd-wechat.oss-cn-hangzhou.aliyuncs.com/images/diy/goods/01.png', // 'assets/img/diy/goods/01.png',
      seckillPrice: '69.00',
      originalPrice: '139.00'
    }
    ]
  },
  officialAccount: {
    name: '关注公众号',
    type: 'officialAccount',
    params: {},
    style: {}
  },
  service: {
    name: '在线客服',
    type: 'service',
    params: {
      type: 'chat', // "客服类型": chat在线聊天，phone拨打电话
      image: 'assets/img/diy/service.png',
      phoneNum: ''
    },
    style: {
      right: '1',
      bottom: '10',
      opacity: '100'
    }
  }
}

const jsonData = {
  page: {},
  items: []
}

const opts = {
  catgory: [],
  sharingCatgory: [],
  articleCatgory: []
}
export default {
  defaultData,
  jsonData,
  opts
}
