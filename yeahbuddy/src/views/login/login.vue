<!-- login界面包括登录按钮和背景动画 -->
<template>
	<div>
		<div class="videoWrap" v-show="pageVideoShow">
			<video src="../../../static/openVideo.mp4" muted autoplay="autoplay" loop="loop" :style="videoStyle"></video>
			<div class="videoBg">
				<div id="logo">
					<img src="../../../static/img/logo.svg" alt="logo">
					<span>Yeah,Buddy</span>
				</div>
				<div id="login">
					<Button @click.native="login">登录</Button>
					<a>先逛逛</a>
				</div>
			</div>
		</div>
		<div v-show="pageMobileShow" id="mobileWrap">
			<img src="../../../static/img/logo.svg" alt="logo" class="pageMobileLogo">
			<span class="pageMobileSpan">Yeah,Buddy</span>
			<!-- 输入框内容背景色改为白色，body背景色换个颜色，未完成lhy -->
			<Input placeholder="+86      手机号" size="large" class="mobile" v-model="mobile">
				<Icon type="iphone" slot="prepend" size="20" color="#F90"></Icon>
			</Input>
			<section id="idCode">
				<Input placeholder="验证码" size="large" class="idCode" v-model="idCode">
					<Icon type="iphone" slot="prepend" size="20" color="#F90"></Icon>
				</Input>
				<Button class="idButton" @click.native="getIdCodeFn">{{getIdCode}}</Button>
			</section>
			<section id="loginButton">
				<Button long type="warning" @click.native='checkIn'>登录</Button>
				<span class="line">其它登录方式</span>
				<Button long type="success" @click.native='checkInByWechat'><span class="checkIn"><img src="../../../static/img/wechat.svg">微信快速登录</span></Button>
			</section>
		</div>
	</div>
</template>
<script>
	import api from '../../fetch/api'
	export default{
		name:'login',
		data(){
			return {
				videoStyle:{
					height:document.documentElement.clientHeight,
					width:document.documentElement.clientWidth,
					objectFit: "fill"
				},
				mobile:'',
				idCode:'',
				getIdCode:'获取验证码',
				pageVideoShow:false,
				pageMobileShow:true,
				sendTime:'',
			}
		},
		created(){

		},
		mounted(){
			window.onresize = () => {
				this.videoStyle.height = `${document.documentElement.clientHeight}px`;
				this.videoStyle.width = `${document.documentElement.clientWidth}px`;
			}
		},
		components:{

		},
		computed: {

		},
		methods:{
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
			checkIn(){
				let data = {
					mobile:this.mobile,
					idCode:this.idCode
				}
				api.checkIn(data)
					.then(res => {
						if (res.string == 'success') {
							localStorage.setItem("loginSuccess",true)
							this.$router.push({
								path:''//登录进去页面的路径lhy
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
	$rgba:rgba(255,255,255,0.6);
	.common{
		display:flex;
		flex-direction:column;
		justify-content:center;
		align-items:center;
	}
	.videoWrap{
		position:absolute;
		left:0;
		top:0; 
		.videoBg{
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.6);
		@extend .videoWrap;
	}
	}
	#logo{
		@extend .common;
		height:4rem;
		margin-bottom: 1.5rem;
		.logo{
			background-color:$rgba;
			border-radius:10%;
			width:0.75rem;
		}
		span{
			margin-top:0.2rem;
			color:$rgba;
			font-size:0.3rem;
		}
	}
	#login{
		@extend .common;
		button{
			color:$rgba;
			background-color:$rgba;
			width:80%;
			display:block;
			font-size:0.15rem;
		}
		a{
			color:white;
			font-size:0.15rem;
			margin-top:0.1rem;
		}
	}
	#mobileWrap{
		@extend .common;
		padding: 0.1rem;
		width:3.7rem;
		height:100%;
		.mobile{
			width:100%;
			margin: 0.1rem;
		}
		
		#idCode{
			width:60%;
			align-self:flex-start;
			display:flex;
			flex-direction:row;
			.idCode{
				margin-right:0.2rem;
			}
			.idButton{
				background-color:white;
				border-color:#F90;
				color:#F90;
				width:3rem;
			}
		}
		.line{//中间的“其它登录方式”
			display:block;
			text-align:center;
			line-height:1px;
			border:{
				left:solid 1.3rem #ddd;
				right:solid 1.3rem #ddd;
			}
			margin:30px 0
		}
		.pageMobileLogo{
			background-color:#F90;
			border-radius:10%;
			width:0.75rem;
		}
		.pageMobileSpan{
			color:#F90;
			margin-top:0.2rem;
			font-size:0.2rem;
		}
		#loginButton{
			margin-top:1.5rem;
			.checkIn{
				display:flex;
				justify-content:center;
				align-items:center;
			}
			img{
				margin:{
					right:0.3rem;
				}
				
			} 
		}

	}

	
</style>