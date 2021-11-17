// JavaScript Document

////////////////  모바일/DT 페이지 자동넘기기    ///////////////////////
var winW=$(window).width();//현재 브라우저 가로폭(숫자로된 px단위)
if(winW <= 1100){
	location.href="../index.html"; //DT index페이지로 감
}

$(window).resize(function(){//창크기를 변경할 경우 다시 체크~!
	var winW=$(window).width();//현재 브라우저 가로폭(숫자로된 px단위)
	if(winW <= 1100){
	location.href="mob.html"; //DT index페이지로 감
	}
});
////////////////  모바일/DT 페이지 자동넘기기    ///////////////////////

var autocall;//setInterval용 변수
var autocallT;//setTimeout용 변수
$(document).ready(function(e) {
		
	$(".drag>ul>li").draggable({
		stack : ".drag>ul>li" //드래그 대상 상위처리
		
	}); // 드래그설정
	
	$(".drag>ul>li").bind("dragstart",function(){
		var ddx = $(this).index(); //// 드래그 아이템 순번
		$("#slideMem").slideDown(600).css({
			display:"block"
			
		});	
		$("#deli .dropshow>div>nav").click(function(){
			$("#slideMem").slideUp(600);
			$(".drag>ul>li").css({top:"0px",left:"0px",display:"block"});
			
		});//click
		
	}); /// 드래그가 시작되면....

	
////////////////////////    드래그해서 드롭할때 발생하는 이벤트 처리     //////////////////////
	$(".dropshow").droppable({
		drop:function(e,u){// e = 이벤트, u = 드롭된 요소
//			alert(u);
			//드롭된 요소의 이미지src를 가져와서 드롭영역의 배경 변경
			var seq = u.draggable.index();// 드래그요소의 순번
			//console.log(seq);
			
			//$(this).css("background-image","url("+imgsrc+")")//드롭요소 배경이미지 변경
			
			u.draggable.hide();//드래그요소 사라짐
			$("#slideMem li").eq(seq).css("opacity",1).siblings().css("opacity",0);
			u.draggable.siblings().show().css({top:"0",left:"0"});
			
			//  속성값을 읽어옴(동영상정보)
			//var mvsrc=u.draggable.attr("src");
			
			// 동영상 박스 셋팅
//			$("#slideMem>li").slideDown().css({
//				"opacity":"1"
//			});
					
		}//드롭처리함수
			
	});/////////////드롭할때 발생하는 이벤트 처리 //////////////////////
	

	autoFunc();//자동넘김 셋팅함수 호출
    
	/*좌우이동버튼 클릭시*/
	$(".Lbtn").click(function(){
		//alert("왼쪽");
		clearInterval(autocall);//자동넘김정지
		fadeSlide("L");
	});//click
	$(".Rbtn").click(function(){
		//alert("오른쪽");
		clearInterval(autocall);//자동넘김정지
		fadeSlide("R");
	});//click
	
	///////패럴랙스/////////
	$("#fiximg").parallax("50%",0.2);
	
	//////////////////////////////////////////////
	$("#bmenu img").click(function(e){
		e.preventDefault();
		var idx = $(this).index();
		//console.log(idx);
		
		//배너변경
		$("#viewer img").eq(idx).css("opacity",1).siblings().css("opacity",0);
		
		//블릿변경
		$(this).attr("src","imges/IconsAndLogo/secblit_on.png")//나변경
	.siblings().attr("src","imges/IconsAndLogo/secblit_off.png");
		
		
	});// 블릿 click 함수영역
	
	$("#viewer>img").css("transition","all 0.5s");	
///////////////////////////////////////////////////
	
////////    TOP버튼클릭시 위로 이동 /////////////

$("#topnav").click(function(e){
	e.preventDefault();
	$("html,body").animate({scrollTop:0},800);
});
////////////////////////////////////////////////	
	

	
	//////////// 딜리버리 영역 드래그 기능   ///////////////////
	
	//  dragstart -> 드래그가 시작되면 발생하는 이벤트
	$(".draggable").bind("dragstart",function(){
		$(this).addClass("invert"); ///빨간색 배경이미지로 바꿔주는 class를 추가함!!
	}); /// 드래그가 시작되면....
		
	
	
	$("#insta>div:last-child>ul>li img").click(function(){
		location.href="https://www.instagram.com/";
	});
	
	
	
	
});/////////////////                *****        jQB   *****                 ////////
	var acall; //자동슬라이드 호출용 전역변수
$(document).ready(function(){
	"use strict";
	acall = setInterval("flowImg()",20);
	
		///  마우스가 오버시 멈춤, 아웃시 다시실행
	$("#flowImg").hover(
		function(){
			clearInterval(acall);
		},
		function(){
			acall = setInterval("flowImg()",20);
		});
	});
	
	
	var fnum=0; //이동 픽셀수 전역변수
function flowImg(){
	var iw = $("#flowImg img").first().width(); ///이미지 하나의 width
	fnum++;
	if(fnum>=iw){
		$("#flowImg").append($("#flowImg>li")
		.first()).css("left","0");
		fnum=1; //초기화
	}
	$("#flowImg").css("left",-fnum+"px");
}///// flowImg 함수////
	
	
	
	
	
//////////  딜리버리 메뉴들 드래거블효과   ///////

/*
	함수명 : autoFunc
	기능 : 배너 자동넘김 셋팅
*/
function autoFunc(){
	autocall = setInterval("fadeSlide('s')",5000);//슬라이드변경 함수호출
}//autoFunc

/*
	함수명 : fadeSlide
	기능 : 배너슬라이드가 순서대로 fade효과로 넘어간다.
*/
var snum = 0;//슬라이드 순번
function fadeSlide(sts){//sts - 클릭인지, 자동인지 구분(숫자가 넘어오면 클릭한것임)
	//alert(sts);
	$("#slider>li").css("opacity","0");
	
	if(sts==="s" || sts==="R"){//자동호출이면~! 또는 오른쪽 버튼 호출이면~!
		snum++;
		if(snum===3){snum=0;}//한계수
	}
	else if(sts==="L"){//왼쪽버튼 호출이면~!
		snum--;
		if(snum===-1){snum=2;}//한계수
	}
	else{//숫자가 넘어온 경우(클릭해서 넘어온 경우)
		snum = sts;//전역변수에 현재 변경될 번호를 넣어줌~!!!
	}
	
	
	$("#slider>li").eq(snum).css("opacity","1");
	//console.log(snum);
		//블릿변경 처리
	$("#slidenavi>div>img:last-child").css("opacity",0);//나를 제외한 다른 형제들 변경
	//$("#bmenu img").attr("src","images/ico_pm_55_off.png");//모두 동그란것
	$("#slidenavi>div").eq(snum).children("img").eq(1).css("opacity",1);//나변경
	
	// 제이쿼리 속성변경 메서드 -> attr(속성명, 값) -> 해당속성의 값을 변경함(setAttribute)
	// 제이쿼리 속성값 읽기 메서드 -> attr(속성명) -> 해당속성의 값을 읽어옴
	
	//자동넘김 호출이 아닌경우 5초후 자동넘김 다시 실행하기
	if(sts!="s")
	{
		clearInterval(autocall);//자동넘김 지움
		clearTimeout(autocallT);//한번호출 지움
		autocallT = setTimeout("autoFunc()",5000);
	}
	
}//fadeSlide함수





