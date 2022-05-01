// 로딩구역 선언
window.addEventListener("load", () => {

    // 메인 2번째 마우스 움직임 애니메이션
    //  body 셀렉
    let docStyle = document.body.style;
    document.addEventListener('mousemove', (val) => {
        docStyle.setProperty('--mouse-x', val.screenX);
        docStyle.setProperty('--mouse-y', val.screenY);
    });

    // 메인 3번째 음료수 슬라이더
    // 음료 부분 객체로 저장
    let drink = {
        '커피': "coffee",
        '음료': "juice",
        '디저트': "dessert",
        '빽스치노': "chino",
        'Coffee': "coffee",
        'Juice': "juice",
        'Dessert': "dessert",
        'Chino': "chino"
    };
    // 음료수 움직이는 부분
    const drinkBg = document.querySelector('.img-moving');

    // 버튼들 선택자 저장
    // 배열 형태로 저장해서 가져옴.
    let drinkBtn = document.querySelectorAll(".menuBtn li");

    // 초기화(클래스지우기)
    const initBtn = () => {
        for (let k of drinkBtn) k.classList.remove("on");
    }

    // for of 문으로 배열에 저장된 첫번째 값을 4개 가져오기
    for (let i of drinkBtn) {
        // drinkName에 버튼에 설정 되어 있는 이름을 할당함.
        // drinkName으로 가져온 버튼에 저장 된 객체 데이터들을 저장함.
        let drinkName = i.innerText;
        // 버튼에 이름 목록 뿌려줌
        i.onclick = () => {

            // 버튼 초기화
            // 일단 .on이 적용된 버튼을 클리어 해줌.
            initBtn();

            // 현재 클릭 된 나자신에게 on넣기
            i.classList.add("on");

            // 배경 바꾸기
            drinkBg.style.background =
                `transparent url("./img/drink/${drink[drinkName]}.png") repeat-x left top`;
            // 배경 위치 설정
            drinkBg.style.backgroundSize = `199rem auto`;
        }
    }


});