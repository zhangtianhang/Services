$(function(){
    var nav=$('.collapse');
    var win=$(window);
    var documt=$(document);

    win.scroll(function(){

        if(documt.scrollTop()>=45){
            nav.css('position','fixed');
            nav.css('top','0');
        }
        else {
            nav.css('position','relative');
            nav.removeClass('top');
        }
    });



    if(win.width()<=900) {
            $('#bodr').click(function () {
                $('.nav-list').toggle();
            })
    }
    else {
            $('.nav-list').toggle(true);
    }
});
