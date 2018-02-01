<template>
	<!-- 悦动圈里面的动态 -->
	<!-- 这里面放我发布的动态，关注的人的动态，和加入的圈子的动态 -->
	<div>
		<section class="recommend">
			<header class="recommend_header">
				<span>推荐关注:</span>
				<img src="static/img/close.svg" alt="关闭">
			</header>
			<hr>
			<div class="recommend_content">
				<img :src="follow.header_img" alt="头像" class="header_pic">
				<div>
					<span>{{follow.host_num}}[热门印花赛圈主]</span><br>
					<span>成功组织{{follow.activity_host}}次印花赛</span>
				</div>
				<button @click="takeFollow" class="follow">{{follow.followState ? '已关注':'未关注'}}</button>
				<!-- 点击加关注后变成已关注，然后来新的推荐 -->
			</div>
		</section>
		<hr class="for_shadow">
		<section>
			<ul>
				<li v-for="(item, index) in trendsList" :key="index" class="people_trends">
					<section class="people_trends_header">
						<router-link to="#">
							<img :src="item.header_img + '?imageView2/2/w/50/h/50'" alt="头像" class="header_pic">
						</router-link>
					</section>
					<section>
						<router-link to="#">
							<div class="people_trends_time">
								<span>
									<span class="people_trends_nick">{{item.name}}</span><br>
									<span class="people_trends_timer">{{item.time}}小时前</span>
								</span>
								<img src="static/img/down.svg" alt="down">
							</div>
							<p>{{item.description}}</p>
							<section class="peopel_trends_contend_pic">
								<img :src="item.img[0] + '?imageView2/5/w/100/h/150'" alt="内容照">
								<img :src="item.img[1] + '?imageView2/5/w/100/h/150'" alt="内容照">
								<img :src="item.img[2] + '?imageView2/5/w/100/h/150'" alt="内容照">
							</section>
						</router-link>
						<div class="people_trends_commend">
							<span>圈子:{{item.circle_name}}</span>
							<div>
								<span><img src="static/img/heart.svg" alt="赞">{{item.likes}}</span>
								&nbsp;
								<span><img src="static/img/comment.svg" alt="评论">{{item.talk_num}}</span>
								&nbsp;
							</div>
							
						</div>
					</section>
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
	import api from "../../fetch/circle"
	export default{
		name:'circleTrends',
		data(){
			return {
				pageIndex: 1,
				follow: [],
				trendsList: [],
			}
		},
		created(){

		},
		mounted(){
			this.init();
			
		},
		
		components:{

		},
		computed: {

		},
		methods:{
			init(){
				this.getFollow();
				this.getDataList();
			},
			getFollow() {
				let data = {
					num: 1
				}
				api.getRecommendUser(data)
					.then( res => {
						this.follow = res.message[0];
					})
					.catch( err => {
						console.log(err)
					})
			},
			getDataList() {
				let data = {
					pageIndex: this.pageIndex,
					pageSize: 15,
				}
				api.getCircleTrends(data)
					.then( res => {
						this.trendsList = res.message
					})
					.catch( err => {
						console.log(err)
					})
			},
			takeFollow() {
				this.follow.followState = true;
				this.getFollow();
			}
		}
	}
</script>
<style lang="scss" scoped>
.recommend {
	width: 96vw;
	margin: auto 2vw;
}
.for_shadow {
	// border: 1px solid gray;
	border-bottom: 1vh solid #e6e6e6;
}
.recommend_header {
	display: flex;
	justify-content: space-between;
}
.recommend_content {
	display: flex;
	justify-content: flex-start;
	img {
		width: 13vw;
		height: 13vw;
		margin: {
			right: 2vw;
		}
	}
	.follow {
		background-color: white;
		width: 20vw;
		height: 8vw;
		border: 1px solid red;
		border-radius: 20px;
		margin-left: 20vw;
	}
}
.people_trends {
	display: flex;
	width: 90vw;
	margin: 2vw;
	.people_trends_header {
		margin-right: 2vw;
	}
	.peopel_trends_contend_pic {
		display: flex;
		// justify-content: space-between;
		img {
			margin: 10px 1px;
			width: 27vw;
		}
		
	}
	.people_trends_time {
		display: flex;
		justify-content: space-between;
		margin-bottom: 1.5vh;
		.people_trends_nick {
			font-size: .16rem;
			color: gray;
		}
		.people_trends_timer {
			@extend .people_trends_nick;
			font-size: .12rem;
		}
	}
	.people_trends_commend {
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #ccc;
		padding-bottom: .2rem;
		margin-bottom: .2rem;
		
		span {
			color: gray;
		}
		
	}
}
</style>
