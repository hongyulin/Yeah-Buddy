<template>
	<div>
		<nav>
			<figure>
				<router-link to="#">
					<img src="static/img/" alt="附近圈子">
					<span>附近圈子</span>
				</router-link>
			</figure>
			<figure>
				<router-link to="#">
					<img src="static/img/" alt="同城活动">
					<span>同城活动</span>
				</router-link>
				
			</figure>
			<figure>
				<router-link to="#">
					<img src="static/img/" alt="陪跑">
					<span>陪跑</span>
				</router-link>
				
			</figure>
			<figure>
				<router-link to="#">
					<img src="static/img/" alt="户外会员">
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
				<img src="static/img" alt="筛选按钮">
			</div>
		</section>
		<nav>
			<ul v-for="item in dataList">
				<li>
					<section>
						<img src="static/img/.svg" alt="头像">
					</section>
					<section>
						<title></title>
						<span></span>
						<p></p>
					</section>
					<section>
						<span>{{}}.{{}}</span>
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