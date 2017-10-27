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
			'swiperImg': '@dataImage("400x200", "健身减肥啦！啊啊")',
		}]
	}
],
[
	'/api/get/circle/adimg',
	{
		'list|3': [{
			'swiperImg': '@dataImage("400x200", "挑战赛")',
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
			'img_one': '@image("400x150", "#ffcc33", "14天局部塑形")',
			'img_two': '@image("400x150", "#ffcc33", "极速减脂营-自我挑战版")'
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
			'goodsImg': '@dataImage("100x70", "商品")',
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
]
]
export default data.forEach(function(element){return mock.mock(...element)})