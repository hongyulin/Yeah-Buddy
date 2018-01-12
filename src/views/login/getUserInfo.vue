<template>
	<div>
		<tips :message="message" :tips="showTips"></tips>
		<section id="nickName" v-show="nickNameShow">
			<div class="header">
				<router-link to="/" slot="left">
					<img :src="headerImg" alt="goBack">
				</router-link>
			</div>
			
			<div class="infoBody">
				<h1>上传头像</h1>
				<div class="avatarGroup">
					<input type="file" class="upload" @change="uploadImg">
					<img src="static/img/headPortrait.svg" alt="headPortrait"/>
				</div>
				<div class="nickname">
					<h3>昵称</h3>
					<input v-model="info.nickName">
				</div>
				<span>昵称请控制在4-30个字符，支持中文、数字、横线和减号</span>
				<button @click="toRegister" class="button">注册</button>
			</div>
		</section>
		<!-- 如下内容可以把数据抽出来，用一个v-for加show来列表渲染lhy -->
		<section id="sex" v-show="sexShow">
			<div class="infoBody">
				<h1>欢迎你的加入</h1>
				<p>hi,{{info.nickName}},欢迎加入。为了帮助你量身制定训练计划，请花一分钟时间，帮助我们了解你。</p>
				<h4>你的性别是？</h4>
				<button @click="goNext('sexShow','male')" class="button">男</button>
				<button @click="goNext('sexShow','female')" class="button">女</button>
			</div>
		</section>
		<section id="level" v-show="levelShow">
			<div class="header">
				<span @click="goBack('levelShow')" slot="left">
					<img src="static/img/left.svg" alt="goBack">
				</span>
			</div>
			<div class="infoBody">
				<h2>你的健身基础？</h2>
				<button  @click="goNext('levelShow','beginner')" class="button">入门\
					<span>很久没有运动，需要通过适应性训练打好基础</span>
				</button>
				<button  @click="goNext('levelShow','primary')" class="button">初级\
					<span>偶尔运动，可以正式开始训练</span>
				</button>
				<button  @click="goNext('levelShow','medium')" class="button">中级\
					<span>体能不错，希望进行稍有强度的训练</span>
				</button>
				<button  @click="goNext('levelShow','senior')" class="button">高级\
					<span>训练规律，经验丰富，能进行高强度的许梿</span>
				</button>
			</div>
		</section>
		<section id="BFP" v-show="BFPShow">
			<div class="header">
				<span @click="goBack('BFPShow')" slot="left">
					<img src="static/img/left.svg" alt="goBack">
				</span>
			</div>
			<div class="infoBody">
				<h2>你觉得自己的身材如何？</h2>
				<button  @click="goNext('BFPShow','fat')" class="button">有点胖</button>
				<button  @click="goNext('BFPShow','thin')" class="button">有点瘦</button>
				<button  @click="goNext('BFPShow','standar')" class="button">身材标准</button>
			</div>
		</section>
		<section id="target" v-show="targetShow">
			<div class="header">
				<span @click="goBack('targetShow')" slot="left">
					<img src="static/img/left.svg" alt="goBack">
				</span>
			</div>
			<div class="infoBody">
				<h2>你的健身目标是？</h2>
				<button  @click="goNext('targetShow','all')" class="button">全身强壮</button>
				<button  @click="goNext('targetShow','part')" class="button">加强局部肌肉</button>
			</div>
		</section>
		<section id="limbs" v-show="limbsShow">
			<div class="header">
				<span @click="goBack('limbsShow')" slot="left">
					<img src="static/img/left.svg" alt="goBack">
				</span>
			</div>
			<div class="infoBody">
				<h2>最想训练哪一个部位？</h2>
				<button  @click="goNext('limbsShow','chest')" class="button">胸</button>
				<button  @click="goNext('limbsShow','backSide')" class="button">肩背</button>
				<button  @click="goNext('limbsShow','abdominal ')" class="button">腰腹</button>
				<button  @click="goNext('limbsShow','arm')" class="button">手臂</button>
				<button  @click="goNext('limbsShow','leg')" class="button">臀腿</button>
			</div>
		</section>
		<section id="ageWeiHei" v-show="AWHShow">
			<div class="header">
				<span @click="goBack('AWHShow')" slot="left">
					<img src="static/img/left.svg" alt="goBack">
				</span>
			</div>
			<div class="infoBody">
				<h2>补充信息</h2>
				
				<label>生日

					<span @click="yearShow = true">{{info.year}}年</span>
					<select size="5" v-show="yearShow" v-model="info.year" @change="yearShow = false;" @blur="yearShow = false;">
						<option v-for="(item, index) in yearSlotList" :value="item" :key="index">{{item}}</option>
					</select>
						<span @click="monthShow = true">{{info.month}}月</span>
						<select size="4" v-show="monthShow" v-model="info.month" @change="monthShow = false;" @blur="monthShow = false;">
							<option v-for="(item, index) in monthSlotList" :value="item" :key="index">{{item}}</option>
						</select>
						<span @click="insertDay">{{info.day}}日</span>
						<select size="4" v-show="dayShow" v-model="info.day" @change="daySlotList = [];dayShow = false;" @blur="dayShow = false;">
							<option v-for="(item, index) in daySlotList" :value="item" :key="index">{{item}}</option>
						</select>					
				</label>
				<label>身高
					<span @click="heightShow = true;">{{info.height}}cm</span>
					<select size="4" v-show="heightShow" v-model="info.height" @change="heightShow = false;" @blur="heightShow = false;">
						<option v-for="(item, index) in heightSlotList" :value="item" :key="index">{{item}}</option>
					</select>					
				</label>
				<label>体重
				<span @click="weightShow = true;">{{info.weight}}kg</span>
					<select size="4" v-show="weightShow" v-model="info.weight" @change="weightShow = false;" @blur="weightShow = false;">
						<option v-for="(item,index ) in weightSlotList" :value="item" :key="index">{{item}}</option>
					</select>					
				</label>
				<button @click="goNext('AWHShow')" class="button">完成</button>
			</div>
		</section>
	</div>
</template>
<script>
import api from '../../fetch/login'
import tips from "../../components/tips.vue"
export default {
	name: 'getUserInfo',
	data() {
		return {
			headerImg: "static/img/left.svg",
			nickNameShow: true,
			sexShow: false,
			levelShow: false,
			BFPShow: false,
			targetShow: false,
			limbsShow: false,
			AWHShow: false,
			yearShow: false,
			monthShow: false,
			dayShow: false,
			heightShow: false,
			weightShow: false,
			yearSlotList: [],
			monthSlotList: [],
			daySlotList: [],
			weightSlotList: [],
			heightSlotList: [],
			message: "test",
			showTips:false,
			info: {
				header: '../..static/img/logo.svg',
				nickName: '',
				sex: '',
				level: '',
				BFP: '',
				target: '',
				limbs: '',
				year: '---- ',
				month: '-- ',
				day: '-- ',
				height: '--- ',
				weight: '--- ',
			}
		}
	},
	created() {

	},
	mounted() {
		this.insertYear();
		this.insertMonth();
		this.insertWeight();
		this.insertHeight();
		document.getElementsByTagName("select").onblur= ()=>(console.log("152"))
	},
	components: {
		tips
	},
	computed: {
		
		
	},
	methods: {
		goBack(sec) {
			switch (sec) {
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
		goNext(sec, val) {
			switch (sec) {
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
					this.showTips = true;
					this.message = "注册成功";
					setTimeout(() => {
						this.showTips = false;
						this.$router.push('/home/date/mall');
					}, 1000);
					
					break;
			}
		},
		insertYear() {
			this.yearSlotList = []
			for (let i = 1950; i < new Date().getFullYear(); i++) {
				this.yearSlotList.push(i);
			};	
		},
		insertMonth() {
			this.monthSlotList = []
			for (let i = 1; i < 13; i++) {
				this.monthSlotList.push(i);
			};	
		},
		insertDay() {
			this.daySlotList = []
			this.dayShow = true;
			switch (this.info.month) {
				case 1:
				case 3:
				case 5:
				case 7:
				case 8:
				case 10:
				case 12:
					for (let i = 1; i < 31; i++) {
						this.daySlotList.push(i);
					};
					break;
				case 2:
					for (let i = 1; i < 29; i++) {
						this.daySlotList.push(i);
					};
					if(this.info.year%4 == 0) {
						this.daySlotList.push(29);
					}
					break;
				default:
					for (let i = 1; i < 30; i++) {
						this.daySlotList.push(i);
					};
					break;
			}
		},
		insertWeight(){	
			this.weightSlotList = []
			for (let i = 40; i < 130; i++) {
				this.weightSlotList.push(i);
			};
			
		},
		insertHeight(){	
			this.heightSlotList = []
			for (let i = 120; i < 200; i++) {
				this.heightSlotList.push(i);
			};
			
		},
		toRegister() {
			let data = {
				nickName: this.info.nickName,
				header: this.info.header
			};
			api.register()
				.then(res => {
					
					//this.$router.push()
					this.nickNameShow = false;
					this.sexShow = true;
				}, res => {
					
				})
		},
		async uploadImg(){
			let data = {
				img: document.querySelector(".upload").files[0]
			}
			api.uploadImg(data)
				.then(res => {
					this.headerImg = res.imgPath;
				})
				.catch(err => {
					throw new Error(err);
				})
		},

	}
}
</script>
<style  lang="scss" scoped>
.header {
	margin: .1rem 0 .1rem .1rem;			
}
.button {
	width: 80vw;
	border-radius: 50px;
	// height: 40px;
	padding: 0.1rem;
	background-color: white;
	border: 1px solid red;
	color: red;
}

.infoBody {
	display: flex;
	flex-direction: column;
	padding: 0.3rem 0.3rem;
	span {
		display: inline-block;
		text-align: right;
		width: .8rem;
		height: .5rem;
	}
	select {
		position: fixed;
		background-color: rgba(0,0,0,.1);
		bottom: 0;
		right: 0;
		width: 100vw;
		text-align: center;
	}
	p {
		margin: .3rem 0;
	}
	.upload {
		width: 20px;
		height: 20px;
		opacity: 0;
		// position: absolute;

	}
	.avatarGroup {
		display: flex;
		flex-direction: row;
		margin: 0.2rem 0;
		align-items: center;
	}
	button {
		margin-top: 0.6rem;
	}
	.nickname {
		@extend .avatarGroup;
		input {
			border: 0px solid white;
			border-bottom: 1px solid #ccc;
			margin-left: 0.1rem;
			outline: none;
			&:focus {
				border: 1px solid white;
				border-bottom: 1px solid #ccc;
			}
		}
	}
}
</style>