$(document).ready(function () {
    // 페이지 스크롤
    $("#fullpage").fullpage({autoScrolling: true, scrollHorizontally: true});
});
$(function () {
    AOS.init({once: true});
});
$(function () {
    // 메뉴 버튼 꾸밈
    $(".menu-bar").click(function () {
        $(this).toggleClass("open");
        $("#nav")
            .toggleClass("show")
            .fadeToggle(200)
            .css("display", "flex");
    });
});