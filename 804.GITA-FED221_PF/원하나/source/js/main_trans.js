///// 전역변수 구역 ///////
// 언어별 메뉴 글자 셋팅하기 ///
let lang = {
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
        본사 대표전화: 02-549-3864 가맹상담전화: 02-3447-0410 고객센터: 1544-2360`,

        "main2": [
            "친구 같은 브랜드의 진정한 가치", "합리적인 커피 문화를 만들어 갑니다.",
            "호기심으로 시작했던 카페 메뉴가 모두에게 사랑 받는 시그니처 메뉴로 성장하게 되었습니다."
        ],

        "main3": [
            "빽다방이 선사하는 다채로운 맛과 향기", "커피의 본질적인 것을 통한 커피의 전문성을 부각 시키는 컨텐츠와 함께",
            "비쥬얼, 맛, 건강함, 그리고 마시는 재미까지 함께 선사합니다."
        ],
        "main3Btn": ["커피", "음료", "디저트", "빽스치노"],

        "main4": [
            "언제나 친구처럼 친근한 창업", "점주 만족도 최상인 카페 브랜드 빽다방",
            "빽다방은 파트너 여러분들의 다양한 창업 조건에 맞는 ‘맞춤형 점포 개설’을 통해",
            "카페 창업의 문턱을 낮추고 진정한 상생의 가치를 구현합니다."
        ],
        "main4Btn": "가맹점 개설 안내"
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
        Headquarters Main Phone: 02-549-3864 Affiliate Helpline: 02-3447-0410 Customer Center: 1544-2360`,

        "main2": ["The true value of a brand like a friend", "We create a reasonable coffee culture.",
            "The cafe menu that started out of curiosity has grown into a signature menu loved by everyone."
        ],
        "main3": ["A variety of flavors and scents offered by Paik's Coffee",
            "We provide visual, taste, health, and fun to drink along with",
            "content that emphasizes the specialty of coffee through the essentials of coffee."
        ],
        "main3Btn": ["Coffee", "Juice", "Dessert", "Chino"],

        "main4": [
            "A business that is always friendly like a friend", "The cafe brand with the highest satisfaction among the owners",
            "Paik's coffee lowers the threshold for cafe start-up and realizes the value of true win-win through",
            "‘opening a customized store’ that meets the various business conditions of partners."
        ],
        "main4Btn": "Franchise Guide"
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


    // 메인2
    let main2 = document.querySelectorAll(".main2");

    // 메인3
    let main3 = document.querySelectorAll(".main3");
    // 메인3 슬라이드 버튼
    let main3Btn = document.querySelectorAll(".menuBtn button");

    // 메인4
    let main4 = document.querySelectorAll(".main4");
    // 메인4 슬라이드 버튼
    let main4Btn = document.querySelector(".shopBtn a");

    // 로컬 스토리지에 있는 언어값 불러옴
    let langKey = localStorage.getItem("lang");

    // 로컬 스토리지에 저장되어 있는 언어로 번역 함수 호출
    if (langKey === 'en') {
        translate('en');
        console.log('영어');
    } else {
        translate('ko');
        console.log('한글');
    }

    // 상단 언어 아이콘 클릭 시 번역 함수 호출
    for (let x of sel) {
        x.onclick = () => {
            translate(x.value);
        };
    }

    // 번역 함수 
    function translate(val) {
        // 로컬 스토리지에 새로운 언어 저장
        localStorage.setItem("lang", val);
        // 언어코드에 따른 객체 데이터 읽어오기
        let data = lang[val];

        // 대메뉴 / 서브메뉴 변경
        data["GNB"].forEach((val, idx) => gnb[idx].innerText = val);

        // 우측 고정 배너
        fixBan.forEach((idx) => idx.innerText = data["fixBan"]);

        // 하단 고객센터
        data["btnMenu"].forEach((val, idx) => btnMenu[idx].innerText = val);
        // 하단 회사정보
        info.innerText = data["info"];

        // 메인2
        data["main2"].forEach((val, idx) => main2[idx].innerText = val);
        // 메인3
        data["main3"].forEach((val, idx) => main3[idx].innerText = val);
        // 메인3 슬라이드 버튼
        data["main3Btn"].forEach((val, idx) => main3Btn[idx].innerText = val);

        // 메인4
        data["main4"].forEach((val, idx) => main4[idx].innerText = val);
        // 메인4 버튼
        main4Btn.innerText = data["main4Btn"];
    };

}); ////////// 로드구역 ////////////////////////