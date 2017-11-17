<template>
	<!-- 悦动圈里面的动态 -->
	<!-- 这里面放我发布的动态，关注的人的动态，和加入的圈子的动态 -->
	<div>
		<section>
			<header>
				<span>推荐关注:</span>
				<img src="static/img/close.svg" alt="关闭">
			</header>
			<hr>
			<div>
				<img :src="follow.header" alt="头像">
				<div>
					<span>{{follow.hostNum}}[热门印花赛圈主]</span>
					<span>成功组织{{follow.oriNum}}次印花赛</span>
				</div>
				<button @click="takeFollow">{{follow.followState ? '已关注':'未关注'}}</button>
				<!-- 点击加关注后变成已关注，然后来新的推荐 -->
			</div>
		</section>
		<section>
			<ul>item.
				<li v-for="(item, index) in friendList" :key="index">
					<section>
						<router-link to="#">
							<img :src="item.header" alt="头像">
						</router-link>
					</section>
					<section>
						<router-link to="#">
							<div>
								<span>
									<span>{{item.nick}}</span>
									<span>{{item.hours}}小时前</span>
								</span>
								<img src="static/img/down.svg" alt="down">
							</div>
							<p>{{item.content}}</p>
							<section>
								<img :src="item.pic_1" alt="内容照">
								<img :src="item.pic_2" alt="内容照">
								<img :src="item.pic_3" alt="内容照">
							</section>
						</router-link>
						<div>
							<span>圈子:{{item.label}}</span>
							<span><img src="static/img/heart.svg" alt="赞">{{item.heart}}</span>
							<span><img src="static/img/comment.svg" alt="评论">{{item.comment}}</span>
						</div>
					</section>
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
	import api from "../../fetch/api"
	export default{
		name:'circleTrends',
		data(){
			return {
				follow: [],
				friendList: [],
			}
		},
		created(){

		},
		mounted(){
			this.getFollow();
			this.getDataList();
		},
		
		components:{

		},
		computed: {

		},
		methods:{
			getFollow() {
				let data = {

				}
				api.getCTFollow(data)
					.then( res => {
						this.follow = res.list
					})
			},
			getDataList() {
				let data = {
					
				}
				api.getCTFriend(data)
					.then( res => {
						this.friendList = res.list
					})
			},
			takeFollow() {
				this.follow.followState = true;
				this.getFollow();
			}
		}
	}
</script>