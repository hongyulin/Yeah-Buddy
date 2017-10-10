<template>
	<header>
		<slot name="title"></slot>
		<Icon type="chevron-left"></Icon>
		<Icon type="ios-search"></Icon>
		<Icon type="ios-person"></Icon><!-- mine -->
		<Icon type="ios-person-outline"></Icon>
		<Icon type="ios-people"></Icon><!-- date -->
		<Icon type="ios-people-outline"></Icon>
		<Icon type="ios-navigate"></Icon><!-- circle -->
		<Icon type="ios-navigate-outline"></Icon>
		<Icon type="ios-eye"></Icon><!-- show -->
		<Icon type="ios-eye-outline"></Icon>
	</header>
</template>
<script>
	export default{
		name: 'myHeader',
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