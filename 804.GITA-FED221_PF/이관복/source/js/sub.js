// 페이지 로딩 완료 후
window.addEventListener("DOMContentLoaded",()=>{
    // 스크롤값 변수
    let scTop;
    // .loAct 클래스의 위치값 가져 와서 배열에 담기
    let loAct = document.querySelectorAll(".loAct");
    const scPos =[];
    for(let i=0; i<loAct.length; i++) {
        scPos[i] = loAct[i].offsetTop;
    }
    
    // 스크롤 이벤트 시 체크
    window.addEventListener("scroll", ()=>{     
        // 스크롤시 시크롤 위치값 셋팅
        scTop = this.scrollY;
        scPos.forEach((val,idx)=>loAction(idx));
    });

    const winH = (window.innerHeight / 3) *2; // 위치값 조정

    // 스크롤 이벤트 발생시 체크 하는 함수
    const loAction = (seq) =>{ //seq 순번        
        // 조건 : 스크롤 위치가 포지션위치이전 보다 크고
        // 스크롤 위치가 포지션 위치보다 작으면
        if(scTop > scPos[seq]-winH && scTop < scPos[seq]) {
            loAct[seq].classList.add("on");
        }
   };
});