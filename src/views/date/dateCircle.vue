<template>
	<!-- 主要为附近有那些运动圈 -->
	<div id="dateCircle">
		<nav class="nav">
			<figure>
				<router-link to="#">
					<!-- 大小48 -->
					<img src="static/img/dateCir.svg" alt="附近圈子">
					<figcaption>附近圈子</figcaption>
				</router-link>
			</figure>
			<figure>
				<router-link to="#">
					<img src="static/img/cityActivity.svg" alt="同城活动">
					<figcaption>同城活动</figcaption>
				</router-link>
			</figure>
			<figure>
				<router-link to="#">
					<img src="static/img/runCom.svg" alt="陪跑">
					<figcaption>陪跑</figcaption>
				</router-link>
			</figure>
			<figure>
				<router-link to="#">
					<img src="static/img/vipIcon.svg" alt="户外会员">
					<figcaption>成为会员</figcaption>
				</router-link>
			</figure>
		</nav>
		
		<section class="nearPer get_more">
			<span>附近人</span>
			<div>
				<span>筛选</span>
				<img src="static/img/filter.svg" alt="筛选按钮">
			</div>
		</section>
		<nav>
			<ul>
				<li v-for="item in dataList" class="nearContent" :key="item.id">
					<section>
						<img :src="item.img" alt="头像" class="header_pic">
					</section>
					<section class="perInfo">
						<header>{{item.nickName}}</header>
						<div>
							<span class="sex">{{item.sex}}&nbsp;{{item.age}}</span>
							<span class="lev">lv{{item.level}}</span>
						</div>
						<p>最近7天走了{{item.step}}步</p>
					</section>
					<section class="follow">
						<span>{{item.distance}}Km·{{item.hours}}小时前</span>
						<button @click="item.follow = !item.follow" :class="item.follow ? 'noFollow' : ''">{{item.follow ? "取消" : "关注"}}</button>
					</section>
				</li>
			</ul>
		</nav>
		<!-- 向上拖动加载更多，向下拉动刷新 -->
	</div>
</template>
<script>
	import api from "../../fetch/date"
	export default{
		name:'dateVircle',
		data(){
			return {
				dataList: [],
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
					num: 100
				}
				api.getNearPer(data)
					.then( res => {
						this.dataList.push(...res.list)
					})
			},
		}
	}
</script>
<style lang="scss" scoped>
#dateCircle {
	border: {
		top: solid 1px #dedede;
	}
	margin: {
		bottom: 70px;
	}
}
.nearPer {
	// display: flex;
	// justify-content: space-between;
	span {
		font-size: .16rem;
	}
	border: {
		top: 3vw solid #f2f2f2;
		bottom: 3vw solid #f2f2f2;
	}
	// padding: {
	// 	top: 2vw;
	// 	bottom: 2vw;
	// 	left: 2vw;
	// 	right: 2vw;
	// }
}
.nearContent {
	display: flex;
	padding: 3vw;
	border: {
		bottom: 1px solid #f2f2f2;
	}
	img {
		margin-right: 3vw;
	}
	span {
		font-size: .13rem;
	}
	p {
		font-size: .13rem;
		color: #cfcfcf;
	}
	.perInfo {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.sex,.lev {
			color: white;
			background-color: #ff00ff;
			border-radius: 15%;
			padding: {
				left: 4px;
				right: 4px;
			}
		}
		.lev {
			background-color: #534be4;
		}
	}
	.follow {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-end;
		flex-grow: 1;
		button {
			border: 1px solid #00ff00;
			background-color: #ffffff;
			color: #00ff00;
			padding: 1vw 3vw;
			border-radius: 20%;
			align-self: center;
		}
		.noFollow {
			color: grey;
			border-color: grey;
		}
	}
}
</style>