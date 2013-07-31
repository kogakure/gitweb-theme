jQuery(function() {

$('#clickme').click(function() {
	$(this).parent().animate({left:'0px'}, {queue:false, duration: 500});
});

$(document).click(function(event) { 
    if($(event.target).parents().index($('#slideout')) == -1) {
        if($('#slideout').is(":visible")) {
            $('#slideout').animate({left:'-280px'}, {queue:false, duration: 500});
		}
    }
});

var CB = $('.projsearch input:checkbox').clone().attr('id', 'sr');
$('.projsearch input:checkbox').remove();
$('.projsearch label').text('RegEx').attr('for', 'sr');
$('.projsearch input[name="s"]').append(CB);

$(':submit, :button, :checkbox').button();

$('#new_repo').dialog({ autoOpen: false });

$('#dialog').click(function(){
	$('#new_repo').dialog("open");
});

/*
	var cnr_header = $('#cnr_header');
	
	$('.page_header').append(cnr_header);

	$(cnr_header).find('a').each(function() {
			$(this).click(function(event) {
			var update_url = $(this).attr('href');

			$.get(update_url).done(function(data) {
				var complete = '<h1>Updating Complete!</h1>';
					complete += '<div><a href="'+base_url+'admin">Click to Reload</a><br/></div>';
					complete += '<div>'+data+'</div>'
				$('#system').html(complete);
			});

			return false;
		});
	});
	*/
	
});

