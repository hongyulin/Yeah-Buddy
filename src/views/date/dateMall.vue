<template>
<!-- 里面还有一个每隔几秒就出现的弹框“xxx领了xxx” -->
	<div>
		<section>
			<router-link to="#">
				<!-- 搜索框点击后跳转另外一页 -->
				<!-- 需要保存搜索历史 -->
				<!-- 滚动后搜索框固定在顶部 -->
				<input type="text"/>
			</router-link>
			<img :src="mallAd" alt="广告" class="width_vw"> 
		</section>
		<section class="mallSwiper">
			<swiper :options="swiperOption">
				<swiper-slide v-for="(item, index) in tagList" :key="index">{{item}}</swiper-slide>
			</swiper>
			<span class="mallGetMore">
				|&nbsp;<img src="static/img/down.svg" alt="下拉按钮">&nbsp;
			</span>
			<!-- 点击按钮的时候改变url并watch异步加载，使得无论后退还是点击时，
			横向list中和下拉中以及下面的列表中都是同一个状态 -->
			<!-- 隐藏，滚动后出现，综合排序（综合排序，价格从低到高，价格从高到底）|销量优先 -->
		</section>
		<section>
			<ul>
				<li v-for="(item, index) in dataList" :key="index" class="goodList width_vw">
					<div>
						<img :src="item.img + '?imageView2/2/w/120/h/120'" alt="商品">
					</div>
					<div>
						<header>
							<span v-show="item.icon == 0" class="icon">天猫</span>
							<span v-show="item.icon == 1" class="icon">淘</span>
							<span v-show="item.icon == 2" class="icon">上新</span>
							<span class="goodTitle">{{item.name}}</span>
						</header>
						<span class="goodPrice">
							￥
							<span>
								{{item.dis_price}}
							</span>
							<span v-show="item.free_post">包邮</span>
						</span>
						<br>
						<span class="originPrice">
							原价:
							<del>{{item.ori_price}}</del>
						</span>
					</div>
					<div>
						<div class="redPackket">
							<span>￥
								<big>{{item.red_packet.money}}</big>
								</span>
							<br>
							<span><small>拆红包</small></span>
						</div>
						<span>
							<small>已抢{{item.red_packet.send_num}}件</small>
							</span>
					</div>
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
	import api from "../../fetch/date"
	export default{
		name:'dateMall',
		data: function(){
			return {
				pageIndex:  1,
				dataList: 	[],
				mallAd: 	"",
				tagList: 	["每日精选", "美妆个护", "就爱吃", "数码家电", "日用百货", "饰品", "图文", "鞋包", "运动车载", "女士精选"],
				swiperOption: {
					slidesPerView: 	3,
					freeMode: 		true
				},
			}
		},
		created(){

		},
		mounted(){
			this.intiData();
		},
		
		components:{

		},
		computed: {

		},
		methods:{
			intiData(){
				this.getMallList();
				setTimeout(() => {
					this.getAdList();
				}, 500);
			},

			getMallList(){
				let data = {
					pageIndex: this.pageIndex,
					pageSize: 15
				}
				api.getGoodsList(data)
					.then( res => {
						this.dataList = res.message;
					}).catch(err => {
						console.log(err)
					})
			},

			getAdList(){
				let data = {
					type: "SHOP_AD"
				}
				api.getAds(data)
					.then( res => {
						this.mallAd = res.message[0].img;
					})
					.catch(err => {
						console.log(err)
					})
			},
		}
	}
</script>
<style lang="scss" scoped>
	.mallSwiper {
		display: relative;
	}
	// 查看更多部分的下拉按钮
	.mallGetMore {
		position: relative;
		float: right;
		z-index:4;
		top: -20px;
		background-color: rgba(255,255,255,1);
		img {
			vertical-align: middle;
			margin: {
				top:1px;
			};
		}
	}
	.goodList{
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
		header {
			width:40vw;
		}
		.icon {
			background-color:red;
			color:white;
		}
		.goodTitle {
			font-size:0.16rem;
		}
		.goodPrice {
			color: red;
			span {
				&:nth-child(1) {
					font-size: 20px;
					color:red;
				}
				&:nth-child(2) {
					font-size: 12px;
					border: 1px solid red;
					color:red;
				}
				
			}
		}
		.originPrice {
			color: gray;
		}
		.redPackket {
			width: 20vw;
			text-align: center;
			padding: 10px ;
			background-color: red;
			span {
				color: white;
				&:nth-of-type(2){
					padding: 2px;
					border: white dashed 1px;
				}
			}
		}
	}
</style>