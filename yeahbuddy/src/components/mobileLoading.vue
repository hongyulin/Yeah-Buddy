<template>
	<div>
		<div v-show="isLoading">
			<div class="spin">
				<span class="spinCircle"></span>
				<span class="spinImg"></span>
			</div>
			<span>{{loadingText}}</span>
		</div>
	</div>
</template>
<script>
	export default{
		name:"mobileLoading",
		data(){
			return{

			}
		},
		computed:{

		}
	}
</script>