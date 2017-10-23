<template>
	<div>
		<section>
			<router-link to="#">
				<!-- 搜索框点击后跳转另外一页 -->
				<!-- 滚动后搜索框固定在顶部 -->
				<input type="text">
			</router-link>
			<img src="static/img/.svg" alt="">
		</section>
		<section>
			<!-- 横向可以拖拽，点击按钮形成一个下拉选项的list -->
			<!-- 隐藏，滚动后出现，综合排序（综合排序，价格从低到高，价格从高到底）|销量优先 -->
		</section>
		<section>
			<ul>
				<li>
					<div>
						<img src="static/img/.svg" alt="">
					</div>
					<div>
						<header>
							<img src="static/img/.svg" alt="">
							<img src="static/img/.svg" alt="">
							<span></span>
						</header>
						<span>
							￥{{}}
							<img src="static/img/.svg" alt="">
						</span>
						<span>
							原价:
							<del>{{}}</del>
						</span>
					</div>
					<div>
						<div>
							<span>￥{{}}</span>
							<span>拆红包</span>
						</div>
						<span>已抢{{}}件</span>
					</div>
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
	export default{
		name:'dateMall',
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