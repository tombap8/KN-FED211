///// 전역변수 구역 ///////
// 언어별 메뉴 글자 셋팅하기 ///
let lang_gnb = {
    //한국어
    "ko": {
        "GNB": [
            "빽다방", "CEO 인사말", "빽다방 소개", "커피 이야기",
            "메뉴·매장", "메뉴 보기", "매장 찾기", "커피 클래스",
            "창업안내", "가맹 정보", "창업 상담", "관련 절차",
            "새로운 소식", "새소식", "이벤트", "우수점포"
        ],

        "fixBan": "신메뉴 출시",

        "btnMenu": [
            "고객센터", "문의하기 (Contack us)", "고객 상담 센터 1234-1234",
            "창업 안내", "협력업체 문의", "가맹 문의", "제휴·마케팅 문의", "브랜드 소개서",
            "개인정보 보호 및 약관", "개인정보 처리방침", "서비스 이용약관", "위치기반서비스 이용약관"
        ],

        "info": `(주)더본코리아 사업자등록번호 211-86-00870 대표이사 백종원
        주소: 서울시 강남구 봉은사로 1길 39 유성빌딩 5~6층 팩스: 02-511-3864
        본사 대표전화: 02-549-3864 가맹상담전화: 02-3447-0410 고객센터: 1544-2360`
    },
    //영어
    "en": {
        "GNB": [
            "Paik's Coffee", "CEO Greeting", "Introduce", "Coffee story",
            "Menu·Store", "Menu", "Search store", "Coffee class",
            "Franchise", "Franchise info", "Franchise consult", "Franchise guide",
            "News·Event", "News", "Event", "C/S center"
        ],

        "fixBan": "New drink",

        "btnMenu": [
            "C/S Center", "Inquery (Contack us)", "C/S Center 1234-1234",
            "Franchise", "Franchise offer", "Franchise guide", "Marketing offer", "Portfolio",
            "Privacy", "Privacy policy", "Agreement policy", "Location policy"
        ],

        "info": `Theborn Korea Co., Ltd. Business registration number 211-86-00870 CEO Baek Jong-won
        Address: 5-6F Yuseong Building, 39 Bongeunsa-ro 1-gil, Gangnam-gu, Seoul Fax: 02-511-3864
        Headquarters Main Phone: 02-549-3864 Affiliate Helpline: 02-3447-0410 Customer Center: 1544-2360`
    }

}; ///////// lang 객체 ///////

////////////// 로드구역 ////////////////////////
window.addEventListener("load", () => {

    console.log("로딩완료!");
    // 대상선정
    // (1) 이벤트 대상: .sel
    let sel = document.querySelectorAll(".lang button");
    // 상단 메뉴 선택
    let gnb = document.querySelectorAll(".topMenu a");

    // 우측 배너
    let fixBan = document.querySelectorAll(".fixBan");

    // 하단메뉴
    let btnMenu = document.querySelectorAll(".btLink a");
    // 하단정보
    let info = document.querySelector(".info");

    // 로컬 스토리지에 있는 언어값 불러옴
    let langKey = localStorage.getItem("lang");

    // 로컬 스토리지에 저장되어 있는 언어로 번역 함수 호출
    if (langKey === 'en') {
        gnbTrans('en');
        console.log('영어');
    } else {
        gnbTrans('ko');
        console.log('한글');
    }

    // 상단 언어 아이콘 클릭 시 번역 함수 호출
    for (let x of sel) {
        x.onclick = () => {
            gnbTrans(x.value);
        };
    }

    // 번역 함수 
    function gnbTrans(val) {
        // 로컬 스토리지에 새로운 언어 저장
        localStorage.setItem("lang", val);
        // 언어코드에 따른 객체 데이터 읽어오기
        let data = lang_gnb[val];

        // 대메뉴 / 서브메뉴 변경
        data["GNB"].forEach((val, idx) => gnb[idx].innerText = val);

        // 우측 고정 배너
        fixBan.forEach((idx) => idx.innerText = data["fixBan"]);

        // 하단 고객센터
        data["btnMenu"].forEach((val, idx) => btnMenu[idx].innerText = val);
        // 하단 회사정보
        info.innerText = data["info"];
    };

}); ////////// 로드구역 ////////////////////////