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

        // 4. 아이디일때 검사하기 ///////////////////
        else if(cid === "mid") {

            // 유효성 검사결과
            let res = vReg(cv,cid);
            console.log("검사결과:"+res);


        } /////////// else if문 : 아이디일때 /////////



   }); //////////////////// blur 함수 /////////////////////
   ////////////////////////////////////////////////////////


}); ///////////////// jQB ///////////////////


/*////////////////////////////////////////////////////////
    함수명: vReg
    기능: 값에 맞는 형식을 검사하여 리턴함
    (주의: 정규식을 따옴표로 싸지말아라!-싸면문자가됨!)
*/ ////////////////////////////////////////////////////////
function vReg(val, cid) {
    // val - 검사할값, cid - 처리구분아이디
    // //console.log("검사:"+val+"/"+cid);

    // 정규식 변수
    let reg;

    // 검사할 아이디에 따라 정규식을 변경함
    switch (cid) {
        case "mid": // 아이디
            reg = /^[a-z]{1}[a-z0-9]{5,19}$/g;
            // 영문자로 시작하는 6~20글자 영문자/숫자
            // /^[a-z]{1} 첫글자는 영문자로 체크!
            // [a-z0-9]{5,19} 첫글자 다음 문자는 영문 또는 숫자로
            // 최소 5글자에서 최대 19글자를 유효범위로 체크!
            // 첫글자 한글자를 더하면 최소 6글자에서 최대 20글자체크!
            break;
        case "mpw": // 비밀번호
            reg = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
            // 특수문자,문자,숫자포함 형태의 5~15자리
            // (?=^.{5,15}$) 시작부터 끝까지 전체 5~15자릿수 체크!
            // (?=.*\d) 숫자 사용체크!
            // (?=.*[a-zA-Z]) 영문자 대문자 또는 소문자 사용체크!
            // (?=.*[!@#$%^&+=]) 특수문자 사용체크!
            break;
        case "eml": // 이메일
            reg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
            // 이메일 형식에 맞는지 검사하는 정규식
            break;
    } //////////// switch case문 //////////////////

    // //console.log("정규식:"+reg);

    // 정규식 검사를 위한 JS메서드 
    // -> 정규식.test(검사할값) : 결과 true/false
    return reg.test(val); //호출한 곳으로 검사결과리턴!

} //////////// vReg 함수 //////////////////////////////////
///////////////////////////////////////////////////////////