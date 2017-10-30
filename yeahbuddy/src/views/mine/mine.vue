<template>
	<!-- keep里面的我的很好， -->
	<div id="mine">
		<header>
			<span>我</span>
			<!-- 信息头部加上红色的数字 -->
			<img src="static/img/notice.svg" alt="信息">
			<img src="static/img/set.svg" alt="设置">
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
				<gifure>
					<!-- 放字体图标 -->
					<img src="static/img/.svg" alt="总等级">
					<figcaption>总等级</figcaption>
				</gifure>
				<gifure>
					<img src="static/img/.svg" alt="健身">
					<figcaption>健身</figcaption>
				</gifure>
				<gifure>
					<img src="static/img/.svg" alt="跑步">
					<figcaption>跑步</figcaption>
				</gifure>
				<gifure>
					<img src="static/img/.svg" alt="骑行">
					<figcaption>骑行</figcaption>
				</gifure>
			</section>
			<section class="getMore">
				<span>我的健康数据</span>
				<img src="static/img/right.svg" alt="right">
			</section>
			<section class="nav">
				<gifure>
					<img src="static/img/history.svg" alt="运动历史">
					<figcaption>运动历史</figcaption>
				</gifure>
				<gifure>
					<img src="static/img/data.svg" alt="身体数据">
					<figcaption>身体数据</figcaption>
				</gifure>
				<gifure>
					<img src="static/img/ability.svg" alt="运动能力">
					<figcaption>运动能力</figcaption>
				</gifure>
			</section>
			<section class="getMore">
				<span>徽章</span>
				<span>
					{{}}
					<img src="static/img/right.svg" alt="right">
				</span>
			</section>
		</section>
		<section>
			<section class="getMore">
				<span>运动日记</span>
				<img src="static/img/right.svg" alt="right">
			</section>
			<section class="getMore">
				<span>运动概况</span>
				<img src="static/img/right.svg" alt="right">
			</section>
			<section class="getMore">
				<span>每周目标</span>
				<img src="static/img/right.svg" alt="right">
			</section>
			<section class="getMore">
				<span>链接应用与设备</span>
				<img src="static/img/right.svg" alt="right">
			</section>
		</section>
		<section>
			<section class="getMore">
				<span>我的活动</span>
				<img src="static/img/right.svg" alt="right">
			</section>
			<section class="getMore">
				<span>我的收藏</span>
				<img src="static/img/right.svg" alt="right">
			</section>
			<section class="getMore">
				<span>我跑过的路线</span>
				<img src="static/img/right.svg" alt="right">
			</section>
		</section>
		<section>
			<section class="getMore">
				<span>购物车</span>
				<span>
					{{}}
					<img src="static/img/right.svg" alt="right">
				</span>
			</section>
			<section class="getMore">
				<span>购买记录</span>
				<span>
					{{}}
					<img src="static/img/right.svg" alt="right">
				</span>
			</section>
			<section class="getMore">
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

		},
		components: {

		},
		computed: {

		},
		methods: {

		}
	}
</script>
<style lang="scss" scoped>
#mine {
	margin:{
		bottom: 10vh;
	}
}
</style>