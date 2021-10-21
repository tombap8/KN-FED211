// 보그코리아 회원가입 페이지 JS - member.js //

$(function(){ /////// jQB ///////////////////

    /* 
        [ 입력폼의 유효성 검사 ]
        - 검사원리: 
        입력창에 클릭 또는 탭하여 입력가능상태(커서깜박)를
        포커스 상태라고 함. 이벤트로는 focus 이벤트임!
        이 포커스 상태에서 다른 부분을 클릭(탭)되면 포커스가
        풀리게 된다. 이 상태를 블러(blur)상태라고 함!
        이렇게 이벤트가 블러로 발생할때 유효성 검사를 시행함!
        - 이벤트 대상선정: 입력요소중 input type이 
                            text, password
        input[type=text],input[type=password]
        (유의사항: type=text 인 요소 중에서 아이디가 email2
            인요소는 검사에서 제외함!)
        제외하기 위한 선택자: input[type=text][id!=email2]
        -> (!=) 선택연산자는 제이쿼리전용임!

        - 제이쿼리 사용 메서드 : blur() 메서드
    
    */
   $("input[type=text][id!=email2],input[type=password]")
   .blur(function(){
        // console.log("블러써?");

        // 1. 블러가 발생한 아이디 알아오기
        let cid = $(this).attr("id");

        console.log("아이디:"+cid);

        // 2. 입력된 값 알아오기 : val() 메서드
        let cv; // 현재읽어온 값 (current value)

        ///////////////////////////////////////
        // 모든공백제거 함수! : val은 값 전달변수

        // let groSpace = function(val){};
        // let groSpace = (val) => {};
        let groSpace = val => {
            return val.replace(/\s/g,"");
            // 정규식 -> /\s/g
            // 정규식은 슬래쉬 사이에 쓴다!
            // \s 역슬래쉬s는 스페이스를 뜻함
            // g는 모두 찾으라는 뜻
        }; //////// groSpace함수 /////////

        // trim() 메서드 : 앞뒤공백제거 + 공백만 있어도 제거

        if(cid === "mnm") // 이름일 경우 앞뒤공백만제거
            cv = $(this).val().trim();
        else // 그밖의 경우는 모든공백제거
            cv = groSpace($(this).val());
        

        // 제거된 공백 입력창에 반영하기!
        $(this).val(cv);

        console.log("현재값:"+cv);

        // 3. 빈값일 경우 "필수입력" 메시지 출력
        if(cv === "") {
            $(this).siblings(".msg").text("필수입력!");
            // siblings(필터) -> 선택요소 이외의 형제들 중 특정요소
        } /////////// if문: 빈값일때 ////////////



   }); //////////////////// blur 함수 /////////////////////
   ////////////////////////////////////////////////////////


}); ///////////////// jQB ///////////////////


