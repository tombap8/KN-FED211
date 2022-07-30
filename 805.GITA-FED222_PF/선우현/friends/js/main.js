/* FRIENDS 공통 JS - 01.가로방향 배너 슬라이드 응용 */

// HTML 태그 로딩 후 loadFn함수 호출!
window.addEventListener("DOMContentLoaded", loadFn);


/************************************************* 
  [ 슬라이드 이동 기능정의 ]
  1. 이벤트 종류: click
  2. 이벤트 대상: 이동버튼 (.abtn)
  3. 변경 대상: 슬라이드박스(#slide)
  4. 기능설계:

      (1) 오른쪽버튼 클릭시 다음 슬라이드가 나타나도록 
        슬라이드 박스에 left값을 -100%로 변경시킨다
        -> 슬라이드 이동 후!!!!  바깥에 나가있는 
        첫번째 슬라이드 li를 잘라서 맨 뒤로 보낸다
        동시에 left값을 0으로 변경한다!!
        (두번째 이미지가 앞으로 나오면서 튀므로)

      (2) 왼쪽버튼 클릭시 이전 슬라이드가 나타나도록 하기 위해 
        우선 맨 뒤 슬라이드 li를 맨 앞으로 이동하고
        동시에 left값을 -100%로 변경한다
        그 후 left값을 0으로 애니메이션하여 
        슬라이드가 왼쪽에서 들어온다

      (3) 공통기능 : 슬라이드 위치표시 불릿
      - 불릿대상: .indic li
      - 변경내용: 슬라이드 순번과 같은 순번의 li에 
        클래스 "on"주기 (나머지는 빼기->초기화)

*************************************************/

/************************************************* 
  함수명: loadFn
  기능: 로딩후 버튼이벤트 및 기능구현
*************************************************/
function loadFn() {

  // 부드러운 스크롤 호출
  startSS();

  // 1. 호출확인
  // console.log("로딩완료!");

  // 2. 변경대상: 
  // (1) 슬라이드박스 (#slide)
  const slide = document.querySelector("#slide");
  // console.log("슬라이드:",slide);

  // (2) 불릿박스li (.indic li)
  const indic = document.querySelectorAll(".indic li ");
  // console.log("불릿:",indic);

  // 2-5. 변경대상 li에 순번 속성넣기
  // -> 넣는이유: li가 이동하여 순서가 바뀌므로 
  // 불릿버튼 순번을 표시할때 고유한 순서번호가 필요함
  // 내가 만드는 속성은 반드시 "data-" 로 시작하도록 w3c에서 정함
  // 순번속성명은 "data-seq" 로 정하기로 함(내맘대로)
  let setSeq = slide.querySelectorAll("li");
  // for(시;한;증){코드}
  for (let i = 0; i < setSeq.length; i++) {
    setSeq[i].setAttribute("data-seq", i);
    // 각 li마다 새로운 속성인 "data-seq"에
    // 순서대로 0부터 값을 넣어준다
  } ///////// for //////////

  // 3. 이동버튼에 클릭이벤트 설정
  // 이동버튼요소
  const abtn = document.querySelectorAll(".abtn");
  // console.log("이동버튼",abtn);


  // 광클금지용 변수
  let prot = 0; // 0-허용, 1-금지


  // 버튼개수만큼 for of로 클릭이벤트 설정
  for (let x of abtn) { // x는 a요소자신

    x.onclick = () => {

      // console.log("광클막기:", prot);

      /////////// 광클금지 //////////
      if (prot) return false; // 돌아가 설정
      prot = 1; // 잠금 설정
      setTimeout(() => prot = 0, 410);
      // 타임아웃으로 슬라이드 이동후 
      // 잠금설정을 prot=0으로 해제
      ///////////////////////////////

      // 인터벌지우기 함수 호출: 
      // 버튼 클릭시에는 자동넘김이 지워짐
      clearAuto();

      // 1) 오른쪽버튼 여부
      let isR = x.classList.contains("ab2");
      // console.log(".ab2인가?",isR);
      // 오른쪽버튼은 true, 왼쪽버튼은 false 찍힘
      // classList.contains(클래스명)
      // -> 지정클래스가 있으면 true리턴

      // 2) 오른쪽/왼쪽버튼 분기하기
      if (isR) { // 오른쪽버튼/////

        // 오른쪽 이동함수 호출
        goRight();

      } //////// if문 ///////
      else { // 왼쪽버튼 /////

        // 1. 맨뒤 li가 맨앞으로 이동
        // li들 
        let lis = slide.querySelectorAll("li");
        // insertBefor(넣을놈, 넣을놈전놈)
        // insertBefor(맨뒤li, 맨앞li)
        slide.insertBefore(lis[lis.length - 1], lis[0]);
        // lis[lis.length-1] -> 맨뒤li  lis[전체개수-1]
        // lis[0] -> 맨앞li

        // 2. 동시에 left:-100% + 트랜지션없앰
        slide.style.left = "-100%";
        slide.style.transition = "none";

        // 위의 이동소스와 약간의 시차 필요함!
        // setTimeout(함수,시간) -> 0.01초 시차
        setTimeout(() => {
          // 3. left:0 + 트랜지션
          slide.style.left = "0";
          slide.style.transition = "left .4s ease-out";

        }, 10); //// 타임아웃 //// 

        // 4. 불릿작동함수 호출!
        // : 왼쪽버튼 눌렀을 때 불릿도 색깔바뀌며 오른쪽으로 옮겨감
        goIndic(0);
        // 파라미터값으로 0  -> 왼쪽은 0

      } ///// else문 //////////

      return false;
      // a요소 튀지않게(버튼눌렀을때 튀지않게함 return false);

    }; //////// click /////////

  } /////////// for of /////////////


  /*************************************** 
    함수명: goIndic
    기능: 불릿표시자 작동하기
  ***************************************/
  const goIndic = (isR) => { // isR : 오른쪽1, 왼쪽0 값이 isR로 들어옴

    // [ 공통기능 : 불릿변경하기 ]

    // 불릿 class="on" 지우기 초기화
    for (let x of indic)
      x.classList.remove("on");

    // 첫번째 슬라이드 "data-seq"값을 읽어와서 
    // 불릿 순번에 적용하기
    // 주의: 오른쪽버튼은 [1], 왼쪽버튼은 [0]
    // 즉 오른쪽은 두번째li, 왼쪽은 첫번째li
    // 오른쪽 버튼이면 isR 변수값이 true
    // isR?1:0 -> 비?집:놀이동산(조건연산자===삼항연산자)
    // isR값이 true이면 1, 아니면 0

    let fseq = slide
      .querySelectorAll("li")[isR ? 1 : 0]
      .getAttribute("data-seq");
    // getAttribute(속성명) -> 속성값을 읽어옴


    // console.log("오른쪽/왼쪽다름:",isR?1:0);

    // console.log("fseq의 값:",fseq);
    // console.log("fseq의 형:",typeof fseq);

    indic[fseq].classList.add("on");
    // 원래는 fseq는 숫자값인데 숫자형이어야 함
    // 그래서 Number(fseq)로 형변환해야 했음
    // 그런데 요즘 브라우저에서는 
    // 이런부분을 형변환하지 않아도
    // 숫자이면 숫자형으로 변환해줌

  }; ///////// goIndic 함수 //////////////
  ////////////////////////////////////////


  /*************************************** 
    함수명: goRight
    기능: 오른쪽 슬라이드 이동기능
  ***************************************/
  const goRight = () => {

    // 1. 슬라이드 left: -100% + 트랜지션
    slide.style.left = "-100%";
    slide.style.transition = "left .4s ease-out";

    // 이동후 실행 -> 이동시간은 0.4초
    // setTimeout(함수,시간) -> 일정시간 후 한번실행!
    setTimeout(() => {

      // 2. 첫번째 li를 맨뒤로 이동
      // 슬라이드 li들 중에 첫째 li 를 변수 fli 에 담아서
      let fli = slide.querySelectorAll("li")[0];
      // 맨뒤로 이동
      slide.appendChild(fli);

      // 3. 동시에 left값 0 
      slide.style.left = "0";
      // 이때 트랜지션 해제 : none 해야 해제됨
      slide.style.transition = "none";

    }, 400); ////// 타임아웃 //////


    // 4. 불릿작동함수 호출
    // : 오른쪽버튼 눌렀을 때 불릿도 색깔바뀌며 오른쪽으로 옮겨감
    goIndic(1); // 오른쪽은 전달값 1


  }; //////////// goRight 함수 /////////////////
  //////////////////////////////////////////////

  // 인터벌용 변수: 넣다 뺐다 해야함 
  // => 수동으로 화살표 클릭시 꺼져야 함
  let autoI;


  // 인터벌 세팅(자동넘김 해주는 것) 함수 ////////
  const autoCall = () =>
    autoI = setInterval(goRight, 2000);

  // 인터벌 세팅함수 최초호출!
  autoCall();

  // 타임아웃용 변수
  let autoT;

  // 인터벌지우기 함수 //////////////////////////
  const clearAuto = () => {
    console.log("인터벌지움!");

    // 인터벌 지우기
    clearInterval(autoI);

    // 타임아웃 지우기(실행쓰나미방지!)
    // 광클후 한꺼번에 몰려와서 막 실행하는 것 방지 
    clearTimeout(autoT);

    // 일정시간 후 인터벌 세팅. 
    // 4초후에 autoCall함수 세팅
    autoT = setTimeout(autoCall, 4000);
    // 매번 타임아웃을 변수에 담고 먼저 지우기 때문에
    // 최종적으로 남는 타임아웃은 하나뿐이다
    // 따라서 타임아웃 실행쓰나미가 발생하지 않는다


  }; //////////// clearAuto 함수 ////////////////


}; //////////////// loadFn 함수 /////////////////
/////////////////////////////////////////////////


/*************************************************** 
  함수명: showGNB
  기능 : GNB메뉴를 보였다 숨기기 위해
  미리 세팅된 클래스 on을 .top에 넣고/뺌 
 **************************************************/
function showGNB() {
  // 1.함수호출 확인
  console.log('나야나');

  // 2.변경대상: .top
  let tg = document.querySelector(".top")

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

}; ////////////////// showGNB 함수///////////////////
////////////////////////////////////////////////////


/*************************************************** 
  함수명: onClickShowVideo
  기능 : 슬레이트 버튼을 클릭하면 동영상이 
  슬라이드 영역에 나타나 재생되고
  x버튼 클릭하면 동영상 창이 닫힘
 **************************************************/
function onClickshowVideo() {

  // alert("비디오?");

  // 슬레이트버튼 클릭하면 슬라이드 위치에 동영상재생됨 
  // 슬라이드 영역에 지정해 변수에 담음
  const popupMovie = document.querySelector("#popupMovie");

  popupMovie.innerHTML = `
    <div id="mv">
    <!-- 유튜브 아이프레임 -->
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/VvKlM51Rgeo?autoplay=1" title="Friends: The Reunion - Official Teaser Trailer (2021) HBO Max" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 


    <!--닫기버튼-->
    <button class="cbtn">×</button>
    </div>  
  `;

  // 유튜브 디자인/위치 변경

  popupMovie.style.position = "absolute";
  popupMovie.style.display = "block";
  popupMovie.style.top = "0%";
  popupMovie.style.left = "0%";
  popupMovie.style.width = "100%";
  popupMovie.style.height = "100%";
  popupMovie.style.backgroundColor = "#000";

  // 유튜브 디자인/위치 변경
  const mv = document.querySelector("#mv");

  mv.style.position = "absolute";
  mv.style.top = "0%";
  mv.style.left = "0%";
  mv.style.width = "100%";
  mv.style.height = "100%";
  mv.style.backgroundColor = "#000";


  // 닫기버튼 디자인/위치 변경
  const cbtn = document.querySelector(".cbtn");

  cbtn.style.position = "absolute";
  cbtn.style.top = "0";
  cbtn.style.right = "-5px";
  cbtn.style.width = "50px";
  cbtn.style.height = "50px";
  cbtn.style.backgroundColor = "transparent";
  cbtn.style.border = "none";
  cbtn.style.color = "#fff";
  cbtn.style.fontSize = "40px";
  cbtn.style.fontWeight = "bold";
  cbtn.style.borderRadius = "50%";
  cbtn.style.cursor = "pointer";

  // 닫기버튼 cbtn 변수 클릭하면 유튜브 제거되는 함수 할당(실행)
  cbtn.onclick = () => {mv.remove();
    popupMovie.style.display = "none";
  }


}; //////////// onClickShowVideo 함수////////////////
/////////////////////////////////////////////////////