<template>
	<!-- 主要为附近有那些运动圈 -->
	<div>
		<nav>
			<figure>
				<router-link to="#">
					<!-- 大小48 -->
					<img src="static/img/dateCir.svg" alt="附近圈子">
					<span>附近圈子</span>
				</router-link>
			</figure>
			<figure>
				<router-link to="#">
					<img src="static/img/cityActivity.svg" alt="同城活动">
					<span>同城活动</span>
				</router-link>
				
			</figure>
			<figure>
				<router-link to="#">
					<img src="static/img/runCom.svg" alt="陪跑">
					<span>陪跑</span>
				</router-link>
				
			</figure>
			<figure>
				<router-link to="#">
					<img src="static/img/vipIcon.svg" alt="户外会员">
					<span>户外会员</span>
				</router-link>
				
			</figure>
		</nav>
		<section>
			<div>
				<span>附近人</span>
			</div>
			<div>
				<span>筛选</span>
				<img src="static/img/filter.svg" alt="筛选按钮">
			</div>
		</section>
		<nav>
			<ul v-for="">
				<li>
					<section>
						<img src="static/img/.svg" alt="头像">
					</section>
					<section>
						<header></header>
						<span></span>
						<p></p>
					</section>
					<section>
						<!-- <span>{{}}中间有个点{{}}</span> -->
						<button></button>
					</section>
				</li>
			</ul>
		</nav>
	</div>
</template>
<script>
	export default{
		name:'dateVircle',
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