<template>
	<!-- 火辣健身里面的发现，中的发现。这里面展示的动态是选择较为美观展示展示的， -->
	<!-- 健身专题，人气榜，同城（去掉） -->
	<!-- show身材（腿，胸，臀，背），秀记录，人气榜 -->
	<div>
		<section class="homeHeader">
			<span>秀</span>
			<img src="static/img/camera.svg" alt="search">
			<img src="static/img/search.svg" alt="search">
		</section>
		<section class="tabs">
			<span :class="{activeShow: whichShow == 'picture'}" @click=" whichShow = 'picture'">精选的图片</span>
			<span :class="{activeShow: whichShow == 'content'}" @click=" whichShow = 'content'">动态中内容</span>
		</section>
		<transition name="fade">
			<section v-show="whichShow == 'picture'">
				<boutique class="fadeChildren"></boutique>
			</section>
		</transition>
		<transition name="fade">
			<section v-show="whichShow == 'content'">
				<trends class="fadeChildren"></trends>
			</section>
		</transition>
	</div>
</template>
<script>
import boutique from "./showBoutique"
import trends from "./showTrends"
	export default{
		name: 'show',
		data(){
			return {
				whichShow: 'picture'
			}
		},
		created(){

		},
		mounted(){

		},
		components: {
			boutique, trends
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
		width: 1.5rem; 
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