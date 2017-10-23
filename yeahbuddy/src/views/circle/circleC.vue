<template>
	<div>
		<section>
			<!-- 走马灯 -->
		</section>
		<section>
			<header>
				<span>我的圈子</span>
				<!-- <span> -->
					<!-- 查看全部 -->
					<img src="static/img/right.svg" alt="查看全部">
				<!-- </span> -->
			</header>
			<figure>
				<img src="static/img/.svg" alt="上海悦动圈">
				<figcaption>上海悦动圈</figcaption>
			</figure>
			<figure>
				<img src="static/img/.svg" alt="跑步装备圈">
				<figcaption>跑步装备圈</figcaption>
			</figure>
			<figure>
				<img src="static/img/.svg" alt="跑步圈">
				<figcaption>跑步圈</figcaption>
			</figure>
			<figure>
				<img src="static/img/apply.svg" alt="加入圈子">
				<figcaption>加入圈子</figcaption>
			</figure>
		</section>
		<section>
			<header>
				<span>圈子活动</span>
				<!-- <span>
					查看全部 -->
					<img src="static/img/right.svg" alt="查看全部">
				<!-- </span> -->
			</header>
		</section>
		<section>
			<header>精选内容</header>
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
		<section>
			<header>
				<span>热门话题</span>
				<!-- <span>
					查看全部 -->
					<img src="static/img/right.svg" alt="查看全部">
				<!-- </span> -->
			</header>
			<ul>
				<li v-for="">
					<!-- 中间夹用户推荐，，， -->
					<header>
						<img src="static/img/.svg" alt="">
						<div>
							<span>
								{{}}
								<img src="static/img/.svg" alt="">
							</span>
							<span class="">
								{{}}
							</span>
						</div>
						<button>关注</button>
					</header>
					<div>
						<p></p>
						<div>
							<img src="static/img/.svg" alt="">
							<img src="static/img/.svg" alt="">
							<img src="static/img/.svg" alt="">
						</div>
						<span class="pisition">{{}}</span>
					</div>
					<footer>
						<span>
							<img src="" alt="">
							{{}}
						</span>
						<span>
							<img src="" alt="">
							{{}}
						</span>
						<span>
							<img src="" alt="">
							{{}}
						</span>
					</footer>
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
	export default{
		name:'circleC',
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