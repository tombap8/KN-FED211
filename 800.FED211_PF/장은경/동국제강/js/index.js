// 동국제강건설 index 페이지 js
var scNum = 0; //스크롤 페이지번호
var psts=0;//////잠금용변수(0 미사용,1 사용중)
var autocall;//setInterval용 변수
var autocallT; //setTimeout용 변수
var np=0;//배너 자동이동 재생 여부 (0-재생중, 1-멈춤)
var mv=["VGmK6zOHnFs","cZMGc6Ozq6E","X8FEBsAAA8c","pAcQmdDGSCk","FhlA0qZC9Tk","qaKUsaa-ywI"];//사업분야별 영상주소

//////////////// 모바일/DT 페이지 자동넘기기 ///////////////////
var winW=$(window).width();//현재 브라우저 가로폭(숫자로된 px단위)
if(winW<=1100){
	location.href="mob/index.html";//DT index페이지
}
$(window).resize(function(){//창크기를 변경할 경우 다시 체크
	var winW=$(window).width();//현재 브라우저 가로폭(숫자로된 px단위)
	if(winW<=1100){
		location.href="mob/index.html";//DT index페이지
	}
});

//////////////// 모바일/DT 페이지 자동넘기기 끝 ///////////////////

$(document).ready(function() {
	////////////////////////CSS 세팅//////////////////////////////
	//오른쪽 고정 navi에 마우스오버 시
	$("#navi>ul>li>nav").hover(
		function(){//오버 시
			$(this).parent().parent().parent().css("width","150px");//navi ul 넓이 조절
			$(this).parent().find("span").fadeIn(200);//설명글 보이기
		},
		function(){//아웃 시
			$(this).parent().find("span").fadeOut(200,function(){
				$(this).parent().parent().parent().css("width","15px");//navi ul 넓이 원상복귀
		});//설명글 숨기기		
	});//hover

	//////////////////////////////////////////////////////////////
	
	
	///////////////배너 재생, 일시정지//////////////////
	$("#bmenu>div:last-child>div:first-child").click(function(e){//재생버튼 클릭 시
		e.preventDefault();//기본이동막기
		 if(np==1){//일시정지 상태인 경우
			np=0;//재생 표시
			clearInterval(autocall);//자동넘김 지움
			autoFunc();//자동넘김 함수 호출
			$(this).css("background-position","top").siblings().css("background-position","bottom");
		}
	});//click
	
	$("#bmenu>div:last-child>div:last-child").click(function(e){//일시정지버튼 클릭 시
		e.preventDefault();//기본이동막기
		if(np==0){//재생중인 경우
			np=1;//멈춤 표시
			clearInterval(autocall);//자동넘김 지움
			$(this).css("background-position","top").siblings().css("background-position","bottom");
		}
		
	});//click
	
	//////////////배너자동넘김/////////////////////
	autoFunc(); 
	
	//////////////////Main 페이지 불릿을 클릭했을 때 해당 배너로 이동///////////////////
	$(".bul").click(function(){
		//alert($(".bul").css("background-color"));
		if($(this).css("background-color")=="rgb(255, 255, 255)")return;//클릭된 불릿 광속클릭 방지
		else{
			var idx=$(this).index(); //이미지 순번(숫자)
			//alert(idx);
			//var bsts=0;//////잠금용변수(0 미사용,1 사용중)
			//함수 작동 중 잠금장치
			//if(bsts==1)return false; //하단코드를 실행하지 않고 나간다.
			//bsts=1; //잠금
			
			//자동실행 멈춤
			clearInterval(autocall);
			
			//넘기기함수 호출
			fadeSlide(idx); //해당 슬라이드 번호를 파라미터로 넘김
			
			//함수 잠금장치 해제
			//setTimeout(function(){bsts=0;},900);
		}
	});//click
	
	////////////////////Our Business 페이지 아이콘 클릭 시/////////////
	$("#biznav>div").click(function(){
		var bidx=$(this).index();
		//alert(bidx);
		$(this).children("div").css("background-position","bottom").parent().siblings().children("div").css("background-position","top");//아이콘 변경
		$(".mov").attr("src","https://www.youtube.com/embed/"+mv[bidx]+"?autoplay=0");//영상 변경
		$(".bizcont").eq(0).hide();//첫번째 컨텐츠박스 숨기기
		$(".bizcont").eq(bidx).show().siblings(".bizcont").hide();//해당 컨텐츠박스 보이기
	});//click
	
	/////////////////////Recruit에서 왼쪽,오른쪽 화살표 클릭 시 슬라이드/////////////////
	$(".bR").click(function(){//오른쪽버튼 클릭시
		jobSlide(0);
	});
	$(".bL").click(function(){//왼쪽버튼 클릭시
		jobSlide(1);
	});
	
	////////////////////Recruit 직무소개 탭 클릭 시 사진 변경////////////////////
	$("#jobintro>ul>li:first-child>a").click(function(e){//첫번째 탭(건설) a링크 클릭
		e.preventDefault();//기본이동막기
		$(this).css({"color":"#003f63","font-weight":"bold"}).parent().siblings().find("a").css({"color":"#000","font-weight":"normal"});//탭 글씨 디자인 변경
		$("#poscoc").show();//동국제강건설 사진박스 보이기
		$("#poscoe").hide();//엔지니어링 사진박스 숨기기
		$("#abox").show();//화살표 box 보이기
	});
	$("#jobintro>ul>li:last-child>a").click(function(e){//두번째 탭(엔지니어링) a링크 클릭
		e.preventDefault();//기본이동막기
		$(this).css({"color":"#003f63","font-weight":"bold"}).parent().siblings().find("a").css({"color":"#000","font-weight":"normal"});//탭 글씨 디자인 변경
		$("#poscoe").show();//엔지니어링 사진박스 보이기
		$("#poscoc").hide();//건설 사진박스 숨기기
		$("#abox").hide();//화살표 box 숨기기
	});
	
	///////////////////////// 오른쪽 navi를 클릭하면 해당 page로 이동 애니메이션 하기/////////////////
	$("#navi>ul>li>nav>a").click(function(e){
		e.preventDefault();//기본이동막기
		
		/****** 클릭된 아이디의 실제 scrollTop위치값 알아내기 *******/
		var pid = $(this).attr("href");//네비게이션 a 태그의 href에 담긴 아이디명
		//alert(pid);
		var posid = $(pid).offset().top;// 선택된 id의 top위치값 => 스크롤 top값과 일치 시킴!!!
		//alert(posid);
		//alert($(pid).index());//이동할 id의 형제 순번(nav가 포함되어 순번이 1 늘어남)
		// 클릭해서 이동했을 때 전역변수 scNum을 변경해야 함. (스크롤과 씽크를 맞추기 위해)
		scNum=$(pid).index()-1;//순번이 하나 적음
		//console.log("선택된id의 top값:"+posid);
		
		pageAction();//페이지 액션 함수 호출
		
		//해당 아이디 위치로 이동
		$("html,body").animate({
			scrollTop : posid+"px"
		},700,"easeOutExpo");
		
		
	});//click 이벤트
	
	///////////// 스크롤 발생시 한페이지씩 이동하기///////////////
	var mwEvt = (/Firefox/i.test(navigator.userAgent)?"DOMMouseScroll":"mousewheel"); 
	////////////////// 마우스휠 이벤트 처리 ///////////////////
	
	$(document).on(mwEvt,function(e){
		//e.preventDefault();// 기본스크롤링 막기!!!
		
		/////////만약에 현재 애니메이션이 진행중이면 잠금!!!!!
		if(psts===1){ return;}//돌아갓!
		psts=1;//첫번째 온 이벤트가 잠그고 들어간다!
		
		// e.preventDefault();
				
		var evt = window.event || e; 
		var delta = evt.detail?evt.detail:evt.wheelDelta;
		if(/Firefox/i.test(navigator.userAgent)) {delta = -evt.originalEvent.detail;}
		
		if(delta>0){//윗방향
			scNum--;
			if(scNum===-1){scNum=0;}// 첫페이지 고정
		}/////////////////////////////////////////////////////////위
		else{//아랫방향
			scNum++;
			if(scNum===6){scNum=5;} // 마지막번호 고정			
		}/////////////////////////////////////////////////////////아래
	
		
		////// 페이지 액션 함수 호출/////
		pageAction();
		
		// 페이지 위치값
		var pos = $("body>section").eq(scNum).offset().top;
		
		
		$("html,body").animate({
			scrollTop : pos+"px"
		},700,"easeOutExpo",function(){//스크롤 애니메이션이 끝난후
			psts=0;//잠금상태 해제~!!!!!
		 });

	
	});//마우스휠 이벤트 처리
	
	
	
	
	
	
	
	
	
});//jQB

/*
	함수명 : autoFunc
	기능 : 배너 자동넘김 세팅
*/
function autoFunc(){
    autocall=setInterval("fadeSlide('s')",5000); //슬라이드변경 함수 호출 - 자동(변수 s)
}//autoFunc


/*
	함수명 : fadeSlide()
	기능 : 배너슬라이드가 순서대로 fade효과로 넘어간다.
*/
var snum=0; //슬라이드 순번
var fsts=0;//배너함수 사용중 여부 전역변수 (휴식-0, 사용-1) : 사용중인경우 클릭 못하게하기 (광클방지 잠금장치)
function fadeSlide(sts){ //sts - 클릭,자동 구분(숫자가 넘어오면 클릭, s가 넘어오면 자동)
	//함수 작동 중 잠금장치
	if(fsts==1)return; //하단코드를 실행하지 않고 나간다.
	fsts=1; //잠금
	//alert(sts);
	$("#slider>li").css("opacity","0");//이미지 안보이게
	$(".maintxt").fadeOut(900);//글상자 안보이게
	
	if(sts=="s"){//자동호출이면
		snum++;
		if(snum==6)snum=0; //한계수 설정
	}
	else{//불릿클릭호출이면(숫자가 넘어온 경우)
		snum=sts; //전역변수에 현재 클릭된 번호(idx=sts)를 넣는다
	}
	
	$("#slider>li").eq(snum).css("opacity","1");//이미지 변경
	$(".maintxt").eq(snum).fadeIn(900);//글상자 변경

	//불릿 변경처리
	$(".bul").eq(snum).css("background-color","#fff").siblings().css("background-color","transparent");

	//자동넘김 호출이 아닌 경우 (클릭호출인 경우) 5초후 자동넘김 세팅 다시 실행하기
	if(sts!="s"){
		clearInterval(autocall);//자동넘김 지움
		clearTimeout(autocallT);//클릭호출 지움
		autocallT=setTimeout("autoFunc()",8000);
	}
	
	//함수 잠금장치 해제
	setTimeout(function(){fsts=0;},900);
	
}//fadeSlide함수


/*
	함수명 : jobSlide()
	기능 : Recruit의 건설 탭 직무소개 슬라이드가 넘어간다.
	파라미터(전달값) : dir - 버튼 방향구분 인자
*/
var nsts=0; //함수 사용중 여부 전역변수 (휴식-0, 사용-1) : 사용중인경우 클릭 못하게하기 (광클방지 잠금장치)
function jobSlide(dir){ //dir은 오른쪽-0, 왼쪽-1로 구분 
	//함수 작동 중 잠금장치
	if(nsts==1)return; //하단코드를 실행하지 않고 나간다.
	nsts=1; //잠금
	
	if(dir==0){//오른쪽버튼 클릭 시
		var leftani=$("#cSlider").width()-1000;
		$("#cSlider").css({left:-leftani+"px"});//오른쪽으로 슬라이드
		$(".bL").show();//왼쪽 화살표 보이기
		$(".bR").hide();//오른쪽 화살표 숨기기
		$("#poscoc").children("div").eq(1).css("opacity","0").siblings().css("opacity","1");//그라데이션 위치변경
	}
	else if(dir==1){//왼쪽버튼 클릭시
		$("#cSlider").css({left:"0px"});//왼쪽으로 슬라이드
		$(".bR").show();//오른쪽 화살표 보이기
		$(".bL").hide();//왼쪽 화살표 숨기기
		$("#poscoc").children("div").eq(0).css("opacity","0").siblings().css("opacity","1");//그라데이션 위치변경
	}
	
	//함수 잠금장치 해제
	setTimeout(function(){nsts=0;},1000);
}//jobSlide함수


/*
	함수명 : pageAction
	기능 : 각 페이지별 액션 주기
*/
function pageAction(){
	"use strict";
	// 1. 첫페이지에서만 상단메뉴가 투명배경 두껍게표시
	//     다른 하위 페이지에서는 반투명배경에 얇게 표시
	if(scNum===0){//1번페이지
		$("#top").css("background-color","transparent"); //상단바 배경색 투명
		$("#logo").css("background-position","top");//로고 색상 복원
		$("#gnb dt>a").css("color","#fff");//메인메뉴 글자색 변경
		//불릿 변경
		$("#navi>ul>li:nth-child(1)>nav").css({"right":"0px","width":"11px","height":"11px","border-radius":"7.5px","border":"2px solid #003f63","background-color":"transparent","opacity":"1"})
		.parent().siblings().find("nav").css({"right":"5px","width":"5px","height":"5px","border-radius":"2.5px","border":"none","background-color":"#000","opacity":"0.7"});
		
		//GNB 마우스오버 시
		/*$("#gnb").hover(
			function(){//오버시
				$("#logo").css("background-position","bottom");//로고 색상 변경
				$("#gnb dt>a").css("color","#000");//메인메뉴 글자색 변경
				$("#top").css({"height":"350px","background-color":"#fff"});//상단바 전체 내려오기
			},
			function(){//아웃시
				$("#logo").css("background-position","top");//로고 색상 복원
				$("#gnb dt>a").css("color","#fff");//메인메뉴 글자색 변경
				$("#top").css({"height":"80px","background-color":"transparent"});//상단바 전체 올라가기
		});*/
	}//if(페이지번호0)//////////////////////////////////////////////
	else{//그 밖에 페이지
		$("#top").css("background-color","#fff"); //상단바 배경색 흰색
		$("#logo").css("background-position","bottom");//로고 색상 변경
		$("#gnb dt>a").css("color","#000");//메인메뉴 글자색 변경
		
		//GNB 마우스오버 시
		/*$("#gnb").hover(
			function(){//오버시
				$("#logo").css("background-position","bottom");//로고 색상 변경
				$("#gnb dt>a").css("color","#000");//메인메뉴 글자색 변경
				$("#top").css({"height":"350px","background-color":"#fff"});//상단바 전체 내려오기
			},
			function(){//아웃시
				$("#logo").css("background-position","bottom");//로고 색상 변경상태 유지
				$("#gnb dt>a").css("color","#000");//메인메뉴 글자색 변경상태 유지
				$("#top").css({"background-color":"#fff"});//상단바 배경색 유지
		});//hover*/
	}//else(페이지번호 0이외)/////////////////////////
	
	//페이지에 배경사진이 있는 경우 상단바를 투명하게 함
	if(scNum==0||scNum==4||scNum==5){
		$("#top>div:first-of-type").css("opacity","0.2");//검은배경 보이게
		$("#gnbline").css("opacity","0");//gnbline 안보이게
		$("#top").css("background-color","transparent"); //상단바 배경색 투명
		$("#logo").css("background-position","top");//로고 색상 복원
		$("#gnb dt>a").css("color","#fff");//메인메뉴 글자색 변경
		
		//GNB 마우스오버 시
		$("#gnb").hover(
			function(){//오버시
				$("#top>div:first-of-type").css("opacity","0");//검은배경 안보이게
				$("#gnbline").css("opacity","1");//gnbline 보이게
				$("#logo").css("background-position","bottom");//로고 색상 변경
				$("#gnb dt>a").css("color","#000");//메인메뉴 글자색 변경
				$("#top").css({"height":"350px","background-color":"#fff"});//상단바 전체 내려오기
			},
			function(){//아웃시
				$("#top>div:first-of-type").css("opacity","0.2");//검은배경 보이게
				$("#gnbline").css("opacity","0");//gnbline 안보이게
				$("#logo").css("background-position","top");//로고 색상 복원
				$("#gnb dt>a").css("color","#fff");//메인메뉴 글자색 변경
				$("#top").css({"height":"80px","background-color":"transparent"});//상단바 전체 올라가기
		});
	}//if(페이지번호(0,4,5)////////////////////////////
	else{//배경사진이 없으면 일반 상단바 적용
		$("#top>div:first-of-type").css("opacity","0");//검은배경 안보이게
		$("#gnbline").css("opacity","1");//gnbline 보이게
		$("#logo").css("background-position","bottom");//로고 색상 변경상태 유지
		$("#gnb dt>a").css("color","#000");//메인메뉴 글자색 변경상태 유지
		$("#top").css({"height":"80px","background-color":"#fff"});//상단바 배경색 유지
		//GNB 마우스 오버 시
		$("#gnb").hover(
			function(){//오버시
				$("#top>div:first-of-type").css("opacity","0");//검은배경 안보이게
				$("#gnbline").css("opacity","1");//gnbline 보이게
				$("#logo").css("background-position","bottom");//로고 색상 변경
				$("#gnb dt>a").css("color","#000");//메인메뉴 글자색 변경
				$("#top").css({"height":"350px","background-color":"#fff"});//상단바 전체 내려오기
			},
			function(){//아웃시
				$("#top>div:first-of-type").css("opacity","0");//검은배경 안보이게
				$("#gnbline").css("opacity","1");//gnbline 보이게
				$("#logo").css("background-position","bottom");//로고 색상 변경상태 유지
				$("#gnb dt>a").css("color","#000");//메인메뉴 글자색 변경상태 유지
				$("#top").css({"height":"80px","background-color":"#fff"});//상단바 배경색 유지
		});
	}
				
	//////////// 각 페이지 액션 ///////////////////
	if(scNum===1){
		//불릿 변경
		$("#navi>ul>li:nth-child(2)>nav").css({"right":"0px","width":"11px","height":"11px","border-radius":"7.5px","border":"2px solid #003f63","background-color":"transparent","opacity":"1"})
		.parent().siblings().find("nav").css({"right":"5px","width":"5px","height":"5px","border-radius":"2.5px","border":"none","background-color":"#000","opacity":"0.7"});
	}
	else if(scNum===2){
		//불릿 변경
		$("#navi>ul>li:nth-child(3)>nav").css({"right":"0px","width":"11px","height":"11px","border-radius":"7.5px","border":"2px solid #003f63","background-color":"transparent","opacity":"1"})
		.parent().siblings().find("nav").css({"right":"5px","width":"5px","height":"5px","border-radius":"2.5px","border":"none","background-color":"#000","opacity":"0.7"});
	}
	else if(scNum===3){
		//불릿 변경
		$("#navi>ul>li:nth-child(4)>nav").css({"right":"0px","width":"11px","height":"11px","border-radius":"7.5px","border":"2px solid #003f63","background-color":"transparent","opacity":"1"})
		.parent().siblings().find("nav").css({"right":"5px","width":"5px","height":"5px","border-radius":"2.5px","border":"none","background-color":"#000","opacity":"0.7"});
	}
	else if(scNum===4||scNum===5){
		//불릿 변경
		$("#navi>ul>li:nth-child(5)>nav").css({"right":"0px","width":"11px","height":"11px","border-radius":"7.5px","border":"2px solid #003f63","background-color":"transparent","opacity":"1"})
		.parent().siblings().find("nav").css({"right":"5px","width":"5px","height":"5px","border-radius":"2.5px","border":"none","background-color":"#000","opacity":"0.7"});
	}
	
	
	
	
	
}//pageAction함수








