<template>
	<div>
		<section>
			<swiper :options="swiperOption">
				<swiper-slide v-for="slide in swiperSlides"><img :src="slide.swiperImg" alt="走马灯" style="width: 100vw"></swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</section>
		<section class="nav">
			<router-link to="#">
				<figure>
					<!--图片大小28 -->
					<img src="static/img/learnCom.svg" alt="学习群">
					<figcaption>学习群</figcaption>
				</figure>
			</router-link>
			<router-link to="#">
				<figure>
					<img src="static/img/lecture.svg" alt="免费讲座">
					<figcaption>免费讲座</figcaption>
				</figure>
			</router-link>
			<router-link to="#">
				<figure>
					<img src="static/img/improve.svg" alt="个人提升">
					<figcaption>个人提升</figcaption>
				</figure>
			</router-link>
		</section>
		<section>
			<header>免费专区</header>
			<!-- 放两个类似图片上有一个覆盖层的东西，找找方便写法 -->
		</section>
		<section>
			<header class="getMore">
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
			<header class="getMore">
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
					pagination: '.swiper-pagination',
					paginationClickable: true,
					spaceBetween: 30,
					centeredSlides: true,
					autoplay: 2500,
					loop : true,
					autoplayDisableOnInteraction: false,
					observer:true,//修改swiper自己或子元素时，自动初始化swiper
    				observeParents:true,//修改swiper的父元素时，自动初始化swiper
    			}
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
				api.getDateAd()
					.then( res => {
						this.swiperSlides = res.list
						
					})
			},
		}
	}
</script>
<style lang="scss" scoped>

</style>