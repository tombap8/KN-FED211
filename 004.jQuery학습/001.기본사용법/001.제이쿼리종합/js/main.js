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

        // 2. 좀비 넣기
        if(idx===9)
            $(ele).append(mz1);
        else if(idx===7)
            $(ele).append(mz2);
        else if(idx===1)
            $(ele).append(zom);

    }); ////// each //////////////////


    //////////////////////////////////////////////////
    // 3. 버튼별 순서대로 클릭 이벤트 함수 만들기 //////
    //////////////////////////////////////////////////

    // 3-1. '들어가기' 버튼 ///////
    btns.first().click(function(){
        console.log("들어가기 버튼!");

        // 이동할 빌딩 li의 위치정보 알아내기!
        // offset() 메서드 위치나 크기정보를 알려줌
        // offset().top - top값
        // offset().left - left값

        // 이동할 li 타겟 -> bd변수에 할당(.building li)
        // let tg = bd.eq();

        // 미니언즈 이동하기
        // 대상: .mi -> mi변수에 할당!
        mi.animate({
            top: "500px",
            left: "500px"
        },2000);
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