<template>
	<!-- 火辣健身里面的发现，中的发现。这里面展示的动态是选择较为美观展示展示的， -->
	<!-- 健身专题，人气榜，同城（去掉） -->
	<!-- show身材（腿，胸，臀，背），秀记录，人气榜 -->
	<div>
		<section class="home_header">
			<span>秀</span>
			<img src="static/img/camera.svg" alt="search">
			<img src="static/img/search.svg" alt="search">
		</section>
		<section class="tabs">
			<span :class="{activeShow: $route.path.indexOf('boutique') !== -1}" @click=" whichShowFn('boutique')">小八精选</span>
			<span :class="{activeShow: $route.path.indexOf('state') !== -1}" @click=" whichShowFn('state')">动态</span>
		</section>
		<section>
			<router-view class="fade_children"></router-view>
		</section>
		
	</div>
</template>
<script>
	export default{
		name: 'show',
		data(){
			return {
				whichShow: 'boutique'
				// whichShow: 'content'
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