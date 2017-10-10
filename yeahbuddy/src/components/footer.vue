<template>
	<mt-tabbar :selected.sync="selected">
		<mt-tab-item id="秀">
			<img slot="icon" src="../../static/img/icon.svg">
		秀
		</mt-tab-item>
		<mt-tab-item id="约">
			<img slot="icon" src="../../static/img/icon.svg">
		约
		</mt-tab-item>
		<mt-tab-item id="圈">
			<img slot="icon" src="../../static/img/icon.svg">
		圈
		</mt-tab-item>
		<mt-tab-item id="我">
			<img slot="icon" src="../../static/img/icon.svg">
		我
		</mt-tab-item>
	</mt-tabbar>
	<!-- <footer>
		<section>
			<Icon type="ios-eye"></Icon>
			<Icon type="ios-eye-outline"></Icon>
			<span>秀</span>
		</section>
		<section>
			<Icon type="ios-people"></Icon>
			<Icon type="ios-people-outline"></Icon>
			<span>约</span>
		</section>
		<section>
			<Icon type="ios-navigate"></Icon>
			<Icon type="ios-navigate-outline"></Icon>
			<span>圈</span>
		</section>
		<section>
			<Icon type="ios-person"></Icon>
			<Icon type="ios-person-outline"></Icon>
			<span>我</span>
		</section> 
	</footer>-->
</template>
<script>
	export default{
		name: 'myFooter',
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