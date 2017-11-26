$(function () {
	
	var host_url = location.protocol + "//" + location.host + "/" ;

    $('#sign_in').validate({
        highlight: function (input) {
            //console.log(input);
            $(input).parents('.form-line').addClass('error');
        },
        unhighlight: function (input) {
            $(input).parents('.form-line').removeClass('error');
        },
        errorPlacement: function (error, element) {
            $(element).parents('.input-group').append(error);
        },
		
		submitHandler: function (form) {

			var formData = new FormData(form);
			formData.append('ajax', 'login');

			$.ajax({
				type: "POST",
				url: host_url+'gst/process/'+'ajax.php',
		        data: formData,
		        contentType: false,       
		        cache: false,             
		        processData:false,        
				success: function(result) {
					if(result == 1) {
						window.location.href = '';
					}
					else if(result == 0) {
						$('#login_msg').html('Wrong username or password.');
					}
					else
					{
						$('#login_msg').html('Something went wrong.');	
					}
				}
			});
		}
    });
});