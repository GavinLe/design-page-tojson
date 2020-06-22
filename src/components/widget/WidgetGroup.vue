<template>
  <div class="diy-menu-wrapper">
    <div class="menu-title"><span>组件库</span></div>
    <div class="navs">
        <template v-for="(item, index) in groupList" v-cloak>
          <div class="navs-group" :key="index">
            <div class="title" v-text="item.groupName" ></div>
            <div class="navs-components">
              <nav class="special" @click="onAddItem(sub.type)" v-for="(sub, subIndex) in handleGroupList(item.items)" :key="index + '_' +subIndex">
                  <p class="item-icon" v-if="sub.icon"><i :class="sub.icon"></i></p>
                  <p class="item-label" v-text="sub.title"></p>
              </nav>
            </div>
          </div>
        </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WidgetGroup',
  props: {},
  components: {
  },
  data () {
    return {
      // 左边组件库列表 
      groupList: [
        {groupName: '媒体组件', items: [
          {title: '图片轮播', icon: '', type: 'carousel'},
          {title: '单图组', icon: '', type: 'imageSingle'},
          {title: '图片橱窗', icon: '', type: 'imageWindow'},
          {title: '热图', icon: '', type: 'imageHotSpot'},
          {title: '文章组', icon: '', type: 'article', hidden: true},
          {title: '视频组', icon: '', type: 'video', hidden: true},
        ]},
        {groupName: '商城组件', items: [
          {title: '导航组', icon: '', type: 'navBar'},
          {title: '搜索框', icon: '', type: 'search', hidden: true},
          {title: '公告组', icon: '', type: 'notice', hidden: true},
          {title: '商品组', icon: '', type: 'goods', hidden: true},
          {title: '拼团商品', icon: '', type: 'sharingGoods', hidden: true},
          {title: '秒杀商品', icon: '', type: 'sharpGoods', hidden: true}
        ]},
        {groupName: '工具组件', items: [
          {title: '辅助空白', icon: '', type: 'blank'},
          {title: '辅助线', icon: '', type: 'guide'},
        ]}
      ]
    }
  },
  computed: {},
  watch: {},
  methods: {
    onAddItem (widgetType) {
      this.$emit('handleAddItem', widgetType)
    },
    handleGroupList (list) {
      const nList = list.filter((item) => {
        console.log('======= group ========', item.hidden)
        return item.hidden ? false : true
      })
      return nList
    }
  },
  created () {},
  mounted () {},
  beforeDestroy () {}
}
</script>

<style scoped lang="scss">
.diy-menu-wrapper {
  width: 285px;
  height: auto;
  background: #fdfdfd;
  border: 1px solid #ddd;
  padding: 15px 10px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  user-select: none;
  .menu-title {
    position: relative;
    padding: 0 22px;
    height: 30px;
    border-bottom: 1px solid #eef1f5;
    span {
      font-size: 1.3rem;
    }
    &::before {
      content: "";
      position: absolute;
      width: 4px;
      height: 13px;
      background: #00aeff;
      top: 8px;
      left: 9px;
    }
  }
  .navs {
    height: auto;
    padding: 10px 5px;
    border-bottom: 1px dotted #ddd;
    position: relative;
    display: flex;
    flex-direction: column;
    .navs-group {
      margin-bottom: 20px;
    }
    .title {
      font-size: 1.24rem;
      color: #999;
      margin: 10px 0;
    }
    .btns-global {
      width: 96px;
      nav {
        height: 40px;
        line-height: 38px;
      }
    }
    nav {
      width: 74px;
      float: left;
      padding: 3px 0;
      margin: 5px;
      border: 1px solid #dddddd;
      text-align: center;
      font-size: 12px;
      cursor: pointer;
      -webkit-transition: All 0.3s ease-in-out;
      -moz-transition: All 0.3s ease-in-out;
      -o-transition: All 0.3s ease-in-out;
      transition: All 0.3s ease-in-out;
      p {
        color: #424242;
      }
      &:hover {
        background: #fff;
        border: 1px solid #00aeff;
        color: #00aeff;
        -webkit-transition: All 0.4s;
        -moz-transition: All 0.4s;
        -o-transition: All 0.4s;
        transition: All 0.4s;
      }
      &:active {
        -webkit-box-shadow: inset 1px 3px 5px rgba(0, 0, 0, 0.2);
        box-shadow: inset 1px 3px 5px rgba(0, 0, 0, 0.2);
      }
    }
    .special {
      background: #f4f4f4;
      .item-label {
        padding: 10px 3px;
      }
    }
    .page-setup {
      width: auto;
      padding: 0;
      margin: 0;
      position: absolute;
      top: 12px;
      right: 12px;
      border-color: #fff;
      line-height: 12px;
      &:hover {
        border-color: #fff;
      }
    }
  }
}
</style>
