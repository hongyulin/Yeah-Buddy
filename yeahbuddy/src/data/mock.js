import mock from "mockjs";
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
		'image':"@image('200x100', '#00405d', '#FFF', 'Mock.js')"
	}
],
[
	'/api/register',
	{
		'string|1':"register success"
	}
],
[
	'/api/get/nearper',
	{
		'list|30': [{
			'id|+1': 1,
			'img': "@dataImage('70x70', '我是头像')",
			'nickName': "@cname()",
			'age': "@natural(10,65)",
			'sex|1': ['♂','♀'],
			'level': "@natural(1,30)",
			'step': "@float(0,10,2,2)",
			'distance': "@float(0,30,2,2)",
			'hours': "@natural(1,24)",
			'follow': false,

		}]
	}
],
[
	'/api/get/date/adimg',
	{
		'list|3': [{
			'swiperImg': "@dataImage('400x200', '起桥细节详解——Levinson')",
			'adImg': "@dataImage('70x70', '课程推荐')"
		}]
	}
],
[
	'/api/get/show/adimg',
	{
		'list|5': [{
			'swiperImg': "@dataImage('400x200', '健身减肥啦！啊啊')",
		}]
	}
],
[
	'/api/get/circle/adimg',
	{
		'list|3': [{
			'swiperImg': "@dataImage('400x200', '挑战赛')",
		}],
		
	}
],[
	'/api/get/circle/circle',
	{
		'list|1': [{
			'shImg': "@dataImage('48x48', '上海小八圈')",
			'runImg': "@dataImage('48x48', '跑步圈')",
			'runeqImg': "@dataImage('48x48', '跑步装备圈')",
		}]			
	}
]
]
export default data.forEach(function(element){return mock.mock(...element)})