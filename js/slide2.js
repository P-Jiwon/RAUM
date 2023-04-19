$(function () {
    start();
    var imgs = 3;
    var now = 0;
    function start() {
        $(".slide2 li").eq(0).siblings().
            fadeOut();
        setInterval(function () { slide() }, 2000);
    };
    function slide() {
        now = now == imgs ? 0 : now += 1;
        $(".slide2 li").eq(now - 1).fadeOut();
        // 이미지를 사라지게함.
        $(".slide2 li").eq(now).fadeIn();
        // 이미지를 보이게함.
    };
});