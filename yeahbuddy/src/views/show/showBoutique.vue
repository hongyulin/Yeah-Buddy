<template>
	<div>
		<section>
			<swiper :options="swiperOption">
				<swiper-slide v-for="(slide, index) in swiperSlides" :key="index"><img :src="slide.swiperImg" alt="走马灯" style="width: 100vw"></swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</section>
		<section class="nav">
			<figure>
				<img src="static/img/showBody.svg" alt="秀身材">
				<figcaption>秀身材</figcaption>
			</figure>
			<figure>
				<img src="static/img/showRecord.svg" alt="秀记录">
				<figcaption>秀记录</figcaption>
			</figure>
			<figure>
				<img src="static/img/showPopular.svg" alt="人气榜">
				<figcaption>人气榜</figcaption>
			</figure>
			<figure>
				<img src="static/img/trophy.svg" alt="挑战活动">
				<figcaption>挑战活动</figcaption>
			</figure>
		</section>
		<section>
			<header class="getMore">
				<span>经验分享</span>
				<img src="static/img/right.svg" alt="right">
			</header>
			<ul>
				<li v-for="">
					<section>
						<img src="static/img/.svg" alt="">
						<div>
							<p></p>
							<footer>
								<img src="static/img/.svg" alt="">
								<span>
									<img src="static/img/heart.svg" alt="赞">
									{{}}
								</span>
								<span>
									<img src="static/img/comment.svg" alt="评论">
									{{}}
								</span>
							</footer>
						</div>
					</section>
				</li>
			</ul>
		</section>
		<section>
			<header class="getMore">
				<span>热门话题</span>
				<img src="static/img/right.svg" alt="right">
			</header>
			<ul>
				<li v-for="">
					<section>
						<img src="static/img/.svg" alt="">
						<div>
							<header></header>
							<p></p>
							<footer>
								<img src="static/img/.svg" alt="">
								<img src="static/img/.svg" alt="">
								<img src="static/img/.svg" alt="">
								<img src="static/img/.svg" alt="">
								{{}}正在参与
							</footer>
						</div>
					</section>
				</li>
			</ul>
		</section>
		<section>
			<header>小八精选</header>
			<ul>
				<!-- 中间加一些推荐 -->
				<li v-for="">
					<section>
						<figure>
							<img src="static/img/.svg" alt="">
							<figcaption></figcaption>
						</figure>
						<footer>
							<span>
								<img src="static/img/.svg" alt="" class="">
								{{}}
							</span>
							<span>
								<img src="static/img/heart.svg" alt="" class="赞">
								{{}}
							</span>
						</footer>
					</section>
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
	import api from "../../fetch/api"
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default{
		name:'showBoutique',
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
		created(){

		},
		mounted(){
			this.getDataList()
		},
		
		components:{

		},
		computed: {

		},
		methods:{
			getDataList() {
				api.getShowAd()
					.then( res => {
						this.swiperSlides = res.list
						
					})
			},
		}
	}
</script>