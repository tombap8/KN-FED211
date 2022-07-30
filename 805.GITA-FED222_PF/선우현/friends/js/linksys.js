// FRIENDS PJ : 링크 시스템 - linksys.js ///

/////////////////////////////////
// html 로드 후 실행하기 설정 ////
/////////////////////////////////

// window 윈도우객체 - html문서 최상위 객체다!
// window객체에 load이벤트를 설정하면 된다!
// load이벤트는 html요소를 모두 로딩후 발생함!
// 윈도우에 load이벤트가 발생하면 linkFn 함수를 실행해
window.addEventListener("load", linkFn);
// 선택요소/객체.addEventListener(이벤트명,함수)
// -> 선택요소 또는 객체에 이벤트 발생시 함수를 실행함 
// 원래 함수호출은 함수명() -> 소괄호가 있어야하지만 
// addEventListener 메서드는 함수명만 써도 함수와 연결한다!


/********************************************************** \
  함수명: linkFn
  기능: GNB메뉴의 a링크를 클릭하면 해당 페이지로 이동하도록 a요소에 세팅한다
  주의사항: 본 함수는 반드시 html이 모두 로딩된 후에 호출해야 함
  왜냐면 세팅을 할 대상들이 있어야 세팅을 하니까
  
  **********************************************************/
function linkFn() {

  // 1. 함수호출확인
  console.log("고고싱~!");

  // 2. 대상선정: .top a -> 상단영역의 모든 a
  // 변수 만들어주고 접근(선택함 -> .top 밑의 a가 여러개니까 querySelectorAll)
  var alink = document.querySelectorAll(".top a,.sns a");
  console.log("a링크 개수:", alink.length, alink);
  // length는 컬렉션 집합의 개수
  // html 요소가 여러개 담긴 메모리공간을 컬렉션이라고 함
  // 구체적인 요소는 컬렉션[순번] / 컬렉션.item(순번)

  // 3. 각 a요소에 클릭설정하기 :29개 a에 모두 걸어줌
  // a요소 컬렉션 개수만큼 돌면서 클릭이벤트 설정하기
  // for(시;한;증){코드}
  // 시작값은 컬렉션 첫번호인 0부터 시작함
  // 한계값은 컬렉션 개수보다 작을때까지임
  // 증감은 i++로 1씩 증가하여 한계값에 접근함
  // 시작값은 i 컬렉션번호 0번부터; 한계값은 i가 alink.length의 갯수보다 작을 때까지; i를 1씩 증가시킴
  for (var i = 0; i < alink.length; i++) {
    // alink[순번] -> 구체적인 a요소(0~28번까지 들어옴)
    // alink.item(순번) -> 위와 같은 것. 여러개 중 몇번째
    // function(){코드} -> 이름없는 함수. 코드를 간직하고만 있음
    // 이름없는 함수를 이벤트속성에 할당해야 코드가 바로 실행되지 않고 이벤트가 발생할 때 실행됨
    // 그때까지 오른쪽의 함수코드는 onclick에 저장되어있음
    alink[i].onclick = function () {
      // 클릭된 a요소 자신 -> this
      // this.innerText 는 a요소 글자
      console.log(this.innerText);

      // 1) a요소 텍스트 읽어오기
      var txt = this.innerText;
      // console.log(txt);

      // 2) 텍스트에 따라 이동할 페이지 분기하기
      // switch case 사용

      // 이동주소 변수
      var url;

      switch (txt.trim()) {
        case "로고":
          url = "index.html";
          break;
        case "인스타":
          url = "https://www.instagram.com/friends/";
          break;
        case "트위터":
          url = "https://twitter.com/friendstv";
          break;
        case "imdb":
          url = "https://www.imdb.com/title/tt0108778/";
          break;

        default:
          url = "etc";
          // console.log(txt);
      } ////// switch case //////////


      // 페이지별 이동

      // txt가 etc면 alert창으로 문구 띄움
      if (url === "etc")
        alert(`${txt} 페이지는 오픈 준비중입니다`);
        else if(txt==="인스타"||txt==="트위터"||txt==="imdb")
        window.open().location.href = url; 
        // window.open() 새창열기
      else
        location = url;
      // location.href = 주소 -> 현재창 주소이동 

      // a요소는 기본적으로 이동하는 특성이 있다
      // 이것을 막기 위해서 본 함수를 빠져나갈 때 
      // 모든 기본 기능을 못하게 막는 것이 return false 설정이다
      return false;
      // 본 코드 맨 끝에 해야함 (위에서 하면 만나는 순간 빠져나감)



    }; /////// click 이벤트 함수 //////



  } //////////// for //////////////



} ///////////////////// linkFn함수 //////////////////////////
/////////////////////////////////////////////////////////////