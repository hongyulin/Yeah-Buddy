<template>


<!-- 把这儿改成地图，放附近的圈子？？？？？？？？？？？？？
？？？？？？？？？？？？？？？？？
？？？？？？？？？？？？？？？？？？？？？？？？？？ -->



	<div>
		<section>
			<swiper :options="swiperOption">
				<swiper-slide v-for="(slide, index) in swiperSlides" :key="index"><img :src="slide.swiperImg" alt="走马灯" style="width: 100vw"></swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</section>
		<section>
			<header class="getMore">
				<span>我的圈子</span>
				<!-- <span> -->
					<!-- 查看全部 -->
					<img src="static/img/right.svg" alt="查看全部">
				<!-- </span> -->
			</header>
			<section class="nav circles">
				<figure>
					<img :src="circleDate.shImg" alt="上海悦动圈">
					<figcaption>上海悦动圈</figcaption>
				</figure>
				<figure>
					<img :src="circleDate.runImg" alt="跑步装备圈">
					<figcaption>跑步装备圈</figcaption>
				</figure>
				<figure>
					<img :src="circleDate.runeqImg" alt="跑步圈">
					<figcaption>跑步圈</figcaption>
				</figure>
				<figure>
					<img src="static/img/apply.svg" alt="加入圈子">
					<figcaption>加入圈子</figcaption>
				</figure>
			</section>
		</section>
		<section>
			<header class="getMore">
				<span>圈子活动</span>
				<!-- <span>
					查看全部 -->
					<img src="static/img/right.svg" alt="查看全部">
				<!-- </span> -->
			</header>
		</section>
		<section>
			<header>精选内容</header>
			<section class="nav">
				<figure>
					<img src="static/img/sportEncyclopedias.svg" alt="运动百科">
					<figcaption>运动百科</figcaption>
				</figure>
				<figure>
					<img src="static/img/discuss.svg" alt="话题讨论">
					<figcaption>话题讨论</figcaption>
				</figure>
				<figure>
					<img src="static/img/story.svg" alt="悦友故事">
					<figcaption>悦友故事</figcaption>
				</figure>
			</section>
		</section>
		<section>
			<header class="getMore">
				<span>热门话题</span>
				<!-- <span>
					查看全部 -->
					<img src="static/img/right.svg" alt="查看全部">
				<!-- </span> -->
			</header>
			<ul>
				<li v-for="">
					<!-- 中间用户推荐去掉，放几页广告，， -->
					<header>
						<img src="static/img/.svg" alt="">
						<div>
							<span>
								{{}}
								<img src="static/img/.svg" alt="">
							</span>
							<span class="">
								{{}}
							</span>
						</div>
						<!-- 不要放关注了，这部分都是已经关注了的人的动态 -->
						<!-- <button>关注</button> -->
					</header>
					<div>
						<p></p>
						<div>
							<img src="static/img/.svg" alt="">
							<img src="static/img/.svg" alt="">
							<img src="static/img/.svg" alt="">
						</div>
						<span class="pisition">{{}}</span>
					</div>
					<footer>
						<span>
							<img src="" alt="">
							{{}}
						</span>
						<span>
							<img src="" alt="">
							{{}}
						</span>
						<span>
							<img src="" alt="">
							{{}}
						</span>
					</footer>
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
	import api from "../../fetch/api"
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default{
		name:'circleC',
		data(){
			return {
				circleDate: [],
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
				let data = {

				}
				api.getCircleAd(data)
					.then( res => {
						this.swiperSlides = res.list;
					})
				api.getCircleC(data)
					.then( res => {
						this.circleDate = res.list;
					})
			},
		}
	}
</script>
<style lang="scss" scoped>
.circles {
	img {
		border-radius: 50%;
	}
}
</style>