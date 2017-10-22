<template>
	<!-- 这里面放我发布的动态，关注的人的动态，和加入的圈子的动态 -->
	<div>
		<section>
			<title>
				<span>推荐关注:</span>
				<img src="static/img/.svg" alt="">
			</title>
			<hr>
			<div>
				<img src="static/img/.svg" alt="">
				<div>
					<span>{{}}[热门印花赛圈主]</span>
					<span>成功组织{{}}次印花赛</span>
				</div>
				<button>{{}}</button>
			</div>
		</section>
		<section>
			<ul>
				<li v-for="">
					<seciton>
						<router-link>
							<img src="static/img/.svg" alt="">
						</router-link>
					</seciton>
					<seciton>
						<router-link>
							<div>
								<span>
									<span>{{}}昵称</span>
									<span>{{}}小时前</span>
								</span>
								<img src="static/img/.svg" alt="">
							</div>
							<!-- 说的内容，也可以是回复的话题 -->
							<p>{{}}说的内容</p>
							<seciton>
								<!-- 发表动态的图片，如果上面是回复的话，这儿放被回复者的内容 -->
								<img src="static/img/.svg" alt="">
							</seciton>
						</router-link>
						<div>
							<span>{{}}标签</span>
							<span><img src="static/img/.svg" alt="">{{}}</span>
							<span><img src="static/img/.svg" alt="">{{}}</span>
						</div>
					</seciton>
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
	export default{
		name:'circleTrends',
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