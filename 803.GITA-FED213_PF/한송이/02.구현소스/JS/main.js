window.addEventListener("load", () => {

    console.log("로드완료!");

    /*  
        이벤트 종류: toggle
            1.변경대상:
        1) 네비게이션 .navbg 
        2) 사이드바 .sideBar
            2. 기능: 
        1) 햄버거버튼 클릭시 네비게이션 나오기, 다시 클릭하면 들어가기
        2) 사이드바 배경화면 불투명하게 바뀌기
    */
    let ham = document.querySelector(".ham");
    let nav = document.querySelector(".navbg");
    let sbar = document.querySelector(".sideBar");

    ham.onclick = () => {
        nav.classList.toggle("on");
        sbar.classList.toggle("on");
    }
    // top버튼 세팅
    let sctop;
    let topbtn = document.querySelector(".topbtn");
    window.addEventListener("scroll", () => {
        sctop = this.scrollY;
        // 1. 스크롤위치가 윈도우 전체 화면에서 500px초과일때
        if (sctop > 550) {
            topbtn.classList.add("on");
        } /////////// if ////////////
        // 2. 스크롤위치가 500px이하일때
        else {
            topbtn.classList.remove("on");
        } /////////// else ///////////

    })


    // (1) 스크롤 위치값
    let scTop;
    // (2) 스크롤 등장요소 위치값
    let scPos = []; // 배열변수
    // (3) 스크롤 등장요소
    let scAct = document.querySelectorAll(".scAct");
    // (4) 보이는 화면의 절반(등장위치보정)
    let winH = window.innerHeight / 1.5;
    // window.innerHeight는 윈도우의 창높이(스크롤미포함)

    /***********************************/

    /////////////////////////////////////////////
    /// 페이지 등장요소의 페이지 위치값 셋팅하기 ///
    /////////////////////////////////////////////
    // offsetTop은 선택요소의 맨위로 부터의 top값!
    // for(시작값;한계값;증감){코드}
    for (let i = 0; i < scAct.length; i++) {
        scPos[i] = scAct[i].offsetTop;
        // console.log("페이지위치값",i,"번째:",scPos[i]);
    } ///////// for문 ////////////////////////

    /****************************************** 
        함수명: scAction
        기능: 스크롤 위치값이 설정범위에 들어가면
            해당 순번의 요소가 등장한다!
    ******************************************/
    const scAction = seq => { // seq 순번

        // console.log("순번:",seq);

        if (scTop > scPos[seq] - winH && // 시작위치
            scTop < scPos[seq]) { // 끝위치
            scAct[seq].classList.add("on");
        } ///////// if ////////////////////

    }; /////////// scAction 함수 ////////////////////
    /////////////////////////////////////////////////

    window.addEventListener("scroll", () => {

        scTop = this.scrollY;
        scPos.forEach((val, idx) => scAction(idx));
    })

}) /////로드구역///




$(() => {
    // [ .pmenu 클릭시 스크롤 이동 애니메이션  ]

    // 5. 새로고침시 스크롤 맨 위로 이동하기!

    $("html,body").animate({
        scrollTop: "0"
    }, 100);
    $(".pmenu a").click(function (e) {
        e.preventDefault();

        //1. a요소의 href 속성 읽어오기
        let link = $(this).attr("href");
        console.log("링크:", link);

        //2. 해당 아이디요소의 위치 알아내기
        let pos = $(link).offset().top;

        //3. 스크롤 위치이동 애니메이션 

        $("html,body").animate({
            scrollTop: pos - 100 + "px"
        }, 300, "easeInCubic");

        //4. 클릭된 a요소의 부모 li에 클래스 on 넣기
        //-> CSS셋팅에 현재위치 표시자
        $(this).parent().addClass("on")
            .siblings() // 선택된 요소 이외의 다른 형제 요소 선택
            .removeClass("on") // 클래스 제거하기 ("on")
    }); ////////// click //////////
  
  
    let nsub1 = $('.nsub').first()
    let nmenu1= $('.nmenu').children("li").first();
    let nsub2 = $('.nsub').last()
    let nmenu2= $('.nmenu').children("li").eq(1);
    nmenu1.click(function () {
        nsub1.css({
            height: "100px",
            transition: "1s"
        })
    })
    nmenu2.click(function () {
        nsub2.css({
            height: "50px",
            transition: "1s"
        })
    })




}); //////////////jqb//////////