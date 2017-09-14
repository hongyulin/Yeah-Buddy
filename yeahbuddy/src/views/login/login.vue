<template>
	<div>
		<div class="videoWrap">
			<video src="../../../static/openVideo.mp4" muted autoplay="autoplay" loop="loop"></video>
			<div class="videoBg">
				<div>
					<img src="../../../static/img/logo.svg" alt="logo">
					<span>Yeah,Buddy</span>
				</div>
				<Button>登录</Button>
				<a>先逛逛</a>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'login',
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
		mathods:{

		}
	}
</script>
<style>
	.videoWrap{
		width: 100%;
		height: 100%;
	}
	.videoBg{
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.6);
	}
</style>