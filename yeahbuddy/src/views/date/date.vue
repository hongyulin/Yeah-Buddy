<template>
	<!-- 悦动里面的发现很不错，有附近圈子，同城活动，陪跑等,,,可以吧训练计划放在这个里面 -->
	<!-- 附近（附近圈子，同城活动，陪跑，户外会员），商城，微课堂（训练） -->
	<div>
		<section class="homeHeader">
			<span>约</span>
			<img src="../../../static/img/search.svg" alt="search">
		</section>
		<section class="tabs">
			<span :class="{activeShow: whichShow == 'nearCircle'}" @click="whichShow = 'nearCircle'">附近圈子</span>
			<span :class="{activeShow: whichShow == 'shop'}" @click="whichShow = 'shop'">商城</span>
			<span :class="{activeShow: whichShow == 'classRoom'}" @click="whichShow = 'classRoom'">微课堂</span>
		</section>
		<transition name="fade">
			<section v-show="whichShow == 'nearCircle'">
				1
			</section>
		</transition>
		<transition name="fade">
			<section v-show="whichShow == 'shop'">
				2
			</section>
		</transition>
		<transition name="fade">
			<section v-show="whichShow == 'classRoom'">
				3
			</section>
		</transition>
		
	</div>
</template>
<script>
	export default{
		name: 'date',
		data(){
			return {
				whichShow: 'shop'
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
.tabs {
	display: flex;
	justify-content: space-around;
	margin-top: .1rem;
	span {
		width: 1rem; 
		height: .4rem;
		line-height: .4rem;
		text-align: center;
	}
	.activeShow {
		color: red;
		border-bottom: 1px solid red;
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
