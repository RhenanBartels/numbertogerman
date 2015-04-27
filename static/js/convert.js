$(document).ready(function(){

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');
    var csrftoken = getCookie('csrftoken');
    console.log(csrftoken);
    $("#btnTest").click(function(){
        $.ajax({
            url: '',
            type: 'get', //this is the default though, you don't actually need to always mention it
            data: {"german_number": $("#id_german_number").val(),
            'csrfmiddlewaretoken': csrftoken},
            headers: {'X-CSRFToken': csrftoken},
            beforeSend: function(){
                $("#loading").show();
            },
            success: function(data) {
                    $("#txtTest").text(data.number);
                    $("#loading").hide();
                    $("#german-number").text(data.number);
                            },
            failure: function(data) {
                                 alert('Got an error dude');
                                     }
        });
    });
});


