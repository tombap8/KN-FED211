const outer = document.querySelector(".gallery_box_outer");
const cardname = document.querySelector(".card h1");
const elementimg = document.querySelectorAll(".gallery_box_in img");
const logo = document.querySelector(".logo");
let wheelcounter = 0;
let counter = 0;

// 마우스 휠 다운시 카드가 넘어가는 이벤트
window.addEventListener("load", function () {
  window.addEventListener("wheel", function (e) {
    if (gallery.style.display != "none") {
      if (e.wheelDelta === -120) {
        counter -= 40;
        outer.style.transform = `perspective(1300px) rotateX(0deg) rotateY(${counter}deg)`;
      } else {
        counter += 40;
        outer.style.transform = `perspective(1300px) rotateX(0deg) rotateY(${counter}deg)`;
      }
    }
  });
});

// 마우스 휠 다운시 카드이미지배열의 wheelcounter순번 이미지의 alt값이 상단제목에 표시됨
window.addEventListener("load", function () {
  // 로드시 로고 애니메이션이후 컨텐츠가 보임
  outer.style.display = "none";
  logo.style.display = "none";
  setTimeout(function () {
    cardname.innerText = elementimg[wheelcounter].getAttribute("alt");
    outer.style.display = "block";
    logo.style.display = "block";
  }, 3200);
  window.addEventListener("wheel", function (e) {
    if (gallery.style.display != "none") {
      if (e.wheelDelta === -120) {
        wheelcounter += 1;
        if (wheelcounter === 9) {
          wheelcounter = 0;
        }
        cardname.innerText = elementimg[wheelcounter].getAttribute("alt");
      } else {
        wheelcounter -= 1;
        if(wheelcounter === -1) {
          wheelcounter = 8;
        }
        cardname.innerText = elementimg[wheelcounter].getAttribute("alt");
      }
    }
  });
});
