<template>
	<div>
		<section>
			<header class="get_more">
				他们刚刚在练
				<img src="static/img/right.svg" alt="查看全部">
			</header>
			
			<swiper :options="swiperOption">
				<swiper-slide v-for="(item, index) in swiperList" :key="index">
					<section class="show_swiper">
						<img :src="item.self_img[0] + '?imageView2/2/w/130/h/130'" alt="健身照片">
						<!-- 独立出来的样式会被覆盖掉 -->
						<div style="display:flex;justify-content: space-around;align-items:center;">
							
							<img :src="item.header_img + '?imageView2/2/w/50/h/50'" alt="头像" class="header_pic">
							<section>
								<span style="font-size:.13rem;">{{item.name}}</span>
								<br>
								<!-- 大于五分钟显示几分钟前，否则显示'刚刚’,还要按照顺序 -->
								<span style="font-size:.13rem;">{{item.login_time}}分钟前</span>
							</section>
							<img src="static/img/heart.svg" alt="赞">
						</div>
					</section>
				</swiper-slide>
			</swiper>
		</section>
		<section>
			<ul>
				<li v-for="(item, index) in recommendList.slice(0, 2)" :key="index">
					<router-link to="#">
						<header class="content_title">
							<img src="static/img/eight.svg" alt="icon">
							由@小八推荐
						</header>
						<hr>
						<section class="content_pic">
							<div>
								<img :src="item.header_img + '?imageView2/2/w/60/h/60'" alt="头像" class="header_pic">
								<span>
									<!-- 放名字和时间 -->
									{{item.name}}
									<br>
									{{item.time}}
								</span>
							</div>
							<button class="follow">+关注</button>
						</section>
						<figure class="content">
							<img :src="item.img + '?imageView2/2/w/400/h/400'" alt="锻炼照" class="exercise_pic">
							<figcaption>{{item.content}}</figcaption>
							<div>
								<header>
									<!-- 放表情 -->
									<!-- <img :src="item." alt=""> -->
									<!-- <span>计划第{{item.}}天，完成</span> -->
									<!-- 这儿放计划的名字 -->
								</header>
								<hr>
								<div>
									<!-- <span>{{item.}}<br>动作/组</span> -->
									<!-- <span>{{item.}}<br>本次训练/分钟</span> -->
									<!-- <span>{{item.}}<br>本次燃脂/千卡</span> -->
								</div>
								<!-- <span>打卡第{{item.}}天</span> -->
							</div>
						</figure>
						<footer class="content_footer">
							<span><img src="static/img/heart.svg" alt="赞">{{item.likes}}</span>|
							<span><img src="static/img/comment.svg" alt="评论">{{item.talk_num}}</span>|
							<span><img src="static/img/share.svg" alt="分享">{{item.share_num}}</span>
						</footer>
					</router-link>
				</li>

				<li>
					<swiper :options="swiperOptionR">
						<swiper-slide v-for="(item, index) in recommendUser" :key="index">
							<section class="recommend">
								<header class="recommend_header">
									<div>
										<img :src="item.header_img  + '?imageView2/2/w/60/h/60'" alt="头像" class="header_pic">
										<span>{{item.name}}</span>
									</div>
									<img src="static/img/close.svg" alt="close">
								</header>
								<div class="recommend_pic_date">
									<span class="recommend_date">{{item.exercise_time}}<br>训练分钟</span>
									<span class="recommend_date">{{item.fans_num}}<br>粉丝</span>
									<span class="recommend_date">{{item.choice_num}}<br>精选</span>
								</div>
								<div class="recommend_pic_date">
									<img :src="item.img[0]+ '?imageView2/2/w/80/h/80'" alt="训练照">
									<img :src="item.img[1]+ '?imageView2/2/w/80/h/80'" alt="训练照">
									<img :src="item.img[2]+ '?imageView2/2/w/80/h/80'" alt="训练照">
								</div>
								<button class="follow">+关注</button>
							</section>
						</swiper-slide>
					</swiper>
				</li>
				<li v-for="(item, index) in recommendList.slice(2)" :key="index">
					<router-link to="#">
						<header class="content_title">
							<img src="static/img/eight.svg" alt="icon">
							由@小八推荐
						</header>
						<hr>
						<section class="content_pic">
							<div>
								<img :src="item.header_img + '?imageView2/2/w/60/h/60'" alt="头像" class="header_pic">
								<span>
									<!-- 放名字和时间 -->
									{{item.name}}
									<br>
									{{item.time}}
								</span>
							</div>
							<button class="follow">+关注</button>
						</section>
						<figure class="content">
							<img :src="item.img + '?imageView2/2/w/400/h/400'" alt="锻炼照" class="exercise_pic">
							<figcaption>{{item.content}}</figcaption>
							<!-- 文章时候显示 -->
							<!-- <span v-show="">{{item.}}次阅览</span> -->
							<!-- <p>{{item.content}}</p> -->
							<!-- 参加的是计划的时候显示 -->
							<div>
								<header>
									<!-- 放表情 -->
									<!-- <img :src="item." alt=""> -->
									<!-- <span>计划第{{item.}}天，完成</span> -->
									<!-- 这儿放计划的名字 -->
								</header>
								<hr>
								<div>
									<!-- <span>{{item.}}<br>动作/组</span> -->
									<!-- <span>{{item.}}<br>本次训练/分钟</span> -->
									<!-- <span>{{item.}}<br>本次燃脂/千卡</span> -->
								</div>
								<!-- <span>打卡第{{item.}}天</span> -->
							</div>
						</figure>
						<footer class="content_footer">
							<span><img src="static/img/heart.svg" alt="赞">{{item.likes}}</span>|
							<span><img src="static/img/comment.svg" alt="评论">{{item.talk_num}}</span>|
							<span><img src="static/img/share.svg" alt="分享">{{item.share_num}}</span>
						</footer>
					</router-link>
				</li>
			</ul>
		</section>
		<section>

		</section>
	</div>
</template>
<script>
	import api from "../../fetch/show"
	import circle_recommend from "../../fetch/circle"
	export default{
		name:'showTrends',
		data(){
			return {
				pageIndex: 1,
				swiperIndex: 1,
				swiperList: [
					{
						self_img: [""],
					}
				],
				recommendUser: [
					{
						img: ["","",""],
					}
				],
				recommendList: [],
				swiperOption: {
					slidesPerView: 2.5,
					freeMode: true
				},
				swiperOptionR: {
					slidesPerView: 1.5,
					freeMode: true
				}
			}
		},
		created(){
			this.init();
		},
		mounted(){
			
		},
		
		components:{

		},
		computed: {

		},
		methods:{
			init(){
				this.getExeriseRec();
				setTimeout(() => {
					this.getRecomUser();
				}, 400);
				setTimeout(() => {
					this.getRecom();
				}, 800);
				
			},
			getExeriseRec(){
				let data = {
					pageIndex: this.swiperIndex,
					pageSize: 10,
				}
				api.getShowSwiper(data)
					.then( res => {
						let resData = res.message;
						for(let item in resData){
							let temTime = resData[item].login_time;
							temTime = (new Date()) - (new Date(temTime));
							
							temTime = Math.round(temTime/1000/60);
							console.log(temTime);
							resData[item].login_time = temTime;
						}
						this.swiperList = resData;
					})
					.catch( err => {
						console.log(err)
					})
			},

			getRecomUser(){
				let data = {
					num: 15
				}
				circle_recommend.getRecommendUser(data)
					.then( res => {
						this.recommendUser = res.message;
					})
					.catch( err => {
							console.log(err)
						})
			},
			
			getRecom(){
				let data = {
					pageIndex: this.pageIndex,
					pageSize: 15,
				}
				api.getShowRecommend(data)
					.then( res => {
						let resData = res.message;
						for(let item in resData){
							let temTime = resData[item].time;
							temTime = temTime.split("T")[0];
							console.log(temTime);
							resData[item].time = temTime;
						}
						this.recommendList = resData;
					})
					.catch( err => {
							console.log(err)
						})
			},
				
		}
	}
</script>
<style lang="scss" scoped>
.show_swiper {
	text-align: center;
}
.content_title {
	margin-top: 2vh;
}
.content_pic {
	display: flex;
	justify-content: space-between;
	// padding: auto .1rem;
	text-align: center;
	div:first-child {
		display: flex;
		img{
			margin-right: .2rem;
		}
	}
}
.follow {
		background-color: white;;
		border:1px solid red;
		width: 20vw;
		height: 8vw;
		border-radius: 30px;
		margin-right: .1rem;
	}
.content {
	text-align: justify;
	margin: .2rem  auto auto auto;
	figcaption, .exercise_pic {
		width: 96vw;
		margin: auto 2vw;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
}
.content_footer {
	display: flex;
	justify-content: space-around;
	color: #e4e4e4;
	span {
		color: #b9b9b9;
	}
}
hr {
	border: solid #e5e5e5 1px;
}
.recommend {
	border: 1px solid #e6e6e6;
	text-align: center;
	padding: 0.1rem;
	margin: {
		top: 0.2rem;
		bottom: 0.1rem;
		left: 0.1rem;
		right: 0.1rem;
	}
	.recommend_pic_date {
		display:flex;
		justify-content:space-around;
		margin-top:.1rem;
	}
	.recommend_header {
		display:flex;
		justify-content:space-between;
		align-items: center;
	}
	.recommend_date {
		text-align:center;
	}
	.follow {
		margin:.1rem auto;
	}
}
</style>
