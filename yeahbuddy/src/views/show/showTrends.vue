<template>
	<div>
		<section>
			<header class="getMore">
				他们刚刚在练
				<img src="static/img/right.svg" alt="查看全部">
			</header>
			<swiper :options="swiperOption">
				<swiper-slide v-for="(item, index) in swiperList" :key="index">
					<section>
						<img :src="item.exerImg" alt="健身照片">
						<div>
							<img :src="item.exerHeader" alt="头像">
							<section>
								<span>{{item.exerNick}}</span>
								<!-- 大于五分钟显示几分钟前，否则显示'刚刚’,还要按照顺序 -->
								<span>{{item.exerNum}}分钟前</span>
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
						<header>
							<img src="static/img/.svg" alt="icon">
							由@小八推荐
						</header>
						<hr>
						<section>
							<img :src="item.header" alt="头像">
							<span>
								<!-- 放名字和时间 -->
								{{item.nick}}
								<br>
								{{item.time}}
							</span>
							<button>+关注</button>
						</section>
						<figure>
							<img :src="item.pic" alt="锻炼照">
							<figcaption>{{item.content}}</figcaption>
							<!-- 文章时候显示 -->
							<span v-show="">{{item.}}次阅览</span>
							<p>{{item.content}}</p>
							<!-- 参加的是计划的时候显示 -->
							<div>
								<header>
									<!-- 放表情 -->
									<img :src="item." alt="">
									<span>计划第{{item.}}天，完成</span>
									<!-- 这儿放计划的名字 -->
								</header>
								<hr>
								<div>
									<span>{{item.}}<br>动作/组</span>
									<span>{{item.}}<br>本次训练/分钟</span>
									<span>{{item.}}<br>本次燃脂/千卡</span>
								</div>
								<span>打卡第{{item.}}天</span>
							</div>
						</figure>
						<footer>
							<span><img src="static/img/heart.svg" alt="赞">{{item.heart}}</span>
							<span><img src="static/img/comment.svg" alt="评论">{{item.talk}}</span>
							<span><img src="static/img/share.svg" alt="分享">{{item.share}}</span>
						</footer>
					</router-link>
				</li>

				<li>
					<swiper :options="swiperOptionR">
						<swiper-slide v-for="(item, index) in swiperList" :key="index">
							<section>
								<header>
									<img :src="item.recommHeader" alt="头像">
									<span>{{item.recommNick}}</span>
									<img src="static/img/.svg" alt="close">
								</header>
								<div>
									<span>{{item.recommTime}}<br>训练分钟</span>
									<span>{{item.recommfans}}<br>粉丝</span>
									<span>{{item.recommPicked}}<br>精选</span>
								</div>
								<div>
									<img :src="item.recommImg_one" alt="训练照">
									<img :src="item.recommImg_two" alt="训练照">
									<img :src="item.recommImg_three" alt="训练照">
								</div>
								<button>+关注</button>
							</section>
						</swiper-slide>
					</swiper>
				</li>
				<li v-for="(item, index) in recommendList.slice(2)" :key="index">
					
				</li>
			</ul>
		</section>
		<section>

		</section>
	</div>
</template>
<script>
	import api from "../../fetch/api"
	export default{
		name:'showTrends',
		data(){
			return {
				swiperList: [],
				recommendList: [],
				swiperOption: {
					slidesPerView: 3,
					freeMode: true
				},
				swiperOptionR: {
					slidesPerView: 3,
					freeMode: true
				}
			}
		},
		created(){

		},
		mounted(){
			this.getdataList()
		},
		
		components:{

		},
		computed: {

		},
		methods:{
			getdataList() {
				let data = {

				}
				api.getShowSwiper(data)
					.then( res => {
						console.log()
						this.swiperList = res.list
					})
				api.getShowRecommend(data)
					.then( res => {
						this.recommendList = res.list
					})
			}
		}
	}
</script>