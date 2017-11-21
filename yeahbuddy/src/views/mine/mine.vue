<template>
	<!-- keep里面的我的很好， -->
	<div id="mine">
		<header class="header">
			<span>我</span>
			<!-- 信息头部加上红色的数字 -->
			<div>
				<img src="static/img/notice.svg" alt="信息">
				<img src="static/img/set.svg" alt="设置">	
			</div>
			
		</header>
		<section>
			<img src="static/img/.svg" alt="头像">
			<section>
				<span>
					{{}}
					<img src="static/img/qrIcon.svg" alt="二维码">
				</span>
				<span>
					<!-- {{}}粉丝 · {{}}关注 · {{}}动态 -->
				</span>
			</section>
			<img src="static/img/right.svg" alt="right">
		</section>
		<section>
			<section>
				<span>总运动{{}}分钟</span>
				<span>{{}}加入小八</span>
			</section>
			<section>
				<figure>
					<!-- 放字体图标 -->
					<img src="static/img/.svg" alt="总等级">
					<figcaption>总等级</figcaption>
				</figure>
				<figure>
					<img src="static/img/.svg" alt="健身">
					<figcaption>健身</figcaption>
				</figure>
				<figure>
					<img src="static/img/.svg" alt="跑步">
					<figcaption>跑步</figcaption>
				</figure>
				<figure>
					<img src="static/img/.svg" alt="骑行">
					<figcaption>骑行</figcaption>
				</figure>
			</section>
			<section class="get_more">
				<span>我的健康数据</span>
				<img src="static/img/right.svg" alt="right">
			</section>
			<section class="nav">
				<figure>
					<img src="static/img/history.svg" alt="运动历史">
					<figcaption>运动历史</figcaption>
				</figure>
				<figure>
					<img src="static/img/data.svg" alt="身体数据">
					<figcaption>身体数据</figcaption>
				</figure>
				<figure>
					<img src="static/img/ability.svg" alt="运动能力">
					<figcaption>运动能力</figcaption>
				</figure>
			</section>
			<section class="get_more">
				<span>徽章</span>
				<span>
					{{}}
					<img src="static/img/right.svg" alt="right">
				</span>
			</section>
		</section>
		<section>
			<section class="get_more">
				<span>运动日记</span>
				<img src="static/img/right.svg" alt="right">
			</section>
			<section class="get_more">
				<span>运动概况</span>
				<img src="static/img/right.svg" alt="right">
			</section>
			<section class="get_more">
				<span>每周目标</span>
				<img src="static/img/right.svg" alt="right">
			</section>
			<section class="get_more">
				<span>链接应用与设备</span>
				<img src="static/img/right.svg" alt="right">
			</section>
		</section>
		<section>
			<section class="get_more">
				<span>我的活动</span>
				<img src="static/img/right.svg" alt="right">
			</section>
			<section class="get_more">
				<span>我的收藏</span>
				<img src="static/img/right.svg" alt="right">
			</section>
			<section class="get_more">
				<span>我跑过的路线</span>
				<img src="static/img/right.svg" alt="right">
			</section>
		</section>
		<section>
			<section class="get_more">
				<span>购物车</span>
				<span>
					{{}}
					<img src="static/img/right.svg" alt="right">
				</span>
			</section>
			<section class="get_more">
				<span>购买记录</span>
				<span>
					{{}}
					<img src="static/img/right.svg" alt="right">
				</span>
			</section>
			<section class="get_more">
				<span>优惠券</span>
				<span>
					{{}}
					<img src="static/img/right.svg" alt="right">
				</span>
			</section>
		</section>
	</div>
</template>
<script>
	export default{
		name: 'mine',
		data(){
			return {

			}
		},
		created(){

		},
		mounted(){
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
			this.getDataList();
		},
		components: {

		},
		computed: {

		},
		methods: {
			getDataList() {
				let data = {

				}
				api.mineData(data)
					.then( res => {

					})
			}
		}
	}
</script>
<style lang="scss" scoped>
#mine {
	width: 96vw;
	margin: {
		bottom: 10vh;
		left: 2vw;
		right: 2vw;
	}
}
.header {
	display: flex;
	justify-content: space-between;
	height: 7vh;
	line-height: 7vh;
}
</style>