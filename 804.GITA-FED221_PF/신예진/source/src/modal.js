// 서브페이지로 이동하는 버튼의 클래스 이름을 가져옵니다.
const btns = document.getElementsByClassName("btn");

// 클릭하여 내용 바꾸기
const cardnamebox = document.querySelector(".card");
const gallery = document.querySelector(".gallery_container");
const title = document.querySelector(".feetxt h2");
const mimg = document.querySelector(".sub-img");
const summary = document.querySelector(".feetxt span");
const desc = document.querySelectorAll(".feetxt p");
const memberfee = document.querySelectorAll(".memberfee p");
const before = document.querySelector(".before");
const sub1 = document.querySelector(".sub-container");
const sub2_txt = document.querySelector(".sub2-txt");
// 상위 요소 박스만 잡고 안에 넣을 이미지와 span은 아래에서 코드생성함!
const sub2_ibx = document.querySelector(".sub2-img-box");
const s2span =document.querySelector(".s2span");
let funcs = [];

// Modal을 띄우고 닫는 클릭 이벤트를 정의한 함수
function Modal(num) {
  return function () {
    // 해당 클래스의 내용을 클릭하면 Modal을 띄웁니다.
    btns[num].onclick = function () {
      // data-id 출력
      let id = btns[num].dataset.id;
      // id에 따른 객체 데이터 읽어오기
      let data = deck[id];

      // data-id에따라 바뀌는 내용
      mimg.style.backgroundImage = `url(images/${id}all.png)`;
      title.innerText = data["타이틀"];
      summary.innerText = data["요약"];
      sub2_txt.innerText = `${data["타이틀"]}의
      특별한 디자인을 소개합니다.`;
      data["설명"].forEach((val, idx) => {
        desc[idx].innerText = val;
      });
      data["요금"].forEach((val, idx) => {
        memberfee[idx].innerText = val;
      });
      
      // 코드 변수만들기 ///
      let itemp="<ul>";
      data["디자인"].forEach((val, idx) => {
        itemp += 
        `<li class="s2span">
            <img src="images/${val}" alt="image">
            <span>${data["디자인이름"][idx]}</span>
        </li>`;
      });
      itemp += "</ul>";
      // 대상요소에 코드 할당하기 //
      sub2_ibx.innerHTML = itemp;
      ScaleFunction();
      ////////// 숨기고 보이기  //////////
      gallery.style.display = "none";
      cardnamebox.style.display = "none";
      sub1.style = "display:block";
      before.style = "display:block";
      before.addEventListener("click", () => {
        before.style = "display:none";
        sub1.style = "display:none";
        gallery.style.display = "flex";
        cardnamebox.style.display = "block";
      });
    };
  };
}
// 원하는 Modal 수만큼 Modal 함수를 호출해서 funcs 함수에 정의합니다.
// funcs=[Modal(0),[Modal(1),[Modal(2).....[Modal(8)]
for (var i = 0; i < btns.length; i++) {
  funcs[i] = Modal(i);
}

// 원하는 Modal 수만큼 funcs 함수를 호출합니다.
// funcs[0](); funcs[1](); funcs[2]();.....funcs[8]();
for (var j = 0; j < btns.length; j++) {
  funcs[j]();
}
// 페이지2 영역에 스크롤시 카드가 작아지고 카드명이 커지는 효과.
function ScaleFunction() {
  window.addEventListener("scroll", () => {
    const scrollPosition = document.documentElement.scrollTop;
    if (scrollPosition >= "900") {
      document.querySelector(".sub2-img-box ul").style.transform = "scale(0.8)";
      // sub2_name 대신 sub2_ibx로 처리!
      for (var i = 0; i < sub2_ibx.length; i++) {
        sub2_ibx[i].querySelector("span").style.transform = "scale(1.4)";
      }
    } else {
      document.querySelector(".sub2-img-box ul").style.transform = "scale(1)";
      // sub2_name 대신 sub2_ibx로 처리!
      for (var i = 0; i < sub2_ibx.length; i++) {
        sub2_ibx[i].querySelector("span").style.transform = "scale(1)";
      }
    }
  });
}
var deck = {
  green: {
    타이틀: "the Green Edition2",
    요약: "My First Luxury",
    설명: [
      "자유와 모험을 즐기는, 나의 첫 럭셔리 카드",
      "국내외 여행·해외쇼핑 5% 적립",
    ],
    요금: ["본인 150,000원", "본인 150,000원", "본인 150,000원"],
    디자인: [
      "green1.png",
      "green2.png",
      "green3.png",
      "green4.png",
      "green5.png",
    ],
    디자인이름: ["Monster", "Toxic", "Crack", "Mohican", "Satin"],
  },
  red: {
    타이틀: "the Red Edition5",
    요약: "My Hot Luxury",
    설명: ["럭셔리 라이프스타일을 매순간 더 핫하게", "20만원 프리미엄 바우처"],
    요금: ["본인 300,000원", "본인 300,000원", "본인 300,000원"],
    디자인: ["red1.png", "red2.png", "red3.png", "red4.png", "red5.png"],
    디자인이름: ["Enamel", "Fur", "Marker", "Satin", "Art Deco"],
  },
  pink: {
    타이틀: "the Pink",
    요약: "My First Seduction",
    설명: ["프로쇼퍼들의 필수 럭셔리 카드", "프리미엄쇼핑·고메 5% 적립"],
    요금: ["본인 150,000원", "본인 150,000원", "본인 150,000원"],
    디자인: ["pink1.png", "pink2.png", "pink3.png", "pink4.png", "pink5.png"],
    디자인이름: ["Glossy", "Stranger", "Lollipop", "Little Black Dress"],
  },
  purple: {
    타이틀: "the Purple osée",
    요약: "Not Just Luxury",
    설명: [
      "취향따라 설계·사용하는 바우처 네트워크",
      "항공마일리지와 M포인트 중 선택 적립 기본 적립",
      "혜택에 추가로 제공되는 로열티 보너스",
    ],
    요금: ["본인 800,000원", "본인 800,000원", "본인 800,000원"],
    디자인: ["viol1.png", "viol2.png", "viol3.png"],
    디자인이름: ["Jade", "Versailles", "Seine"],
  },
  fam: {
    타이틀: "현대카드Z family",
    요약: "패밀리용 구간반복 할인카드",
    설명: ["우리 가족을 위한 쇼핑·마트·배달 10% 할인, 주유 100/L 할인"],
    요금: ["본인 10,000원", "본인 10,000원", "본인 10,000원"],
    디자인: [
      "fam1.png",
      "fam2.png",
      "fam3.png",
      "fam4.png",
      "fam5.png",
      "fam6.png",
      "fam7.png",
    ],
    디자인이름: [
      "Family Z",
      "Clap Z",
      "Sweet Z",
      "Rolling Z",
      "Block Z",
      "Slate Z",
      "Laser Z",
    ],
  },
  mboo: {
    타이틀: "현대카드 M BOOST",
    요약: "쓰면 쓸수록 강력한 포인트카드",
    설명: ["어디서나 한도 없는 최대 4.5% 적립", "페이·해외결제 5% 적립"],
    요금: ["본인 30,000원", "본인 30,000원", "본인 30,000원"],
    디자인: [
      "mboo1.png",
      "mboo2.png",
      "mboo3.png",
      "mboo4.png",
      "mboo5.png",
      "mboo6.png",
      "mboo7.png",
      "mboo8.png",
      "mboo9.png",
    ],
    디자인이름: [
      "M Fluffy",
      "M Charger",
      "M Steel",
      "Bubble Wrap",
      "Gummy Bear",
      "Canvas",
      "the Gear",
      "the Can",
      "the Coil",
    ],
  },
  xboo: {
    타이틀: "현대카드 X BOOST",
    요약: "쓰면 쓸수록 강력한 할인카드",
    설명: ["어디서나 최대 1.5%", "할인 페이·해외결제 5% 할인"],
    요금: ["본인 30,000원", "본인 30,000원", "본인 30,000원"],
    디자인: [
      "xboo1.png",
      "xboo2.png",
      "xboo3.png",
      "xboo4.png",
      "xboo5.png",
      "xboo6.png",
      "xboo7.png",
      "xboo8.png",
      "xboo9.png",
    ],
    디자인이름: [
      "X Fluffy",
      "X Charger",
      "X Steel",
      "Bubble Wrap",
      "Gummy Bear",
      "Canvas",
      "the Gear",
      "the Can",
      "the Coil",
    ],
  },
  naver: {
    타이틀: "네이버 현대카드",
    요약: "쓸 때마다 네이버페이 포인트 적립받는 카드",
    설명: [
      "네이버플러스 멤버십 무료 이용권 제공",
      "네이버플러스 멤버십 적립 대상 결제 시, 네이버페이 포인트 최대 5% 적립",
      "그 외 가맹점 네이버페이 포인트 1% 적립",
      ,
    ],
    요금: ["본인 10,000원", "본인 10,000원"],
    디자인: [
      "naver1.png",
      "naver2.png",
      "naver3.png",
      "naver4.png",
      "naver5.png",
      "naver6.png",
    ],
    디자인이름: ["Line", "Type", "Joy", "Tube", "Blocks", "Core"],
  },
  black: {
    타이틀: "현대카드 MX Black",
    요약: "혜택의 블랙 라벨",
    설명: ["M의 전 영역 적립과 X의 10% 할인을 동시에"],
    요금: ["본인 150,000원", "본인 150,000원", "본인 150,000원"],
    디자인: [
      "black1.png",
      "black2.png",
      "black3.png",
      "black4.png",
      "black5.png",
    ],
    디자인이름: [
      "Black & Black",
      "Black & White",
      "Black Board",
      "Black Ink",
      "Black Hole",
    ],
  },
}; ///////// lang 객체 ///////
