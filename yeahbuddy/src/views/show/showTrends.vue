<template>
	<div>
		<seciton>
			<header class="getMore">
				他们刚刚在练
				<img src="static/img/right.svg" alt="查看全部">
			</header>
			<!-- 这儿放一个横向的无滚条的list -->
		</seciton>
		<seciton>
			<ul>
				<li>
					<router-link to="#">
						<header>
							<img src="static/img/.svg" alt="" class="">
							由@小八推荐
						</header>
						<hr>
						<section>
							<img src="static/img/.svg" alt="">
							<span>
								<!-- 放名字和时间 -->
								{{}}
								<br>
								{{}}
							</span>
							<button>+关注</button>
						</section>
						<figure>
							<img src="static/img/.svg" alt="">
							<figcaption></figcaption>
							<!-- 文章时候显示 -->
							<span v-show="">{{}}次阅览</span>
							<p></p>
							<!-- 参加的是计划的时候显示 -->
							<div>
								<header>
									<!-- 放表情 -->
									<img src="static/img/.svg" alt="">
									<span>计划第{{}}天，完成</span>
									<!-- 这儿放计划的名字 -->
								</header>
								<hr>
								<div>
									<span>{{}}<br>动作/组</span>
									<span>{{}}<br>本次训练/分钟</span>
									<span>{{}}<br>本次燃脂/千卡</span>
								</div>
								<span>打卡第{{}}天</span>
							</div>
						</figure>
						<footer>
							<span><img src="static/img/heart.svg" alt="赞">{{}}</span>
							<span><img src="static/img/comment.svg" alt="评论">{{}}</span>
							<span><img src="static/img/share.svg" alt="分享">{{}}</span>
						</footer>
						

					</router-link>
				</li>
			</ul>
		</seciton>
		<seciton>

		</seciton>
	</div>
</template>
<script>
	export default{
		name:'showTrends',
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