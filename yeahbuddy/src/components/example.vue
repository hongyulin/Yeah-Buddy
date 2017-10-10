<template>
	<div>
		<mt-search v-model="value"></mt-search>
	</div>
</template>
<script>
	export default{
		name:'example',
		data(){
			return {

			}
		},
		created(){

		},
		mounted(){

		},
		watch:{
		    value:{
		      handler:function(){
		        if(this.value != "") this.search();
		        if(this.value == "") this.cancle();
		      }
		    }
		  },
		components:{

		},
		computed: {

		},
		methods:{
			search(){
				let data = {
					content:this.value
				}
				api.partySearch(data)
				.then(res => {
					if (res.result.length == 0) {
						this.$toast({
							message: "无数据",
							position: 'middle',
							duration: 1000
						});
					} else {
						this.total = res.result[0].count;
						this.list = res.result;
					}
				}, res => {
					this.$toast({
						message: res.message,
						position: 'middle',
						duration: 1000
					});
				})
			},
			cancle(){
				this.list = [];//list是v-for中的list
				this.getList();
			},
		}
	}
</script>