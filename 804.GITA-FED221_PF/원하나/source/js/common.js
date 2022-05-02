///////////////// 로드구역 ///////////////////////
window.addEventListener("load", () => {

    // 페이드 애니메이션 라이브러리 초기화
    AOS.init();

    // 변수 선언
    let doc = $(document);
    let htmlBody = $('html, body');
    let top = $("#top");

    // top 버튼 눌림
    $('.topBtn').on('click', function () {
        htmlBody.animate({
            scrollTop: 0
        }, 500);
        top.removeClass('close');
    });
    // 홈 버튼 눌림
    doc.keydown(function (event) {
        if (event.keyCode == 36) {
            htmlBody.animate({
                scrollTop: 0
            }, 500);
            top.removeClass('close');
        }
    });

    $(() => {
        //마지막 스크롤 값 
        let lastScroll = 0;
        doc.scroll(function (event) {
            // 현재 스크롤값 저장
            let st = $(this).scrollTop();
            if (st > lastScroll) {
                // 스크롤 내릴 때 
                // 현재 스크롤 값이 마지막 스크롤 값 보다 클 때 
                top.addClass('close');
                $('.topnavi').removeClass('on');
            } else {
                // 스크롤 올릴 때 
                // 현재 스크롤 값이 마지막 스크롤 값 보다 작을 때 
                top.removeClass('close');
            }
            // 스크롤 값 업데이트
            lastScroll = st;
        });
    });

    // 햄버거 버튼
    document.querySelector('.ham').addEventListener('click', addClassOn);
    const topNav = document.querySelector('.topnavi');

    function addClassOn() {
        topNav.classList.toggle('on');
    }

    // 하단 패밀리 링크
    // 패밀리링크 객체 선언
    const fLink = {
        'FAMILY SITE': '#',
        '더본코리아': 'https://www.theborn.co.kr',
        '창업센터': '#',
        '새마을식당': '#',
        '한신포차': '#',
        '역전우동': '#',
        '백스비어': '#',
        '롤링파스타': '#',
        '인생설렁탕': '#',
        '미정국수': '#',
        '리춘시장': '#',
        '원조쌈밥집': '#',
        '돌배기집': '#',
        '백철판': '#',
        '호텔더본': '#'
    }

    // 객체 선언 셀렉트 박스 : #familyLink
    let familyLink = document.querySelector('#familyLink');

    // 새창으로 띄우기
    familyLink.addEventListener("change", () => {
        // select.options– < option > 하위 요소를 담고 있는 컬렉션
        // select.value– 현재 선택된 < option > 값
        // select.selectedIndex– 현재 선택된 < option > 의 번호(인덱스)
        // select.options[select.selectedIndex].value
        // 셀렉트 옵션들을 담고 있는 컬렉션[선택된 옵션의 인덱스].값
        let val = familyLink.options[familyLink.selectedIndex].value; // option value값 저장
        if (val != "#") { // value값이 #(임시페이지)가 아닐 때 
            window.open(val); // 새 창으로 홈페이지 띄움
        }
    });

    (() => {
        let temp = ''; //임시 변수 선언 + 초기화

        for (let x in fLink) {
            temp += `<option value='${fLink[x]}'>${x}</option>`;
            // x == key 값
            // 객체[키] 
            // fLink[x] - 키에 해당하는 값이 나옴 
        }
        familyLink.innerHTML = temp;

    })();


}); //////////// 로드구역 ////////////////////////