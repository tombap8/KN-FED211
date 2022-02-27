$(() => {
    // 디테일 이미지 마우스 오버시 메인 이미지로 변환하기! 
    
    let img0 = $(".maini")
    let img1 = $(".detaili1")
    let img2 = $(".detaili2")

    img1.mouseover(function() {
        $(img0).css({
            backgroundImage:`url(./images/d3.jpg)`,
            transition: ".3s"
        })//// css
    })///hover

    img1.mouseout(function() {
        $(img0).css({
            backgroundImage:`url(./images/d0.jpg)`
        })//// css
    })
    img2.mouseover(function() {
        $(img0).css({
            backgroundImage:`url(./images/d4.jpg)`,
            transition: ".3s"
        })//// css

    })///hover
    img2.mouseout(function() {
        $(img0).css({
            backgroundImage:`url(./images/d0.jpg)`
        })//// css
    })///hover

    



    var swiper = new Swiper(".mySwiper", {
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
            loop: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

})