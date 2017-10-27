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
			<img :src="mallAd.mallAd" alt="广告"> 
		</section>
		<section>
			<swiper :options="swiperOption">
				<swiper-slide v-for="item in tagList">{{item}}</swiper-slide>
			</swiper>
			|<img src="static/img/down.svg" alt="下拉按钮">
			<!-- 横向可以拖拽，点击按钮形成一个下拉选项的list -->
			<!-- 点击按钮的时候改变url并watch异步加载，使得无论后退还是点击时，
			横向list中和下拉中以及下面的列表中都是同一个状态 -->
			<!-- 隐藏，滚动后出现，综合排序（综合排序，价格从低到高，价格从高到底）|销量优先 -->
		</section>
		<section>
			<ul>
				<li v-for="item in dataList">
					<div>
						<img :src="item.goodsImg" alt="商品">
					</div>
					<div>
						<header>
							<span v-show="item.icon == 0">天猫</span>
							<span v-show="item.icon == 1">淘</span>
							<span v-show="item.icon == 2">上新</span>
							<span>{{item.title}}</span>
						</header>
						<span>
							￥{{item.price}}
							<span v-show="item.freeCarr">包邮</span>
						</span>
						<span>
							原价:
							<del>{{item.price + item.diffPrice}}</del>
						</span>
					</div>
					<div>
						<div>
							<span>￥{{item.redPacket}}</span>
							<span>拆红包</span>
						</div>
						<span>已抢{{item.packetNum}}件</span>
					</div>
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
	import api from "../../fetch/api"
	export default{
		name:'dateMall',
		data: function(){
			return {
				dataList: [],
				mallAd: [],
				tagList: ["每日精选", "美妆个护", "就爱吃", "数码家电", "日用百货", "饰品", "图文", "鞋包", "运动车载", "女士精选"],
				swiperOption: {
					pagination: '.swiper-pagination',
					slidesPerView: 3,
					paginationClickable: true,
					spaceBetween: 30,
					freeMode: true
				},
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
				api.getGoodsList(data)
					.then( res => {
						this.dataList = res.list;
					})
				api.getMallAd(data)
					.then( res => {
						this.mallAd = res.list;
					})
			}
		}
	}
</script>