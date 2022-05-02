window.addEventListener("DOMContentLoaded", () => {

    let top = document.querySelector(".top");

    let logo = document.querySelector(".logo");

    top.onmouseover = () => {
        logo.classList.remove("fwh");
    }; ////////// top 마우스 오버
    top.onmouseout = () => {
        logo.classList.add("fwh");
    } /////// top 마우스 아웃


    // Go! 클릭 함수

    // 이벤트대상: div.Go 
    let Go = document.querySelector(".Go");

    let GoDown = document.querySelector(".GoDown");

    let bgvideo = document.querySelector("#bgvideo");

    let matbx = document.querySelector(".matbx");

    let lArrow = document.querySelector(".lArrow");

    let sns = document.querySelector(".sns");

    Go.onclick = () => {

        // 변경대상: .top .Go .GoDown - display: none , #bgvideo - fliter: brightness(15%) , .matbx - classList.add("on")

        matbx.style.transition = "right .4s ease-out";
        lArrow.style.transition = "left .4s ease-out";

        Go.style.display = "none";
        GoDown.style.display = "none";
        top.classList.add("on");
        bgvideo.style.filter = "brightness(15%)";
        lArrow.style.left = "2%"
        logo.classList.remove("fwh");

        matbx.classList.add("on");

        top.onmouseout = () => {
            logo.classList.remove("fwh");
        };

        sns.classList.add("on");


    }; ////// onclick

    lArrow.onclick = () => {

        Go.style.display = "block";
        GoDown.style.display = "block";
        top.classList.remove("on");
        bgvideo.style.filter = "brightness(50%)";
        lArrow.style.left = "102%"

        lArrow.style.transition = "none";
        matbx.style.transition = "none";
        matbx.classList.remove("on");
        logo.classList.add("fwh");

        top.onmouseout = () => {
            logo.classList.add("fwh");
        } /////// top 마우스 아웃
        
        sns.classList.remove("on");
    }; ////// onclick


    // 변경대상: #slide top값
    let slide = document.querySelector("#slide");

    // 이미지 변경 함수
    const chgImg = () => {

        // top값을 -100%로 이동
        slide.style.top = "-100%";
        slide.style.transition = ".6s ease-out";

        // #slide li 요소 변수 할당
        let sli = slide.querySelectorAll("li")

        // 맨 앞 이미지를 맨 뒤로 보내고 top값을 0으로 바꿈
        setTimeout(() => {
            slide.appendChild(sli[0]);

            slide.style.top = 0;
            slide.style.transition = "none";
        }, 600); ///////// setTimeout
    }; //////////// chgImg

    setInterval(() => chgImg(), 1200);


    // window.addEventListener("scroll", ()=>{
    //     let scVal = this.scrollY;
    //     console.log(scVal);

    //     if(scVal + appbx.offsetTop >=bxPos){
    //         appbx.style.position = "fixed";
    //         appbx.style.top = "80%";      
    //     } ////// if
    //     else {
    //         appbx.style.position = "absolute";
    //         appbx.style.top = "13%";
    //     }
    // }); //////// scroll

    // let txtbx = document.querySelector(".txtbx");
    // console.log(txtbx.offsetHeight);
    // let appbx = document.querySelector(".apply");
    // console.log(appbx.offsetTop);
    // let bxPos = appbx.getBoundingClientRect().top
    // ;
    // console.log("지원박스 포지션: ", bxPos);

    let rnum = Math.random();

    rnum *= 6;
    
    rnum = Math.ceil(rnum);
    console.log(rnum);

    let bgvd = document.querySelector("#bgvideo");

    bgvd.setAttribute("src",`./videos/video0${rnum}.mp4`)
}); //////////////// load /////////////////