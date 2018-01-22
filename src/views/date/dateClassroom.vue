<template>
	<div>
		<section>
			<swiper :options="swiperOption">
				<swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
					<img :src="slide.img" alt="走马灯">
				</swiper-slide>
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
		<!-- <section> -->
			<!-- <header>免费专区</header> -->
			<!-- 放两个类似图片上有一个覆盖层的东西，找找方便写法 -->
		<!-- </section> -->
		<section class="exercise">
			<header class="get_more">
				训练营
				<router-link to="#">
					<img src="static/img/right.svg" alt="查看全部">
				</router-link>
			</header>
			<img :src="exerciseData[0].img" alt="局部塑形" class="width_vw">
			<img :src="exerciseData[1].img" alt="自我挑战" class="width_vw">
		</section>
		<section>
			<header class="get_more">
				个人提升
				<router-link to="#">
					<img src="static/img/right.svg" alt="查看全部">
				</router-link>
			</header>
			<ul>
				<li v-for="(item, index) in dataList" class="classInfo" :key="index">
					<div>
						<img :src="item.header_img" alt="课程推荐" >
					</div>
					<div>
						<header class="row_ellipsis">{{item.title}}</header>
						<p class="row_ellipsis">{{item.describe}}</p>
						<footer>
							<span>
								{{item.subscribe}}订阅
							</span>
							<span>
								{{item.price}}
							</span>
							<span>
								元
							</span>
						</footer>
					</div>
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
	import api from "../../fetch/date"
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default{
		name: 'dateClassroom',
		data(){
			return {
				pageIndex: 1,
				dataList: [],
				exerciseData: ["",""],
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
			this.initData()			
		},
		components: {
			swiper, swiperSlide
		},
		computed: {
			
		},
		methods: {
			initData(){
				this.getAds("CLASS_AD");
				this.getAds("TRAIN_AD");
				this.getClass();
			},
			getAds(type){
				let data = {
					type: type
				}
				api.getAds(data)
					.then( res => {
						if(type == "CLASS_AD"){
							this.swiperSlides = res.message;
						}else if(type == "TRAIN_AD"){
							this.exerciseData = res.message;
						}
					})
			},

			getClass(){
				let data = {
					pageIndex: this.pageIndex,
					pageSize: 15,
				}
				api.getDateClass(data)
					.then(res => {
						this.dataList = res.message;
					})
			},
		}
	}
</script>
<style lang="scss" scoped>
.exercise {
	border: {
		top: .15rem solid #DCDCDC;
		bottom: .15rem solid #DCDCDC;
	}
	margin: {
		top: .2rem;
		bottom: .2rem;
	}
	padding: {
		top: .1rem;
		bottom: .1rem;
	}
}
.classInfo {
	display: flex;
	padding: 5vw;
	border: {
		bottom: 1px solid #DCDCDC;
	}
	header {
		font-size: .18rem;
		font-weight: bold;
		width: 60vw;
	}
	p {
		width: 60vw;
		margin: {
			top: 1vh;
			bottom: 1vh;
		}
	}
	footer {
		span:nth-child(1) {
			margin-right:20px;
		}
		span:nth-child(2) {
		color: red;
		}
	}
	img {
		width: 30vw;
		margin-right: 10px;
	}
}
</style>