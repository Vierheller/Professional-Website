function animateTo(section, time){
    $('html, body').animate({
        scrollTop: $(section).offset().top
    }, time);
}

$("#btn-landing").click(function(e) {
    animateTo("#section-about", 800)
});

$(document).ready(function () {
    behaveSticky();
})

$(document).scroll(function () {
    behaveSticky();

    navVisibility();
});

function behaveSticky() {
    //stick nav to top of page
    if (getCurrentY() > getNavWrapY()) {
        getNav().addClass('sticky');
    } else {
        getNav().removeClass('sticky');
    }
}

var isRunning = false;
var lastScroll = 0;
function navVisibility() {
    if(
        getCurrentY() > lastScroll                          //Only disable navbar if scrolled down
        && getCurrentY() > getNavWrapY() + getNavHeight()   //Only disable navbar if the navbar is is sticky mode
        && !isRunning                                       //Only one timeout triggered, not for each tick
    ){
        isRunning = true;
        setTimeout(function () {
            //Refresh offsets, since they could have changed
            if(getCurrentY() > getNavWrapY() + getNavHeight()){
                getNav().hide();
                console.log("Timeout hide")
            }else{
                console.log("Timeout show")
                getNav().show();
            }
            isRunning = false;
        }, 1000);
    }

    lastScroll = getCurrentY();
    getNav().show();
}

function getCurrentY() {
    return $(document).scrollTop();
}

function getNav() {
    return $('.navbar');
}

function getNavHeight() {
    return getNav().height();
}

function getNavWrap() {
    return $('#navWrap')
}

function getNavWrapY() {
    return getNavWrap().offset().top;
}