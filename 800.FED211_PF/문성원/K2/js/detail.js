//상태체크 전역변수
var mob = 0; // 모바일인지 아닌지 상태(0-아님, 1-모바일)
var autocall, autocallT;
var bsts=0;//배너작동중 상태값(0-휴식,1-활동)
$(document).ready(function(e) {
    if($(window).width() <= 1100) mob=1;
	else mob=0;
});
$(window).resize(function(){
    if($(window).width() <= 1100) mob=1;
	else mob=0;
//console.log(mob);
});



$(document).ready(function(e) {	
		$("#top").children("img").css({width:"11%",marginTop:"1%"});
		$("#top").children(".obg").css({opacity:"0.5"});	
	
	

	
	// ************ 메뉴 클릭시 이동하기*************
	$("#top ul li a").click(function(e){
		e.preventDefault();
		var seq = $(this).parent().index()+1;//이동할 페이지 순번
		scNum = seq;//전역페이지변수 변경
		//alert(seq);
		
		//페이지별 액션주기
		//pageAction();//페이지액션 함수 호출!		
		
		// 페이지 이동 애니메이션
		$("html,body").animate({
			scrollTop : $("body>section").eq(scNum).offset().top + "px"
		},700,"easeOutExpo");//animate
	});//메뉴클릭
	
	//로고클릭
	$("#top>img").click(function(){
		scNum=0;//전역변수 변경
		//pageAction();//페이지액션호출
		
		$("html,body").animate({
			scrollTop : $("body>section").eq(0).offset().top + "px"
		},700,"easeOutExpo");//animate
	});//로고클릭
	
	//이미지, 글자 셋팅
	if(mob==0)//DT일때
	{
		/*//1페이지
		$("#cont1 img").css({"top":"20%","opacity":"0"});
		$("#cont1 h1").css({"top":"70%","opacity":"0"});
		//2페이지
		$("#cont2 img").css({"top":"20%","opacity":"0"});
		$("#cont2 h1").css({"top":"70%","opacity":"0"});
		//3페이지
		$("#cont3 li img").css({"top":"20%","opacity":"0"});
		$("#cont3 h1").eq(0).css({"top":"50%","opacity":"0"});
		$("#cont3 h1").eq(1).css({"top":"90%","opacity":"0"});*/
	}
	// toggle(함수1, 함수2, 함수3,......) 클릭시 마다 순서대로 실행됨
	var hamsts=0;
	$("#ham").toggle(
		function(){//x만들기
			if(hamsts==1)return false;
			hamsts=1;
			$("#ham div").eq(0).css({"top":"10px","transform":"rotate(45deg)"});
			$("#ham div").eq(1).css({"left":"20px","width":"0"});
			$("#ham div").eq(2).css({"top":"10px","transform":"rotate(-45deg)"});
			//메뉴보이기
			$("#menu").animate({width:"100%"},800,function(){hamsts=0;});
		},
		function(){//햄버거
			if(hamsts==1)return false;
			hamsts=1;
			$("#ham div").eq(0).css({"top":"0px","transform":"rotate(0deg)"});
			$("#ham div").eq(1).css({"left":"0px","width":"100%"});
			$("#ham div").eq(2).css({"top":"20px","transform":"rotate(0deg)"});
			//메뉴감추기
			$("#menu").animate({width:"0"},800,function(){hamsts=0;});
	});
	
	/*위로이동 버튼 클릭시 맨위로 이동*/
	$("#tbtn").click(function(){
		$("html,body").animate({
			scrollTop:0
		},800);
		scNum=0;//전역페이지변수 초기화!!!!
		//pageAction();//메뉴변경위해 호출
	});
	
	
	
});//jQB


/*
	함수명: pageAction()
	기능 : 각 페이지별 액션주기
*/
function pageAction(){
	if(mob==1)return false;//모바일일때 아래 코드 실행안함
	
	//scNum 현재 페이지 전역변수
	if(scNum == 0){//첫페이지
		$("#top").children("img").animate({width:"15%",marginTop:"3%"},200);
		$("#top").children(".obg").animate({opacity:"0"},200);
		$("#top>ul>li>a").css("color","#fff");//메뉴 글자색 모두 흰색!
		$("#tbtn").fadeOut(300);//탑버튼 사라짐
	}
	else{//다른 하위 페이지
		$("#top").children("img").animate({width:"11%",marginTop:"1%"},200);
		$("#top").children(".obg").animate({opacity:"0.5"},200);	
		//페이지 이동시 해당메뉴 글자색 변경
		$("#top>ul>li>a").css("color","#fff").eq(scNum-1).css("color","yellow");
		
		$("#tbtn").fadeIn(300);//탑버튼 나타남
		
		
		if(scNum==1){//하위1번페이지
			$("#cont1 img").animate({"top":"0%","opacity":"1"},1200);
			$("#cont1 h1").delay(500).animate({"top":"50%","opacity":"1"},1200);
		}
		else if(scNum==2){//하위2번페이지
			$("#cont2 img").animate({"top":"0%","opacity":"1"},1200);
			$("#cont2 h1").delay(500).animate({"top":"50%","opacity":"1"},1200);
		}
		else if(scNum==3){//하위3번페이지
			$("#cont3 li:eq(0) img").animate({"top":"0%","opacity":"1"},1200);
			$("#cont3 li:eq(2) img").animate({"top":"0%","opacity":"1"},1200);
			$("#cont3 h1").eq(0).delay(500).animate({"top":"30%","opacity":"1"},1200);
			$("#cont3 h1").eq(1).delay(500).animate({"top":"70%","opacity":"1"},1200);
		}
		
		
		
		
	}
	
	
}//pageAction
var acall;//자동호출저장 전역변수
$(document).ready(function(e) {
    acall = setInterval("flowImg()",20);
	
	//플로우슬라이드에 마우스 오버시 멈추고 아웃시 다시감
	$("#flowImg").hover(
		function(){//오버시
			clearInterval(acall);
		},
		function(){//아웃시
			acall = setInterval("flowImg()",20);
	});
	
});//jQB

/*
	함수명: flowImg
	기능: 이미지를 왼쪽으로 이동하여 계속 흐르게함
*/
var fnum = 0;//이동픽셀수 전역변수
function flowImg(){
	var iw = $("#flowImg img").first().width();	
	fnum++;//1씩증가
	if(fnum >= iw){//이동이미지 한장크기보다 커지면 잘라서 뒤로 보냄
		$("#flowImg").append($("#flowImg li").first()).css("left","0");
		fnum=1;//초기화
	}
	
	$("#flowImg").css("left",-fnum+"px");
	//console.log(iw);
	
}

















