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
		<!-- <section> -->
			<!-- <header>免费专区</header> -->
			<!-- 放两个类似图片上有一个覆盖层的东西，找找方便写法 -->
		<!-- </section> -->
		<section class="exercise">
			<header class="getMore">
				训练营
				<router-link to="#">
					<img src="static/img/right.svg" alt="查看全部">
				</router-link>
			</header>
			<img :src="exerciseData.img_one" alt="局部塑形">
			<img :src="exerciseData.img_two" alt="自我挑战">
		</section>
		<section>
			<header class="getMore">
				个人提升
				<router-link to="#">
					<img src="static/img/right.svg" alt="查看全部">
				</router-link>
			</header>
			<ul>
				<li v-for="item in dataList" class="classInfo">
					<div>
						<img :src="item.classHeader" alt="课程推荐" >
					</div>
					<div>
						<header class="rowEllipsis">{{item.title}}</header>
						<p class="rowEllipsis">{{item.content}}</p>
						<footer>
							<span>
								{{item.num}}订阅
							</span>
							<span>
								{{item.fee}}
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
	import api from "../../fetch/api"
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default{
		name: 'dateClassroom',
		data(){
			return {
				dataList: [],
				exerciseData: [],
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
				let data = {

				}
				api.getDateAd(data)
					.then( res => {
						this.swiperSlides = res.list
					})
				api.getDateExercise(data)
					.then( res => {
						this.exerciseData = res.list
					})
				api.getDateClass(data)
					.then( res => {
						this.dataList = res.list
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
}
.classInfo {
	display: flex;
	padding: 5vw;
	border: {
		bottom: 1px solid #DCDCDC;
	}
	header {
		font-size: .20rem;
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