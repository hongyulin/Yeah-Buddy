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
/*[
	'/api/get/Age',
	{
		
	}
],*/
]
export default data.forEach(function(element){return mock.mock(...element)})