// 자동스크롤 기능 JS - autoScroll.js //

$(function(){ //// jQB ///////////////////////
    /* 
        [ 자동스크롤 구현! ]

        1. 기능:  마우스휠을 위나 아래로 작동시킬때
         페이지가 위나 아래로 자동으로 애니메이션 되는 기능

        2. 이벤트: 마우스휠을 움직일때 발생하는 이벤트는?
            - mousewheel (오리지널 이벤트) -> 파이어폭스 지원안함!
            - wheel (신규이벤트-벤더사의 웹표준이 아직아님!)
             -> 사파리지원안함
            - DOMMouseScroll (파이어폭스 전용이벤트)
            -> 결론적으로 모두 한꺼번에 지원하는 이벤트가 없으므로
            mousewheel + DOMMouseScroll 을 같이 사용할 것임!

        3. 마우스 휠 이벤트와 함수를 연결하는 방법:
        - on(이벤트명,함수)
        -> on메서드로 어떤 이벤트와도 함수를 연결할 수 있다!
        (참고로 bind(이벤트명,함수) 제이쿼리 버전3부터 지원중단!)

        4. 마우스휠 이벤트 대상: 보통 document에 적용함!

        -> 중요한 업데이트 유의사항!!!
        document, body, window 객체는 이벤트를 막을 수 없다!
        - 2019년도에 위의 세가지 중요객체에 대하여 기본기능 막기를
        할 수 없도록 브라우저 소스가 업데이트 되었는데 이유는
        모바일에서 에러가 발행하는 문제의 원인으로 지목되어
        본 3가지 중요객체에 대해서는 e.preventDefault() 또는
        return false를 사용한 기능막기를 못하도록 하였다!
        
        예) 안되는 케이스
        $(document).on("click",function(e){
            e.preventDefault(); -> 에러!!!
        });
        $(window).on("scroll",function(e){
            return false; -> 에러!!!
        });
        $("body").on("mousewheel",function(e){
            e.preventDefault(); -> 에러!!!
        });
    
        -> 에러를 우회하는 방법은 window, document, body대신에
        내부에 전체부모박스를 하나 만들고 사용하는 방법이 있다!
    */

        ////////////// 자동스크롤 구현 //////////////////////
        // 사용메서드: on(이벤트명, 함수)
        // -> 이벤트명에 띄어쓰기로 여러개의 이벤트를 사용할 수 있다
        // 이벤트명에 일반용과 파이어폭스용 이벤트를 모두 쓴다!
        // 해당되는 이벤트가 적용된다!
        // 대상: document
        $(document).on("mousewheel DOMMouseScroll",
        function(e){

            console.log("마우스휠~!");

        }); //////////// mousewheel 이벤트함수 //////////////
        /////////////////////////////////////////////////////






}); ////////////// jQB ///////////////////////
//////////////////////////////////////////////