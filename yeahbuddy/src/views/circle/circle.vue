<template>
	<!-- 悦动里面的圈子，这里面的动态是自己的，和关注的人的，还有圈子里面的动态，非选择性展示 -->
	<!-- 圈子，动态 -->
	<div>
		<section class="home_header">
			<span>圈子</span>
			<img src="static/img/plus.svg" @click="plus_chunk = !plus_chunk" alt="search">
		</section>
		
		<section class="tabs">
			<span :class="{activeShow: $route.path.indexOf('sportcir') !== -1 }" @click="whichShowFn('sportcir')">运动圈</span>
			<span :class="{activeShow: $route.path.indexOf('trends') !== -1 }" @click="whichShowFn('trends')">动态</span>
		</section>
		<section>
			<router-view class="fade_children"></router-view>
		</section>
		<!-- <transition name="fade">
			<section v-show="whichShow == 'circle'">
				<fCircle class="fade_children"></fCircle>
			</section>
		</transition>
		<transition name="fade">
			<section v-show="whichShow == 'content'">
				<trends class="fade_children"></trends>
			</section>
		</transition> -->
		<section v-show="plus_chunk" class="plus">
			<!--加号中添加的内容  -->
			
			<!--style提取出来  -->
			<div class="plus_content">
				<ul>
					<li>
						<img src="static/img/chatbubbles.svg" alt="search">
						<span>发表话题</span>
					</li>
					<hr>
					<li>
						<img src="static/img/start.svg" alt="search">
						<span>发布动态</span>
					</li>
					<hr>
					<li>
						<img src="static/img/plusEmpty.svg" alt="search">
						<span>加入圈子</span>
					</li>
					<hr>
					<li>
						<img src="static/img/searchFriends.svg" alt="search">
						<span>发现好友</span>
					</li>
					<hr>
					<li>
						<img src="static/img/qr.svg" alt="search">
						<span>扫一扫</span>
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>
<script>
// import fCircle from "./circleC"
// import trends from "./circleTrends"
	export default{
		name: 'circle',
		data(){
			return {
				whichShow: "circle",
				plus_chunk: false
			}
		},
		created(){

		},
		mounted(){

		},
		components: {
			// fCircle, trends
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
.home_header {
	img {
		width: 7vw;
	}
}
.plus {
	position: absolute;
	top: 9vh;
	right: 5px;
	z-index: 1000;
	.plus_content {
		width: 30vw;
		padding: {
			top: .1rem;
			bottom: .15rem;
			left: .1rem;
			right: .1rem;
		}
		background-color: #4e4e4e;
		color:white;
		border-radius: .1rem;
		span {
			color: white;
			font-size: .13rem;
		}
		img {
			height: 5vw;
			margin-right: .1rem;
		}
		hr {
			margin: {
				top: .1rem;
				bottom: .1rem;
			}
		}
	}
}
</style>
