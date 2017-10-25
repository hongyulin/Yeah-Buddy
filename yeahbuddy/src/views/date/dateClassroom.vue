<template>
	<div>
		<section>
			<swiper :option="swiperOption">
				<swiper-slide v-for="item in dataList">
					{{item}}
					<!-- <img :src="item.swiperImg" alt="走马灯" style="width: 100vw"> -->
				</swiper-slide>
				
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
			<!-- 放一个走马灯 -->
		</section>
		<section>
			<router-link to="#">
				<figure>
					<!--图片大小28 -->
					<img src="static/img/learnCom.svg" alt="学习群">
					<span>学习群</span>
				</figure>
			</router-link>
			<router-link to="#">
				<figure>
					<img src="static/img/lecture.svg" alt="免费讲座">
					<span>免费讲座</span>
				</figure>
			</router-link>
			<router-link to="#">
				<figure>
					<img src="static/img/improve.svg" alt="个人提升">
					<span>个人提升</span>
				</figure>
			</router-link>
		</section>
		<section>
			<header>免费专区</header>
			<!-- 放两个类似图片上有一个覆盖层的东西，找找方便写法 -->
		</section>
		<section>
			<header>
				训练营
				<router-link to="#">
					<!-- <span>查看全部 -->
					<img src="static/img/right.svg" alt="查看全部">
					<!-- </span> -->
				</router-link>
			</header>
			<!-- <img src="static/img/.svg" alt=""> -->
			<!-- <img src="static/img/.svg" alt=""> -->
		</section>
		<section>
			<header>
				个人提升
				<router-link to="#">
					<!-- <span>查看全部 -->
					<img src="static/img/right.svg" alt="查看全部">
					<!-- </span> -->
				</router-link>
			</header>
			<ul>
				<li v-for="">
					<!-- <div><img src="static/img/.svg" alt=""></div> -->
					<div>
						<header></header>
						<p></p>
						<footer>
							<span></span>
							<span></span>
						</footer>
					</div>
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
	import api from "../../fetch/api"
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default{
		name: 'dateClassroom',
		data(){
			return {
				dataList: [1,2,3,4],
				swiperOption: {
					autoplay: 5000,
					setWrapperSize :true,
					pagination : '.swiper-pagination',
					paginationClickable :true,
					mousewheelControl : true,
					observeParents:true,
				},
			}
		},
		created() {
			this.getDataList()
		},
		mounted() {

		},
		components: {
			swiper, swiperSlide
		},
		computed: {

		},
		methods: {
			getDataList() {
				api.getAdImg()
					.then( res => {
						// this.dataList = res.list
						
					})
			},
			// proSwiper() {
			// 	let swiper = new Swiper('.swiper-container', {
			// 		pagination: {
			// 			el: '.swiper-pagination',
			// 			clickable: true,
			// 		},
			// 		loop: true,
			// 		autoplay: {
			// 			delay: 2500,
			// 			disableOnInteraction: false,
			// 		},
			// 		paginationClickable: true,
			// 	});
			// },
		}
	}
</script>
<style lang="scss" scoped>
// .swiper-container {
//       width: 100%;
//       height: 100%;
//     }
// .swiper-slide {
// 	display: -webkit-box;
// 	display: -ms-flexbox;
// 	display: -webkit-flex;
// 	display: flex;
// 	-webkit-box-pack: center;
// 	-ms-flex-pack: center;
// 	-webkit-justify-content: center;
// 	justify-content: center;
// 	-webkit-box-align: center;
// 	-ms-flex-align: center;
// 	-webkit-align-items: center;
// 	align-items: center;
// }
</style>