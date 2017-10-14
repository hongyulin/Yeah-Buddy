<template>
	<!-- 悦动里面的发现很不错，有附近圈子，同城活动，陪跑等,,,可以吧训练计划放在这个里面 -->
	<!-- 附近（附近圈子，同城活动，陪跑，户外会员），商城，微课堂（训练） -->
	<div>
		<section class="homeHeader">
			<span>约</span>
			<span><Icon type="ios-search"></Icon></span>
		</section>
		<section>
			<Tabs value="dateCircle">
				<TabPane label="附近圈子" name="dateCircle">附近圈子中内容</TabPane>
				<TabPane label="商城" name="mall">商城中内容</TabPane>
				<TabPane label="微课堂" name="classroom">微课堂中内容</TabPane>
			</Tabs>
		</section>
	</div>
</template>
<script>
	export default{
		name: 'date',
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
.homeHeader{
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
</style>
