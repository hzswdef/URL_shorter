$('#send_request').click(function() {
    $.ajax({
        url: 'create_url.php',
        type: 'POST',
        data: {
            point: $('#url-input').val()
        },
        success: function(data) {
            $('#msg_box').append(data);
        }
    });
});