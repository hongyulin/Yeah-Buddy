<!-- login界面包括登录按钮和背景动画 -->
<template>
	<div>
		<div class="videoWrap" v-show="pageVideoShow">
			<video src="http://p28s6jgcp.bkt.clouddn.com/openVideo.mp4" muted autoplay="autoplay" loop="loop" class="videoStyle"></video>
			<div class="videoBg">
				<div id="logo">
					<img src="static/img/logo.svg" alt="logo">
					<span>Yeah,Buddy</span>
				</div>
				<div id="login">
					<button @click="login">登录</button>
					<a @click='tourist'>先逛逛</a>
				</div>
			</div>
		</div>
		
		<div v-show="pageMobileShow" id="mobileWrap">
			<img src="static/img/logo.svg" alt="logo" class="pageMobileLogo">
			<span class="pageMobileSpan">Yeah,Buddy</span>
			<section class="idCode">
				<img src="static/img/mobile.svg" alt="mobileLogo">
				<span>+86&nbsp;&nbsp;|</span>
				<input placeholder="手机号" v-model="mobile"/>
			</section>
			<section class="idCode">
				<img src="static/img/mobile.svg" alt="mobileLogo">
				<input placeholder="验证码"  v-model="idCode"/>
				<button @click="getIdCodeFn" class="idButton">{{getIdCode}}</button>
			</section>
			<section id="loginButton">
				<button @click='checkIn'>登录</button>
				<span class="line">其它登录方式</span>
				<button @click='checkInByWechat'>
					<span class="checkIn">
						<img src="static/img/wechat.svg">
						&nbsp;&nbsp;微信快速登录
					</span>
				</button>
			</section>
		</div>
	</div>
</template>
<script>
	import api from '../../fetch/login'
	export default{
		name:'login',
		data(){
			return {
				mobile: '',
				idCode: '',
				getIdCode: '获取验证码',
				pageVideoShow: true,
				pageMobileShow: false,
				sendTime: '',
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
			getIdCodeFn(){
				this.sendTime = 60;
				this.getIdCode = `已发送${this.sendTime}秒`
				let timer = setInterval(() => {
					this.getIdCode = `已发送${this.sendTime--}秒`
					if(this.sendTime == -2){
						clearInterval(timer);
						this.getIdCode = '获取验证码'
					}
				},1000)
			},
			login(){
				this.pageVideoShow = false;
				this.pageMobileShow = true;
			},
			tourist(){
				this.$router.push('/home')
				localStorage.setItem("loginSuccess", false)
			},
			checkIn(){
				let data = {
					mobile: this.mobile,
					idCode: this.idCode
				}
				console.log(data)
				api.checkIn()
					.then(res => {
						console.log(res);
						if (res.string == 'success') {
							localStorage.setItem("loginSuccess", true)
							this.$router.push({
								path:'/getUserInfo'
							})
						}
					})
					/*.catch((error) => {
						let e =error.response.data.Message||error.response.data.message
						if( e.indexOf('mobile: value is empty') != -1){
		                	this.$toast({
			                    message:'请填写账号',
			                    position:'middle',
			                    duration:2000
			                });
		                } else if(e.indexOf('passWord: value is empty') != -1){
		                	this.$toast({
			                    message:'请输入密码',
			                    position:'middle',
			                    duration:2000
			                  })
		                }else if(e.indexOf('user is not exist') != -1){
			                this.$toast({
			                    message:'账号没有注册',
			                    position:'middle',
			                    duration:2000
			                })
		                }else if(e.indexOf('passWord is error') != -1){
		                  	this.$toast({
			                    message:'密码错误',
			                    position:'middle',
			                    duration:2000
			                })
		                }
					})*/
			},
			checkInByWechat(){
				api.checkInByWechat()
				.then(res => {
					alert("尚未开发")/*待开发lhy*/
				})
			}
		}
	}
</script>
<style lang="scss" scoped>
	$rgba: rgba(255,255,255,0.6);
	.videoStyle {
		height: 100vh;
		width: 100vw;
		object-fit: fill;
	}
	.common{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.videoWrap{
		position: fixed;
		left: 0;
		top: 0; 
		.videoBg{
		width:  100vw;
		height:  100vh;
		background-color:  rgba(0,0,0,0.6);
		@extend .videoWrap;
	}
	}
	#logo{
		@extend .common;
		height: 4rem;
		margin-bottom:  1.5rem;
		.logo{
			background-color: $rgba;
			border-radius: 10%;
			width: 0.75rem;
		}
		span{
			margin-top: 0.2rem;
			color: $rgba;
			font-size: 0.3rem;
		}
	}
	#login{
		@extend .common;
		button{
			height: 40px;
			color: $rgba;
			background-color: $rgba;
			width: 80%;
			display: block;
			font-size: 0.15rem;
		}
		a{
			color: white;
			font-size: 0.15rem;
			margin-top: 0.1rem;
		}
	}
	#mobileWrap{
		@extend .common;
		background-color: rgba(0,0,0,0.1);
		width: 100vw;
		height: 100vh;
		padding: {
			left: .1rem;
			right: .1rem;
		};
		.idCode {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			width: 95vw;
			height: .4rem;
			background-color: white;
			margin: 10px;
			span {
				line-height: 0.4rem;
				margin-right: 10px;
			}
			.idButton{
				background-color: white;
				border-color: #F90;
				color: #F90;
				width: 3rem;
			}
		}
		.line{//中间的“其它登录方式”
			display: block;
			text-align: center;
			line-height: 1px;
			font-size: 0.1rem;
			border: {
				left: solid 1.3rem #808080;
				right: solid 1.3rem #808080;
			}
			margin: 30px 0
		}
		.pageMobileLogo{
			//margin-top: 15vh;
			background-color: #F90;
			border-radius: 10%;
			width: 0.75rem;
		}
		.pageMobileSpan{
			color: #F90;
			margin: {
				top: 0.2rem;
				bottom: .4rem;
			}
			font-size: 0.2rem;
		}
		#loginButton{
			@extend .common;
			margin-top: 1.5rem;
			button {
				border-radius: 10px;
				color: white;
				font-size: 20px;
				width: 80vw;
				height: 50px;
				background-color: #F90;
			}
			button:nth-child(3){
				background-color: #0f0;
			}
			.checkIn{
				display: flex;
				justify-content: center;
				align-items: center;
				color: white;
				font-size: 18px;
			}
			
		}

	}

	
</style>