$(()=>{ /////////////////// jQB ///////////////////////



    // 1. 드래그 대상: #move
    let move = $("#move");

    // 2. 드래그 설정하기(제이쿼리 UI기능)
    move.draggable({
        axis: "x" // 축고정(x/y)
    });
    // 3. 드래그 애니메이션 효과
    // transition을 설정하여 약간 더가는 효과를 줌
    // 주의: ease-in 을 사용하지 않는다!!! ease-out을 사용함
    move.css({
        transition: "all .8s ease-out"
    });
    //////// 4. 위치이동 한계설정 ////////
    /// 요구사항: 첫번째 이미지와 마지막 이미지가 화면 기준선
    /// 을 벗어나지 못하게함(화면의 1/3 기준)
    /* 
        [ 요구사항 처리를 위한 이벤트 ]
        1. mousedown - 마우스 왼쪽버튼을 누르는 시점에 발생
        2. mouseup - 마우스 왼쪽버튼을 눌렀다가 땔때 발생
        3. mousemove - 마우스 포인터가 선택요소 영역에서
                        움직일때 발생
        [ 위의 마우스 이벤트를 모바일에서 처리할때 이벤트 ]
        1. touchstart - 손가락이 화면에 닿을때 발생
        2. touchend - 손가락이 화면에서 떨어질때 발생
        3. touchmove - 손가락이 화면에 닿은상태로 
                        움직일때 발생
    */
   
    // 화면기준값(1/3)
    // -> 첫번째 한계값
    let fpt = $(window).width()/3;
    // console.log("첫번째한계값:"+fpt);

    // 마지막 한계값
    // -> 움직일 박스 전체가로크기 - 화면의 2/3크기
    let lpt = move.width() - (fpt*2);
    // console.log("마지막한계값:"+lpt);

    //// 화면한계시 위치고정 코드 /////
    // on(이벤트명, 함수) -> 제이쿼리 이벤트메서드
    // 이벤트가 여러개이면 띄어쓰기로 써준다!
    // 원래는 모바일 이벤트인 touchstart touchend touchmove
    // 를 써줘야 하지만 터치펀치가 마우스 이벤트를
    // 터치이벤트로 변환해 주므로 여기서 쓰면
    // 중복 이벤트 간섭에러가 발생한다! 따라서 써주지 않는다!
    $("html,body")
    .on("mousedown mouseup mousemove",
    function(){

        // console.log("마우스냐 터치냐");

        // 1. 움직이는 박스의 left위치값
        let mpos = move.offset().left;
        // console.log("현재left:"+mpos);

        // 2. 처음한계값 체크 후 위치 고정하기
        if(mpos > fpt) {

            // 첫번째 한계값에 고정함!
            move.css({
                left: fpt + "px"
            });/////// css ////////

        } ///////// if ////////////////
        // 3. 마지막 한계값 체크 후 위치 고정하기
        // left값이 마이너스임!
        else if(mpos < -lpt) {

            // 마지막 한계값에 위치 고정하기
            move.css({
                left: -lpt + "px"
            });/////// css ////////

        } ////////// else if //////////////

    }); ///////// 마우스 + 터치 이벤트 함수 //////////////
    ////////////////////////////////////////////////////

 }); /////////////////////// jQB /////////////////////////




 $(()=>{ /////////////////// jQB ///////////////////////
    let move1 = $("#move1");
    move1.draggable({
        axis: "x" // 축고정(x/y)
    });
    move1.css({
        transition: "all .8s ease-out"
    });
    let fpt = $(window).width()/3;
    let lpt = move1.width() - (fpt*2);
    $("html,body")
    .on("mousedown mouseup mousemove",
    function(){
        let mpos = move1.offset().left;
        if(mpos > fpt) {
            move1.css({
                left: fpt + "px"
            });/////// css ////////
        } ///////// if ////////////////
        else if(mpos < -lpt) {
            move1.css({
                left: -lpt + "px"
            });/////// css ////////
        } ////////// else if //////////////
    }); ///////// 마우스 + 터치 이벤트 함수 //////////////
 }); /////////////////////// jQB /////////////////////////