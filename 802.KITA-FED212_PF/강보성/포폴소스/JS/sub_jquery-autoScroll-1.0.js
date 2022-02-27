// 자동 스크롤 JS : jquery-autoScroll-1.0.js //

/**************** 전역변수구역 ****************/
// 1. 현재 페이지번호
let pno = 0;
// 2. 전체 페이지수
const totnum = 3;
// 3. 광스크롤 상태변수
let prot_sc = 0; //0-허용, 1-불허용
// 4. 스크롤애니메이션 시간
const dur_sc = 500;
// 광스크롤 금지 시간, 스크롤애니시간
// 5. 스크롤이징
const easing_sc = "easeInOutQuint";


////////////////// 로딩구역 ////////////////////
$(function () { ////// jQB //////////////////////

    /************************************************* 
        [ 자동스크롤 구현 ]

        1. 기능: 마우스휠을 위나 아래로 작동시킬때
        페이지가 위나 아래로 자동으로 애니메이션 되는 기능

        2. 이벤트: 마우스휠을 움직일때 발생하는 이벤트는?
        - mousewheel (오리지널 이벤트) -> 파이어폭스 지원안함!
        - wheel (신규이벤트-벤더사의 웹표준이 아닌아님!)
            -> 엣지, 사파리 지원안함!
        - DOMMouseScroll (파이어폭스 전용이벤트)
        -> 결론적으로 모두 한꺼번에 지원하는 이벤트가 없으므로
        mousewheel + DOMMouseScroll 2개를 같이 사용할 것임!

        3. 마우스 휠 이벤트와 함수를 연결하는 방법:
        - on(이벤트명, 함수)
        -> on 메서드로 어떤 이벤트와도 함수를 연결할 수 있다!
        (참고로 bind(이벤트명,함수) 메서드를 사용했었지만
        제이쿼리 버전3부터 지원중단함!)

        4. 마우스 휠 이벤트 대상 : 보통 document에 적용함!

        -> 중요한 업데이트 유의사항!!!
        document, body, window 객체는 이벤트 막기를 할 수 없다!
        - 2019년도에 위의 세가지 중요객체에 대하여 기본기능막기를
        할 수 없도록 브라우저 소스가 업데이트 되었는데.... 이유는?
        모바일에서 에러가 발생하는 문제의 원인 중 하나로 지목됨
        본 3가지 중요객체에 대해서 e.preventDefault() 또는
        return false 를 사용한 기능막기를 못하도록 하였다!

        예) 안되는 케이스
        $(document).on("click".function(e){
            e.preventDefault(); -> 에러발생!
        });
        $(window).on("click".function(e){
            return false; -> 에러발생!
        });
        $("body").on("click".function(e){
            e.preventDefault(); -> 에러발생!
        });

        -> 에러를 우회하는 방법은 window, document, body대신
        내부에 전체 부모박스를 하나 만들고 이것을 대신 사용함!
        또 하나는 스크롤바를 안나오게 하여 코딩하는 방법이다!

    *************************************************/



    //////////////// 자동스크롤 구현 ////////////////////
    $(document).on("mousewheel DOMMouseScroll",
        function (e) { // e - 이벤트 전달값

            // 광스크롤 금지 /////////
            if (prot_sc) return; //돌아가
            prot_sc = 1; //잠금
            setTimeout(() => prot_sc = 0, dur_sc);
            //////////////////////////////
            //-> 지정시간동안 스크롤막기
            //-> 지정시간은 dur_sc 상수로 관리함!

            // console.log("마우스휠~!");

            // e.preventDefault();
            // return false;
            // 스크롤막기를 쓰면 에러 나므로 
            // html,body에 overflow:hidden설정으로
            // 스크롤바를 숨기고 스크롤이 안되게 한다!!!

            // e 이벤트 전달변수 처리하기
            e = window.event || e;
            // 뒤의 값 2개중 유효값이 e에 재할당된다!
            // window.event 는 오리지널 이벤트임

            //***************************
            // 1. 마우스 휠 방향 알아내기!
            // 휠델타값으로 방향을 알아낸다!
            // e.wheelDelta는 일반 브라우저용 방향정보
            // e.detail은 파이어폭스용 방향정보
            let delta = e.wheelDelta || e.detail;
            // console.log("휠델타값:" + delta);

            /***************************************** 
                파이어폭스일때 델타값 부호 반대로 하기
                _____________________________________
                방법: JS의 내장함수 test()를 사용하여
                브라우저 정보를 읽어오는 
                navigator.userAgent 를 이용!
                브라우저 정보안에 "Firefox"라는 정보가 있으면
                text() 에서 true를 리턴함! 파이어폭스인지 구분!

                [ test() 정규식 메서드 ]
                정규식.test(값) -> 값 문자열에 정규식문자가
                 있는지 검사하여 있으면 true리턴

                 [ 간단한 정규식 표현기호 ]
                 1. 정규식 내용은 따옴표를 쓰지 않고 슬래쉬 사이에 씀
                 2. 모든 패턴 문자열을 찾을때는 g라는 플래그문자를 씀
                 3. 대소문자 구분없이 찾을때는 i라는 플래그문자를 씀
                 -> flag문자라는 말은 알려주는 표시문자문법임
                예) /,/g
                    -> 모든 콤마를 찾아라!
                    /firefox/i 
                    -> 대소문자 관계없이 'firefox' 문자를 찾아라!
                    /my/gi
                    -> 대소문자 관계없이 'my'문자를 모두 찾아라!

            *****************************************/
            //    console.log("브라우저정보:",navigator.userAgent);
            //    console.log("정보여부:",
            //    /firefox/i.test(navigator.userAgent));

            // 파이어폭스 브라우저 이면 델타값 부호를 반대로 한다!
            if (/firefox/i.test(navigator.userAgent)) {
                delta = -delta; // 변수앞에 마이너스는 부호반대!
            } ////////////////// if /////////////////////

            //********************************/
            // 2. 방향에 따른 페이지 번호증감하기 ////
            if (delta < 0) { // 음수면 스크롤 아랫방향(다음페이지)
                pno++;
                if (pno === totnum) pno = totnum - 1; //끝번호에 고정
            } //////// if ////////////
            else { // 양수면 스크롤 윗방향(이전페이지)
                pno--;
                if (pno === -1) pno = 0; //첫번호에 고정
            } //////// else //////////

            // console.log("페이지번호:", pno);

            //***************************
            // 3. 페이지번호를 높이값에 곱하여 스크롤 이동하기
            // 이동높이값
            let pos = $(window).height() * pno;
            // console.log("이동값:", pos);
            // 이동애니메이션
            $("html,body").animate({
                scrollTop: pos + "px"
            }, dur_sc, easing_sc);
            // dur_sc 상수에 공통시간설정

            // ****************************************
            // 4. 클릭시 .gnb+.indic 의 li에 클래스 on넣기
            $(".gnb2 .rb li").eq(pno).addClass("on")
                .siblings().removeClass("on")
                .parent().parent().siblings().find("li").removeClass("on");

            $(".gnb2 .lb li").eq(pno).addClass("on")
                .siblings().removeClass("on")
                .parent().parent().siblings().find("li").removeClass("on");

            $(".indic li").eq(pno).addClass("on")
                .siblings().removeClass("on");




        }); //////////// mousewheel //////////////////////
    ///////////////////////////////////////////////////



}); ////////////// jQB /////////////////////////
////////////////////////////////////////////////

$(function () { ////// jQB ///////////////////////////////

    $("a").click(function (e) {
        e.preventDefault();
    })

    /************************************* 
        GNB li요소 클릭시 페이지 이동하기
    *************************************/
    // 대상: .gnb li
    $(".gnb2 li,.indic li").click(function (e) { // e - 이벤트전달값

        // 1. 클릭된 li요소의 순번 읽어오기
        // $(this) -> 클릭된 a요소 자신!
        let idx = $(this).index();
        // attr(속성명) -> 속성값 읽어오기
        console.log("클릭된 li순번:", idx);

        pno = idx;

        // 2. 아이디요소의 위치값 알아내기
        // offset().top 으로 알아냄
        let pos = $(window).height() * pno;

        // 3. 스크롤 위치 이동 애니메이션
        // 대상: html,body -> 최상위부모 2개 그룹선택함!
        // 이동속성: scrollTop -> 세로스크롤 위치속성
        // 참고) scrollLeft 는 가로스크롤 위치속성
        $("html,body").animate({
            scrollTop: pos + "px"
        }, dur_sc, easing_sc);


        // 4.

        $(".gnb2 .rb li").eq(pno).addClass("on")
            .siblings().removeClass("on")
            .parent().parent().siblings().find("li").removeClass("on");

        $(".gnb2 .lb li").eq(pno).addClass("on")
            .siblings().removeClass("on")
            .parent().parent().siblings().find("li").removeClass("on");

        $(".indic li").eq(pno).addClass("on")
            .siblings().removeClass("on");


    }); /////////// click ////////////


}); /////////////////// jQB ////////////////////////////