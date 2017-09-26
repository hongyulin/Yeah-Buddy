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
]
]
export default data.forEach(function(element){return mock.mock(...element)})