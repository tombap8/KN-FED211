

// 로드구역
window.addEventListener('load', () => {

    console.log('로딩완료');


    // 이벤트 대상: .abtn
    // let abtn = document.querySelectorAll(".abtn");
    // 변경 대상: #slide
    let slide = document.querySelector("#slide");
    // 추가 대상: .indic li
    let indic = document.querySelectorAll(".indic li");
    // 콘4 이미지 슬라이드 개수 구해오기
    const scnt =
        document.querySelectorAll("#slide li").length;
    // console.log("슬라이드개수:", scnt);

    // 콘4 텍스트 슬라이드 개수 구해오기
    // const c4text = document.querySelectorAll('.c4-text').length;
    // console.log('텍스트개수:',c4text);

    // 슬라이드가 순서가 바뀌므로 처음에 슬라이드 li에
    // 클래스를 순번에 맞게 부여해 준다!
    for (let i = 0; i < scnt; i++) {
        slide.querySelectorAll("li")[i]
            .classList.add("s" + i);
    } /////// for ///////////////////



    // 광클금지 상태변수
    let prot = 0;

    // // 슬라이드 번호 전역변수
    // let snum = 0

    /* 
        함수명: goSlide
        기능: 슬라이드를 다음/이전 슬라이드로 이동시킴
    */

    const goSlide = dir => {
        // dir - 전달변수(1-오른쪽,0-왼쪽)
        // console.log('이동함수',dir);

        // 광클 금지
        if (prot) return false;
        prot = 1; // 잠금상태
        setTimeout(() => {
            prot = 0;
        }, 410);


        // 1. 분기하기
        // 오른쪽버튼
        if (dir) { //dir이 1이면(1===true)

            // 1. 이동하기 - 슬라이드 left값 변경 
            slide.style.left = '-100%';
            slide.style.transition = 'left .4s ease-in-out';

            // 2. 이동 후 잘라서 끝으로 이동
            // 이동 후 -> setTimeout(함수,시간)
            setTimeout(() => {
                // 2-1. 첫번째 슬라이드 맨뒤로
                slide.appendChild(
                    slide.querySelectorAll('li')[0]);
                // 첫번째 슬라이드 선택: #slide>li 중 1번째
                // 맨뒤로 이동 appendChild

                // 2-2. left값 초기화 + 트랜지션 해제
                slide.style.left = '0';
                slide.style.transition = 'none';
            }, 400);

        }
        // 왼쪽버튼
        else {
            // 1. 맨뒤 요소 맨앞으로 이동
            slide.insertBefore(
                slide.querySelectorAll('li')[scnt - 1],
                slide.querySelectorAll('li')[0]
            );
            // 맨뒤 요소: #slide li중 맨 뒤
            // 맨앞 이동: insertBefore(넣을놈,그전놈)
            // insertBefore(맨뒤li,맨앞li)

            // 2. left값 -100%로 세팅 + 트랜지션 해제
            slide.style.left = '-100%';
            slide.style.transition = 'none';

            // 3. left가 0, 트랜지션 설정 - 슬라이드 들여오기
            // 위의 스타일과 같은 선상에 있으면 덮어써버림
            // 속성변경과 시차가 반드시 필요함
            // setTimeout으로 시차 주기
            setTimeout(() => {
                slide.style.left = '0';
                slide.style.transition = 'left .4s ease-in-out';
            }, 10);

        };

        // console.log('슬라이드번호:',snum);




        // a요소 기본이동막기!
        return false;

    }; // goSlide 함수 //////////////


    // 슬라이드 자동넘기기 /////////////////////////////////////
    // 인터발 변수
    let autoI; //지우기용

    /**************************************************** 
        함수명: autoSlide
        기능: 인터발 함수로 슬라이드 자동넘기기
    ****************************************************/

    const autoSlide = () => {
        autoI = setInterval(() => goSlide(1), 2000);
    };

    // 슬라이드 자동넘김 최초호출
    autoSlide();

    // 타임아웃용 변수
    let autoT; // 실행 쓰나미 방지

    /* 
        함수명: clearAuto
        기능: 자동넘김 지우기 후 일정시간 뒤 자동호출
            오른,왼쪽 버튼 클릭시에만 호출됨
    */
    
    const clearAuto = () => {
        // 1. 인터발 지우기
        clearInterval(autoI);
        // 2. 타임아웃 지우기 - 실행쓰나미 방지
        clearTimeout(autoT);
        // 3. 타임아웃 세팅: 일정시간 뒤 자동 인터발 실행
        autoT = setTimeout(autoSlide,3000);
    };

}); // 로드 //////////////////////////