<template>
	<!-- 悦动里面的圈子，这里面的动态是自己的，和关注的人的，还有圈子里面的动态，非选择性展示 -->
	<!-- 圈子，动态 -->
	<div>
		<section>
			<Tabs value="circle">
				<TabPane label="圈子" name="circle">附近有哪些运动圈</TabPane>
				<TabPane label="动态" name="trends">动态中内容</TabPane>
				<Icon type="ios-plus-empty"></Icon>
			</Tabs>
		</section>
	</div>
</template>
<script>
	export default{
		name:'circle',
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
		mathods: {

		}
	}
</script>