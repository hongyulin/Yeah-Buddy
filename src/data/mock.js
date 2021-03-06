import mock from "mockjs";
let packPool = ['10', '20', '15', '30', '50', '66', '88', '100']
let data = [
[
	'/api/level0/checkin',
	{
		'string|1' : 'success'
	}
],
[
	'/api/level0/checkin/bywechat',
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
	'/api/level0/register',
	{
		'string|1':'register success'
	}
],
[
	'/api/level1/nearperson',
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
	'/api/level1/ads?type=date_ad',
	{
		'list|3': [{
			'swiperImg': '@dataImage("400x200", "起桥细节详解——Levinson")',
		}]
	}
],
[
	'/api/level1/ads?type=show_ad',
	{
		'list|5': [{
			'swiperImg': '@dataImage("400x200", "核心营,火热招募中")',
		}]
	}
],
[
	'/api/level1/get/circle/adimg',
	{
		'list|3': [{
			'swiperImg': '@dataImage("400x200", "挑战赛")',
			'adImg': '@dataImage("400x200", "公益广告——关注残疾人")'
		}],
		
	}
],
[
	'/api/level1/mycircle',
	{
		'list|1': [{
			'shImg': '@dataImage("48x48", "上海小八圈")',
			'runImg': '@dataImage("48x48", "跑步圈")',
			'runeqImg': '@dataImage("48x48", "跑步装备圈")',
		}]			
	}
],
[
	'/api/level1/ads?type=date_exercise',
	{
		'list|1': [{
			'img_one': '@image("400x200", "#ffcc33", "14天局部塑形")',
			'img_two': '@image("400x200", "#ffcc33", "极速减脂营-自我挑战版")'
		}]
	}
],
[
	'/api/level1/course',
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
	'/api/level1/goods',
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
	'/api/level1/ads?type=mall_ad',
	{
		'list|1': [{
			'mallAd': '@image("400x200", "#DC143C", "#ffffff", "双十一疯狂降价")'
		}]
	}
],
[
	'/api/level1/experience',
	{
		'list|2': [{
			'experienceImg': '@dataImage("100x80", "经验分享")',
			'expTitle': '@ctitle(5, 15)',
			'expContent': '@cparagraph(5, 8)',
			'expHeader': '@dataImage("35x35", "头像")',
			'expHeart': '@natural(50, 200)',
			'expTalk': '@natural(50, 200)',
			'topicImg': '@dataImage("100x80", "热门话题")',
			'topTitle': '@ctitle(5, 15)',
			'topContent': '@cparagraph(5, 8)',
			'topHeader': '@dataImage("35x35", "头像")',
			'topIn': '@natural(100, 2000)',
		}]
	}
],
[
	'/api/level1/topic',
	{
		'list|2': [{
			'experienceImg': '@dataImage("100x80", "经验分享")',
			'expTitle': '@ctitle(5, 15)',
			'expContent': '@cparagraph(5, 8)',
			'expHeader': '@dataImage("35x35", "头像")',
			'expHeart': '@natural(50, 200)',
			'expTalk': '@natural(50, 200)',
			'topicImg': '@dataImage("100x80", "热门话题")',
			'topTitle': '@ctitle(5, 15)',
			'topContent': '@cparagraph(5, 8)',
			'topHeader': '@dataImage("35x35", "头像")',
			'topIn': '@natural(100, 2000)',
		}]
	}
],
[
	'/api/level1/choice',
	{
		'list|30': [{
			'pickedImg': '@dataImage("130x100", "小八精选")',
			'pickedContent': '@cparagraph(3, 4)',
			'pickedHeader': '@dataImage("25x25", "头像")',
			'pickedNick': '@ctitle(3, 5)',
			'pickedHeart': '@natural(100, 2000)',
		}]
	}
],
[
	'/api/level1/ads?type=video_ad',
	{
		'list|1': [{
			'dance': '@dataImage("400x150", "性感爵士")',
			'topic': '@dataImage("150x70", "热门话题")',
			'picked': '@dataImage("150x70", "热门视频")',
			'video': '@dataImage("400x150", "精选视频")',
		}]
	}
],
[
	'/api/level1/recent/exercise',
	{
		'list|10': [{
			'exerImg': '@dataImage("120x100", "运动自拍")',
			'exerHeader': '@dataImage("30x30", "头像")',
			'exerNick': '@ctitle(3, 7)',
			'exerNum|+1': 1,
			'recommHeader': '@dataImage("30x30", "头像")',
			'recommNick': '@ctitle(3, 7)',
			'recommTime': '@natural(1, 300)',
			'recommfans': '@natural(100, 1000)',
			'recommPicked': '@natural(3, 20)',
			'recommImg_one': '@dataImage("50x40", "训练照")',
			'recommImg_two': '@dataImage("50x40", "训练照")',
			'recommImg_three': '@dataImage("50x40", "训练照")',
		}]
	}
],
[
	'/api/level1/recommend',
	{
		'list|30': [{
			'header': '@dataImage("40x40", "头像")',
			'nick': '@ctitle(3, 7)',
			'time': '@datetime("MM-dd HH:mm")',
			'pic': '@dataImage("400x250", "照片")',
			'content': '@cparagraph(2, 4)',
			'heart': '@natural(1, 300)',
			'talk': '@natural(1, 100)',
			'share': '@natural(1, 30)',
		}]
	}
],
[
	'/api/level1/near/circle',
	{
		'list|30': [{
			// 'header': '@dataImage("40x45", "头像")',
			// 'nick': '@ctitle(3, 7)',
			// 'sex|1': ['♂', '♀'],
			// 'level': '@natural(1, 30)',
			'content': '@cparagraph(2, 4)',
			'pic_1': '@dataImage("200x70", "话题照")',
			'pic_2': '@dataImage("200x70", "话题照")',
			'pic_3': '@dataImage("200x70", "话题照")',
			'location': '@county(true)',
			'cheader': '@dataImage("20x20", "头像")',
			'cname|1': ['生活休闲圈', '张江跑步圈', '上海暴走圈', '浦东羽毛球圈'],
			'heart': '@natural(200, 5000)',
			'comment': '@natural(200, 3000)',
		}]
	}
],
[
	'/api/level1/recommend/user?type=circle_recommend',
	{
		'list|1': [{
			'header': '@dataImage("40x45", "头像")',
			'hostNum': '@natural(1, 30)',
			'oriNum': '@natural(1, 30)',
			'followState': false,
		}]
	}
],
[
	'/api/level1/recommend/user?type=choice_recommend',
	{
		'list|10': [{
			'exerImg': '@dataImage("120x100", "运动自拍")',
			'exerHeader': '@dataImage("30x30", "头像")',
			'exerNick': '@ctitle(3, 7)',
			'exerNum|+1': 1,
			'recommHeader': '@dataImage("30x30", "头像")',
			'recommNick': '@ctitle(3, 7)',
			'recommTime': '@natural(1, 300)',
			'recommfans': '@natural(100, 1000)',
			'recommPicked': '@natural(3, 20)',
			'recommImg_one': '@dataImage("50x40", "训练照")',
			'recommImg_two': '@dataImage("50x40", "训练照")',
			'recommImg_three': '@dataImage("50x40", "训练照")',
		}]
	}
],
[
	'/api/level1/circle/trends',
	{
		'list|30': [{
			'header': '@dataImage("40x45", "头像")',
			'nick': '@ctitle(3, 7)',
			'hours': '@natural(1, 23)',
			'content': '@cparagraph(2, 4)',
			'pic_1': '@dataImage("120x80", "话题照")',
			'pic_2': '@dataImage("120x80", "话题照")',
			'pic_3': '@dataImage("120x80", "话题照")',
			'label|1': ['健身圈','跑步圈','游泳圈','乒乓球圈','暴走圈'],
			'heart': '@natural(1, 30)',
			'comment': '@natural(1, 30)',
		}]
	}
],
[
	'/api/level1/ads?type=circle_active',
	{
		'list|1': [{
			'left': '@dataImage("200x100", "活动-left")',
			'right': '@dataImage("200x100", "活动-right")',
		}]
	}
	
],
[
	'api/get/mine/data',
	{
		'list|1': [{
			'header': '@dataImage("100x100", "头像")',
			'nick': '@ctitle(3, 7)',
			'min': '@natural(20,50)',
			'join_time': '@datetime("yyyy-MM-dd")',
			'badge': '@natural(2, 8)',
			'shop_car': '@natural(2, 8)',
			'shop_record': '@natural(2, 8)',
			'shop_ticker': '@natural(2, 8)',
			'fans': '@natural(2, 8)',
			'follow': '@natural(2, 8)',
			'trends': '@natural(2, 8)',
		}]
	}
]
]
export default data.forEach(function(element){return mock.mock(...element)})