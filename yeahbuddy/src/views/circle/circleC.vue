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
		<section>
			<header class="get_more">
				<span>圈子活动</span>
				<img src="static/img/right.svg" alt="查看全部">
			</header>
			<ul>
				<!-- 这儿需要返回图片，是在fetch中， -->
				<li><img src="" alt="圈子活动"></li>
				<li><img src="" alt="圈子活动"></li>
			</ul>
		</section>
		<section>
			<header>精选内容</header>
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
					<figcaption>悦友故事</figcaption>
				</figure>
			</section>
		</section>
		<section>
			<header class="get_more">
				<span>附近圈子</span>
				<img src="static/img/right.svg" alt="查看全部">
			</header>
			<ul>
				<li v-for="(item, index) in hotList.slice(0, 2)" :key="index">
				<!-- 重点是圈子，弱化个人的信息 -->
					<!-- <header>
						<img :src="item.header" alt="头像">
						<div>
							<span>
								{{item.nick}}
							</span>
							<span>
								{{item.sex}}
							</span>
							<br>
							<span class="">
								LV{{item.level}}
							</span>
						</div>
					</header> -->
					<div>
						<div>
							<img :src="item.pic_1" alt="">
							<img :src="item.pic_2" alt="">
							<img :src="item.pic_3" alt="">
						</div>
						<p>{{item.content}}</p>
						<span class="pisition">{{item.location}}</span>
					</div>
					<footer>
						<span>
							<img :src="item.cheader" alt="头像">
							<span>
								{{item.cname}}
								<br>
								感兴趣的圈子	
							</span>
							
						</span>
						<div>
							<span>
								<img src="static/img/comment.svg" alt="评论">
								{{item.comment}}
							</span>
							<button @click="applyState = true">{{applyState ?  '已申请' : '申请加入'}}</button>
						</div>
					</footer>
				</li>
				<li><img :src="swiperSlides[0].adImg" alt="公益广告"></li>
				<li v-for="(item, index) in hotList.slice(2, 6)" :key="index">
					<header>
						<img :src="item.header" alt="头像">
						<div>
							<span>
								{{item.nick}}
							</span>
							<span>
								{{item.sex}}
							</span>
							<br>
							<span class="">
								LV{{item.levle}}
							</span>
						</div>
					</header>
					<div>
						<p>{{item.content}}</p>
						<div>
							<img :src="item.pic_1" alt="">
							<img :src="item.pic_2" alt="">
							<img :src="item.pic_3" alt="">
						</div>
						<span class="pisition">{{item.location}}</span>
					</div>
					<footer>
						<span>
							<img :src="item.cheader" alt="">
							{{item.cname}}
						</span>
						<span>
							<img src="static/img/heart.svg" alt="赞">
							{{item.heart}}
						</span>
						<span>
							<img src="static/img/comment.svg" alt="评论">
							{{item.comment}}
						</span>
					</footer>
				</li>
				<li><img :src="swiperSlides[1].adImg" alt="公益广告"></li>
				<li v-for="(item, index) in hotList.slice(6)" :key="index">
					<header>
						<img :src="item.header" alt="头像">
						<div>
							<span>
								{{item.nick}}
							</span>
							<span>
								{{item.sex}}
							</span>
							<br>
							<span class="">
								LV{{item.levle}}
							</span>
						</div>
					</header>
					<div>
						<p>{{item.content}}</p>
						<div>
							<img :src="item.pic_1" alt="">
							<img :src="item.pic_2" alt="">
							<img :src="item.pic_3" alt="">
						</div>
						<span class="pisition">{{item.location}}</span>
					</div>
					<footer>
						<span>
							<img :src="item.cheader" alt="">
							{{item.cname}}
						</span>
						<span>
							<img src="static/img/heart.svg" alt="赞">
							{{item.heart}}
						</span>
						<span>
							<img src="static/img/comment.svg" alt="评论">
							{{item.comment}}
						</span>
					</footer>
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
	import api from "../../fetch/api"
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	export default{
		name:'circleC',
		data(){
			return {
				applyState: false,
				circleDate: [],
				swiperSlides: [
					{
						adImg: '',
						swiperImg: '',
					},{
						adImg: '',
						swiperImg: '',
					}
				],
				hotList: [],
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
						console.log(this.swiperSlides)
					})
				api.getCircleC(data)
					.then( res => {
						this.circleDate = res.list;
					})
				api.getHotList(data)
					.then( res => {
						this.hotList = res.list
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
</style>