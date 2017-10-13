<template>
	<div class="pageTabbar">
		<!-- <div class="pageWrap">
			<mt-tab-container class="page-tabbar-container" v-model="selected">
				<mt-tab-container-item id="秀">
					<show></show>
				</mt-tab-container-item>
				<mt-tab-container-item id="约">
					<date></date>
				</mt-tab-container-item>
				<mt-tab-container-item id="圈">
					<circ></circ>
				</mt-tab-container-item>
				<mt-tab-container-item id="我">
					<mine></mine>
				</mt-tab-container-item>
			</mt-tab-container>
		</div> -->
		<mt-tabbar v-model="selected" fixed>
			<mt-tab-item id="秀">
				<Icon type="ios-eye" size="28"></Icon><br/>
			秀
			</mt-tab-item>
			<mt-tab-item id="约">
				<Icon type="ios-people" size="28"></Icon><br/>
				<!-- <Icon type="ios-people-outline"></Icon> -->
			约
			</mt-tab-item>
			<mt-tab-item id="圈">
				<Icon type="ios-navigate" size="28"></Icon><br/>
				<!-- <Icon type="ios-navigate-outline"></Icon> -->
			圈
			</mt-tab-item>
			<mt-tab-item id="我">
				<Icon type="ios-person" size="28"></Icon><br/>
				<!-- <Icon type="ios-person-outline"></Icon> -->
			我
			</mt-tab-item>
		</mt-tabbar>
	</div>
</template>
<script>
	import date from "../views/date/date"
	// import circle from "../views/circle/circle"//不要和html标签重名
	import circ from "../views/circle/circle"
	import mine from "../views/mine/mine"
	import show from "../views/show/show"
	export default{
		name: 'myFooter',
		data(){
			return {
				selected: "约",
			}
		},
		created(){

		},
		mounted(){

		},
		components: {
			date, show, circ, mine
		},
		computed: {

		},
		methods: {
			// clicks(){
			// 	console.log("45")
			// 	this.$router.push("/home/mine")
			// }
		}
	}
</script>
<style>
/* 更改mt中tabar组件默认属性 */
.mint-tabbar > .mint-tab-item.is-selected {
    background-color: transparent;
}
a {
	color: inherit;
}
.pageTabbar {
    overflow: hidden;
    height: 100vh;
}
.pageWrap {
	overflow: auto;
	height: 100%;
	padding-bottom: 100px;
}
</style>
