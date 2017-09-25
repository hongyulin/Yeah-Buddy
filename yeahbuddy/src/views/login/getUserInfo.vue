<template>
	<div>
		<section id="nickName" v-show="nickNameShow">
			<mt-header fixed>
				<div solt="left">
					<mt-button v-link="/" icon="back"></mt-button>
				</div>
			</mt-header>
			<h2>上传头像</h2>
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
		        action="//jsonplaceholder.typicode.com/posts/"
		        style="display: inline-block;width:58px;">
		        <div style="width: 58px;height:58px;line-height: 58px;">
		            <Icon type="camera" size="20"></Icon>
		        </div>
		    </Upload>
			<Avatar>头像</Avatar>
			<h3>昵称</h3>
			<Input></Input>
			<hr>
			<span>昵称请控制在4-30个字符，支持中文、数字、横线和减号</span>
			<Button type="primary" shape="circle" @click="register">注册</Button>
			
		</section>
		<!-- 如下内容可以把数据抽出来，用一个v-for加show来列表渲染lhy -->
		<section id="sex" v-show="sexShow">
			<h2>欢迎你的加入</h2>
			<p>hi{{"nickname"}},欢迎加入。为了帮助你量身制定训练计划，请花一分钟时间，帮助我们了解你。</p>
			<h4>你的性别是？</h4>
			<Button type="ghost" shape="circle" @click="storageSex(male)">男</Button>
			<Button type="ghost" shape="circle" @click="storageSex(female)">女</Button>
		</section>
		<section id="level" v-show="levelShow">
			<mt-header fixed>
				<div solt="left">
					<mt-button v-link="/" icon="back"></mt-button>
				</div>
			</mt-header>
			<h2>你的健身基础？</h2>
			<Button type="ghost" shape="circle" @click="storageLevel(beginner)">入门
				<span>很久没有运动，需要通过适应性训练打好基础</span>
			</Button>
			<Button type="ghost" shape="circle" @click="storageLevel(beginner)">初级\
				<span>偶尔运动，可以正式开始训练</span>
			</Button>
			<Button type="ghost" shape="circle" @click="storageLevel(beginner)">中级
				<span>体能不错，希望进行稍有强度的训练</span>
			</Button type="ghost" shape="circle" @click="storageLevel(beginner)">
			<Button>高级
				<span>训练规律，经验丰富，能进行高强度的许梿</span>
			</Button>
		</section>
		<section id="BFP" v-show="BFPShow">
			<mt-header fixed>
				<div solt="left">
					<mt-button v-link="/" icon="back"></mt-button>
				</div>
			</mt-header>
			<h2>你觉得自己的身材如何？</h2>
			<Button type="ghost" shape="circle" @click="">有点胖</Button>
			<Button type="ghost" shape="circle" @click="">有点瘦</Button>
			<Button type="ghost" shape="circle" @click="">身材标准</Button>
		</section>
		<section id="target" v-show="targetShow">
			<mt-header fixed>
				<div solt="left">
					<mt-button v-link="/" icon="back"></mt-button>
				</div>
			</mt-header>
			<h2>你的健身目标是？</h2>
			<Button type="ghost" shape="circle" @click="">全身强壮</Button>
			<Button type="ghost" shape="circle" @click="">加强局部肌肉</Button>
		</section>
		<section id="limbs" v-show="limbsShow">
			<mt-header fixed>
				<div solt="left">
					<mt-button v-link="/" icon="back"></mt-button>
				</div>
			</mt-header>
			<h2>最想训练哪一个部位？</h2>
			<Button type="ghost" shape="circle" @click="">胸</Button>
			<Button type="ghost" shape="circle" @click="">肩背</Button>
			<Button type="ghost" shape="circle" @click="">腰腹</Button>
			<Button type="ghost" shape="circle" @click="">手臂</Button>
			<Button type="ghost" shape="circle" @click="">臀腿</Button>
		</section>
		<section id="ageWeiHei" v-show="AWHShow">
			<mt-header fixed>
				<div solt="left">
					<mt-button v-link="/" icon="back"></mt-button>
				</div>
			</mt-header>
			<h2>补充信息</h2>
			<mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
			<TimePicker :value="value1" format="HH点mm分ss秒" placeholder="选择时间" style="width: 168px"></TimePicker>
			<label for="">生日</label>
			<label for="">身高</label>
			<label for="">体重</label>
		</section>
	</div>
</template>
<script>
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
				info:{
					header:'',
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
			handleSuccess(){

			},
			handleFormatError(){

			},
			handleMaxSize(){

			},
			handleBeforeUpload(){

			},
			storageSex(){

			},
		}
	}
</script>