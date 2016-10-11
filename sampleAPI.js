var validateApiKey = require('../validateApiKey');
module.exports = {
	"get": [validateApiKey, function(request, response, next)
	{
		response.send(
		{
			message: "post"
		});
	}],
	"post": [validateApiKey, function(request, response, next)
	{
		response.send(
		{
			message: "post"
		});
	}]
};
