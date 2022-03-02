TweenMax.set(".play-circle-01", {
  rotation: 90,
  transformOrigin: "center"
})

TweenMax.set(".play-circle-02", {
  rotation: -90,
  transformOrigin: "center"
})

TweenMax.set(".play-perspective", {
  xPercent: 6.5,
  scale: .175,
  transformOrigin: "center",
  perspective: 1
})

TweenMax.set(".play-video", {
  visibility: "hidden",
  opacity: 0,
})

TweenMax.set(".play-triangle", {
  transformOrigin: "left center",
  transformStyle: "preserve-3d",
  rotationY: 10,
  scaleX: 2
})

const rotateTL = new TimelineMax({ paused: true })
  .to(".play-circle-01", .7, {
    opacity: .1,
    rotation: '+=360',
    strokeDasharray: 456,
    ease: Power1.easeInOut
  }, 0)
  .to(".play-circle-02", .7, {
    opacity: .1,
    rotation: '-=360',
    strokeDasharray: 411,
    ease: Power1.easeInOut
  }, 0)

const openTL = new TimelineMax({ paused: true })
  .to(".play-backdrop", 1, {
    opacity: .95,
    visibility: "visible",
    ease: Power2.easeInOut
  }, 0)
  .to(".play-close", 1, {
    opacity: 1,
    ease: Power2.easeInOut
  }, 0)
  .to(".play-perspective", 1, {
    xPercent: 0,
    scale: 1,
    ease: Power2.easeInOut
  }, 0)
  .to(".play-triangle", 1, {
    scaleX: 1,
    ease: ExpoScaleEase.config(2, 1, Power2.easeInOut)
  }, 0)
  .to(".play-triangle", 1, {
    rotationY: 0,
    ease: ExpoScaleEase.config(10, .01, Power2.easeInOut)
  }, 0)
  .to(".play-video", 1, {
    visibility: "visible",
    opacity: 1
  }, .5)


const button = document.querySelector(".play-button")
const backdrop = document.querySelector(".play-backdrop")
const close = document.querySelector(".play-close")

button.addEventListener("mouseover", () => rotateTL.play())
button.addEventListener("mouseleave", () => rotateTL.reverse())
button.addEventListener("click", () => openTL.play())
backdrop.addEventListener("click", () => openTL.reverse())
close.addEventListener("click", e => {
  e.stopPropagation()
  openTL.reverse()
})





////////////// BIFF main.js ////////////////

/// 햄버거메뉴 JS ////////////////////////////
function sMenu() {

  let gnb1 =
      document.getElementsByClassName("gnb1").item(0);
  gnb1.classList.toggle("on");

};/// 햄버거메뉴 JS //////////////////////////

////////////////// 슬라이드 버튼 JS /////////////////////

window.addEventListener("DOMContentLoaded", () => {

  // 갤러리박스
  let block = document.querySelector(".block");

  // 광클금지변수
  let prot = 0; // 0-허용, 1-불허용

  /*********************************************** 
      함수명: goSlide
      기능: 슬라이드 순번을 변경하여 이동함
  ***********************************************/
  const goSlide = dir => { // dir  - 방향(1-오른쪽,0-왼쪽)

      // 0. 광클금지 /////
      if (prot) return; // 돌아가!
      prot = 1; //잠금
      setTimeout(() => prot = 0, 400);
      ////////////////////////////////////////////

      // 0.4초후 prot 변수를 처음값으로 변경하여 잠금

      // 광클금지의 원리는 전역변수를 지정하고
      // 이값에 따라 return을 주고 바로 변경하여 잠그고
      // 일정시간뒤에 다시 처음 값으로 풀어준다.

      // return은 함수를 빠져나감
      // 참고) break는 제어문을 빠져나감

      // 1. 함수호출확인
      // console.log("바뀌나",dir);

      // 2. 대상선정: .gbx -> gbx변수에 할당

      //  대상 하위 img요소
      let gimg = block.querySelectorAll("img");

      // 3. 변경내용

      // 3-1. 오른쪽버튼일 경우 : 맨앞 이미지 맨뒤로
      if (dir) block.appendChild(gimg[0]);
      // appendChild(처음요소) -> 처음요소 맨뒤로 이동

      // 3-2. 왼쪽버튼일 경우 : 맨뒤 이미지 맨앞으로
      else block.insertBefore(gimg[gimg.length - 1], gimg[0]);
      // insertBefore(끝요소,처음요소) -> 끝요소를 처음요소 앞으로 이동
      // gimg[개수-1] -> 끝요소번호
  }

  //// 이동버튼 클릭설정하기 /////////
  // 대상: 버튼들 -> .abtn
  let abtn = document.querySelectorAll(".abtn");
  // console.log("버튼갯수:",abtn.length);

  // 오른쪽버튼 클릭시
  abtn[1].onclick = () => {
      goSlide(1); //슬라이드함수호출
      clearAuto(); //인터발지우기
  };

  // 왼쪽버튼 클릭시
  abtn[0].onclick = () => {
      goSlide(0); //슬라이드함수호출
      clearAuto(); //인터발지우기
  };

  //////////////////////////////////////
  // 자동 넘기기 설정 -> 인터발 함수사용
  //////////////////////////////////////

  // 인터발용변수
  let autoI;

  // 타임아웃용변수
  let autoT;

  /**************************************** 
      함수명: autoSlide
      기능: 슬라이드함수 인터발호출
  ****************************************/
  const autoSlide = () => autoI = setInterval(() => goSlide(1), 5000);
  ////////// autoSlide 함수 //////////////////////

  // setInterval 을 사용시 함수만 호출할 경우
  // 함수명만 써도 되지만 함수에 전달값을 써야할 경우
  // 익명함수 형식으로 써야한다 ()=>goSlide

  // 인터발호출함수 최초호출
  autoSlide();
  /**************************************** 
   함수명: clearAuto
   기능: 인터발함수 지우고 타임아웃셋팅
  *****************************************/
  const clearAuto = () => {
      // console.log("지움");
      // 1. 자동호출지우기
      clearInterval(autoI);
      // 2. 타임아웃지우기(실행쓰나미방지)
      clearTimeout(autoT);
      // 자동호출 타임아웃셋팅
      autoT = setTimeout(autoSlide, 3000)
  }
});
