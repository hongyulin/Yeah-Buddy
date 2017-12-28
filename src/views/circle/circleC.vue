<template>
<!-- 悦动圈里面的圈子 -->
	<div>
		<section>
			<swiper :options="swiperOption">
				<swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
					<img :src="slide.swiperImg" alt="走马灯" style="width: 100vw">
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</section>
		<section>
			<header class="get_more">
				<span>我的圈子</span>
					<img src="static/img/right.svg" alt="查看全部">
			</header>
			<section class="nav circles">
				<figure>
					<img :src="circleDate.shImg" alt="上海悦动圈">
					<figcaption>上海悦动圈</figcaption>
				</figure>
				<figure>
					<img :src="circleDate.runImg" alt="跑步装备圈">
					<figcaption>跑步装备圈</figcaption>
				</figure>
				<figure>
					<img :src="circleDate.runeqImg" alt="跑步圈">
					<figcaption>跑步圈</figcaption>
				</figure>
				<figure>
					<img src="static/img/apply.svg" alt="加入圈子">
					<figcaption>加入圈子</figcaption>
				</figure>
			</section>
		</section>
		<section class="circle_active_box">
			<header class="get_more">
				<span>圈子活动</span>
				<img src="static/img/right.svg" alt="查看全部">
			</header>
			<ul class="circle_active">
				<!-- 这儿需要返回图片，是在fetch中， -->
				<li><img :src="activeList.left" alt="圈子活动"></li>
				<li><img :src="activeList.right" alt="圈子活动"></li>
			</ul>
		</section>
		<section class="selected_content">
			<header class="get_more">精选内容</header>
			<section class="nav">
				<figure>
					<img src="static/img/sportEncyclopedias.svg" alt="运动百科">
					<figcaption>运动百科</figcaption>
				</figure>
				<figure>
					<img src="static/img/discuss.svg" alt="话题讨论">
					<figcaption>话题讨论</figcaption>
				</figure>
				<figure>
					<img src="static/img/story.svg" alt="悦友故事">
					<figcaption>八友故事</figcaption>
				</figure>
			</section>
		</section>
		<section>
			<header class="get_more">
				<span>附近圈子</span>
				<img src="static/img/right.svg" alt="查看全部">
			</header>
			<ul>
				<li v-for="(item, index) in nearList.slice(0, 2)" :key="index" class="near_circle">
					<div class="near_active_content">
						<p class="near_active_content">{{item.content}}</p>
						<div class="near_active_pic">
							<img :src="item.pic_1" alt="附近圈子1">
							<img :src="item.pic_2" alt="附近圈子2">
							<img :src="item.pic_3" alt="附近圈子3">
						</div>
						<span class="pisition">{{item.location}}</span>
					</div>
					<footer class="near_active_footer">
						<span>
							<img :src="item.cheader" alt="头像" class="header_pic">
							<span>
								{{item.cname}}
							</span>							
						</span>
						<div>
							<span>
								<img src="static/img/comment.svg" alt="评论">
								{{item.comment}}
							</span>
							<button @click="applyState = true" class="apply_join">{{applyState ?  '已申请' : '申请加入'}}</button>
						</div>
					</footer>
				</li>
				<li><img :src="swiperSlides[0].adImg" alt="公益广告" class="public_welfare"></li>
				<li v-for="(item, index) in nearList.slice(2, 6)" :key="index" class="near_circle">
					<div class="near_active_content">
						<p class="near_active_content">{{item.content}}</p>
						<div class="near_active_pic">
							<img :src="item.pic_1" alt="附近活动pic">
							<img :src="item.pic_2" alt="附近活动pic">
							<img :src="item.pic_3" alt="附近活动pic">
						</div>
						<span class="pisition">{{item.location}}</span>
					</div>
					<footer  class="near_active_footer">
						<span>
							<img :src="item.cheader" alt="圈子头像" class="header_pic">
							{{item.cname}}
						</span>
						<div>
							<span>
								<img src="static/img/comment.svg" alt="评论">
								<span>
									{{item.comment}}
								</span>
							</span>
							<button @click="applyState = true" class="apply_join">{{applyState ?  '已申请' : '申请加入'}}</button>
						</div>
					</footer>
				</li>  
				<li><img :src="swiperSlides[1].adImg" alt="公益广告" class="public_welfare"></li>
				<li v-for="(item, index) in nearList.slice(6)" :key="index" class="near_circle">
					<div class="near_active_content">
						<p class="near_active_content">{{item.content}}</p>
						<div class="near_active_pic">
							<img :src="item.pic_1" alt="附近活动pic">
							<img :src="item.pic_2" alt="附近活动pic">
							<img :src="item.pic_3" alt="附近活动pic">
						</div>
						<span class="pisition">{{item.location}}</span>
					</div>
					<footer  class="near_active_footer">
						<span>
							<img :src="item.cheader" alt="圈子头像" class="header_pic">
							{{item.cname}}
						</span>
						<div>
							<span>
								<img src="static/img/comment.svg" alt="评论">
								{{item.comment}}
							</span>
							<button @click="applyState = true" class="apply_join">{{applyState ?  '已申请' : '申请加入'}}</button>
						</div>
						
					</footer>
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
	import api from "../../fetch/circle"
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default{
		name:'circleC',
		data(){
			return {
				applyState: false,
				circleDate: [],
				activeList: [],
				swiperSlides: [
					{
						adImg: '',
						swiperImg: '',
					},{
						adImg: '',
						swiperImg: '',
					}
				],
				nearList: [],
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
				api.getCircleAd(data)
					.then( res => {
						this.swiperSlides = res.list;
					})
				api.getCircleC(data)
					.then( res => {
						this.circleDate = res.list;
					})
				api.getNearList(data)
					.then( res => {
						this.nearList = res.list
					})
				api.getCircleActive()
					.then( res => {
						this.activeList = res.list;
					})
			},
		}
	}
</script>
<style lang="scss" scoped>
.circles {
	img {
		border-radius: 50%;
	}
}
.circle_active {
	display: flex;
	img {
		width: 48vw;
		margin: auto 1vw;
	}
}
.near_active_content {
	width:96vw;
	margin: auto 2vw;
	.near_active_pic {
		display: flex;
		justify-content: space-between;
		img {
			width:30vw;
		}
	}
	.near_active_content {
		// text-overflow: ellipsis;
		// 这儿放两行加省略号
	}
}
.near_active_footer {
	display: flex;
	justify-content:space-between;
	width: 96vw;
	margin: 1vw 2vw;
	.apply_join {
		background-color: white;
		width: 20vw;
		height: 8vw;
		border: 1px solid red;
		border-radius: 20px;
		margin-left: .2rem;
	}
}
.circle_active_box {
	border-top: 10px solid #ccc;
	margin: {
		top: .15rem;
		bottom: .15rem;
	}	
}
.near_circle {
	margin-bottom: 10px;
	padding-bottom: 10px;
	border-bottom: 1px solid #ccc;
}
.selected_content {
	@extend .circle_active_box;
	border-bottom: 10px solid #ccc;
	padding-bottom: 10px;
}
.public_welfare {
	width: 100vw;
}
</style>