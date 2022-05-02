// 현재 페이지 이름 알아내기
let pgnm = $(location).attr("pathname");
// 슬래쉬로 자르기
pgnm = pgnm.split("/");
// 마지막 배열값 읽기(페이지이름)
pgnm = pgnm[pgnm.length-1];
console.log(pgnm);
// JS방식: window.location.pathname -> host제외한 경로

// 인덱스 페이지와 카테고리 페이지에서만 슬림스라이드 클래스 넣기위한 코드
let slim = 0;
if(pgnm==="index.html" || pgnm==="category.html") slim = 1; 
// 인덱스페이지면 1로변경!

// ********************************* 위로가기 버튼 기능
window.addEventListener("DOMContentLoaded", () => {

    /// 부드러운 스크롤 호출!
    startSS();

    // 스크롤값 변수
    let scTop;
    // 상단영역 - #top
    let topA = document.querySelector(".big_box");
    // 위로가기버튼 - .tbtn
    let tbtn = document.querySelector(".tbtn");

    /// 위로가기버튼 클릭시 맨위로 이동하기 ////
    // 모바일에서 스크롤없이 스와이퍼 이동시 무작동해결!
    $(".tbtn").click(() => {
        // 제이쿼리 스크롤 애니메이션
        $("html,body").animate({scrollTop: "0"}, 300);
        pos = 0;
    }); /////// click ////////////

    /********************************** 
        [ 윈도우 스크롤 이벤트 함수 ]
        - 스크롤 이벤트 : scroll
        - 이벤트 대상 : window
        - 스크롤 이벤트값 : scrollY
    **********************************/
    window.addEventListener("scroll", () => {
        // 스크롤 위치값
        scTop = this.scrollY;
        // scrollY - 세로축 스크롤 위치값 리턴
        // this는 화살표함수에서 window객체임!
        // console.log("스위:", scTop);

        ////////////////////////////////
        ////// 위로가기 버튼 보이기  ////
        ///////////////////////////////

        // 1. 스크롤 위치가 200px 초과일때 
        // 변경사항: .tbtn에 클래스 on넣기
        if (scTop > 200) tbtn.classList.add("on");

        // 2. 스크롤 위치가 100px 미만일때(else)
        // 변경사항: .tbtn에 클래스 on제거
        else tbtn.classList.remove("on");

    }); ////////////// scroll //////////////

    /************************************************** 
        [윈도우 세로 스크롤 위치값 가져오는 방법]

        1. this.scrollY (this키워드가 window의미)
        2. window.scrollY
        3. document.scrollingElement.scrollTop
        4. document.documentElement.scrollTop
        5. document.querySelector("html").scrollTop

        참고) 가로스크롤일 경우
            scrollY -> scrollX
            scrollTop -> scrollLeft
            로 바꿔서 위와 동일함!

    **************************************************/

}); //////////// 로드구역 ////////////////////////