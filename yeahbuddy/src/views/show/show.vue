<template>
	<!-- 火辣健身里面的发现，中的发现。这里面展示的动态是选择较为美观展示展示的， -->
	<!-- 健身专题，人气榜，同城（去掉） -->
	<!-- show身材（腿，胸，臀，背），秀记录，人气榜 -->
	<div>
		<section class="homeHeader">
			<span>秀</span>
			<span><Icon type="ios-camera-outline"></Icon></span>
			<span><Icon type="ios-search"></Icon></span>
		</section>
		<section>
			<Tabs value="show">
				<TabPane label="精选" name="boutique">精选的图片</TabPane>
				<TabPane label="动态" name="trends">动态中内容</TabPane>
			</Tabs>
		</section>
	</div>
</template>
<script>
	export default{
		name: 'show',
		data(){
			return {

			}
		},
		created(){

		},
		mounted(){

		},
		components: {

		},
		computed: {

		},
		methods: {

		}
	}
</script>
<style lang="scss" scoped>
.homeHeader {
	width: 100vw;
	font-size: 20px;
	display: flex;
	justify-content: space-between;
	padding: {
		top: 10px;
		left: 20px;
		right: 10px;
	}
}
.ivu-tabs-nav .ivu-tabs-tab {
	padding: 8px 60px;
}
</style>