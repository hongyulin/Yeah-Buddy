<template>
	<div>
		<div class="videoWrap" >
			<video src="../../../static/openVideo.mp4" muted autoplay="autoplay" loop="loop" :style="videoStyle"></video>
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
				videoStyle:{
					height:document.documentElement.clientHeight+'px',
					width:document.documentElement.clientWidth+'px',
					objectFit: "fill"
				}			
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
<style lang="scss" scoped>
	.videoWrap{
		width: 100%;
		height: 100%;
		position:absolute;
		left:0;
		top:0;
		.videoBg{
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.9);
		position:absolute;
		left:0;
		top:0;
	}
	}
	
</style>