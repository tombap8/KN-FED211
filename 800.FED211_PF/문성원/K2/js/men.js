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



//배너 자동넘기기 함수
var bnum = 1;//배너번호
function goSlide(sts){//sts 상태값
	if(bsts==1)return false;
	bsts=1;//활동중변경

	bnum++;
	if(bnum==4)bnum=1;//한계수
	//다음 슬라이드 넣기
	$("#banner>ul").append("<li></li>").find("li").last()
	.css("background","url(images/banmen0"+bnum+".jpg) no-repeat top/cover");
	//슬라이드 이동 및 첫슬라이드 지우기
	$("#banner>ul").animate({left:"-100%"},2000,"easeInOutQuint",function(){
		$(this).find("li").first().remove();//첫번째 li 지우기
		$(this).css("left","0");//위치값 초기화
		bsts=0;//휴식상태
	});
	
	//블릿변경
	$("#banner>aside li").eq(bnum-1).css("background-position","0 -10px")//해당블릿배경위치변경
	.siblings().css("background-position","0 0");//다른블릿 원위치
	
	//클릭시
	if(sts==1){
		clearInterval(autocall);
		clearTimeout(autocallT);
		autocallT = setTimeout(function(){autoFunc();},9000);
	}
	
	
}//func



function backSlide(){//sts 상태값
	if(bsts==1)return false;
	bsts=1;//활동중변경
	
	bnum--;
	if(bnum==0)bnum=3;//한계수
	//다음 슬라이드 넣기
	$("#banner>ul").prepend("<li></li>").css("left","-100%")//위치값 보정
	.find("li").first().css("background","url(images/banmen0"+bnum+".jpg) no-repeat top/cover");
	//슬라이드 이동 및 첫슬라이드 지우기
	$("#banner>ul").animate({left:"0%"},2000,"easeInOutQuint",function(){
		$(this).find("li").last().remove();//첫번째 li 지우기
		bsts=0;//휴식상태
	});
	
	//블릿변경
	$("#banner>aside li").eq(bnum-1).css("background-position","0 -10px")//해당블릿배경위치변경
	.siblings().css("background-position","0 0");//다른블릿 원위치
	
	//클릭시
	clearInterval(autocall);
	clearTimeout(autocallT);
	autocallT = setTimeout(function(){autoFunc();},9000);
	
	
}//func

//블릿클릭시 이동 실행 함수
function directSlide(snum){//snum 블릿순번
	alert($("#banner>ul>li").first().css("background-image"));
	var dirc = $("#banner>ul>li").first().css("background-image").split("/");
	dirc = Number(dirc[dirc.length-1].split(".")[0].substr(7,1));
	
	var diff = dirc-snum;//현재번호와 블릿번호의 차이(양수,음수)
	if(diff==0)return false;//같은 번호면 나가기!!
	
	if(bsts==1)return false;
	bsts=1;//활동중변경
	
	bnum = snum;//블릿순번을 전역변수에 넣음(일치!!!)
	//alert(snum);
	
	//alert(dirc);
	
	if(diff<0){//왼쪽으로 이동
		//다음 슬라이드 넣기
		$("#banner>ul").append("<li></li>").find("li").last()
		.css("background","url(images/banmen0"+bnum+".jpg) no-repeat top/cover");
		//슬라이드 이동 및 첫슬라이드 지우기
		$("#banner>ul").animate({left:"-100%"},2000,"easeInOutQuint",function(){
			$(this).find("li").first().remove();//첫번째 li 지우기
			$(this).css("left","0");//위치값 초기화
			bsts=0;//휴식상태
		});
	}
	else if(diff>0){//오른쪽으로 이동
		//다음 슬라이드 넣기
		$("#banner>ul").prepend("<li></li>").css("left","-100%")//위치값 보정
		.find("li").first().css("background","url(images/banmen0"+bnum+".jpg) no-repeat top/cover");
		//슬라이드 이동 및 첫슬라이드 지우기
		$("#banner>ul").animate({left:"0%"},2000,"easeInOutQuint",function(){
			$(this).find("li").last().remove();//첫번째 li 지우기
			bsts=0;//휴식상태
		});
	}
	
	
	//블릿변경
	$("#banner>aside li").eq(bnum-1).css("background-position","0 -10px")//해당블릿배경위치변경
	.siblings().css("background-position","0 0");//다른블릿 원위치
	
	//클릭시
	clearInterval(autocall);
	clearTimeout(autocallT);
	autocallT = setTimeout(function(){autoFunc();},9000);
	
	
}//func

/*자동실행함수*/
function autoFunc(){
	autocall = setInterval("goSlide(0)",4000);
}
$(document).ready(function(e) {
    autoFunc();
	
	//버튼클릭시
	$(".abtn").click(function(){
		var idx=$(this).index();
		if(idx==2){//왼쪽버튼
			backSlide();
		}
		else if(idx==3){//오른쪽버튼
			goSlide(1);
		}
	});
	
	//블릿클릭시 directSlide함수호출
	$("#banner>aside>ul>li").click(function(){
		var idx = $(this).index()+1;
		directSlide(idx);
	});
	
	
});//jQB

var scNum = 0;//스크롤에 따른 페이지 번호( 첫페이지는 0페이지)
var psts = 0;//스크롤진행시 막는 변수(0- 스크롤안함, 1-스크롤중)

/*마우스 휠 페이지 이동*/
$(document).ready(function(e) {
    var mwEvt = (/Firefox/i.test(navigator.userAgent)?"DOMMouseScroll":"mousewheel");//파이어폭스인 아닌지 구별하여 이벤트 명 변경
	
	
	
	$(document).on(mwEvt,function(e){
		e.preventDefault();//기본스크롤링막기
		
		if(psts==1)return false;//스크롤애니메이션 중이니 나가!
		psts=1;//상태변경으로 접근금지!!!
		
		
		var evt = window.event || e;
		// 변수에 ||(바)를 사용하면 둘중에 지원되는 이벤트 코드를 사용함.
		// ie old 버전에서 호환성때문에 쓰는 코드
		
		var delta = evt.detail?evt.detail:evt.wheelDelta;// 조건연산자
		/*
			wheelDelta 란? (ie, chrome용), 오페라는 detail을 사용함!
			- 마우휠 이벤트에 따라 발생하는 이벤트 횟수 및 방향값을 리턴함!
			- 만약에 wheelDelta를 click이벤트에 적용하면 클릭횟수를 리턴함.
			- 마우스 휠 이벤트일 경우에 스크롤횟수와 방향값 모두 리턴함
				예) 120/-120 ->  120px 기본 이동함(+는 윗방향, -는 아랫방향)		
		*/
		//console.log(delta);
		
		//파이어폭스는 스크롤처리시 방향이 반대임!
		//파이어폭스는 detail처리시 originalEvent.detail 로 사용함
		if(/Firefox/i.test(navigator.userAgent)) delta = -evt.originalEvent.detail;
		
		if(delta>0){//윗방향
			scNum--;//1씩감소
			if(scNum==-1)scNum=0;//한계페이지 고정
		}
		else{//아랫방향
			scNum++;//1씩증가
			if(scNum==5)scNum=4;//한계페이지 고정
		}
		
		//페이지별 액션주기
		pageAction();//페이지액션 함수 호출!
		
		
		//console.log(scNum);
		// 페이지 이동 애니메이션
		$("html,body").animate({
			scrollTop : $("body>section").eq(scNum).offset().top + "px"
		},700,"easeOutExpo",function(){
			psts=0;//잠금상태 풀기~! 이제 드루와~~~!
		});//animate
		
		
		
	});//on
	
	// ************ 메뉴 클릭시 이동하기*************
	$("#top ul li a").click(function(e){
		e.preventDefault();
		var seq = $(this).parent().index()+1;//이동할 페이지 순번
		scNum = seq;//전역페이지변수 변경
		//alert(seq);
		
		//페이지별 액션주기
		pageAction();//페이지액션 함수 호출!		
		
		// 페이지 이동 애니메이션
		$("html,body").animate({
			scrollTop : $("body>section").eq(scNum).offset().top + "px"
		},700,"easeOutExpo");//animate
	});//메뉴클릭
	
	//로고클릭
	$("#top>img").click(function(){
		scNum=0;//전역변수 변경
		pageAction();//페이지액션호출
		
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
		pageAction();//메뉴변경위해 호출
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


var acall;// 자동슬라이드 호출용 전역변수
$(document).ready(function(){
	acall = setInterval("flowImg()",20);
	
//마우스가 오버시 멈춤, 아웃시 다시 실행
$("#flowImg").hover(
	function(){//over
		clearInterval(acall);
	},
	function(){//out
		acall = setInterval("flowImg()",20);
	});
	
});/////////////////// jQB

/*
	함수명 : flowImg
	기능 : 이미지를 왼쪽으로 이동하여 계속 흐름
*/
var fnum = 0;//이동픽셀수 전역변수
function flowImg(){
var iw = $("#flowImg img").first().width();//이미지하나의width
	fnum++;
	if(fnum>=iw){
		$("#flowImg").append($("#flowImg li")
		.first()).css("left","0");
		fnum=1;//초기화
	}
	$("#flowImg").css("left",-fnum+"px")
}/////flowImg함수///














