<template>
	<!-- 悦动里面的圈子，这里面的动态是自己的，和关注的人的，还有圈子里面的动态，非选择性展示 -->
	<!-- 圈子，动态 -->
	<div>
		<section>圈子
			<!-- <Tabs value="circle">
				<TabPane label="圈子" name="circle">附近有哪些运动圈</TabPane>
				<TabPane label="动态" name="trends">动态中内容</TabPane>		
			</Tabs>	 -->
		</section>
		<section>
			<!--加号中添加的内容  -->
			<!-- <Icon type="ios-plus-empty" size="25"></Icon> -->
			<!--style提取出来  -->
			<div style="background-color:black;color:white;display:none;">
				<ul>
					<li>
						<!-- <Icon type="ios-chatbubble" color="white"></Icon> -->
						发表话题
					</li>
					<li>
						<!-- <Icon type="android-star" color="white"></Icon> -->
						发布动态</li>
					<li>
						<!-- <Icon type="ios-plus-empty" color="white"></Icon> -->
						加入圈子
					</li>
					<li>
						<!-- <Icon type="radio-waves" color="white"></Icon> -->
						发现好友
					</li>
					<li>
						<!-- <Icon type="qr-scanner" color="white"></Icon> -->
						扫一扫
					</li>
				</ul>
			</div>
		</section>
		
	</div>
</template>
<script>
	export default{
		name: 'circle',
		data(){
			return {

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
		mathods: {

		}
	}
</script>