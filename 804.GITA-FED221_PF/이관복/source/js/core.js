// 로딩
$(document).ready(function(e){
    //상위 메뉴 보이기
    let gnb = $(".gnb");
    $("#ham").click(()=>{        
        gnb.toggleClass("on");
    });

    //상위 메뉴 숨기기    
    $("#cbtn").click(()=>{        
        gnb.toggleClass("on");
    });
});