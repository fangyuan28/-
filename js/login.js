$('.sub').on('click',function(){
	$.ajax({
		type:'post',
		url:'http://172.168.0.92:8080/v1/oauth2/tokens/',
		data:{
			grant_type: 'password',
			username: $('.name').val(),
			password: $('.pas').val(),
			client_id: '7sXsOalK5Kt8jn1CYTwcGI9f',
			client_secret: 'cL9nzmSDjriDjzt19fT4uu6j6Q5OxTLT',
		},
		success(res){
			// console.log(res)
			window.location.href='index.html'
		},
		error(err){
			// console.log(err)
			alert(err.responseJSON.message)
		}
	})
})

