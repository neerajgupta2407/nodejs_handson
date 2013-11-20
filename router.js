// JavaScript Document

function route(handle,pathname,response,post_data)
{
	console.log('About to route the request for '+pathname);
	
	if(typeof handle[pathname] === 'function')
	{
		return handle[pathname](response,post_data);
	}
	else
	{
		console.log('No handler found for  '+pathname);
		return '404 Not found';
	}
}

exports.route = route;