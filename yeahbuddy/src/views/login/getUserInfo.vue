<template>
	<div>
		<section id="nickName" v-show="nickNameShow">
			<mt-header fixed style="background-color:white;">
		     	<router-link to="/" slot="left">
				    <Icon type="chevron-left" color="red" size="25"></Icon>
				 </router-link>
		    </mt-header>
		    <div class="infoBody">
				<h1>上传头像</h1>
				<div class="avatarGroup">
					<Upload
				        ref="upload"
				        :show-upload-list="false"
				        :default-file-list="defaultList"
				        :on-success="handleSuccess"
				        :format="['jpg','jpeg','png']"
				        :max-size="2048"
				        :on-format-error="handleFormatError"
				        :on-exceeded-size="handleMaxSize"
				        :before-upload="handleBeforeUpload"
				        action="header/posts"
				        style="display: inline-block;width:58px;">
				        <div style="width: 58px;height:58px;line-height: 58px;">
				            <Icon type="camera" size="25"></Icon>
				        </div>
				    </Upload>
					<Avatar src="info.header">头像</Avatar>
				</div>
				<div class="nickname">
					<h3>昵称</h3>
					<input v-model="info.nickName"></input>
				</div>
				<span>昵称请控制在4-30个字符，支持中文、数字、横线和减号</span>
				<Button type="ghost" shape="circle" @click="register" class="button">注册</Button>
			</div>
		</section>
		<!-- 如下内容可以把数据抽出来，用一个v-for加show来列表渲染lhy -->
		<section id="sex" v-show="sexShow">
			<h2>欢迎你的加入</h2>
			<p>hi{{"nickname"}},欢迎加入。为了帮助你量身制定训练计划，请花一分钟时间，帮助我们了解你。</p>
			<h4>你的性别是？</h4>
			<Button type="ghost" shape="circle" @click="goNext(sexShow,male)" class="button">男</Button>
			<Button type="ghost" shape="circle" @click="goNext(sexShow,female)" class="button">女</Button>
		</section>
		<section id="level" v-show="levelShow">
			<mt-header fixed style="background-color:white;">
				<span @click="goBack("levelShow")" slot="left">
				    <Icon type="chevron-left" color="red" size="25"></Icon>
				</span>
		    </mt-header>
			<h2>你的健身基础？</h2>
			<Button type="ghost" shape="circle" @click="storageLevel(beginner)" class="button">入门
				<span>很久没有运动，需要通过适应性训练打好基础</span>
			</Button>
			<Button type="ghost" shape="circle" @click="storageLevel(beginner)" class="button">初级\
				<span>偶尔运动，可以正式开始训练</span>
			</Button>
			<Button type="ghost" shape="circle" @click="storageLevel(beginner)" class="button">中级
				<span>体能不错，希望进行稍有强度的训练</span>
			</Button type="ghost" shape="circle" @click="storageLevel(beginner)" class="button">
			<Button>高级
				<span>训练规律，经验丰富，能进行高强度的许梿</span>
			</Button>
		</section>
		<section id="BFP" v-show="BFPShow">
			<mt-header fixed style="background-color:white;">
				<span @click="goBack("BFPShow")" slot="left">
				    <Icon type="chevron-left" color="red" size="25"></Icon>
				</span>
		    </mt-header>
			<h2>你觉得自己的身材如何？</h2>
			<Button type="ghost" shape="circle" @click="" class="button">有点胖</Button>
			<Button type="ghost" shape="circle" @click="" class="button">有点瘦</Button>
			<Button type="ghost" shape="circle" @click="" class="button">身材标准</Button>
		</section>
		<section id="target" v-show="targetShow">
			<mt-header fixed style="background-color:white;">
				<span @click="goBack("targetShow")" slot="left">
				    <Icon type="chevron-left" color="red" size="25"></Icon>
				</span>
		    </mt-header>
			<h2>你的健身目标是？</h2>
			<Button type="ghost" shape="circle" @click="" class="button">全身强壮</Button>
			<Button type="ghost" shape="circle" @click="" class="button">加强局部肌肉</Button>
		</section>
		<section id="limbs" v-show="limbsShow">
			<mt-header fixed style="background-color:white;">
				<span @click="goBack("limbsShow")" slot="left">
				    <Icon type="chevron-left" color="red" size="25"></Icon>
				</span>
		    </mt-header>
			<h2>最想训练哪一个部位？</h2>
			<Button type="ghost" shape="circle" @click="" class="button">胸</Button>
			<Button type="ghost" shape="circle" @click="" class="button">肩背</Button>
			<Button type="ghost" shape="circle" @click="" class="button">腰腹</Button>
			<Button type="ghost" shape="circle" @click="" class="button">手臂</Button>
			<Button type="ghost" shape="circle" @click="" class="button">臀腿</Button>
		</section>
		<section id="ageWeiHei" v-show="AWHShow">
			<mt-header fixed style="background-color:white;">
				<span @click="goBack("AWHShow")" slot="left">
				    <Icon type="chevron-left" color="red" size="25"></Icon>
				</span>
		    </mt-header>
			<h2>补充信息</h2>
			<mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
			<TimePicker :value="value1" format="HH点mm分ss秒" placeholder="选择时间" style="width: 168px"></TimePicker>
			<label for="">生日</label>
			<label for="">身高</label>
			<label for="">体重</label>
			<Button>完成</Button>
		</section>
	</div>
</template>
<script>
	import api from '../../fetch/api'
	export default{
		name:'getUserInfo',
		data(){
			return {
				nickNameShow:true,
				sexShow:false,
				levelShow:false,
				BFPShow:false,
				targetShow:false,
				limbsShow:false,
				AWHShow:false,
				showList:['nickNameShow','sexShow','levelShow','BFPShow','targetShow','limbsShow','AWHShow']
				info:{
					header:'../../static/img/logo.svg',
					nickName:'',
					sex:'',
					level:'',
					BFP:'',
					target:'',
					limbs:'',
					age:'',
					height:'',
					weight:'',
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
			goBack(sec){
				this.sec = false;
				this.showList[showList.indexOf(sec)-1] = true;
			},
			handleSuccess(){

			},
			handleFormatError(){

			},
			handleMaxSize(){

			},
			handleBeforeUpload(){

			},
			goNext(sec,val){
				infoEsc = sec.split("Show");
				this.info.infoEsc = val;
				this.sec = false;
				this.showList[showList.indexOf(sec)+1] = true;
			},
			register(){
				let data = {
					nickName:this.info.nickName,
					header:this.indo.header
				}
				api.register(data)
				.then(res => {
					this.$toast({
						message:res,
						pisition:'middle',
						duration:1000
					})
					//this.$router.push()
					this.nickNameShow = false;
					this.sexShow = true;
				}, res => {
					this.$toast({
						message:'注册失败',
						pisition:'middle',
						duration:1000
					})
				})
			},

		}
	}
</script>
<style  lang="scss" scoped>
 .button {
 	border:1px solid red;
 }

 .infoBody {
 	display: flex;
 	flex-direction:column;
 	padding: 0.3rem 0.3rem;
 	.avatarGroup {
 		display:flex;
		flex-direction: row;
		margin:0.2rem 0;
		align-items:center;
	}
	button{
		color:red;
		margin-top:0.6rem;
	}
	.nickname {
		@extend .avatarGroup;
		 input{
		 	border:0px solid white;
		 	border-bottom:1px solid #ccc;
		 	margin-left:0.1rem;
		 	outline:none;
		 	&:focus {
		 		border:1px solid white;
		 		border-bottom:1px solid #ccc;
		 	}
		 }
	}
 }
 
</style>