<template>
	<div>
		<section>
			<swiper :options="swiperOption">
				<swiper-slide v-for="slide in swiperSlides">
					<img :src="slide.swiperImg" alt="走马灯" style="width: 100vw">
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
				swiperSlides: [],
				swiperOption: {
					autoplay: 3500,
					setWrapperSize :true,
					direction: 'vertical',
					pagination : '.swiper-pagination',
					paginationClickable :true,
					mousewheelControl : true,
					observeParents:true,
				},
			}
		},
		created() {
			
		},
		mounted() {
			this.getDataList()
			
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
						this.swiperSlides = res.list
						
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

</style>