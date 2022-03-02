// BIFF PJ JS

///// 로딩구역 /////////////
$(() => { // jQB ////////////////////////////////

    console.log("갤러리 로딩완료!")

    // 스와이퍼 플러그인 적용하기 //
    let swiper = new Swiper(".mySwiper", {
        loop: true, // 무한루프
        speed: 600,
        parallax: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: { // 자동넘김
            delay: 3000, // 사이시간
            disableOnInteraction: false, // 상호작용이 없을때 재가동
        },
    });
}); ///////////////// jQB /////////////////////
///////////////////////////////////////////////