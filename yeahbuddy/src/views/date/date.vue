<template>
	<!-- 悦动里面的发现很不错，有附近圈子，同城活动，陪跑等,,,可以吧训练计划放在这个里面 -->
	<!-- 附近（附近圈子，同城活动，陪跑，户外会员），商城，微课堂（训练） -->
	<div>
		<section class="home_header">
			<span>约</span>
			<img src="static/img/search.svg" alt="search">
		</section>
		<section class="tabs">
			<span :class="{activeShow: $route.path.indexOf('near') !== -1}" @click="whichShowFn('near')">附近</span>
			<span :class="{activeShow: $route.path.indexOf('mall') !== -1}" @click="whichShowFn('mall')">商城</span>
			<span :class="{activeShow: $route.path.indexOf('classroom') !== -1}" @click="whichShowFn('classroom')">微课堂</span>
		</section>
		<section>
			<router-view class="fade_children"></router-view>
		</section>
	</div>
</template>
<script>
// import nearCircle from './dateCircle'
// import classRoom from './dateClassroom'
import mall from './dateMall'
	export default{
		name: 'date',
		data(){
			return {
				whichShow: 'mall'
			}
		},
		created(){

		},
		mounted(){
			
		},
		components: {
			// nearCircle, classRoom, mall
		},
		computed: {

		},
		methods: {
			
		}
	}
</script>
<style lang="scss" scoped>
.tabs {
	span {
		width: 1rem; 	
	}
}
.fade-enter-active .fade-lave-active {
	transition: all .3s ease;
}
.fade-enter .fade-leave-to {
	transform: translateX(.1rem);
	opacity: 0;
}
</style>
