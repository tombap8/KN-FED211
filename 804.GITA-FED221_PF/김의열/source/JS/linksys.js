// Plab PJ 링크 시스템 JS

$(()=>{
    $(".logo").click(()=>{
        // console.log("dd");
        location.href = "index.html";
    }); // 로고 클릭 시 메인페이지로

    $(".sns a").first().click(()=>{
        location.href = "login.html";
    }); //////// click

    $(".mlist li").eq(0).find("a").click(function(e){

        // a요소 기본 기능 막기
        e.preventDefault();

        location.href = "match copy.html"
        
    }); // 매치메뉴 클릭 시
    $(".mlist li").eq(1).find("a").click(function(e){

        // a요소 기본 기능 막기
        e.preventDefault();

        location.href = "rental.html"
        
    }); // 매치메뉴 클릭 시

    $(".mobtn").click(function(){
        $(".mobx").slideToggle();

        $("body").toggleClass("on");


    }); ///// 모바일메뉴 클릭
}); ///////////////////JQB