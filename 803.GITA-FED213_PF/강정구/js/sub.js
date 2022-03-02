// 마지막 슬라이드 이미지넣기
let lastSlide = document.querySelectorAll(".slide2 ul li")
for(let i=0; i<16; i++){
    lastSlide[i].style.backgroundImage= `url(./imges/sl${i+1}.jpg)`
}



/* 서브메뉴 토글버튼 */
let subBtn = document.querySelector("#cbtn")

let menu = function subMenu(){
    document.querySelector(".sub-menu").classList.toggle("on")
    subBtn.classList.toggle("on")

}

subBtn.addEventListener("click",menu);