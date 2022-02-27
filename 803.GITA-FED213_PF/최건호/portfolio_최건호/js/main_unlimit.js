// 로드구역 ////////
window.addEventListener("load", () => {

    console.log("로딩완료!");

    /***************************************************************************** 
        [슬라이드 이동 기능정의]
        1.이벤트 종류 : 클릭
        2.이벤트 대상 : 이동버튼(.abtn)
        3.변경 대상 : 슬라이드 박스(#slide)
        4.기능흐름 : 
        (1) 오른쪽버튼 클릭시 
        -선행:-100%로 하나의 슬라이드를 이동한다
        -후행:왼쪽에 나가있는 첫번째 슬라이드를 잘라서 맨뒤로 이동시킨다
        이때 left값을 다시 0으로 초기화한다!
        (기존 트랜지션을 지워야 초기화과정이 숨겨진다)
        그래야 슬라이드가 튀지 않는다!
        (2) 왼쪽버튼 클릭시 
        -선행:맨뒤의 슬라이드를 잘라서 맨앞으로 이동함
        이때 left값을 -100%로 왼쪽 앞에 공간을 만든다!
        (트랜지션을 지워서 이과정이 안보이게 함!)
        -후행:트랜지션으로 left가 0되면서 왼쪽에서 슬라이드가
        이동하여 들어온다!
        5.추가기능 : 슬라이드 위치표시 블릿
        -블릿대상 : .indic
        -변경내용 : 슬라이드 순번과 같은 순번의 li에 클래스 "on"주기
        (나머지 빼기-초기화)
        6.광클릭시 슬라이드 이동 막기
        -슬라이드가 이동하는 동안 실행을 막아준다
        -전역변수를 생성하여 이값이 1일 동안 못들어오게함
        -다시 슬라이드 이동 후 시간에는 0으로 해제해준다!
        7.자동 슬라이드 넘김 기능
        -슬라이드가 일정시간 간격으로 자동으로 넘어감
        -슬라이드를 수동으로 버튼 클릭시엔 자동넘김 멈춤
        -일정시간동안 수동 조작이 없으면 다시 자동넘김작동
        *****************************************************************************/

    // 이벤트 대상 : .abtn
    let abtn = document.querySelectorAll(".abtn");
    // 변경 대상 : #slide
    let slide = document.querySelector("#slide")
    // 추가 대상 : .indic li
    let indic = document.querySelectorAll(".indic li");

    // 슬라이드 개수 구해오기
    const scnt = document.querySelectorAll('#slide li').length;


    // 광클금지 상태변수
    let prot = 0;
    // 0-허용 1-불허용


    // 등장글자 배열
    let stxt = [
        "LIGHTSPEED 무선",
        "하나의 앱으로. 모든 기어 제어",
        "베스트셀러",
        "L게이밍 키보드"
    ];

    /******************************************************* 
    		함수명:showTxt
    		기능: 배너이동후 글자보이기
    *******************************************************/
    const showTxt = () => {

        console.log("글자등장");

        // 기존에 만들어졌을 수 있는 .sldtit를 지운다!
        $(".sldtit").remove();

        // 대상:첫번째 슬라이드 !
        let tg = $("#slide li").first();
        $("#slide li").css({position:"relative"})

        // 슬라이드 순번
        let snum = tg.attr("class").substring(1);

        // 글자태그만들기
        let txt = `<h2 class="sldtit">${stxt[snum]}</h2>`;

        // 글자태그 넣기:기존이미지 다음에 추가
        tg.append(txt);

        // 글자디자인잡기
        $(".sldtit").css({
                position: "absolute",
                top: "60%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                whiteSpace: "nowrap",
                color: "#fff",
                textShadow: "1px 1px 1px #000",
                fontSize: "min(3vw,30px)",
                opacity: "0"
            }) ////////css //////////////////////////////////
            .animate({
                top: "50%",
                opacity: "1"
            }, 400);


    } ////////////// showTxt /////////////////////////////////

    // 최초호출
    setTimeout(showTxt, 1000);

    // 글자등장함수 호출함수! 이동시간후!
    let callT;
    const callshow = () => {
        clearTimeout(callT); //기존설정지우기
        callT = setTimeout(showTxt, 1000);
    }; ///////////// callshow //////////////////////////////////




    // 슬라이드가 잘려지므로 처음에 슬라이드 li에
    // 클래스를 순번에 맞게 부여해 준다!
    for (let i = 0; i < scnt; i++) {
        slide.querySelectorAll("li")[i].classList.add("s" + i);
    } /////// for //////////////////////////////////


    // 오른쪽버튼 클릭시
    abtn[1].onclick = () => {
        goSlide(1);
        clearAuto(); //자동넘김지우기
        return false; //
    }
    ////// click ////////////////////////////////////

    // 왼쪽버튼 클릭시
    abtn[0].onclick = () => {
        goSlide(0);
        clearAuto(); //자동넘김지우기
        return false; //
    }
    ////// click ////////////////////////////////////

    // 슬라이드 번호 전역변수
    let snum = 0;

    



    /*************************************************** 
        함수명 : goSlide
        기능 : 슬라이드를 다음/이전 슬라이드로 
                이동시킨다!
    ***************************************************/
    const goSlide = dir => {
        // dir - 전달변수(1-오른쪽,0-왼쪽)
        // console.log("이동함수!",dir);


        //////// 광클금지 ///////////
        if (prot) return false; //돌아가!(기본막기)
        prot = 1; //잠금상태(뒷신호부터 잠긴다!)
        setTimeout(() => {
            prot = 0
        }, 400);
        // 0.41초후에 다시 허용상태로 변경!
        // 0.41초는 기존 이동 트랜지션 시간은 0.4초지만
        // 왼쪽버튼 클릭시 실행시간간격이 0.01초있기에
        // 이것까지 고려하여 0.41초를 기다린 후 허용함!


        // 1.분기하기
        // (1) 오른쪽버튼
        if (dir) {
            // 2.이동하기 : 슬라이드의 left값을 변경함
            slide.style.left = "-100%";
            slide.style.transition = "left .4s ease-in-out";

            // 2. 이동후 잘라서 끝으로 이동 + left:0
            // 이동후 -> setTimeout(함수,시간)
            // 0.4초후 함수실행!
            setTimeout(() => {
                // 2-1.첫번째 슬라이드 맨뒤로이동
                slide.appendChild(slide.querySelectorAll("li")[0]);
                // 첫번째 슬라이드 선택:#slide>li중 1번
                // 맨뒤로 이동:appendChild(요소)

                // 2-2.left값 초기화 + 트랜지션해제!
                slide.style.left = "0";
                slide.style.transition = "none";
            }, 400); /////// setTimeout ////////
        } //////// if ///////////////////////////
        // (2) 왼쪽버튼
        else {
            // 1.맨뒤요소 맨앞으로 이동하기
            slide.insertBefore(
                slide.querySelectorAll("li")[scnt - 1],
                slide.querySelectorAll("li")[0]
            );
            // 맨뒤요소:#slide>li중 맨끝
            // 맨앞이동:insertBefore(넣을놈,넣을놈전놈)
            // insertBefore(맨뒤li,맨앞li)

            // 2.left값 -100%로 셋팅 + 트랜지션 없애기
            slide.style.left = "-100%";
            slide.style.transition = "none";

            // 3.left가 0, 트랜지션설정 - 슬라이드들어오기
            // 위의 같은 속성변경과 시차가 반드시 필요함!
            // setTimeout으로 시차를 줌(0.01초만 줘도됨)!
            setTimeout(() => {
                slide.style.left = "0";
                slide.style.transition = "left .4s ease-in-out";
            }, 10);

        } //// else ///////////////



        // 3.블릿표시 변경하기
        // (1) 초기화 : 모든 블릿li의 class "on"제거
        for (let x of indic) x.classList.remove("on");
        // (2) 적용하기 : 해당순번의 li에 class "on"넣기
        // 해당순번은 오른쪽이동과 왼쪽이동에 따라 다르다!
        // ->오른쪽이동일땐 슬라이드 1번, 왼쪽은 2번
        // 순번구할때 코드해석:
        // slide.querySelectorAll("li")[dir?1:0]
        // dir?1:0
        // ->dir변수가 1이면 true여서 1출력 아니면 0출력
        // 해당순번은 선택할 li요소의 class명의 뒷번호다!
        let clsnum = slide.querySelectorAll("li")[dir ? 1 : 0].getAttribute("class").substring(1);
        // substring(1) -> 2번째 문자부터 끝까지
        // -> 여기서는 "s번호"이므로 s뒤의 번호가 나옴
        // console.log("클래스명",clsnum);
        indic[clsnum].classList.add("on");

        setTimeout(showTxt,500);

        // a요소 기본이동막기!
        return false;


    }; ///////goSlide 함수 //////////////////////////////
    /////////////////////////////////////////////////////


    // 인터발용변수 
    let autoI; //지우기용
    /***************************************************** 
         함수명 : autoSlide 
         기능 : 인터발함수로 슬라이드 자동넘기기
    *****************************************************/
    const autoSlide = () => {
        autoI = setInterval(() => goSlide(1), 2000);
    }; /////// autoSlide 함수 /////////////////////////

    //  자동넘김 최초호출하기!(함수아래에서 호출해야함!) 
    // autoSlide();

    // 타임아웃용변수
    let autoT; //지우기용(실행쓰나미방지!)
    /******************************************************** 
        함수명 : clearAuto
        기능 : 자동넘김지우고 일정시간뒤 다시 자동호출
        ->오른쪽,왼쪽 이동버튼 클릭시에만 호출됨!
    ********************************************************/
    const clearAuto = () => {
        // 1.인터발지우기
        clearInterval(autoI);
        // 2.타임아웃 지우기 : 실행쓰나미 방지!
        clearTimeout(autoT);
        // 3.타임아웃 셋팅 : 일정시간뒤 인터발실행
        autoT = setTimeout(autoSlide, 3000);
        // 3초후 인터발호출, 2초후 인터발 최초실행
    }; ////////// clearAuto 함수 /////////////////////////
}); /////////// load ////////////////////////////////////////