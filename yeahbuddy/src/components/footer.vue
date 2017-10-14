<template>
	<div class="pageTabbar">
		<!-- <mt-tabbar v-model="selected" fixed>
				<mt-tab-item id="秀">
					<section @click="goTo('/home/show')">
						<Icon type="ios-eye" size="28"></Icon><br/>秀
					</section>
				</mt-tab-item>
			<mt-tab-item id="约">
				<section @click="goTo('/home')">
					<Icon type="ios-people" size="28"></Icon><br/>约
				</section>
			</mt-tab-item>
			<mt-tab-item id="圈">
				<section @click="goTo('/home/circle')">
					<Icon type="ios-navigate" size="28"></Icon><br/>圈
				</section>
			</mt-tab-item>
			<mt-tab-item id="我">
				<section @click="goTo('/home/mine')">
				<Icon type="ios-person" size="28"></Icon><br/>我
			</section>
			</mt-tab-item>
		</mt-tabbar> -->
	</div>
</template>
<script>
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
