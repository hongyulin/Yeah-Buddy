import mock from "mockjs";
let packPool = ['10', '20', '15', '30', '50', '66', '88', '100']
let data = [
[
	'/api/checkIn',
	{
		'string|1' : 'success'
	}
],
[
	'/api/checkInByWechat',
	{
		'string|1' : 'successBywechat'
	}
],
[
	'header/posts',
	{
		'image':'@image("200x100", "#00405d", "#FFF", "Mock.js")'
	}
],
[
	'/api/register',
	{
		'string|1':'register success'
	}
],
[
	'/api/get/nearper',
	{
		'list|30': [{
			'id|+1': 1,
			'img': '@dataImage("70x70", "我是头像")',
			'nickName': '@cname()',
			'age': '@natural(10,65)',
			'sex|1': ['♂','♀'],
			'level': '@natural(1,30)',
			'step': '@float(0,10,2,2)',
			'distance': '@float(0,30,2,2)',
			'hours': '@natural(1,24)',
			'follow': false,

		}]
	}
],
[
	'/api/get/date/adimg',
	{
		'list|3': [{
			'swiperImg': '@dataImage("400x200", "起桥细节详解——Levinson")',
		}]
	}
],
[
	'/api/get/show/adimg',
	{
		'list|5': [{
			'swiperImg': '@dataImage("400x200", "核心营,火热招募中")',
		}]
	}
],
[
	'/api/get/circle/adimg',
	{
		'list|3': [{
			'swiperImg': '@dataImage("400x200", "挑战赛")',
			'adImg': '@dataImage("400x200", "公益广告——关注残疾人")'
		}],
		
	}
],
[
	'/api/get/circle/circle',
	{
		'list|1': [{
			'shImg': '@dataImage("48x48", "上海小八圈")',
			'runImg': '@dataImage("48x48", "跑步圈")',
			'runeqImg': '@dataImage("48x48", "跑步装备圈")',
		}]			
	}
],
[
	'/api/get/date/exercise',
	{
		'list|1': [{
			'img_one': '@image("400x200", "#ffcc33", "14天局部塑形")',
			'img_two': '@image("400x200", "#ffcc33", "极速减脂营-自我挑战版")'
		}]
	}
],
[
	'/api/get/date/list',
	{
		'list|20': [{
			'classHeader': '@dataImage("100x70", "课程推荐")',
			'title': '@ctitle(5, 15)',
			'content': '@cparagraph(5, 10)',
			'num': '@natural(10, 2000)',
			'fee': '@float(66, 99, 2, 2)',
		}]
	}
],
[
	'/api/get/date/goods/list',
	{
		'list|20': [{
			'goodsImg': '@dataImage("120x100", "商品")',
			'icon': '@natural(0, 2)',
			'title': '@ctitle(5, 15)',
			'price': '@natural(10, 2000)',
			'freeCarr': '@boolean(1, 9, false)',
			'diffPrice': '@natural(50, 2000)',
			'redPacket': "@pick(['10', '20', '15', '30', '50', '66', '88', '100'])",
			'packetNum': '@natural(50, 3000)'
		}]
	}
],
[
	'/api/get/date/mall/ad',
	{
		'list|1': [{
			'mallAd': '@image("400x200", "#DC143C", "#ffffff", "双十一疯狂降价")'
		}]
	}
],
[
	'/api/get/show/experience',
	{
		'list|2': [{
			'experienceImg': '@dataImage("100x70", "经验分享")',
			'expTitle': '@ctitle(5, 15)',
			'expContent': '@cparagraph(5, 8)',
			'expHeader': '@dataImage("35x35", "头像")',
			'expHeart': '@natural(50, 200)',
			'expTalk': '@natural(50, 200)',
			'topicImg': '@dataImage("100x70", "热门话题")',
			'topTitle': '@ctitle(5, 15)',
			'topContent': '@cparagraph(5, 8)',
			'topHeader': '@dataImage("35x35", "头像")',
			'topIn': '@natural(100, 2000)',
		}]
	}
],
[
	'/api/get/show/picked',
	{
		'list|30': [{
			'pickedImg': '@dataImage("100x100", "小八精选")',
			'pickedContent': '@cparagraph(5, 8)',
			'pickedHeader': '@dataImage("35x35", "头像")',
			'pickedNick': '@ctitle(3, 7)',
			'pickedHeart': '@natural(100, 2000)',
		}]
	}
],
[
	'/api/get/show/video',
	{
		'list|1': [{
			'dance': '@dataImage("400x150", "性感爵士")',
			'topic': '@dataImage("100x70", "热门话题")',
			'picked': '@dataImage("100x70", "热门视频")',
			'video': '@dataImage("400x150", "精选视频")',
		}]
	}
],
[
	'/api/get/show/swiper',
	{
		'list|10': [{
			'exerImg': '@dataImage("100x100", "运动自拍")',
			'exerHeader': '@dataImage("30x30", "头像")',
			'exerNick': '@ctitle(3, 7)',
			'exerNum|+1': 1,
			'recommHeader': '@dataImage("30x30", "头像")',
			'recommNick': '@ctitle(3, 7)',
			'recommTime': '@natural(1, 300)',
			'recommfans': '@natural(100, 1000)',
			'recommPicked': '@natural(3, 20)',
			'recommImg_one': '@dataImage("40x40", "训练照")',
			'recommImg_two': '@dataImage("40x40", "训练照")',
			'recommImg_three': '@dataImage("40x40", "训练照")',
		}]
	}
],
[
	'/api/get/show/recommend',
	{
		'list|30': [{
			'header': '@dataImage("40x45", "头像")',
			'nick': '@ctitle(3, 7)',
			'time': '@natural(1, 300)',
			'pic': '@dataImage("300x300", "照片")',
			'content': '@cparagraph(2, 4)',
			'heart': '@natural(1, 300)',
			'talk': '@natural(1, 100)',
			'share': '@natural(1, 30)',
		}]
	}
],
[
	'/api/get/circle/hot',
	{
		'list|30': [{
			// 'header': '@dataImage("40x45", "头像")',
			// 'nick': '@ctitle(3, 7)',
			// 'sex|1': ['♂', '♀'],
			// 'level': '@natural(1, 30)',
			'content': '@cparagraph(2, 4)',
			'pic_1': '@dataImage("40x45", "话题照")',
			'pic_2': '@dataImage("40x45", "话题照")',
			'pic_3': '@dataImage("40x45", "话题照")',
			'location': '@county(true)',
			'cheader': '@dataImage("20x20", "头像")',
			'cname|1': ['生活休闲圈', '张江跑步圈', '上海暴走圈', '浦东羽毛球圈'],
			'heart': '@natural(200, 5000)',
			'comment': '@natural(200, 3000)',
		}]
	}
],
[
	'/api/get/circle/follow',
	{
		'list|30': [{
			'header': '@dataImage("40x45", "头像")',
			'hostNum': '@natural(1, 30)',
			'oriNum': '@natural(1, 30)',
			'followState': false,
		}]
	}
],
[
	'/api/get/circle/friends',
	{
		'list|30': [{
			'header': '@dataImage("40x45", "头像")',
			'nick': '@ctitle(3, 7)',
			'hours': '@natural(1, 23)',
			'content': '@cparagraph(2, 4)',
			'pic_1': '@dataImage("40x45", "话题照")',
			'pic_2': '@dataImage("40x45", "话题照")',
			'pic_3': '@dataImage("40x45", "话题照")',
			'label|1': ['健身圈','跑步圈','游泳圈','乒乓球圈','暴走圈'],
			'heart': '@natural(1, 30)',
			'comment': '@natural(1, 30)',
		}]
	}
]
]
export default data.forEach(function(element){return mock.mock(...element)})