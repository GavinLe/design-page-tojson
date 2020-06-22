<template>
  <div class="select-link-wrapper">
    <el-button type="text" @click="addLink"> + 添加链接</el-button>
    <table>
      <th>
        <td>链接类型</td>
        <td>链接地址</td>
      </th>
      <tr>
        <td>{{linkType}}</td>
        <td>{{linkUrl}}</td>
      </tr>
    </table>
  </div>
  
</template>

<script>
export default {
  name: 'BaseSelectLink',
  props: {
    linkType: {
      type: [String, Number],
      default: ''
    },
    linkUrl: {
      type: String,
      default: ''
    }
  },
  components: {
  },
  data () {
    return {
      table: {
        tableLabel: [{label: '链接类型', prop: 'linkType'}, {label: '链接地址', prop: 'linkUrl'}],
        tableData: [{linkType: 2, linkUrl}]
      }
    }
  },
  computed: {},
  watch: {},
  methods: {
    addLink: function () {}
  },
  created () {},
  mounted () {},
  beforeDestroy () {}
}
</script>

<style scoped lang="scss">
  .select-link-wrapper {
    table {width: 100%; border-spacing: 0;}
    th,tr {
      padding: 0;
      margin: 0;
      width: 100%;
      text-align: center;
      color: #606266;
      font-weight: normal;
      border: 1px solid #606266;
      
      display: flex;
      align-items: center;
      justify-content: center;
      td {
        height: 20px;
        line-height: 20px;
        flex: 1;
      }
      td + td {border-left: 1px solid #606266;}
    }
    th + tr {
      border-top: 0;
    }
  }
</style>
