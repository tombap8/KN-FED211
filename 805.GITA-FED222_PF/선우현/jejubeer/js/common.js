// 제주맥주 PJ 공통 JS ///////////////////

/*************************************************** 
  함수명: showGNB
  기능 : GNB메뉴(서브페이지)를 보였다 숨기기 위해
  미리 세팅된 클래스 on을 .top에 넣고/뺌 
 **************************************************/
function showGNB() {
  // 1.함수호출 확인
  // console.log('나야나');

  // 2.변경대상: .top (상단영역)
  var tg = document.querySelector(".top");

  // 3.클래스 on 넣기
  // 클래스리스트 객체 안에 add메소드를 만들어놓고 on을 집어넣게 함
  tg.classList.toggle("on");
  /* 
    [ 클래스 넣기/빼기 객체 ]
    classList
    1. add(클래스명) -> 클래스넣기
    2. remove(클래스명) -> 클래스빼기
    3. toggle(클래스명) -> 존재여부로 클래스변경(있음빼고 없음넣고)
  */

} ////////////////// showGNB 함수///////////////////
////////////////////////////////////////////////////


// 스크롤 위치값 변수 (계속 변해야하니까 let)
let scTop;
// 위로가기버튼 대상: .tbtn
let tbtn;
// 등장액션 대상: .scAct
let scAct;
// 등장액션 대상위치(배열변수)
const scPos = [];
// 화면높이값 기준 등장액션 위치 보정변수(화면높이의 2/3)
const winH = window.innerHeight / 3 * 2


/////////// 로드구역 /////////////////
window.addEventListener("DOMContentLoaded", () => {

  // 부드러운 스크롤 호출
  startSS();

  // 위로가기버튼 대상선정: .tbtn
  tbtn = document.querySelector(".tbtn")

  // 위로가기버튼 클릭시 => 제이쿼리로 부드러운 이동 
  $('.tbtn').click(() => {
    // 제이쿼리 스크롤 애니메이션
    // animate({css속성변경},시간)
    $('html,body').animate({
      scrollTop: "0"
    }, 300); ///// animate /////

    // 부드러운 스크롤 위치값 업데이트
    pos = 0;
  }); ////////// click /////////

  // 등장액션요소
  scAct = document.querySelectorAll(".scAct");

  // 등장액션 요소의 위치값 저장하기
  scAct.forEach((ele, idx) => { // ele-요소자신, idx-순번
    // // console.log("scAct위치:",ele.offsetTop);
    // 전역배열변수에 저장함
    scPos[idx] = ele.getBoundingClientRect().top;

  }); ///////// forEach /////////

  // 위치배열변수 확인
  // console.log(scPos);

}); //////////// 로드구역 ////////////

/********************************************* 
  함수명: scAction
  기능 : 스크롤 등장액션 구간별 클래스주기
*********************************************/
function scAction(seq) { // seq - 순번

  // // console.log("체크:",seq);

  // 해당범위이면 해당순번의 등장요소에 class="on"
  if (scTop >= scPos[seq] - winH &&
    scTop < scPos[seq]) {
    scAct[seq].classList.add("on");
    // // console.log("적용:",seq);
  } ////////// if ////////////

}; ///////////// scAction 함수//////////////////
////////////////////////////////////////////////


/********************************************* 
  [ 윈도우 스크롤 이벤트 함수 ]

  - 스크롤 이벤트: scroll
  - 이벤트대상: window
  - 스크롤 이벤트값: scrollY
*********************************************/
window.addEventListener('scroll', () => {
  // 스크롤 위치표시
  scTop = this.scrollY;
  // console.log("스크롤위치:", scTop);
  // scrollY - 세로축 스크롤위치값 리턴
  // this는 화살표함수에서 window객체임
  // console.log("this의미:", this);

  // [ 여러방법의 스크롤위치값 알아오기 ]
  /* 
  // console.log("스크롤위치2:",document.scrollingElement.scrollTop);
  // console.log("스크롤위치3:",document.documentElement.scrollTop);
  // console.log("스크롤위치4:",document.querySelector("html").scrollTop); 
  */

  ////////////////////////////////////
  ///// 위로가기버튼 보이기 ////////
  ////////////////////////////////////

  // 1. 스크롤위치가 300px이상일때
  // 변경사항: .tbtn에 클래스 "on"넣기
  // 실행문이 하나라서 중괄호 제거가능
  if (scTop >= 300)
    tbtn.classList.add("on");
  // 300px미만일경우 클래스"on"제거 
  else
    tbtn.classList.remove("on");

    
  // 스크롤시 등장요소 위치값 개수만큼 scAction함수 호출! 
  scPos.forEach((val, idx) => scAction(idx))
  // 배열변수.forEach((배열값,순번)=>{구현코드})




}); /////////////////// scroll ///////////////
//////////////////////////////////////////////


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