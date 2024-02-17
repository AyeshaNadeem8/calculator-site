$(document).ready(function(){
    let string = "";
    let $input = $("#inputBox");
    let $buttons = $("button");

    $buttons.each(function() {
        $(this).click(function() {
            if($(this).html() == '=') {
                string = eval(string);
                $input.val(string);
            }
            else if($(this).html() == 'AC') {
                string = "";
                $input.val(string);
            }
            else if($(this).html() == 'DEL') {
                string = string.substring(0, string.length - 1);
                $input.val(string);
            }
            else {
                string += $(this).html();
                $input.val(string);
            }
        });
    });
});
