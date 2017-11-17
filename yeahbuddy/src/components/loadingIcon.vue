<template>
	<div>
		<div v-show="isLoading">
			<div class="spin">
				<span class="spin_circle"></span>
				<span class="spin_img"></span>
			</div>
			<span>{{loadingText}}</span>
		</div>
	</div>
</template>
<script>
	export default{
		name: "mobileLoading",
		data(){
			return{
				isLoading:false,
			}
		},
		computed:{

		}
	}
</script>