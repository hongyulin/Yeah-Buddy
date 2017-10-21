<template>
	<div class="pageTabbar">
		<section @click="goTo('/home/show')">
			<img v-show="$route.path.indexOf('show') !== -1" src="static/img/show.svg" alt="show">
			<img v-show="$route.path.indexOf('show') == -1" src="static/img/show_.svg" alt="show">
			<span :class="$route.path.indexOf('show') !== -1 ? 'setColor' : ''">秀</span>
		</section>
		<section @click="goTo('/home/date')">
			<img v-show="$route.path.indexOf('date') !== -1" src="static/img/date.svg" alt="date">
			<img v-show="$route.path.indexOf('date') == -1" src="static/img/date_.svg" alt="date">
			<span :class="$route.path.indexOf('date') !== -1 ? 'setColor' : ''">约</span>
		</section>
		<section @click="goTo('/home/circle')">
			<img v-show="$route.path.indexOf('circle') !== -1" src="static/img/circle.svg" alt="circle">
			<img v-show="$route.path.indexOf('circle') == -1" src="static/img/circle_.svg" alt="circle">
			<span :class="$route.path.indexOf('circle') !== -1 ? 'setColor' : ''">圈</span>
		</section>
		<section @click="goTo('/home/mine')">
			<img v-show="$route.path.indexOf('mine') !== -1" src="static/img/mine.svg" alt="mine">
			<img v-show="$route.path.indexOf('mine') == -1" src="static/img/mine_.svg" alt="mine">
			<span :class="$route.path.indexOf('mine') !== -1 ? 'setColor' : ''">我</span>
		</section>
	</div>
</template>
<script>
	export default{
		name: 'myFooter',
		data(){
			return {
				showSelected: false,
				dateSelected: false,
				circleSelected: false,
				mineSelected: false,
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
			goTo(path){
				this.$router.push(path)
			}
		}
	}
</script>
<style lang="scss" scoped>
.pageTabbar {
	position: fixed;
	bottom: 0;
	/* height: 40px; */
	display: flex;
	display: -webkit-flex;
	flex-direction: row;
	justify-content: space-around;
    width: 100vw;
	padding-top: .1rem;
	background-color: rgba(50,50,50,0.1);
	section {
		text-align: center;
		span {
			font-size: .14rem;
			display: block;
		}
		
	}
}
.setColor {
	color: #00fa9a;
}

.pageWrap {
	overflow: auto;
	height: 100%;
	padding-bottom: 100px;
}
</style>
