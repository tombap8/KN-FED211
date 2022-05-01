// 로딩
$(document).ready(function(e){
    //상위 메뉴 보이기
    let gnb = $(".gnb");
    $("#ham").click(()=>{        
        gnb.toggleClass("on");
    });

    //상위 메뉴 숨기기    
    $("#cbtn").click(()=>{        
        gnb.toggleClass("on");
    });   


    // 이벤트 대상 : .abtn
    let abtn = document.querySelectorAll(".abtn");
    // 변경 대상 : 슬라이드 -> .bener
    let bener = document.querySelector(".bener");

    (()=>{
        // 대상 : #slide li
        let tg = bener.querySelectorAll("li");
        for(let i=0; i<tg.length; i++){
            tg[i].setAttribute("data-seq", i);
        }
        /// for ////////////////////////////////////////////////////
    })();

    // 광클금지 상태값
    let prot = 0; // 1-금지, 0-허용
    /***************************************************************
        함수명 : goSlide
        기능 : 슬라이드를 왼쪽/오른쪽 이동함
    ***************************************************************/ 
   const goSlide = (dir, gb) =>{
       
    let widthVal = window.innerWidth;
    console.log(widthVal);
    if(widthVal <= 1140) {
        return false;
    } 

    // dir - 이동방향(1:오른쪽,0:왼쪽)
    // gb - 구분코드(인터발호출일때만 값이 전달됨)
     console.log("잠금상태:", prot);
     // 0 광클금지 /////////////////
     if(prot) return; //돌아가
     prot = 1;
     setTimeout(()=>prot=0, 600);
     // 0.6초후 잠금해제! /////////////

     //1. 전달값 확인
     console.log("이동", dir, gb);

     //1.2. 버튼클릭시 gb전달값이 없는 경우
     //!gb 는 undefined인 경우 false 임 -> true처리
     if(!gb) clearAuto(); // 인터발 함수 삭제

     //1.5. 슬라이드 li요소들 변수할당!
     let sli = bener.querySelectorAll("li");

     //2. 방향분기 //////////////////////////////////////////////
     //2-1. 오른쪽 버튼
     if(dir) { // dir === 1 이면 true
         //(1) 슬라이드박스의 left값을 -100%로 이동
         bener.style.left = "-111.5%"
         bener.style.transition = "1s ease-out";

         // 슬라이드 이동후 (2), (3)실행함
         //(2) 이동후 첫번째 슬라이드 li를 잘라서 맨뒤로 보낸다!
         setTimeout(() => {
             // appendChild(요소) - 선택요소 맨뒤로 이동
             bener.appendChild(bener.querySelectorAll("li")[0]);
             //(3) 동시에 left값을 0으로 변경함!
             bener.style.left= "0";
             bener.style.transition = "none";
             // 트랜지션 없어야 애니메이션 안보임
         }, 1000);/// 타임 아웃 ///
     } else {
         // (1)먼저 맨뒤의 슬라이드 li를 맨 앞으로 이동시킨다!
         // insertBefore(넣을넘, 넣을놈전놈)
         // sli.length-1 -> 컬렉션 마지막번호는 [개수 -1]
         bener.insertBefore(sli[sli.length-1], sli[0]);

         //(2) 이때 left -100%로 변경한다!(트랜지션 없음!)
         bener.style.left = "-111.5%";
         bener.style.transition = "none";

         // 이때 left -100%로 변경한다!
         // (3) 이후 left 값을 0으로 변경하며 애니메이션함            
         // 주의 : 위의 설정코드 와 분리를 위해 setTimeout으로 약간의 시차를 줌!
         setTimeout(()=>{
             bener.style.left ="0";
             bener.style.transition = "1s ease-out";
         }, 10);
     }
     /// if 문 ////////////////////////////////////////////////

        // 3. 슬라이드 순번과 동일한 순번의 블릿변경하기
        // 변경방법: 슬라이드 li의 data-seq의 숫자를 읽어서
        // 블릿 li의 나머지 블릿은 모두 on을 없애고 해당순번에 class="on"을 준다!

        // 초기화!(class="on" 지우기)
        /*for(let x of indic) x.classList.remove("on");
        // 갱신된 li읽어오기! (오른쪽, 왼쪽이동후)
        let sld2 = slid.querySelectorAll("li");
        // 슬라이드 의 data-seq 의 값을 읽어옴!
        // getAttribute(속성명) - > 속성값읽어오기
        // setAttribute(속성명, 속성값) - > 속성값 넣기
        let seq = sld2[dir].getAttribute("data-seq");
        // 해당순번에 class="on" 넣기
        indic[seq].classList.add("on");
        */
    };
    // goSlide 함수 ////////////////////////////////////////////////

    // 오른쪽버튼 클릭시
    abtn[1].onclick = ()=> goSlide(1);
    // 왼쪽버튼 클릭시
    abtn[0].onclick = ()=> goSlide(0);

    /**************************************************************
         [ 인터발 자동호출의 조건 ]
        1. 일정시간 간격으로 슬라이드가 넘어감
        2. 사용자가 버튼조작을 할 경우 자동멈춤
        3. 일정시간 버튼조작이 없으면 다시 자동
    **************************************************************/
    let autoI;
    /////////////////////
    // 인터발 호출 함수 //
    /////////////////////
    const autoCall = ()=>{
        // 인터발 자동호출!
        // 지우기 위해 변수에 할당함!
        autoI = setInterval(() => {goSlide(1, 1);}, 2000);
    };
    /// autoCall 함수 ///////////////////////////////////////////////
    // 인터발 호출함수 최초 호출!
    autoCall();

    // 타임아웃용 변수
    let autoT;

    /////////////////////
    // 인터발 삭제 함수 //
    /////////////////////
    // -> 살라이드 이동버튼 클릭시 호출됨!
    const clearAuto =() =>{
        console.log("인터발지우기 + 타임아웃 지우기");

        // 1. 인터발지우기 + 타임아웃지우기
        //clearInterval(autoCall);
        clearInterval(autoI);
        clearTimeout(autoT);
        // 한번씩 셋팅되는 타임아웃을 안지우면
        // 여러개가 작동하여 실행쓰나미가 발행함!

        //2. 일정시간후 다시 인터발 호출하기!
        //4초후 autoCall() 함수 호출!
        autoT = setTimeout(autoCall, 4000);
    };
    /// clearAuto 함수 /////////////////////////////////////////////
});