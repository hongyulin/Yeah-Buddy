<template>
	<div>
		<section>
			<swiper :options="swiperOption">
				<swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
					<img :src="slide.img" alt="走马灯" style="width: 100vw">
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
				<li v-for="(item, index) in experience" :key="index">
					<section class="experience">
						<img :src="item.img" alt="经验主题" class="experience_content_img">
						<div class="content">
							<header>{{item.title}}</header>
							<p>{{item.description}}</p>
							<footer>
								<img :src="item.header_img + '?imageView2/2/w/50/h/50'" alt="头像" class="header_pic">
								<span>
									<img src="static/img/heart.svg" alt="赞">
									{{item.likes}}
								</span>
								<span>
									<img src="static/img/comment.svg" alt="评论">
									{{item.talk_num}}
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
				<li v-for="(item, index) in topic" :key="index">
					<section class="hot_topic_content">
						<img :src="item.header_img + '?imageView2/2/w/50/h/50'" alt="头像">
						<div class="content">
							<header>#{{item.title}}#</header>
							<p>{{item.description}}</p>
							<footer>
								<img :src="item.img + '?imageView2/2/w/50/h/50'" alt="头像"  class="header_pic">
								{{item.partake}}正在参与
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
							<img :src="item.img + '?imageView2/5/W/150/h/150'" alt="pic" class="hot_pic">
							<figcaption class="selected_des">{{item.description}}</figcaption>
						</figure>
						<footer>
							<span>
								<img :src="item.header_img + '?imageView2/2/w/30/h/30'" class="header_pic">
								{{item.name}}
							</span>
							<span>
								<img src="static/img/heart.svg" alt="" class="赞">
								{{item.likes}}
							</span>
						</footer>
					</section>
				</li>
				<!-- 中间加的推荐 -->
				<li>
					<img :src="jazz" alt="性感爵士" class="width_vw jazz_video">
				</li>
				<li>
					<img :src="videoList[0].img" alt="热门话题" class="hot_topic_video">
					<img :src="videoList[1].img" alt="热门视频" class="hot_topic_video">
				</li>

				<li v-for="(item, index) in picked.slice(6, 12)" :key="index">
					<section class="selected">
						<figure>
							<img :src="item.img + '?imageView2/5/W/150/h/150'" alt="pic" class="hot_pic">
							<figcaption class="selected_des">{{item.description}}</figcaption>
						</figure>
						<footer>
							<span>
								<img :src="item.header_img + '?imageView2/2/w/30/h/30'" class="header_pic">
								{{item.name}}
							</span>
							<span>
								<img src="static/img/heart.svg" alt="" class="赞">
								{{item.likes}}
							</span>
						</footer>
					</section>
				</li>
				<!-- 中间夹的东西 -->
				<li>
					<img :src="chioceVideo" alt="精选视频" class="width_vw jazz_video">
				</li>
				<li v-for="(item, index) in picked.slice(12)" :key="index">
					<section class="selected">
						<figure>
							<img :src="item.img + '?imageView2/5/W/150/h/150'" alt="pic" class="hot_pic">
							<figcaption class="selected_des">{{item.description}}</figcaption>
						</figure>
						<footer>
							<span>
								<img :src="item.header_img + '?imageView2/2/w/30/h/30'" class="header_pic">
								<p>{{item.name}}</p>
							</span>
							<span>
								<img src="static/img/heart.svg" alt="赞" >
								<p>{{item.likes}}</p>
							</span>
						</footer>
					</section>
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
	import api from "../../fetch/show";
	import adApi from "../../fetch/date";
	import { swiper, swiperSlide } from 'vue-awesome-swiper';
	export default{
		name:'showBoutique',
		data(){
			return {
				chioceVideo: "",
				jazz: "",
				pageIndex: 1,
				videoList: [],
				swiperSlides: [],
				experience: [],
				topic: [],
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
			this.initData()
		},
		
		components:{

		},
		computed: {

		},
		methods:{
			initData(){
				this.getAds("CHIOCE_AD");
				setTimeout(() => {
					this.getAds("CHIOCE_VIDEO");
				},200);
				setTimeout(() => {
					this.getAds("JAZZ");
				},400);
				setTimeout(() => {
					this.getAds("CHIOCE_VIDEO_PARTY2");
				},600);
				setTimeout(() => {
					this.getChoice();
				},800);
				setTimeout(() => {
					this.getTopic();
				},1200);
				setTimeout(() => {
					this.getExperience();
				},1600);
			},

			getAds(type){
				let data = {
					type: type
				}
				adApi.getAds(data)
					.then(res => {
						if(type == "CHIOCE_AD"){
							this.swiperSlides = res.message;
						}else if(type == "CHIOCE_VIDEO"){
							this.videoList = res.message;
						}else if (type == "JAZZ") {
							this.jazz = res.message[0].img[0];
						}else if (type == "CHIOCE_VIDEO_PARTY2") {
							this.chioceVideo = res.message[0].img[0];
						}
					})
					.catch( err => {
						console.log(err)
					})
			},

			getChoice(){
				let data = {
					pageIndex: this.pageIndex,
					pageSize: 16,
				}
				api.getShowPicked(data)
					.then( res => {
						this.picked = res.message;
					})
					.catch(err => {
						console.log(err);
					})
			},

			getTopic(){
				api.getShowTopic()
					.then( res => {
						this.topic = res.message;
					})
					.catch(err => {
						console.log(err);
					})
			},

			getExperience(){
				api.getShowExper()
					.then( res => {
						this.experience = res.message;
					})
					.catch(err => {
						console.log(err);
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
	flex-direction: column;
	align-items: center;
	border-bottom: 1px solid #ccc;
	.experience_content_img {
		width: 100vw;
		height: 40vh;
	}
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
		width: 95vw;
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
		flex-direction: row;
	}
}
.selected {
	text-align: center;
	width: 46vw;
	height: 38vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.hot_pic {
		width: 45vw;
	}
	footer {
		display: flex;
		justify-content: space-between;
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
		text-align: left;
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
.jazz_video{
	margin: 10px auto auto;
}
</style>