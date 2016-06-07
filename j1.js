




$(document).ready(function(){

    $("#bb").on('click', function(){
                                    if ($('#inp').val() !== ''){
                                    var vl= $("input[id='inp']").val();
                                    $('ol').append('<li>' + vl +'<button class="remove"><i class="fa fa-times" aria-hidden="true"></i></button>' +'</li>');
                                    $("#inp").val("");
                                    $("ol:parent").css({"color": "white","font-family": "Arial","font-size": "30px"});

                                    }

    });

    $('ol').on('click','li button',function(){
        $(this).parent().remove();
    });


});

