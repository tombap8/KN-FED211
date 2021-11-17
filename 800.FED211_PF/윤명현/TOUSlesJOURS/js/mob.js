// JavaScript Document

////////////////  모바일/DT 페이지 자동넘기기    ///////////////////////
var winW=$(window).width();//현재 브라우저 가로폭(숫자로된 px단위)
if(winW >= 1100){
	location.href="index.html"; //DT index페이지로 감
}

$(window).resize(function(){//창크기를 변경할 경우 다시 체크~!
	var winW=$(window).width();//현재 브라우저 가로폭(숫자로된 px단위)
	if(winW >= 1100){
	location.href="index.html"; //DT index페이지로 감
	}
});
////////////////  모바일/DT 페이지 자동넘기기    ///////////////////////

var bsts = 0; // 배너작동중 상태값(0-미작동, 1-작동중)
var scNum = 0;///// 스크롤 페이지번호//////
var mob = 0;////모바일여부(0-아님, 1-모바일)
/////////////모바일인지 여부 조사//////
$(window).resize(function(){
	if($(window).width() <= 1100) { mob=1; }
	else{ mob=0; }
});


$(document).ready(function(){
	
	//////////// 블릿 클릭시 배너 이동하기////////
	$("#banner>aside li").click(function(){
		var idx = $(this).index();//블릿 li 순번
		directSlide(idx);//배너직접이동함수 호출!!!
	});
	
	//////////// 햄버거 버튼 클릭시 애니메이션 ///////////
	var hamsts = 0; //햄버거 버튼 상태값(0-닫힘, 1-열림)
	$("#ham").click(function(){
		if(hamsts===0){
			
			
			///////햄버거 버튼 액션//////
			$("#ham div").eq(0).css({"top":"10px","transform":"rotate(45deg)"});
			$("#ham div").eq(1).css({"width":"0%","left":"50%"});
			$("#ham div").eq(2).css({"top":"10px","transform":"rotate(-45deg)"});//////////// 햄버거 버튼 액션////////////////
			///////// 메뉴 변경 애니메이션/////
			$("#menu").animate({width:"100%"},800,function(){
				hamsts=1;//상태값 변경
			});
		}////////if문//////////
		else if(hamsts===1){
			///////햄버거 버튼 액션//////
			$("#ham div").eq(0).css({"top":"0px","transform":"rotate(0deg)"});
			$("#ham div").eq(1).css({"width":"100%","left":"0%"});
			$("#ham div").eq(2).css({"top":"20px","transform":"rotate(0deg)"});//////////// 햄버거 버튼 액션////////////////
			///////// 메뉴 변경 애니메이션/////
			$("#menu").animate({width:"0%"},800,function(){
				hamsts=0;//상태값 변경
//				$("#menu>ul,#menu>dd").fadeOut(500);
			});
		}//////else if문////////
		
	});//////////////햄버거 클릭시//////////////////
	
	
	/////////    인스타 X축 드래그/////
	
	//transition설정
	$("#flowImg").css({
		"transition":"all 0.4s ease-out",
		"width": $("#flowImg img:first").width()*$("#flowImg li").length + "px"	
	});
	
	// 드래그 대상선정
	$("#flowImg").draggable({
		axis:"x" //x축으로 고정
	});
	//한계위치 설정 (첫번째 이미지가 화면 중간까지, 끝이미지가 화면중간까지)
//	if("#flowImg")
	

	
});///////////////////////////////////////jQB////////////////


/*
	함수명: goSlide
	기능 : 메인 배너 이미지 슬라이드 하기
*/
var bnum = 1;//배너 이미지 순번
function goSlide(){
	"use strict";
	//함수 잠금장치
	if(bsts===1) {return false;}//돌아갓!
	bsts=1;//상태값 변경
	
	// 배너순번 증가
	bnum++;
	if(bnum===3){bnum=1;}//한계수
	
	// 배너 ul의 자식으로 li를 뒤에 추가함
	$("#banner>ul").append("<li></li>").find("li").last()
	.css("background","url(images/ban0"+bnum+".jpg) no-repeat top/cover");
	//배너 슬라이드 이동 및 첫번째 li 지우기
	$("#banner>ul").animate({left:"-100%"},1500,"easeOutQuint",
	function(){
		$(this).find("li").first().remove();//첫번째 li제거
		$(this).css("left","0");//위치값 초기화
		bsts=0;//잠금상태풀기
	});
	
	// 블릿변경하기
	$("#banner>aside li").eq(bnum-1).css("background-position","0 -10px")
	.siblings().css("background-position","0 0");
	
}//goSlide함수

/*
	함수명: backSlide
	기능 : 메인 배너 이미지 슬라이드 하기(반대방향)
*/
function backSlide(){
	"use strict";
	//함수 잠금장치
	if(bsts===1) {return false;}//돌아갓!
	bsts=1;//상태값 변경
	
	// 배너순번 감소
	bnum--;
	if(bnum===0){bnum=5;}//한계수
	
	// 배너 ul의 자식으로 li를 앞에 추가함
	$("#banner>ul").prepend("<li></li>").css("left","-100%")
	.find("li").first()
	.css("background","url(images/ban0"+bnum+".jpg) no-repeat top/cover");
	//배너 슬라이드 이동 및 마지막 li 지우기
	$("#banner>ul").animate({left:"0%"},2000,"easeOutQuint",
	function(){
		$(this).find("li").last().remove();//마지막 li제거
		bsts=0;//잠금상태풀기
	});
	
	// 블릿변경하기
	$("#banner>aside li").eq(bnum-1).css("background-position","0 -10px")
	.siblings().css("background-position","0 0");
	
}// backSlide함수


/*
	함수명 : directSlide
	기능 : 블릿을 클릭했을 때 배너를 바로 이동하기

*/
function directSlide(snum){//snum 현재 클릭된 블릿순번
	"use strict";
	//함수 잠금장치
	if(bsts===1){ return false;}//돌아갓!
	bsts=1;//상태값 변경
	
	//alert(snum);
	var diff = (bnum-1) - snum; 
	// 현재순번- 클릭된 순번
	// 음수가 나오면 오른쪽버튼 클릭효과
	// 양수가 나오면 왼쪽버튼 클릭효과
	//alert(diff);
	////////////////////////////////////////////////////////////////////
	if(diff<0){//오른쪽에서 이동
		// 배너 ul의 자식으로 li를 뒤에 추가함
		$("#banner>ul").append("<li></li>").find("li").last()
		.css("background","url(images/ban0"+(snum+1)+".jpg) no-repeat top/cover");
		//배너 슬라이드 이동 및 첫번째 li 지우기
		$("#banner>ul").animate({left:"-100%"},1500,"easeOutQuint",
		function(){
			$(this).find("li").first().remove();//첫번째 li제거
			$(this).css("left","0");//위치값 초기화
			bsts=0;//잠금상태풀기
		});
	}/////////////////////////////////////////////////////////////
	else if(diff>0){//왼쪽에서 이동
		// 배너 ul의 자식으로 li를 앞에 추가함
		$("#banner>ul").prepend("<li></li>").css("left","-100%")
		.find("li").first()
		.css("background","url(images/ban0"+(snum+1)+".jpg) no-repeat top/cover");
		//배너 슬라이드 이동 및 마지막 li 지우기
		$("#banner>ul").animate({left:"0%"},2000,"easeOutQuint",
		function(){
			$(this).find("li").last().remove();//마지막 li제거
			bsts=0;//잠금상태풀기
		});
	}///////////////////////////////////////////////////////////////
	
	//////// 클릭된 블릿 순번을 전역변수인 bnum에 업데이트!!!
	bnum = snum+1;//현재 변경된 슬라이드 번호
	// 블릿변경하기
	$("#banner>aside li").eq(bnum-1).css("background-position","0 -10px")
	.siblings().css("background-position","0 0");
	
	
}//directSlide 함수

/*
	함수명 : pageAction
	기능 : 각 페이지별 액션 주기
*/
function pageAction(){
	"use strict";
	// 1. 첫페이지에서만 상단메뉴가 투명배경 두껍게표시
	//     다른 하위 페이지에서는 반투명배경에 얇게 표시
	if(scNum===0){//1번페이지
		$("#top>.obg").fadeTo(200,0);
		$("#top>img").animate({width:"15%",marginTop:"3%"},200);
		$("#top>ul>li>a").css("color","#fff");
		
	}//if//////////////////////////////////////////////
	else{//그 밖에 페이지
		$("#top>.obg").fadeTo(200,0.5);
		$("#top>img").animate({width:"11%",marginTop:"1%"},200);
		
		/////// 메뉴 글자 색상변경//////
		$("#top>ul>li>a").eq(scNum-1).css("color","yellow")
		.parent().siblings().find("a").css("color","#fff");
	}///else////////////////////////////////////////////
	
	//////////// 각 페이지 액션 ///////////////////
	if(scNum===1){/*남성페이지*/
		$("#cont1 img").animate({"top":"0%","opacity":"1"},1200);
		$("#cont1 h1").delay(300).animate({"top":"50%","opacity":"1"},1200);
	}
	else if(scNum===2){/*여성페이지*/
		$("#cont2 img").animate({"top":"0%","opacity":"1"},1200);
		$("#cont2 h1").delay(300).animate({"top":"50%","opacity":"1"},1200);
	}
	else if(scNum===3){/*스타일페이지*/
		$("#cont3 img").animate({"top":"0%","opacity":"1"},1200);
		$("#cont3 h1").eq(0).delay(300).animate({"top":"30%","opacity":"1"},1200);
		$("#cont3 h1").eq(1).delay(300).animate({"top":"70%","opacity":"1"},1200);
	}
	
	
}//pageAction함수













