jQuery(function($) {
    // Callback for rendering via JSON
    $('#test_json').on('ajax:success', function(event, data, status, xhr) {        	
        $(this).parents("li").find("p#json_detail").html('<div>Name: ' + data.author.name + '</div>');
    });
});