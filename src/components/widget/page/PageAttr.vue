<template>
  <div class="edito-page-wrapper">
    <div class="editor-title">
      <span>{{ $attrs.diyData.page.params.title }}</span>
    </div>
    <el-form :form="$attrs.diyData.page" label-width="120px">
      <el-form-item label="页面名称">
        <el-input v-model="$attrs.diyData.page.params.name" placeholder="页面名称仅用于后台查找"></el-input>
				<span class="span-desc">页面名称仅用于后台查找</span>
      </el-form-item>
      <el-form-item label="页面标题">
        <el-input v-model="$attrs.diyData.page.params.title" placeholder="小程序端顶部显示的标题"></el-input>
				<span class="span-desc">小程序端顶部显示的标题</span>
      </el-form-item>
      <el-form-item label="分享标题">
        <el-input v-model="$attrs.diyData.page.params.shareTitle" placeholder="小程序端转发时显示的标题"></el-input>
				<span class="span-desc">小程序端转发时显示的标题</span>
      </el-form-item>
      <el-form-item label="标题栏文字">
				<el-radio-group v-model="$attrs.diyData.page.style.titleTextColor">
          <el-radio label="black">黑色</el-radio>
          <el-radio label="white">白色</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="标题栏背景">
				<div class="backagecolor">	
					<el-color-picker v-model="$attrs.diyData.page.style.titleBackgroundColor"></el-color-picker>
					<el-button @click="resetBackgroundColor" size="mini">重置</el-button>
				</div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "WidgetAttrPage",
  inheritAttrs: false,
  props: {
    // selectedIndex: {
    //   type: [Number, String],
    //   require: true
    // },
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    /**
     * 编辑器：重置颜色
     * @param holder
     * @param attribute
     * @param color
     */
    onEditorResetColor: function(holder, attribute, color) {
      holder[attribute] = color;
		},
		resetBackgroundColor: function () {
			this.$attrs.diyData.page.style.titleBackgroundColor = '#ffffff'
		}
  },
  created() {},
  mounted() {
    console.log("attrs =======", this.$attrs);
    console.log("listeners =======", this.$listeners);
  },
  beforeDestroy() {}
};
</script>

<style scoped lang="scss">
.edito-page-wrapper {
	.backagecolor {
		text-align: left;
		display: flex;
		align-items: center;
		justify-content: left;
		button {
			margin-left: 20px;
		}
	}
}
</style>
