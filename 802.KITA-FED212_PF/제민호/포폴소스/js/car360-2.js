let temp="SWP_";
$(() => { /////////// jQB ////////////////////////

    $("a.colorSelect").click(function(){
        let txt = $(this).attr("id");
        switch(txt){
            case "colorWhite": temp="SWP_"; console.log("white"); break;
            case "colorBlack": temp="ABP_"; console.log("black"); break;
            case "colorGray": temp="KLG_";  console.log("Gray");break;
        }
        mkImg();
    })

    // 대상: .carbx
    let cbx = $(".carbox");

    let fnum = 0;//이미지 순번(eq번호 0부터!)

    const mkImg = () => {
        cbx.html("");// 초기화
        // 이미지 셋업
        for (let i = 1; i <= 36; i++) {
            cbx.append(
                `<img src="./images/K8/${temp}${i}.png" alt="car">`);
        } ///////////// for ////////////

        // 이미지 모두 숨기고 마지막 이미지만 보이게하기
        cbx.find("img").hide();
        cbx.find("img").eq(fnum).show();
    };

    mkImg();

    /************************************** 
        박스에 드래그 하여 이미지 변경하기
        ________________________________
        원리: 마우스 포인터 위치를 처음찍은
        위치와 드래그 되는 위치를 비교하여
        방향을 결정한 후 이전/다음이미지로
        이미지를 순서대로 넘겨서 보여준다!
    **************************************/
    // 드래그 상태값(0-드래그아님,1-드래그중)
    let drag = 0;
    // 클릭시 위치값(드래그 시작점-실제값 할당예정)
    let point = 0;
    // 이벤트횟수 조절 막기 변수
    let prot = 0;//0-허용,1-불허용

    // 드래그 이벤트 함수 설정하기
    // 이벤트종류: mousemove touchmove -> DT & Mobile
    cbx.on("mousemove touchmove", function (e) {

        ////// 이벤트횟수 조절 //////
        if(prot) return;
        prot = 1;
        setTimeout(()=>prot=0,40);
        ////////////////////////////

        // 우리가 사용할 방향은 x축뿐임!
        let pos = e.pageX;

        // console.log("x축:",pos,"/상태:",drag);

        // 방향알아내기!
        // 클릭시 위치값 - 현재위치값
        // point변수 - pos변수

        // 드래그 상태일때(drag===1)만 계산
        if (drag) {
            let dir;
            point - pos < 0 ? dir = 0 : dir = 1;
            // 비?집:놀이동산; (조건연산자)
            // 왼쪽방향 1, 오른쪽방향 0
            // 왼쪽방향이 이미지번호 증가!
            // console.log("방향:",dir);

            // 이미지변경함수 호출!
            rotCar(dir);

        } /////// 드래그 상태 ///////



    }); ////////////// drag /////////////////////
    /////////////////////////////////////////////

    // 드래그 상태값 변경하기 ///////
    // 마우스버튼을 눌렀을때!
    cbx.mousedown(function (e) {
        // 드래그 상태변경
        drag = 1;
        // x축 위치값 담기
        point = e.pageX;
        // 커서 주먹
        cbx.css({cursor:"grabbing"});
    }); /////// mousedown /////////
    // 마우스버튼이 올라왔을때+마우스가 나갔을때
    cbx.on("mouseup mouseout", function (e) {
        // 드래그 상태변경
        drag = 0;
        // 커서 손바닥
        cbx.css({cursor:"grab"});
    }); /////// mouseup /////////


    //let fnum = 0;//이미지 순번(eq번호 0부터!)  위 17번째 라인으로 옮겨 선언하였습니다.(메일로 질문드린사항)
    /***************************************** 
         함수명: rotCar
         기능: 자동차 이미지를 순서대로변경함!
    *****************************************/
    const rotCar = dir => {
        // dir 전달변수(1-왼쪽,0-오른쪽)
        // console.log("방향:",dir);
        if(dir) { // 1이면 왼쪽(이미지순번 증가!)
            fnum++;
            if(fnum===36) fnum = 0;//첫순번으로!
        } ///////// if ////////////
        else{ // 오른쪽방향(이미지순번 감소!)
            fnum--;
            if(fnum===-1) fnum = 35;//마지막순번으로!
        } ///////// else ///////////

        // console.log("순번:",fnum);

        // 이미지 순서대로 보이기
        cbx.find("img:visible").hide();
        // 이미지 중 보이는(:visible)이미지는 숨겨라(hide())
        cbx.find("img").eq(fnum).show();
        // 이미지 중 해당순서(eq(fnum)) 이미지는 보여라(show())

    }; /////////////// rotCar 함수 ////////////////
    ///////////////////////////////////////////////



}); ///////////////// jQB ////////////////////

