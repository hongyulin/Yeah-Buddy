<template>
	<!-- 悦动里面的圈子，这里面的动态是自己的，和关注的人的，还有圈子里面的动态，非选择性展示 -->
	<!-- 圈子，动态 -->
	<div>
		<section class="homeHeader">
			<span>圈子</span>
			<img src="static/img/plus.svg" alt="search">
		</section>
		
		<section class="tabs">
			<span :class="{activeShow: whichShow == 'circle'}" @click="whichShow = 'circle'">附近有哪些运动圈</span>
			<span :class="{activeShow: whichShow == 'content'}" @click="whichShow = 'content'">动态中内容</span>
		</section>
		<transition name="fade">
			<section v-show="whichShow == 'circle'">
				<fCircle class="fadeChildren"></fCircle>
			</section>
		</transition>
		<transition name="fade">
			<section v-show="whichShow == 'content'">
				<trends class="fadeChildren"></trends>
			</section>
		</transition>
		<section>
			<!--加号中添加的内容  -->
			
			<!--style提取出来  -->
			<div style="background-color:black;color:white;">
				<ul>
					<li>
						<img src="static/img/chatbubbles.svg" alt="search">
						发表话题
					</li>
					<li>
						<img src="static/img/start.svg" alt="search">
						发布动态
					</li>
					<li>
						<img src="static/img/plusEmpty.svg" alt="search">
						加入圈子
					</li>
					<li>
						<img src="static/img/searchFriends.svg" alt="search">
						发现好友
					</li>
					<li>
						<img src="static/img/qr.svg" alt="search">
						扫一扫
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>
<script>
import fCircle from "./circleC"
import trends from "./circleTrends"
	export default{
		name: 'circle',
		data(){
			return {
				whichShow: "circle"
			}
		},
		created(){

		},
		mounted(){

		},
		components: {
			fCircle, trends
		},
		computed: {

		},
		mathods: {

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
