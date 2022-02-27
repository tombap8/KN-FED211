window.addEventListener("DOMContentLoaded",
    () => {
        console.log('로딩완료');

        /// 부드러운 스크롤 호출!(제이쿼리 아님!)
        startSS();

        // (1) 스크롤 위치값
        let scTop;
        // (2) 스크롤 등장요소 위치값
        let scPos = []; // 배열변수
        // (3) 스크롤 등장요소
        let scAct = document.querySelectorAll(".scAct");
        // (4) 타이틀 박스
        let titBx = document.querySelector(".cont1");

        // (5) PARKS MANAGEMENT 글자 흐르기
        let comp = document.querySelector('.cont2');


        let winH = window.innerHeight / 2;

        // .scAct위치값 셋업
        let inum = 0;
        for (let x of scAct) {
            // console.log($(x).offset().top);
            scPos[inum] = $(x).offset().top;
            inum++;
        }

        console.log(scPos);

        // 위치액션
        const showAct = seq => {

            if (scTop > scPos[seq] - winH &&
                scTop < scPos[seq]) {
                $(scAct[seq]).addClass('on');
            } //// if /////
        }; ////////// showAct /////////////



        // News 타이틀 요소
        let newsEle = $(".cont2 h1");
        let neH = newsEle.offset().top;
        let parksFlow = $(".parksFlow").offset().top;




        /////// 타이틀 스크롤 액션 구역 ///////////////
        window.addEventListener("scroll", () => {

            // 스크롤 위치값
            scTop = this.scrollY;
            console.log("스크롤위치:", scTop);

            let stopF = 0; //한번만실행변수

            // news타이틀 글자를 고정함!
            if (scTop > neH - 100 && scTop < parksFlow - 100) {
                newsEle.css({
                    position: "fixed",
                    top: "100px",
                    zIndex: "999"
                })
                stopF = 0;
            } else if (scTop >= parksFlow - 200 && !stopF) {
                if (stopF) return;
                stopF = 1; //한번만 실행

                newsEle.css({
                    position: "absolute",
                    top: (parksFlow - 200 - winH * 2) + "px"
                })
            } else { // 기타 경우 기존 넣은 값 지움!
                newsEle.attr("style", "");
                stopF = 0;
            }

            // 타이틀 글자 움직이기
            if (scTop < 50) {
                titBx.style.left = "0";
            } else if (scTop < 200) {
                titBx.style.left = "-50%";
            } else if (scTop < 400) {
                titBx.style.left = "-80%";
            } else if (scTop < 500) {
                titBx.style.left = "-100%";
            }

            // PARKS MANAGEMENT 움직이기
            // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
            /* if (scTop < 4120) {
                comp.style.left = '0';
            } else if (scTop < 4250) {
                comp.style.left = '-40%';
            } else if (scTop < 4400) {
                comp.style.left = '-70%';
            } else if (scTop < 4600) {
                comp.style.left = '-100%';
            } */

            for (let i = 0; i < scAct.length; i++) showAct(i);


        }); ////////////// 타이틀 scroll //////////////////





        /* ************************************ */

        //////// 탑버튼 //////////
        let tbtn = document.querySelector(".tbtn");

        // 탑버튼 클릭 시 위로가기
        tbtn.onclick = () => {
            pos = 0;
            // return false;
        };

        window.addEventListener('scroll', () => {

            scTop = this.scrollY;

            // 탑버튼 위로 올라오기
            if (scTop > 500) {
                tbtn.classList.add("on");
            } /////////// if ////////////
            else {
                tbtn.classList.remove("on");
            } /////////// else ///////////

            // scPos.forEach((val, idx) => scAction(idx));


        }) // 탑버튼 스크롤 //////////////////



        // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        // 하위메뉴 - smenu 마우스 오버 시 펼침
        // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

        /* let smenu = document.querySelectorAll('.smenu');

        for (let x of smenu) {

            // 마우스 오버
            x.onmouseover = () => {

                // smenu - Artist 하위요소
                let tg = x.querySelector('div');
                // 아티스트 이름 2개
                let hv = tg.querySelector('ol').offsetHeight;

                // smenu 펼치기
                tg.style.height = (hv + 10) + 'px';
                tg.style.transition = 'height .4s ease-out';
            }; // 마우스 오버 ////

            x.onmouseout = () => {
                let tg = x.querySelector('div');
                tg.style.height = '0';
            }; // 마우스 아웃 ////

        } */ // for of ////



        // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        // 컨텐츠2 잡지 이미지 6개  ///////////////
        // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

        // window.addEventListener('load', () => {

        //     console.log("로딩완료!");

        //     // 이미지 번호
        //     let num = 1;

        //     // 잡지 이미지
        //     let tg = document.querySelector(".pics img");

        //     // 스크롤 시 잡지 이미지 변경
        //     const chgImg = magaz => {
        //         console.log("매거진!", magaz);

        //         tg.setAttribute('src', `./images/pics${num}.jpg`)
        //     }

        // })


    }); /////////////// load /////////////////////////



// MOUSEMOVE /////////////////////////
$(() => { // jQB /////////////////////

    /* mousemove */
    let mbx = $('#mbx');
    let hz = mbx.width() / 2;

    $('body').mousemove((e) => { // e 이벤트 전달변수

        let posx = e.pageX - hz;
        let posy = e.pageY - hz;

        mbx.css({
            top: posy + 'px',
            left: posx + 'px'
        }) // css //////////
    }) // mousemove //////////

}); // jQB /////////////////////

