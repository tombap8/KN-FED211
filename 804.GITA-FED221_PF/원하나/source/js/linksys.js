// 링크 시스템 JS - linksys.js

$(() => {

    // a태그 # 메뉴 막기
    $('a').on('click', function (e) {
        e.preventDefault();
    });

    // 메인 로고 클릭 시 첫페이지로 이동하기
    $(".logo a").click(() => location.href = "index.html");

    $(".smenu a").click(function (e) {
        let txt = $(this).text().trim();
        location.href = "sub.html?page=" + escape(txt);
        console.log("메뉴글자:", escape(txt));

    });

});