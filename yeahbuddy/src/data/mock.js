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
]
]
export default data.forEach(function(element){return mock.mock(...element)})