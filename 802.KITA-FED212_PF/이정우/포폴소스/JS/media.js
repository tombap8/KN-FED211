// window.addEventListener("load"()=>{

// });

// 햄버거 버튼 나왔다가 안나왔다가 할때
// let hsts=1;//햄버거상태(0-없음,1-있음)

function showMenu(){

  // var ham =
  // document.querySelector(".ham");

  // 1.변경대상 선정 : .gnb
  // 선택요소를 gnb 라는 이름의 변수에 담는다
  var gnb = 
  document.getElementsByClassName("gnb").item(0);
  // 전체문서.가져와클래스(클래스명).몇번째(0)

  // 2. 변경내용 : 대상에게 클래스 "on"넣거나 빼기
  gnb.classList.toggle("on");


  // 햄버거 버튼 나왔다가 안나왔다가 할때
  // if(hsts)
  // ham.style.display = "none";
  // else
  // ham.style.display = "block";

  // // hsts상태를 반대로 만들기!
  // hsts===1? hsts =  0 : hsts = 1;
}

