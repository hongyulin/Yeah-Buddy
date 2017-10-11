<template>
	<div class="pageTabbar">
		<div class="pageWrap">
		<mt-tab-container class="page-tabbar-container" v-model="selected">
			<mt-tab-container-item id="秀">

			</mt-tab-container-item>
			<mt-tab-container-item id="约">

			</mt-tab-container-item>
			<mt-tab-container-item id="圈">

			</mt-tab-container-item>
			<mt-tab-container-item id="我">
				<div class="page-part">

				</div>
				<router-link to="/">
					<mt-button type="danger" size="large">退出</mt-button>
				</router-link>
			</mt-tab-container-item>
		</mt-tab-container>
		</div>
		<mt-tabbar v-model="selected" fixed>
			<mt-tab-item id="秀">
				<img slot="icon" src="../../static/img/icon.svg">
			秀
			</mt-tab-item>
			<mt-tab-item id="约">
				<Icon type="ios-people"></Icon><!-- date -->
				<Icon type="ios-people-outline"></Icon>
			约
			</mt-tab-item>
			<mt-tab-item id="圈">
				<Icon type="ios-navigate"></Icon><!-- circle -->
				<Icon type="ios-navigate-outline"></Icon>
			圈
			</mt-tab-item>
			<mt-tab-item id="我">
				<Icon type="ios-person"></Icon><!-- mine -->
				<Icon type="ios-person-outline"></Icon>
			我
			</mt-tab-item>
		</mt-tabbar>
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
		components:{

		},
		computed: {

		},
		methods:{

		}
	}
</script>
<style>
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
