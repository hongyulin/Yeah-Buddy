<template>
	<div>
		<section>
			<!-- 走马灯 -->
		</section>
		<section>
			<figure>
				<img src="static/img/showBody.svg" alt="秀身材">
				<figcaption>秀身材</figcaption>
			</figure>
			<figure>
				<img src="static/img/showRecord.svg" alt="秀记录">
				<figcaption>秀记录</figcaption>
			</figure>
			<figure>
				<img src="static/img/showPopular.svg" alt="人气榜">
				<figcaption>人气榜</figcaption>
			</figure>
			<figure>
				<img src="static/img/trophy.svg" alt="挑战活动">
				<figcaption>挑战活动</figcaption>
			</figure>
		</section>
		<section>
			<header>
				<span>经验分享</span>
				<img src="static/img/right.svg" alt="right">
			</header>
			<ul>
				<li v-for="">
					<seciton>
						<img src="static/img/.svg" alt="">
						<div>
							<p></p>
							<footer>
								<img src="static/img/.svg" alt="">
								<span>
									<img src="static/img/heart.svg" alt="赞">
									{{}}
								</span>
								<span>
									<img src="static/img/comment.svg" alt="评论">
									{{}}
								</span>
							</footer>
						</div>
					</seciton>
				</li>
			</ul>
		</section>
		<section>
			<header>
				<span>热门话题</span>
				<img src="static/img/right.svg" alt="right">
			</header>
			<ul>
				<li v-for="">
					<seciton>
						<img src="static/img/.svg" alt="">
						<div>
							<header></header>
							<p></p>
							<footer>
								<img src="static/img/.svg" alt="">
								<img src="static/img/.svg" alt="">
								<img src="static/img/.svg" alt="">
								<img src="static/img/.svg" alt="">
								{{}}正在参与
							</footer>
						</div>
					</seciton>
				</li>
			</ul>
		</section>
		<section>
			<header>小八精选</header>
			<ul>
				<!-- 中间加一些推荐 -->
				<li v-for="">
					<section>
						<figure>
							<img src="static/img/.svg" alt="">
							<figcaption></figcaption>
						</figure>
						<footer>
							<span>
								<img src="static/img/.svg" alt="" class="">
								{{}}
							</span>
							<span>
								<img src="static/img/heart.svg" alt="" class="赞">
								{{}}
							</span>
						</footer>
					</section>
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
	export default{
		name:'showBoutique',
		data(){
			return {

			}
		},
		created(){

		},
		mounted(){

		},
		
		components:{

		},
		computed: {

		},
		methods:{
			
		}
	}
</script>