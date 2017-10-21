<template>
	<div>
		<section>
			<!-- 放一个走马灯 -->
		</section>
		<section>
			<router-link>
				<figure>
					<img src="static/img/.svg" alt="">
					<span></span>
				</figure>
			</router-link>
			<router-link>
				<figure>
					<img src="static/img/.svg" alt="">
					<span></span>
				</figure>
			</router-link>
			<router-link>
				<figure>
					<img src="static/img/.svg" alt="">
					<span></span>
				</figure>
			</router-link>
		</section>
		<section>
			<title>免费专区</title>
			<!-- 放两个类似图片上有一个覆盖层的东西，找找方便写法 -->
		</section>
		<section>
			<title>
				训练营
				<router-link to="#">
					<span>查看全部<img src="static/img/.svg" alt=""></span>
				</router-link>
			</title>
			<img src="static/img/.svg" alt="">
			<img src="static/img/.svg" alt="">
		</section>
		<section>
			<title>
				个人提升
				<router-link to="#">
					<span>查看全部<img src="static/img/.svg" alt=""></span>
				</router-link>
			</title>
			<ul>
				<li v-for="">
					<div><img src="static/img/.svg" alt=""></div>
					<div>
						<title></title>
						<p></p>
						<footer>
							<span></span>
							<span></span>
						</footer>
					</div>
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
	export default{
		name:'dateClassroom',
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