<template>
	<div>
		<section>
			<swiper :options="swiperOption">
				<swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
					<img :src="slide.swiperImg" alt="走马灯" style="width: 100vw">
				</swiper-slide>
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
		<section class="spare_experience">
			<header class="get_more">
				<span>经验分享</span>
				<img src="static/img/right.svg" alt="right">
			</header>
			<ul>
				<li v-for="(item, index) in experienceAndtalk" :key="index">
					<section class="experience">
						<img :src="item.experienceImg" alt="经验主题">
						<div class="content">
							<header>{{item.expTitle}}</header>
							<p>{{item.expContent}}</p>
							<footer>
								<img :src="item.expHeader" alt="头像" class="header_pic">
								<span>
									<img src="static/img/heart.svg" alt="赞">
									{{item.expHeart}}
								</span>
								<span>
									<img src="static/img/comment.svg" alt="评论">
									{{item.expTalk}}
								</span>
							</footer>
						</div>
					</section>
				</li>
			</ul>
		</section>
		<section class="hot_topic">
			<header class="get_more">
				<span>热门话题</span>
				<img src="static/img/right.svg" alt="right">
			</header>
			<ul>
				<li v-for="(item, index) in experienceAndtalk" :key="index">
					<section class="hot_topic_content">
						<img :src="item.topicImg" alt="头像">
						<div class="content">
							<header>#{{item.topTitle}}#</header>
							<p>{{item.topContent}}</p>
							<footer>
								<img :src="item.topHeader" alt="头像"  class="header_pic">
								{{item.topIn}}正在参与
							</footer>
						</div>
					</section>
				</li>
			</ul>
		</section>
		<section>
			<header class="get_more">小八精选</header>
			<ul class="selected_ul">
				<!-- 6+插入三个广告+6+一个广告+剩下的 -->
				<li v-for="(item, index) in picked.slice(0, 6)" :key="index">
					<section class="selected">
						<figure>
							<img :src="item.pickedImg" alt="pic" class="hot_pic">
							<figcaption class="selected_des">{{item.pickedContent}}</figcaption>
						</figure>
						<footer>
							<span>
								<img :src="item.pickedHeader" class="header_pic">
								{{item.pickedNick}}
							</span>
							<span>
								<img src="static/img/heart.svg" alt="" class="赞">
								{{item.pickedHeart}}
							</span>
						</footer>
					</section>
				</li>
				<!-- 中间加的推荐 -->
				<li>
					<img :src="videoList.dance" alt="性感爵士" class="width_vw">
				</li>
				<li>
					<img :src="videoList.topic" alt="热门话题" class="hot_topic_video">
					<img :src="videoList.picked" alt="热门视频" class="hot_topic_video">
				</li>

				<li v-for="(item, index) in picked.slice(6, 12)" :key="index">
					<section class="selected">
						<figure>
							<img :src="item.pickedImg" alt="pic" class="hot_pic">
							<figcaption class="selected_des">{{item.pickedContent}}</figcaption>
						</figure>
						<footer>
							<span>
								<img :src="item.pickedHeader" class="header_pic">
								{{item.pickedNick}}
							</span>
							<span>
								<img src="static/img/heart.svg" alt="" class="赞">
								{{item.pickedHeart}}
							</span>
						</footer>
					</section>
				</li>
				<!-- 中间夹的东西 -->
				<li>
					<img :src="videoList.video" alt="精选视频" class="width_vw">
				</li>
				<li v-for="(item, index) in picked.slice(12)" :key="index">
					<section class="selected">
						<figure>
							<img :src="item.pickedImg" alt="pic" class="hot_pic">
							<figcaption class="selected_des">{{item.pickedContent}}</figcaption>
						</figure>
						<footer>
							<span>
								<img :src="item.pickedHeader" class="header_pic">
								<p>{{item.pickedNick}}</p>
							</span>
							<span>
								<img src="static/img/heart.svg" alt="赞" >
								<p>{{item.pickedHeart}}</p>
							</span>
						</footer>
					</section>
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
	import api from "../../fetch/show"
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default{
		name:'showBoutique',
		data(){
			return {
				videoList: [],
				swiperSlides: [],
				experienceAndtalk: [],
				picked: [],
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
				api.getShowAd(data)
					.then( res => {
						this.swiperSlides = res.list
					})
				api.getShowExper(data)
					.then( res => {
						this.experienceAndtalk = res.list
					})
				api.getShowPicked(data)
					.then( res => {
						this.picked = res.list
					})
				api.getShowVideo(data)
					.then( res => {
						this.videoList = res.list
					})
			},
		}
	}
</script>
<style lang="scss" scoped>
.spare_experience {
	margin: {
		top: .2rem;
		bottom: .1rem;
	}
	padding: {
		top: .1rem;
	}
	border: {
		top: 10px solid #ccc;
		bottom: 10px solid #ccc;
	}
}
.experience{
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #ccc;
	header {
		font-size: 0.18rem;
		font-weight:530;
	}
	p {
		font-size: 13px;
		margin: 5px auto;
		display:-webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.content {
		width: 70vw;
		margin: 10px;
	}

}
.hot_topic {
	border: {
		bottom: 10px solid #ccc;
	}
	margin-bottom: .1rem;
	.hot_topic_content {
		@extend .experience;
	}
}
.selected {
	text-align: center;
	width: 46vw;
	.hot_pic {
		width: 45vw;
	}
	footer {
		display: flex;
		span{
			height: 29px;
			display: flex;
			align-items: center;
			// text-align: center;
			font-size: 14px;
		}
	}
	margin: {
		top: 10px;
	}
	.selected_des {
		font-size: 13px;
		margin: 5px auto;
		display:-webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		// width: 40vw;
	}
}
.selected_ul {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}
.hot_topic_video {
	width: 46vw;
}
</style>