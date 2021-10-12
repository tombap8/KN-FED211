// 제이쿼리 기본 JS - main.js 

////////////// 제이쿼리 로드구역 ////////////////
$(function(){

    /// 타이틀 오버시 글자색,배경색 변경
    // 대상: .tit
    let tit = $(".tit");
    
    // mouseover() 메서드 - 오버시 함수연결
    tit.mouseover(function(){
        // 변경대상: .tit -> 나자신 this키워드
        $(this).css({
            color: "red",
            background: "yellow"
        });/// css ////
    }); //////// mouseover ////////////////

    // 마우스 아웃시 원상복귀
    // mouseout(함수) - 마우스 아웃시 함수연결 
    tit.mouseout(function(){
        // 변경대상: .tit -> 나자신 this키워드
        $(this).css({
            color: "yellow",
            background: "pink"
        });/// css ////
    }); //////// mouseover ////////////////



    /////////////////////////////////////////
    /// 1. 대상선정 변수할당 /////////////////
    /////////////////////////////////////////

    // 대상1 : 버튼 - .btns button
    let btns = $(".btns button");

    // 대상2 : 미니언즈 - .mi
    let mi = $(".mi");

    // 대상3 : 빌딩 - .building li
    let bd = $(".building li");

    // 대상4 : 메시지 - .msg
    let msg = $(".msg");

    // 좀비 태그 셋업
    let mz1 = '<img src="images/mz1.png" alt="좀비1" class="mz">';
    let mz2 = '<img src="images/mz2.png" alt="좀비2" class="mz">';
    let zom = '<img src="images/zom.png" alt="좀비들" class="mz">';

    // 주사기 태그 셋업
    let inj = '<img src="images/inj.png" alt="주사기" class="inj">';

    // 미니언즈 가로크기 보정값
    // 윈도우 가로크기의 5%
    let win5 = $(window).width()*0.05;
    // console.log("가로크기5%:" + win5);
    // width() 선택요소의 가로크기 구하기
    // height() 선택요소의 세로크기 구하기
    // -> 단위없는 px값

    ///////////////////////////////////////////
    /// 2. 초기화 셋팅 /////////////////////////
    ///////////////////////////////////////////

    // 2-1. 모든 버튼 숨기고 첫번째만 보이게하기
    btns.hide().first().show();
    // 버튼들을 .숨겨() .첫번째()는 .보여()
    // 주어는 하나! 뒤에 메서드 체인!

    // 2-2. 모든 빌딩 li를 순서대로 돌면서 순번넣기 + 좀비넣기
    // each(function(idx,ele){구현부})
    // -> 선택요소를 순서대로 돌면서 구현부를 실행하는 메서드
    // -> idx 전달변수는 순번이 전달됨(0부터)
        // (idx -> index에서 나온말로 변수명 사용)
    // -> ele 전달변수는 요소자신(this키워드와 동일)
        // (ele -> element에서 나온말로 변수명 사용)
    // - 참고로 idx, ele변수면은 변경가능. 변수의 순서중요!
    // - 이 메서드를 사용하면 for문을 안써도 됨!
    bd.each(function(idx,ele){
        // console.log(idx);

        // 1. 각 li요소에 글자넣기(순번)
        $(ele).text(idx);

        // 2. 좀비+주사기 넣기
        if(idx===9)
            $(ele).append(mz1);
        else if(idx===7)
            $(ele).append(mz2);
        else if(idx===1)
            $(ele).append(zom);
        else if(idx===2)
            $(ele).append(inj);

    }); ////// each //////////////////

    // 2-3. 모든 좀비 숨기기
    $(".mz").hide();
    // 선택요소가 여러개이면 for문을 돌듯이 모두 셋팅됨!


    //////////////////////////////////////////////////
    // 3. 버튼별 순서대로 클릭 이벤트 함수 만들기 //////
    //////////////////////////////////////////////////

    // 3-1. '들어가기' 버튼 ///////
    btns.first().click(function(){
        console.log("들어가기 버튼!");

        // 메시지 지우기
        msg.fadeOut(10000);
        // fadeOut(시간) - opacity로 서서히 사라짐

        // 이동할 빌딩 li의 위치정보 알아내기!
        // offset() 메서드 위치나 크기정보를 알려줌
        // offset().top - top값
        // offset().left - left값

        // 이동할 li 타겟 -> bd변수에 할당(.building li)
        let tg = bd.eq(8); // 8번방
        let tval = tg.offset().top; // 화면에서의 top값
        let lval = tg.offset().left + win5; // 화면에서의 left값
        // win5는 미니언즈를 left값 보정함!(화면의 5%)
        console.log(tval+"/"+lval);

        // 미니언즈 이동하기
        // 대상: .mi -> mi변수에 할당!
        mi.animate({
            top: tval + "px",
            left: lval + "px"
        },1000,function(){ // 콜백함수 (애니후 실행!) //
            // 메시지요소
            msg
            // 메시지 넣기
            .text("와~! 아늑하다! 옆방으로 가보자!")
            // 나타나기
            .fadeIn(200);
            // 한번 선택하고 이어서 메서드를 계속
            // 쓰는 방법을 메서드 체인이라고 함!
            // 중간에 이어서 쓸땐 세미콜론 없어야함!

        }); ////////// animate //////////
/* 
        [animate 메서드]
        animate({CSS설정},시간,이징,함수)
        - CSS 설정에 따라 애니메이션 연출 메서드
        - 시간 - 1/1000초 (단위없음)
        - 이징 - 가속도
        - 함수 - 애니후 실행코드 함수(콜백함수)
 */


    }); ////////// 3-1 click /////////////




}); ////////// jQB ///////////////////////////
//////////////////////////////////////////////