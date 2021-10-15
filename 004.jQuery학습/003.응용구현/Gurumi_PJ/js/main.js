// 구르미 갤러리 JS - main.js

/// 로딩구역 ///////////////
$(function(){ // jQB ////////////////////

    // 버튼 클릭시 이미지 이동하기 ///
    // 이벤트 대상: .abtn -> .lb, .rb 두 가지 구분!
    // 변경 대상: .gbx - 이미지를 담은 박스
    let gbx = $(".gbx");
    

    $(".abtn").click(function(){
        // console.log($(this).is(".rb"));
        // is() 메서드는 선택요소의 태그나 이름을 확인함
        // 맞을 경우 true를 리턴함!
        // -> 여기서는 오른쪽 버튼 클래스 여부를 확인함!

        // 이미지박스이 이미지 읽어오기(새로읽어야함!)
        let gimg = gbx.find("img");

        if($(this).is(".rb")){ // 오른쪽 버튼일때
            console.log("오른쪽!");
            // 맨앞이미지 맨뒤로 이동
            gbx.append(gimg.first());
            // gbx.append(맨앞이미지)
        } //////////// if /////////////
        else { // 왼쪽 버튼일때 
            console.log("왼쪽!");
            // 맨뒤이미지 맨앞으로 이동
            gbx.prepend(gimg.last());
            // gbx.prepend(맨뒤이미지);
        } /////////// else /////////////


    }); //////// click ////////////////



}); //////////// jQB ////////////////////