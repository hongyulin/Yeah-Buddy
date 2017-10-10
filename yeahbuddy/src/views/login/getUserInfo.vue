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
					<Avatar :src="info.header">头像</Avatar>
				</div>
				<div class="nickname">
					<h3>昵称</h3>
					<input v-model="info.nickName"></input>
				</div>
				<span>昵称请控制在4-30个字符，支持中文、数字、横线和减号</span>
				<Button type="ghost" shape="circle" @click="toRegister" class="button">注册</Button>
			</div>
		</section>
		<!-- 如下内容可以把数据抽出来，用一个v-for加show来列表渲染lhy -->
		<section id="sex" v-show="sexShow">
			<div class="infoBody">
				<h2>欢迎你的加入</h2>
				<p>hi{{"nickname"}},欢迎加入。为了帮助你量身制定训练计划，请花一分钟时间，帮助我们了解你。</p>
				<h4>你的性别是？</h4>
				<Button type="ghost" shape="circle" @click="goNext('sexShow','male')" class="button">男</Button>
				<Button type="ghost" shape="circle" @click="goNext('sexShow','female')" class="button">女</Button>
			</div>
		</section>
		<section id="level" v-show="levelShow">
			<mt-header fixed style="background-color:white;">
				<span @click="goBack('levelShow')" slot="left">
				    <Icon type="chevron-left" color="red" size="25"></Icon>
				</span>
		    </mt-header>
		    <div class="infoBody">
				<h2>你的健身基础？</h2>
				<Button type="ghost" shape="circle" @click="goNext('levelShow','beginner')" class="button">入门
					<span>很久没有运动，需要通过适应性训练打好基础</span>
				</Button>
				<Button type="ghost" shape="circle" @click="goNext('levelShow','primary')" class="button">初级\
					<span>偶尔运动，可以正式开始训练</span>
				</Button>
				<Button type="ghost" shape="circle" @click="goNext('levelShow','medium')" class="button">中级
					<span>体能不错，希望进行稍有强度的训练</span>
				</Button>
				<Button type="ghost" shape="circle" @click="goNext('levelShow','senior')" class="button">高级
					<span>训练规律，经验丰富，能进行高强度的许梿</span>
				</Button>
			</div>
		</section>
		<section id="BFP" v-show="BFPShow">
			<mt-header fixed style="background-color:white;">
				<span @click="goBack('BFPShow')" slot="left">
				    <Icon type="chevron-left" color="red" size="25"></Icon>
				</span>
		    </mt-header>
		    <div class="infoBody">
				<h2>你觉得自己的身材如何？</h2>
				<Button type="ghost" shape="circle" @click="goNext('BFPShow','fat')" class="button">有点胖</Button>
				<Button type="ghost" shape="circle" @click="goNext('BFPShow','thin')" class="button">有点瘦</Button>
				<Button type="ghost" shape="circle" @click="goNext('BFPShow','standar')" class="button">身材标准</Button>
			</div>
		</section>
		<section id="target" v-show="targetShow">
			<mt-header fixed style="background-color:white;">
				<span @click="goBack('targetShow')" slot="left">
				    <Icon type="chevron-left" color="red" size="25"></Icon>
				</span>
		    </mt-header>
		    <div class="infoBody">
				<h2>你的健身目标是？</h2>
				<Button type="ghost" shape="circle" @click="goNext('targetShow','all')" class="button">全身强壮</Button>
				<Button type="ghost" shape="circle" @click="goNext('targetShow','part')" class="button">加强局部肌肉</Button>
			</div>
		</section>
		<section id="limbs" v-show="limbsShow">
			<mt-header fixed style="background-color:white;">
				<span @click="goBack('limbsShow')" slot="left">
				    <Icon type="chevron-left" color="red" size="25"></Icon>
				</span>
		    </mt-header>
		    <div class="infoBody">
				<h2>最想训练哪一个部位？</h2>
				<Button type="ghost" shape="circle" @click="goNext('limbsShow','chest')" class="button">胸</Button>
				<Button type="ghost" shape="circle" @click="goNext('limbsShow','backSide')" class="button">肩背</Button>
				<Button type="ghost" shape="circle" @click="goNext('limbsShow','abdominal ')" class="button">腰腹</Button>
				<Button type="ghost" shape="circle" @click="goNext('limbsShow','arm')" class="button">手臂</Button>
				<Button type="ghost" shape="circle" @click="goNext('limbsShow','leg')" class="button">臀腿</Button>
			</div>
		</section>
		<section id="ageWeiHei" v-show="AWHShow">
			<mt-header fixed style="background-color:white;">
				<span @click="goBack('AWHShow')" slot="left">
				    <Icon type="chevron-left" color="red" size="25"></Icon>
				</span>
		    </mt-header>
			<div class="infoBody">
				<h2>补充信息</h2>
				<label>生日
					<Input @on-focus="ageShow = true" @on-blur="ageShow = false;" v-model="info.age"></Input> 
					<mt-picker
					:slots = "yearSlot" 
					@change = "onYearChange" 
					:visible-item-count = "5"
					v-show = "ageShow"
					>					
					</mt-picker>
				</label>
				<label>身高
					<Input @on-focus="heightShow = true" @on-blur="heightShow = false;" v-model="info.height"></Input>
					<mt-picker
					:slots = "heightSlot" 
					@change = "onHeightChange" 
					:visible-item-count = "5"
					v-show = "heightShow"
					>					
					</mt-picker>
				</label>
				<label>体重
					<Input @on-focus="weightShow = true" @on-blur="weightShow = false;" v-model="info.weight"></Input>
					<mt-picker
					:slots = "weightSlot" 
					@change = "onWeightChange" 
					:visible-item-count = "5"
					v-show = "weightShow"
					>					
					</mt-picker>
				</label>
				<Button @click="goNext('AWHShow')" long>完成</Button>
			</div>
		</section>
	</div>
</template>
<script>
	import api from '../../fetch/api'
	export default{
		name:'getUserInfo',
		data(){
			return {
				nickNameShow: true,
				sexShow: false,
				levelShow: false,
				BFPShow: false,
				targetShow: false,
				limbsShow: false,
				AWHShow: false,
				ageShow: false,
				heightShow: false,
				weightShow: false,
				yearSlot: [{
		            flex: 1,
		            values: [],
		            className: 'yearSlot1',
		            textAlign: 'left'
		          }, {
		          	flex: 1,
		            divider: true,
		            content: '年',
		            className: 'yearSlot2',
		            textAlign: 'left'
		          }, {
		            flex: 1,
		            values: [],
		            className: 'yearSlot3',
		            textAlign: 'left'
		          },{
		          	flex: 1,
					divider: true,
					content: "月",
					className: "yearSlot4",
					textAlign: 'left'
				}],
				weightSlot: [{
		            flex: 1,
		            values: [],
		            className: 'weightSlot1',
		            textAlign: 'left'
		        }, {
		          	flex: 1,
		            divider: true,
		            content: 'kg',
		            className: 'weightSlot2',
		            textAlign: 'left'
		        }],
				heightSlot: [{
		            flex: 1,
		            values: [],
		            className: 'heigthSlot1',
		            textAlign: 'left'
		          }, {
		          	flex: 1,
		            divider: true,
		            content: 'cm',
		            className: 'heigthSlot2',
		            textAlign: 'left'
		        }],
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
		methods:{
			goBack(sec){
				switch (sec){
					case "AWHShow":
						this.AWHShow = false;
						this.limbsShow = true;
						break;
					case "limbsShow":
						this.limbsShow = false;
						this.targetShow = true;
						break;
					case "targetShow":
						this.targetShow = false;
						this.BFPShow = true;
						break;
					case "BFPShow":
						this.BFPShow = false;
						this.levelShow = true;
						break;
					case "levelShow":
						this.levelShow = false;
						this.sexShow = true;
						break;
					case "sexShow":
						this.sexShow = false;
						this.nickNameShow = true;
						break;
				}
			},
			handleSuccess(){

			},
			handleFormatError(){

			},
			handleMaxSize(){

			},
			handleBeforeUpload(){

			},
			handleChange(){

			},
			onYearChange(picker, values){
				this.info.age = values[0]+"年"+ values[1]+"月";
			},
			onHeightChange(picker, values){
				this.info.height = values[0]+"cm";
			},
			onWeightChange(picker, values){
				this.info.weight = values[0]+"kg";
			},
			goNext(sec,val){
				switch (sec){
					case "sexShow":
						this.sexShow = false;
						this.levelShow = true;
						this.info.sex = val;
						break;
					case "levelShow":
						this.levelShow = false;
						this.BFPShow = true;
						this.info.level = val;
						break;
					case "BFPShow":
						this.BFPShow = false;
						this.targetShow = true;
						this.info.BFP = val;
						break;
					case "targetShow":
						this.targetShow = false;
						this.limbsShow = true;
						this.info.target = val;
						break;
					case "limbsShow":
						this.limbsShow = false;
						this.AWHShow = true;
						this.info.limbs = val;
						this.insertList()
						break;
					case "AWHShow":
						localStorage.info = JSON.stringify(this.info);
						this.$router.push('/home');
						break;
				}
			},
			insertList(){//给年龄选项和身高体重动态插入数值。
				let arrYear = this.yearSlot[0].values;
				let arrMonth = this.yearSlot[2].values;
				let arrHeight = this.heightSlot[0].values;
				let arrWeight = this.weightSlot[0].values;
				for(let i=1950; i< new Date().getFullYear(); i++){
					arrYear.push(i);
				};
				for(let i=1; i<= 12; i++){
					arrMonth.push(i);
				};
				for(let i=70; i<= 220; i++){
					arrHeight.push(i);
				};
				for(let i=50; i<= 150; i++){
					arrWeight.push(i);
				};
				/*插入数组时候，设置的defalutIndex失效，需要动态插入*/
				this.yearSlot[0].defaultIndex = 45
				this.heightSlot[0].defaultIndex = 100
				this.weightSlot[0].defaultIndex = 20
			},
			toRegister(){
				let data = {
					nickName:this.info.nickName,
					header:this.info.header
				};
				api.register(data)
				.then(res => {
					this.$toast({
						message:res.string,
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