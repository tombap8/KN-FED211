window.addEventListener("load", () => {

  console.log("로딩완료");



  /* 이벤트대상: .button */
  let lb = document.querySelectorAll(".lb1");
  /* 이벤트대상: .button */
  let rb = document.querySelectorAll(".rb1");
  /* 변경대상 : .slide */
  let slidebox = document.querySelectorAll(".sldbx"); // querySelectorAll이면 작동이 안됨!!
  /* 추가대상: */
  let indic = document.querySelectorAll(".indic");
  /* 슬라이드 개수 구해오기 */
  // const numberslide = document.querySelectorAll(".slide").length;
  // console.log("슬라이드개수:", numberslide);

  // 슬라이드가 순서가 바뀌므로 처음에 슬라이드 li에 
  // 클래스를 순번에 맞게 부여해준다!
    for( let i=0; i<slidebox.length;i++) {
      let tg = slidebox[i].querySelectorAll(".slide");
      for(let j=0;j<tg.length;j++){
        tg[j].classList.add("s"+j);

      }
  }//////for ///////

  for (let i = 0; i < rb.length; i++) {
    rb[i].onclick = () => {
      console.log("오른쪽");
      goSlide(i, 1)
    }
  }
  // }//////for ///////

  for (let i = 0; i < rb.length; i++) {
    lb[i].onclick = () => {
      console.log("왼쪽");
      goSlide(i, 0)
    }
  }

  // 오른쪽버튼 클릭시
  //   bt[1].onclick = () => {
  //     goSlide(1);
  //     //clearAuto(); // 자동넘김지우기!
  //     return false; // a기본막기
  // };
  /////////click////

  // 왼쪽버튼 클릭시
  //     bt[0].onclick = () => {
  //     goSlide(0);
  //    // clearAuto(); // 자동넘김지우기!
  //     return false; // a기본막기
  // };
  /////////click////

  //광클금지 상태변수
  let prot = 0; // 0-허용, 1-불허용

  /********************************************8 
          goslide 함수시작
  *******************************************8*/
  const goSlide = (seq, dir) => {


    console.log("이동함수!", seq, dir);
    let tg = slidebox[seq];

    // 이동하기
    if (dir) { /// dir이 1이면 (1===true)

      // 1. 이동하기 : 슬라이드의 left값을 변경함
      tg.style.left = "-100%";
      tg.style.transition = "left .4s ease-in-out";

      // 2. 이동 후 잘라서 끝으로 이동 + left:0
      // 이동후-> setTimeout(함수,시간)
      // 0.4초후 함수실행!
      setTimeout(() => {
        // 2-1. 첫번째 슬라이드 맨뒤로 이동
        tg.appendChild(tg.querySelectorAll(".slide")[0]);
        // 첫번째 슬라이드 선택: #slide>li중 1번째
        // 맨뒤로 이동: appendChild(요소)

        // 2-2 left값 초기화 + 트랜지션해제!
        tg.style.left = "0";
        tg.style.transition = "none";

      }, 400); //////setTimeout ///////

    } ///////if 끝
    else {
      let cnt = tg.querySelectorAll(".slide").length

      // 1. 맨뒤요소 맨앞으로 이동하기
      tg.insertBefore(
        tg.querySelectorAll(".slide")[cnt - 1],
        tg.querySelectorAll(".slide")[0]
      );
      // 맨뒤요소: .tg> .slide 중 맨끝
      // 맨앞 이동: insertBefore(넣을놈, 넣을놈전놈)
      // insertBefore(맨뒤li,맨앞li)

      // 2. left값 -100%로 셋팅 + 트랜지션 없애기
      tg.style.left = "-100%";
      tg.style.transition = "none";

      // 3. left가 0, 트랜지션 설정
      // ※ 위의 같은 속성변경과 시차가 반드시 필요함 안 움직인것과 같음
      // setTimeout으로 시차를 줌!
      setTimeout(() => {
        tg.style.left = "0";
        tg.style.transition = "left .4s ease-in-out"
      }, 10); ////setTimeout ///


    } //////else 끝

    // 3. 블릿표시 변경하기
    let blet = indic[seq].querySelectorAll("li");

    // (1) 초기화 : 모든 블릿 li의 class "on" 제거
    for (let x of blet) x.classList.remove("on")
    // (2) 적용하기 : 해당순번의 li에 class "on" 넣기
    // 해당순번은 오른쪽이동과 왼쪽이동에 따라 다르다!
    //-> 오른쪽 이동일땐 슬라이드 1번
    // 순번구할때 코드해석: 
    // slide.querySelectorAll("li")[dir?1:0]
    // dir?1:0 
    // -> dir변수가 1이면 true여서 1출력 아니면 0출력    
    // 해당순번은 선택할 li요소의 class명의 뒷번호다!
    let clsnum = tg.querySelectorAll(".slide")[dir];
      ////////////질문~~~~~!!!!! dir ===1을 안쓰고 왜 dir만 써도 되는지 이유모름

      clsnum = clsnum.getAttribute("class").substring(7);
    // substring(7) -> 7번째 문자부터 끝까지
    // 여기서 "s번호" 이므로 s뒤의 번호가 나옴
    console.log("클래스명 :", clsnum);
    blet[clsnum].classList.add("on");

    // a요소 기본이동막기!
    return false;

  }; //////////////////////goSlide 함수 끝//////

  
  let autoI; // 지우기용

  /******************************************* 
      함수명: autoSlide
      기능: 인터발함수로 슬라이드 자동넘기기
  *******************************************/
  const autoSlide = ()=> {
      autoI = setInterval(function(){
        
        goSlide(0, 1);
        goSlide(1, 1);
        goSlide(2, 1);
      
      }, 3000  );

  };///////////////autoSlide 함수///////////
  //////////////
  
  // 자동넘김함수 최초호출하기!(함수 아래에서 호출해야함!)
  autoSlide();

  // 타임아웃용변수
  let autoT; // 지우기용(실행쓰나미방지!)
  /*********************************************** 
        함수명: clearAuto
        기능: 자동넘김지우고 일정시간 뒤 다시 자동호출
        -> 오른쪽, 왼쪽 이동버튼 클릭시에만 호출됨!
  ***********************************************/
 const clearAuto = ()=> {
    // 1. 인터발 지우기
    clearInterval(autoI);
    // 2. 타임아웃 지우기 : 실행 쓰나미 방지!
    clearTimeout(autoT);
    // 3. 타임아웃 셋팅: 일정시간뒤 인터발실행
    autoT = setTimeout(autoSlide,3000);
    // 3초후 인터발 호출, 2초후 인터발 최초실행

 };/////////////////clearAuto 함수끝 ////////////
 //////////////////////////////


}); ///////////////////////////load //////////////////