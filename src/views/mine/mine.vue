<template>
	<!-- keep里面的我的很好， -->
	<div id="mine">
		<header class="header">
			<span>我</span>
			<!-- 信息头部加上红色的数字 -->
			<div>
				<img src="static/img/notice.svg" alt="信息">
				<img src="static/img/set.svg" alt="设置">	
			</div>
			
		</header>
		<section class="abstract">
			<img :src="dataList.header_img + '?imageView2/2/w/100/h/100'" alt="头像" class="header_pic">
			<section>
				<span>
					{{dataList.name}}
					<img src="static/img/qrIcon.svg" alt="二维码">
				</span>
				<br>
				<span>
					{{dataList.fans}}粉丝 · {{dataList.following.length}}关注 · {{dataList.trends_new}}动态
				</span>
			</section>
			<img src="static/img/right.svg" alt="right">
		</section>
		<section>
			<section class="level_title">
				<span>总运动{{dataList.exercise_time}}分钟</span>
				<span>{{dataList.join_time}}加入小八</span>
			</section>
			<section class="levels">
				<figure>
					<!-- 放字体图标 -->
					<!-- 字体版权问题 -->
					<img src="static/img/to.png" alt="总等级">
					<figcaption>总等级</figcaption>
				</figure>
				<figure>
					<img src="static/img/wo.png" alt="健身">
					<figcaption>健身</figcaption>
				</figure>
				<figure>
					<img src="static/img/ro.png" alt="跑步">
					<figcaption>跑步</figcaption>
				</figure>
				<figure>
					<img src="static/img/co.png" alt="骑行">
					<figcaption>骑行</figcaption>
				</figure>
			</section>
			<section class="get_more">
				<span>我的健康数据</span>
				<img src="static/img/right.svg" alt="right">
			</section>
			<section class="nav body_data">
				<figure>
					<img src="static/img/history.svg" alt="运动历史">
					<figcaption>运动历史</figcaption>
				</figure>
				<figure>
					<img src="static/img/data.svg" alt="身体数据">
					<figcaption>身体数据</figcaption>
				</figure>
				<figure>
					<img src="static/img/ability.svg" alt="运动能力">
					<figcaption>运动能力</figcaption>
				</figure>
			</section>
			<section class="get_more chunk">
				<span>徽章</span>
				<span>
					{{dataList.badge}}
					<img src="static/img/right.svg" alt="right">
				</span>
			</section>
		</section>
		<section class="chunk">
			<section class="get_more">
				<span>运动日记</span>
				<img src="static/img/right.svg" alt="right">
			</section>
			<section class="get_more">
				<span>运动概况</span>
				<img src="static/img/right.svg" alt="right">
			</section>
			<section class="get_more">
				<span>每周目标</span>
				<img src="static/img/right.svg" alt="right">
			</section>
			<section class="get_more">
				<span>链接应用与设备</span>
				<img src="static/img/right.svg" alt="right">
			</section>
		</section>
		<section class="chunk">
			<section class="get_more">
				<span>我的活动</span>
				<img src="static/img/right.svg" alt="right">
			</section>
			<section class="get_more">
				<span>我的收藏</span>
				<img src="static/img/right.svg" alt="right">
			</section>
			<section class="get_more">
				<span>我跑过的路线</span>
				<img src="static/img/right.svg" alt="right">
			</section>
		</section>
		<section class="chunk">
			<section class="get_more">
				<span>购物车</span>
				<span>
					<span v-show="dataList.shop_car_new != 0">
						{{dataList.shop_car_new}}
					</span>
					<img src="static/img/right.svg" alt="right">
				</span>
			</section>
			<section class="get_more">
				<span>购买记录</span>
				<span>
					<span v-show="dataList.shop_record_new != 0">
						{{dataList.shop_record_new}}
					</span>
					<img src="static/img/right.svg" alt="right">
				</span>
			</section>
			<section class="get_more">
				<span>优惠券</span>
				<span>
					<span v-show="dataList.shop_ticker_new != 0">
						{{dataList.shop_ticker_new}}
					</span>
					<img src="static/img/right.svg" alt="right">
				</span>
			</section>
		</section>
	</div>
</template>
<script>
import api from '../../fetch/mine'
	export default{
		name: 'mine',
		data(){
			return {
				dataList: {

				}
			}
		},
		created(){

		},
		mounted(){
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
			this.getDataList();
		},
		components: {

		},
		computed: {

		},
		methods: {
			getDataList() {
				let id_json = JSON.parse(localStorage.userInfo);
				let user_id = id_json.id;
				let data = {
					id: user_id
				}
				api.mineData(data)
					.then( res => {
						this.dataList = res.message[0];
						this.dataList.join_time = this.dataList.join_time.split("T")[0];
					})
					.catch(err => {
						console.log("err:",err);
					})
			}
		}
	}
</script>
<style lang="scss" scoped>
#mine {
	width: 96vw;
	margin: {
		bottom: 10vh;
		left: 2vw;
		right: 2vw;
	}
}
.header {
	display: flex;
	justify-content: space-between;
	height: 7vh;
	line-height: 7vh;
}
.abstract {
	background-color: #846a79;
	display: flex;
	align-items: center;
	justify-content: space-around;
	span {
		color: white;
	}
	height: 20vh;
}
.level_title {
	margin: {
		top: 5vw;
		left: 2vw;
	}

	span:first-child {
		font-size: .18rem;
		font-weight: 900;
	}
	span:nth-child(2){
		font-size: .11rem;
	}
}
.levels {
	display: flex;
	margin: 5vw auto 3vw 0;
	padding-bottom: 10vw;
	border-bottom: 1px solid #ccc;
	img {
		width: 23vw;
		height: 12vh;
	}
	figcaption {
		text-align:center;
	}
	
}
.body_data {
	padding-bottom: 5vw;
	border-bottom: 1px solid #ccc;
}
.chunk {
	border-bottom: 10px solid #f2f2f2;
	section {
		border-bottom: 1px solid #f2f2f2;
		height: 12vw;
		line-height: 8vw;
	}
}

</style>