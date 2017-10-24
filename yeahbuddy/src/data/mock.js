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
	'/api/get/adimg',
	{
		'list|3': [{
			'swiperImg': "@dataImage('400x200', '走马灯')",
			'adImg': "@dataImage('70x70', '课程推荐')"
		}]
	}
],
]
export default data.forEach(function(element){return mock.mock(...element)})